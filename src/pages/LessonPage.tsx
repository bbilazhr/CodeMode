import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { useUserAnalytics, useUserHearts, useUserStreaks } from "@/hooks/useCourseData";
import { generateQuestionsForLesson } from "@/data/lessonMaterials";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import LessonContent from "@/components/course/LessonContent";
import GameHeader from "@/components/course/GameHeader";

const LessonPage = () => {
  const { lessonId } = useParams<{ lessonId: string }>();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { toast } = useToast();
  const qc = useQueryClient();

  const { data: analytics } = useUserAnalytics();
  const { data: hearts } = useUserHearts();
  const { data: streaks } = useUserStreaks();

  useEffect(() => {
    if (!user) navigate("/auth");
  }, [user, navigate]);

  /* ── Fetch the lesson ── */
  const { data: lesson, isLoading: lessonLoading } = useQuery({
    queryKey: ["lesson", lessonId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("lessons")
        .select("*")
        .eq("id", lessonId!)
        .single();
      if (error) throw error;
      return data;
    },
    enabled: !!lessonId,
  });

  /* ── All sibling lessons (for prev/next navigation) ── */
  const { data: siblings } = useQuery({
    queryKey: ["lessons_by_course", lesson?.course_id],
    queryFn: async () => {
      const { data } = await supabase
        .from("lessons")
        .select("id, title, order_index")
        .eq("course_id", lesson!.course_id)
        .order("order_index");
      return data || [];
    },
    enabled: !!lesson?.course_id,
  });

  /* ── Progress check ── */
  const { data: progress } = useQuery({
    queryKey: ["lesson_progress", lesson?.course_id, user?.id],
    queryFn: async () => {
      const { data } = await supabase
        .from("lesson_progress")
        .select("lesson_id, completed")
        .eq("user_id", user!.id);
      return data || [];
    },
    enabled: !!user && !!lesson?.course_id,
  });

  /* ── Enrollment check ── */
  const { data: enrollment } = useQuery({
    queryKey: ["enrollment", lesson?.course_id, user?.id],
    queryFn: async () => {
      if (!user || !lesson?.course_id) return null;
      const { data } = await supabase
        .from("enrollments")
        .select("id")
        .eq("user_id", user.id)
        .eq("course_id", lesson.course_id)
        .maybeSingle();
      return data;
    },
    enabled: !!user && !!lesson?.course_id,
  });

  const isEnrolled = !!enrollment;
  const completedIds = (progress || []).filter((p) => p.completed).map((p) => p.lesson_id);

  /* ── Quiz data ── */
  const { data: quizzes } = useQuery({
    queryKey: ["quizzes", lessonId],
    queryFn: async () => {
      const { data } = await supabase
        .from("quizzes")
        .select("*")
        .eq("lesson_id", lessonId!)
        .order("created_at");
      return data || [];
    },
    enabled: !!lessonId,
  });

  const hasQuiz = !!(lesson && (quizzes?.length || generateQuestionsForLesson(lesson.title).length > 0));

  /* ── Navigation helpers ── */
  const currentIdx = siblings?.findIndex((s) => s.id === lessonId) ?? -1;
  const prevLesson = currentIdx > 0 ? siblings![currentIdx - 1] : null;
  const nextLesson = currentIdx >= 0 && currentIdx < (siblings?.length ?? 0) - 1 ? siblings![currentIdx + 1] : null;

  /* ── Mark lesson complete and go to quiz ── */
  const handleStartQuiz = () => {
    navigate(`/quiz/${lessonId}`);
  };

  if (lessonLoading || !lesson) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-2 border-primary border-t-transparent rounded-full" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Sticky top bar */}
      <div className="sticky top-0 z-40 bg-background/95 backdrop-blur border-b border-border">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 h-14 flex items-center justify-between gap-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate(`/course/${lesson.course_id}`)}
            className="gap-2 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="hidden sm:inline">Kembali ke Kursus</span>
          </Button>

          {/* Game stats */}
          {user && (
            <div className="flex-1 max-w-xs">
              <GameHeader
                hearts={hearts?.hearts ?? 5}
                streak={streaks?.current_streak ?? 0}
                xp={analytics?.total_xp ?? 0}
              />
            </div>
          )}

          {/* Prev / Next */}
          <div className="flex items-center gap-2">
            {prevLesson && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => navigate(`/lesson/${prevLesson.id}`)}
                className="gap-1.5"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">Sebelumnya</span>
              </Button>
            )}
            {nextLesson && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  // only allow next if current is completed
                  if (completedIds.includes(lessonId!)) {
                    navigate(`/lesson/${nextLesson.id}`);
                  } else {
                    toast({
                      title: "Selesaikan kuis dulu!",
                      description: "Kerjakan kuis materi ini sebelum lanjut ke materi berikutnya.",
                      variant: "destructive",
                    });
                  }
                }}
                className="gap-1.5"
              >
                <span className="hidden sm:inline">Berikutnya</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Lesson body */}
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 py-10">
        <LessonContent
          lesson={lesson}
          isEnrolled={isEnrolled}
          onStartQuiz={handleStartQuiz}
          hasQuiz={hasQuiz}
        />
      </div>
    </div>
  );
};

export default LessonPage;
