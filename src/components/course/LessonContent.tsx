import { FileText, Video, ExternalLink, Trophy, ArrowRight, BookOpen } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { Button } from "@/components/ui/button";
import { getRichMaterialForLesson } from "@/data/lessonMaterials";

interface LessonContentProps {
  lesson: {
    id: string;
    title: string;
    content: string | null;
    resource_type?: string | null;
    resource_url?: string | null;
    video_url?: string | null;
  };
  isEnrolled: boolean;
  onStartQuiz: () => void;
  hasQuiz: boolean;
}

const LessonContent = ({
  lesson,
  isEnrolled,
  onStartQuiz,
  hasQuiz,
}: LessonContentProps) => {
  const resources = [];
  if (lesson.video_url) {
    resources.push({ type: "video", url: lesson.video_url, label: "Tonton Video Penjelasan" });
  }
  if (lesson.resource_url) {
    resources.push({
      type: lesson.resource_type || "pdf",
      url: lesson.resource_url,
      label: lesson.resource_type === "video" ? "Tonton Video Pendukung" : "Baca Buku Referensi",
    });
  }

  // Get beautiful Indonesian markdown content
  const richMaterial = getRichMaterialForLesson(lesson.title, lesson.content || "");

  return (
    <div className="space-y-6">
      {/* 1. RICH STUDY MATERIAL CARD (DICODING STYLE) */}
      <div className="p-6 sm:p-8 rounded-3xl bg-card border border-border shadow-sm">
        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border/50">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
            <BookOpen className="h-5 w-5" />
          </div>
          <div>
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">Materi Pelajaran</span>
            <h2 className="font-heading font-black text-xl sm:text-2xl text-foreground mt-0.5">{lesson.title}</h2>
          </div>
        </div>

        {/* Beautiful Custom Styled Markdown */}
        <div className="prose dark:prose-invert max-w-none">
          <ReactMarkdown
            components={{
              h1: ({ node, ...props }) => <h1 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight mb-4 mt-2" {...props} />,
              h2: ({ node, ...props }) => <h2 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight border-b border-border/50 pb-2 mb-3 mt-6" {...props} />,
              h3: ({ node, ...props }) => <h3 className="text-lg font-semibold text-foreground mb-2 mt-4" {...props} />,
              p: ({ node, ...props }) => <p className="text-muted-foreground leading-relaxed mb-4 text-sm sm:text-base" {...props} />,
              ul: ({ node, ...props }) => <ul className="list-disc list-inside pl-4 mb-4 space-y-1.5 text-muted-foreground text-sm sm:text-base" {...props} />,
              ol: ({ node, ...props }) => <ol className="list-decimal list-inside pl-4 mb-4 space-y-1.5 text-muted-foreground text-sm sm:text-base" {...props} />,
              li: ({ node, ...props }) => <li className="mb-0.5" {...props} />,
              code: ({ node, inline, ...props }: any) => 
                inline ? (
                  <code className="bg-muted px-1.5 py-0.5 rounded text-primary text-xs sm:text-sm font-semibold font-mono" {...props} />
                ) : (
                  <pre className="bg-zinc-950 text-zinc-100 p-4 rounded-xl overflow-x-auto border border-border/80 shadow-md my-4 font-mono text-xs sm:text-sm leading-relaxed">
                    <code {...props} />
                  </pre>
                ),
              hr: ({ node, ...props }) => <hr className="my-6 border-border/60" {...props} />,
            }}
          >
            {richMaterial}
          </ReactMarkdown>
        </div>
      </div>

      {/* 2. OPTIONAL RESOURCES */}
      {resources.length > 0 && (
        <div className="p-5 rounded-2xl bg-card border border-border shadow-sm">
          <h3 className="font-heading font-semibold text-sm text-foreground mb-3 flex items-center gap-2">
            <span>📖 Materi & Lampiran Pendukung</span>
          </h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {resources.map((res, i) => (
              <a
                key={i}
                href={res.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl border border-border bg-muted/20 hover:bg-primary/5 hover:border-primary/30 transition-all group"
              >
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  {res.type === "video" ? (
                    <Video className="h-4 w-4 text-primary" />
                  ) : (
                    <FileText className="h-4 w-4 text-primary" />
                  )}
                </div>
                <span className="text-sm font-medium text-foreground flex-1 truncate">{res.label}</span>
                <ExternalLink className="h-3.5 w-3.5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
              </a>
            ))}
          </div>
        </div>
      )}

      {/* 3. QUIZ ACTION (AT THE END OF THE MATERIAL) */}
      <div className="border-t border-border/50 pt-6">
        {!isEnrolled ? (
          <div className="p-6 rounded-2xl bg-muted/30 border border-dashed border-border text-center">
            <p className="text-sm text-muted-foreground">Silakan daftar kelas ini terlebih dahulu untuk mengikuti Quiz Evaluasi. 🔒</p>
          </div>
        ) : hasQuiz ? (
          <div className="p-6 sm:p-8 rounded-3xl bg-card border border-border shadow-sm text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto text-primary">
              <Trophy className="h-7 w-7" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-lg text-foreground">🏆 Quiz Evaluasi: {lesson.title}</h3>
              <p className="text-sm text-muted-foreground mt-1.5 max-w-md mx-auto">
                Kuis ini terdiri dari 20 soal pilihan ganda, isi rumpang, benar/salah, dan pengkodean singkat untuk menguji pemahaman Anda.
              </p>
            </div>
            <Button onClick={onStartQuiz} size="lg" className="w-full sm:w-auto px-8 gap-2 rounded-full font-bold">
              Mulai Kuis Sekarang <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        ) : (
          <div className="p-6 rounded-2xl bg-muted/30 border border-dashed border-border text-center">
            <p className="text-sm text-muted-foreground">Tidak ada kuis evaluasi untuk materi ini.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LessonContent;
