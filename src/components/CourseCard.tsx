import { Badge } from "@/components/ui/badge";
import { Clock, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  level: string;
  duration: string;
  students: string;
  icon: string;
  color: string;
}

const CourseCard = ({ id, title, description, level, duration, students, icon, color }: CourseCardProps) => {
  const navigate = useNavigate();

  return (
    <div
      className="group rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
      style={{ boxShadow: "var(--card-shadow)" }}
      onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "var(--card-shadow-hover)")}
      onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "var(--card-shadow)")}
      onClick={() => navigate(`/course/${id}`)}
    >
      <div className="w-12 h-12 rounded-lg flex items-center justify-center text-2xl mb-4" style={{ backgroundColor: color + "15", color }}>
        {icon}
      </div>
      <Badge variant="secondary" className="mb-3 text-xs">{level === "Pemula" ? "Beginner" : level === "Menengah" ? "Intermediate" : level === "Lanjutan" ? "Advanced" : level}</Badge>
      <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{description}</p>
      <div className="flex items-center gap-4 text-xs text-muted-foreground">
        <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {duration}</span>
        <span className="flex items-center gap-1"><Users className="h-3.5 w-3.5" /> {students}</span>
      </div>
    </div>
  );
};

export default CourseCard;
