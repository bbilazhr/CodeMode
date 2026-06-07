import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { useQuery } from "@tanstack/react-query";
import { useUserAnalytics, useUserHearts, useUserStreaks } from "@/hooks/useCourseData";
import QuizContainer from "@/components/quiz/QuizContainer";
import { generateQuestionsForLesson } from "@/data/lessonMaterials";

const QuizPage = () => {
  const { lessonId } = useParams<{ lessonId: string }>();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { toast } = useToast();
  const qc = useQueryClient();
  const { data: analytics } = useUserAnalytics();
  const { data: hearts, loseHeart } = useUserHearts();
  const { updateStreak } = useUserStreaks();

  useEffect(() => {
    if (!user) navigate("/auth");
  }, [user, navigate]);

  const { data: quizzes, isLoading } = useQuery({
    queryKey: ["quizzes", lessonId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("quizzes")
        .select("*, quiz_questions(*)")
        .eq("lesson_id", lessonId!)
        .order("created_at");
      if (error) throw error;
      return data;
    },
    enabled: !!lessonId,
  });

  const { data: lesson } = useQuery({
    queryKey: ["lesson", lessonId],
    queryFn: async () => {
      const { data, error } = await supabase.from("lessons").select("*").eq("id", lessonId!).single();
      if (error) throw error;
      return data;
    },
    enabled: !!lessonId,
  });

  const handleQuestionAnswered = async (questionId: string, skillCategory: string, isCorrect: boolean, xp: number) => {
    if (!user || !quizzes?.[0]) return;
    await supabase.from("quiz_attempts").insert({
      user_id: user.id, quiz_id: quizzes[0].id, question_id: questionId, is_correct: isCorrect, user_answer: { answered: true },
    });
    if (!isCorrect) {
      loseHeart.mutate();
    } else if (analytics) {
      const scoreKey = `${skillCategory}_score`;
      const currentScore = Number((analytics as any)[scoreKey] || 0);
      await supabase.from("user_analytics").update({
        [scoreKey]: Math.min(currentScore + 5, 100),
        total_xp: (analytics.total_xp || 0) + xp,
      } as any).eq("user_id", user.id);
      qc.invalidateQueries({ queryKey: ["user_analytics"] });
      updateStreak.mutate();
    }
  };

  const handleQuizComplete = async () => {
    if (!user || !lessonId) return;
    await supabase.from("lesson_progress").upsert(
      { user_id: user.id, lesson_id: lessonId, completed: true, completed_at: new Date().toISOString() },
      { onConflict: "lesson_id,user_id" }
    );
    qc.invalidateQueries({ queryKey: ["lesson_progress"] });
  };

  const handleExit = () => {
    if (lesson?.course_id) navigate(`/course/${lesson.course_id}`);
    else navigate("/dashboard");
  };

  if (isLoading || !lesson) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-2 border-primary border-t-transparent rounded-full" />
      </div>
    );
  }

  const quiz = {
    id: quizzes?.[0]?.id || `${lessonId}-local-quiz`,
    title: quizzes?.[0]?.title || `${lesson.title} Quiz`,
    quiz_type: quizzes?.[0]?.quiz_type || "mixed",
    difficulty: quizzes?.[0]?.difficulty || "medium",
    xp_reward: quizzes?.[0]?.xp_reward || 100,
    quiz_questions: generateQuestionsForLesson(lesson.title)
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-4xl mx-auto py-8 px-4">
        <QuizContainer
          quiz={quiz as any}
          onQuestionAnswered={handleQuestionAnswered}
          onQuizComplete={handleQuizComplete}
          onAdvanceLesson={handleExit}
          hasNextLesson={false}
          onExit={handleExit}
          hearts={hearts?.hearts ?? 5}
        />
      </div>
    </div>
  );
};

export default QuizPage;
