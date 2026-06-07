import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";

export const useCourse = (courseId: string) => {
  return useQuery({
    queryKey: ["course", courseId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("courses")
        .select("*")
        .eq("id", courseId)
        .single();
      if (error) throw error;
      return data;
    },
    enabled: !!courseId,
  });
};

export const useLessons = (courseId: string) => {
  return useQuery({
    queryKey: ["lessons", courseId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("lessons")
        .select("*")
        .eq("course_id", courseId)
        .order("order_index");
      if (error) throw error;
      return data;
    },
    enabled: !!courseId,
  });
};

export const useQuizzes = (lessonId: string) => {
  return useQuery({
    queryKey: ["quizzes", lessonId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("quizzes")
        .select("*, quiz_questions(*)")
        .eq("lesson_id", lessonId)
        .order("created_at");
      if (error) throw error;
      return data;
    },
    enabled: !!lessonId,
  });
};

export const useEnrollment = (courseId: string) => {
  const { user } = useAuth();
  return useQuery({
    queryKey: ["enrollment", courseId, user?.id],
    queryFn: async () => {
      if (!user) return null;
      const { data, error } = await supabase
        .from("enrollments")
        .select("*")
        .eq("course_id", courseId)
        .eq("user_id", user.id)
        .maybeSingle();
      if (error) throw error;
      return data;
    },
    enabled: !!courseId && !!user,
  });
};

export const useEnroll = () => {
  const { user } = useAuth();
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (courseId: string) => {
      if (!user) throw new Error("Not authenticated");
      const { data, error } = await supabase
        .from("enrollments")
        .insert({ course_id: courseId, user_id: user.id })
        .select()
        .single();
      if (error) throw error;
      return data;
    },
    onSuccess: (_, courseId) => {
      qc.invalidateQueries({ queryKey: ["enrollment", courseId] });
    },
  });
};

export const useLessonProgress = (courseId: string) => {
  const { user } = useAuth();
  return useQuery({
    queryKey: ["lesson_progress", courseId, user?.id],
    queryFn: async () => {
      if (!user) return [];
      const { data: lessons } = await supabase
        .from("lessons")
        .select("id")
        .eq("course_id", courseId);
      if (!lessons?.length) return [];
      const lessonIds = lessons.map((l) => l.id);
      const { data, error } = await supabase
        .from("lesson_progress")
        .select("*")
        .eq("user_id", user.id)
        .in("lesson_id", lessonIds);
      if (error) throw error;
      return data || [];
    },
    enabled: !!courseId && !!user,
  });
};

export const useUserAnalytics = () => {
  const { user } = useAuth();
  const qc = useQueryClient();

  const query = useQuery({
    queryKey: ["user_analytics", user?.id],
    queryFn: async () => {
      if (!user) return null;
      const { data, error } = await supabase
        .from("user_analytics")
        .select("*")
        .eq("user_id", user.id)
        .maybeSingle();
      if (error) throw error;
      return data;
    },
    enabled: !!user,
  });

  const initAnalytics = useMutation({
    mutationFn: async () => {
      if (!user) throw new Error("Not authenticated");
      const { data, error } = await supabase
        .from("user_analytics")
        .upsert({ user_id: user.id }, { onConflict: "user_id" })
        .select()
        .single();
      if (error) throw error;
      return data;
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["user_analytics"] }),
  });

  return { ...query, initAnalytics };
};

export const useUserHearts = () => {
  const { user } = useAuth();
  const qc = useQueryClient();

  const query = useQuery({
    queryKey: ["user_hearts", user?.id],
    queryFn: async () => {
      if (!user) return null;
      let { data, error } = await supabase
        .from("user_hearts")
        .select("*")
        .eq("user_id", user.id)
        .maybeSingle();
      if (error) throw error;
      if (!data) {
        const { data: newData, error: insertError } = await supabase
          .from("user_hearts")
          .insert({ user_id: user.id, hearts: 5 })
          .select()
          .single();
        if (insertError) throw insertError;
        data = newData;
      }
      // Recovery logic: 1 heart every 6 hours
      if (data && data.hearts < 5 && data.last_lost_at) {
        const hoursSince = (Date.now() - new Date(data.last_lost_at).getTime()) / (1000 * 60 * 60);
        const recovered = Math.min(Math.floor(hoursSince / 6), 5 - data.hearts);
        if (recovered > 0) {
          const newHearts = Math.min(data.hearts + recovered, 5);
          await supabase
            .from("user_hearts")
            .update({ hearts: newHearts })
            .eq("user_id", user.id);
          data.hearts = newHearts;
        }
      }
      return data;
    },
    enabled: !!user,
  });

  const loseHeart = useMutation({
    mutationFn: async () => {
      if (!user) throw new Error("Not authenticated");
      const current = query.data;
      if (!current || current.hearts <= 0) throw new Error("No hearts left");
      const { error } = await supabase
        .from("user_hearts")
        .update({ hearts: current.hearts - 1, last_lost_at: new Date().toISOString() })
        .eq("user_id", user.id);
      if (error) throw error;
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["user_hearts"] }),
  });

  return { ...query, loseHeart };
};

export const useUserStreaks = () => {
  const { user } = useAuth();
  const qc = useQueryClient();

  const query = useQuery({
    queryKey: ["user_streaks", user?.id],
    queryFn: async () => {
      if (!user) return null;
      let { data, error } = await supabase
        .from("user_streaks")
        .select("*")
        .eq("user_id", user.id)
        .maybeSingle();
      if (error) throw error;
      if (!data) {
        const { data: newData, error: insertError } = await supabase
          .from("user_streaks")
          .insert({ user_id: user.id, current_streak: 0, longest_streak: 0 })
          .select()
          .single();
        if (insertError) throw insertError;
        data = newData;
      }
      return data;
    },
    enabled: !!user,
  });

  const updateStreak = useMutation({
    mutationFn: async () => {
      if (!user) throw new Error("Not authenticated");
      const current = query.data;
      if (!current) return;
      const today = new Date().toISOString().split("T")[0];
      const lastDate = current.last_activity_date;

      // Streak algorithm: increment once per 24h calendar day, reset if >1 day skipped
      let newStreak = current.current_streak;
      if (lastDate === today) return; // already counted today
      const yesterday = new Date(Date.now() - 86400000).toISOString().split("T")[0];
      if (lastDate === yesterday) {
        newStreak = current.current_streak + 1;
      } else {
        newStreak = 1;
      }

      const { error } = await supabase
        .from("user_streaks")
        .update({
          current_streak: newStreak,
          longest_streak: Math.max(newStreak, current.longest_streak),
          last_activity_date: today,
        })
        .eq("user_id", user.id);
      if (error) throw error;
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["user_streaks"] }),
  });

  return { ...query, updateStreak };
};

export const useUserLearningProfile = () => {
  const { user } = useAuth();
  const qc = useQueryClient();

  const query = useQuery({
    queryKey: ["learning_profile", user?.id],
    queryFn: async () => {
      if (!user) return null;
      const { data, error } = await supabase
        .from("user_learning_profiles")
        .select("*")
        .eq("user_id", user.id)
        .maybeSingle();
      if (error) throw error;
      return data;
    },
    enabled: !!user,
  });

  const saveProfile = useMutation({
    mutationFn: async (profile: { background: string; goal: string; experience_level: string }) => {
      if (!user) throw new Error("Not authenticated");
      // Simple decision tree for learning persona
      let persona = "explorer";
      if (profile.experience_level === "advanced") {
        persona = profile.goal === "career" ? "specialist" : "innovator";
      } else if (profile.experience_level === "intermediate") {
        persona = profile.goal === "career" ? "achiever" : "builder";
      } else {
        persona = profile.background === "none" ? "newcomer" : "transitioner";
      }

      const { data, error } = await supabase
        .from("user_learning_profiles")
        .upsert(
          { user_id: user.id, ...profile, learning_persona: persona },
          { onConflict: "user_id" }
        )
        .select()
        .single();
      if (error) throw error;
      return data;
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["learning_profile"] }),
  });

  return { ...query, saveProfile };
};
