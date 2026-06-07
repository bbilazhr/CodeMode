import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, ArrowLeft, BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

interface CourseHeaderProps {
  course: {
    title: string;
    description: string | null;
    level: string;
    duration: string | null;
    icon: string | null;
    color: string | null;
  };
  lessonCount: number;
  isEnrolled: boolean;
  onEnroll: () => void;
  enrolling: boolean;
}

const CourseHeader = ({ course, lessonCount, isEnrolled, onEnroll, enrolling }: CourseHeaderProps) => {
  const navigate = useNavigate();
  const { user } = useAuth();

  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent" />
      <div className="container mx-auto relative pt-12 pb-12 max-w-7xl px-4 sm:px-6 lg:px-8">
        <Button
          variant="outline"
          size="sm"
          onClick={() => navigate("/dashboard")}
          className="gap-2 mb-8 bg-background/60 border-border hover:bg-primary hover:text-white hover:border-primary rounded-xl shadow-sm transition-all"
        >
          <ArrowLeft className="h-4 w-4" /> Kembali ke Dashboard
        </Button>

        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div
            className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl backdrop-blur-sm border border-white/20"
            style={{ backgroundColor: (course.color || "#3572A5") + "15" }}
          >
            {course.icon}
          </div>

          <div className="flex-1 space-y-4">
            <div className="flex items-center gap-3">
              <Badge variant="secondary" className="text-xs">{course.level === "Beginner" ? "Pemula" : course.level === "Intermediate" ? "Menengah" : course.level === "Advanced" ? "Lanjutan" : course.level}</Badge>
              <span className="flex items-center gap-1 text-sm text-muted-foreground">
                <Clock className="h-3.5 w-3.5" /> {course.duration}
              </span>
              <span className="flex items-center gap-1 text-sm text-muted-foreground">
                <BookOpen className="h-3.5 w-3.5" /> {lessonCount} materi
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold text-foreground">{course.title}</h1>
            <p className="text-muted-foreground max-w-2xl">{course.description}</p>

            {!isEnrolled ? (
              <Button
                size="lg"
                onClick={user ? onEnroll : () => navigate("/auth")}
                disabled={enrolling}
                className="gap-2"
              >
                {user ? (enrolling ? "Mendaftarkan..." : "Daftar Sekarang — Gratis") : "Masuk untuk Mendaftar"}
              </Button>
            ) : (
              <Badge className="bg-green-500/10 text-green-600 border-green-500/20 text-sm px-4 py-1.5">
                ✓ Sudah Terdaftar
              </Badge>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseHeader;
