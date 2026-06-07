import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import {
  useCourse,
  useLessons,
  useQuizzes,
  useEnrollment,
  useEnroll,
  useLessonProgress,
  useUserAnalytics,
  useUserHearts,
  useUserStreaks,
  useUserLearningProfile,
} from "@/hooks/useCourseData";
import { supabase } from "@/integrations/supabase/client";
import { useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";

import CourseHeader from "@/components/course/CourseHeader";
import LessonList from "@/components/course/LessonList";
import GameHeader from "@/components/course/GameHeader";
import RadarSkillChart from "@/components/course/RadarSkillChart";
import LearningPersonaSurvey from "@/components/course/LearningPersonaSurvey";
import { generateQuestionsForLesson } from "@/data/lessonMaterials";

const CourseDetail = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { toast } = useToast();
  const qc = useQueryClient();

  const { data: course, isLoading: courseLoading } = useCourse(courseId || "");
  const { data: lessons } = useLessons(courseId || "");
  const { data: enrollment } = useEnrollment(courseId || "");
  const { mutate: enroll, isPending: enrolling } = useEnroll();
  const { data: progress } = useLessonProgress(courseId || "");
  const { data: analytics, initAnalytics } = useUserAnalytics();
  const { data: hearts } = useUserHearts();
  const { data: streaks } = useUserStreaks();
  const { data: learningProfile, saveProfile } = useUserLearningProfile();

  const isEnrolled = !!enrollment;
  const completedLessonIds = (progress || [])
    .filter((p) => p.completed)
    .map((p) => p.lesson_id);

  useEffect(() => {
    if (!user && !courseLoading) navigate("/auth");
  }, [user, courseLoading, navigate]);

  useEffect(() => {
    if (user && enrollment && !analytics) initAnalytics.mutate();
  }, [user, enrollment, analytics]);

  const handleEnroll = () => {
    if (!courseId) return;
    enroll(courseId, {
      onSuccess: () => {
        toast({ title: "Berhasil terdaftar!", description: "Selamat datang di kursus ini." });
        initAnalytics.mutate();
      },
    });
  };

  const handleSelectLesson = (lessonId: string) => {
    navigate(`/lesson/${lessonId}`);
  };

  const showSurvey = isEnrolled && user && !learningProfile;
  const isLocked = (hearts?.hearts || 5) <= 0;

  if (courseLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-2 border-primary border-t-transparent rounded-full" />
      </div>
    );
  }

  if (!course) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto pt-16 text-center">
          <h1 className="text-2xl font-bold text-foreground">Kursus tidak ditemukan</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-16">
      <CourseHeader
        course={course}
        lessonCount={lessons?.length || 0}
        isEnrolled={isEnrolled}
        onEnroll={handleEnroll}
        enrolling={enrolling}
      />

      <div className="container mx-auto py-8 max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Game stats bar */}
        {isEnrolled && user && (
          <div className="mb-8">
            <GameHeader
              hearts={hearts?.hearts || 5}
              streak={streaks?.current_streak || 0}
              xp={analytics?.total_xp || 0}
            />
          </div>
        )}

        {/* Onboarding survey */}
        {showSurvey && (
          <div className="mb-8">
            <LearningPersonaSurvey
              onSubmit={(data) => saveProfile.mutate(data)}
              isSubmitting={saveProfile.isPending}
            />
          </div>
        )}

        {/* Hearts depleted */}
        {isLocked && (
          <div className="mb-8 p-6 rounded-2xl bg-destructive/5 border border-destructive/20 text-center">
            <p className="text-lg font-bold text-foreground mb-2">💔 Heart habis!</p>
            <p className="text-sm text-muted-foreground">Heart pulih 1 setiap 4 jam. Kembali lagi nanti!</p>
          </div>
        )}

        {!showSurvey && !isLocked && (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Lesson list - full syllabus */}
            <div className="lg:col-span-2 space-y-4">
              <LessonList
                lessons={lessons || []}
                completedLessonIds={completedLessonIds}
                activeLessonId={null}
                onSelectLesson={handleSelectLesson}
                isEnrolled={isEnrolled}
              />
            </div>

            {/* Sidebar: skill chart */}
            <div className="lg:col-span-1 space-y-6">
              {isEnrolled && <RadarSkillChart analytics={analytics || null} />}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseDetail;
