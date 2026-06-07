import { CheckCircle2, Circle, PlayCircle, Lock, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

interface Lesson {
  id: string;
  title: string;
  content: string | null;
  order_index: number;
  duration_minutes: number | null;
}

interface LessonListProps {
  lessons: Lesson[];
  completedLessonIds: string[];
  activeLessonId: string | null;
  onSelectLesson: (lessonId: string) => void;
  isEnrolled: boolean;
}

const LessonList = ({
  lessons,
  completedLessonIds,
  activeLessonId,
  onSelectLesson,
  isEnrolled,
}: LessonListProps) => {
  return (
    <div className="space-y-2">
      <h3 className="font-heading font-semibold text-lg text-foreground mb-4">Materi Kursus</h3>
      {lessons.map((lesson, i) => {
        const isCompleted = completedLessonIds.includes(lesson.id);
        const isActive = activeLessonId === lesson.id;
        const isLocked =
          (!isEnrolled && i > 0) ||
          (i > 0 && !completedLessonIds.includes(lessons[i - 1].id));

        return (
          <motion.button
            key={lesson.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.05 }}
            onClick={() => !isLocked && onSelectLesson(lesson.id)}
            disabled={isLocked}
            className={`w-full text-left p-4 rounded-xl border transition-all duration-200 group ${
              isActive
                ? "border-primary bg-primary/5 shadow-md"
                : isCompleted
                ? "border-green-500/30 bg-green-500/5 hover:border-green-500/50 hover:bg-green-500/10 cursor-pointer"
                : isLocked
                ? "border-border bg-muted/30 opacity-50 cursor-not-allowed"
                : "border-border bg-card hover:border-primary/40 hover:bg-primary/5 hover:shadow-sm cursor-pointer"
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0">
                {isCompleted ? (
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                ) : isLocked ? (
                  <Lock className="h-5 w-5 text-muted-foreground" />
                ) : isActive ? (
                  <PlayCircle className="h-5 w-5 text-primary" />
                ) : (
                  <Circle className="h-5 w-5 text-muted-foreground" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-sm text-foreground truncate">
                  {i + 1}. {lesson.title}
                </p>
                {lesson.duration_minutes && (
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {lesson.duration_minutes} menit
                  </p>
                )}
              </div>
              {!isLocked && (
                <ChevronRight
                  className={`h-4 w-4 shrink-0 transition-transform ${
                    isActive
                      ? "text-primary"
                      : "text-muted-foreground group-hover:translate-x-0.5 group-hover:text-primary"
                  }`}
                />
              )}
            </div>
          </motion.button>
        );
      })}
    </div>
  );
};

export default LessonList;
