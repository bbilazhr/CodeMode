import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative pt-32 pb-20 overflow-hidden hero-glow">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Baru: review kode bertenaga AI
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Kuasai coding lewat{" "}
            <span className="text-gradient">proyek praktik langsung</span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Pelajaran interaktif, proyek dunia nyata, dan umpan balik instan.
            Pelajari Python, JavaScript, React, dan lainnya — sesuai ritme Anda.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button size="lg" className="gap-2 px-6" onClick={() => navigate("/auth")}>
              Mulai Belajar Gratis <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          <p className="text-xs text-muted-foreground animate-fade-up" style={{ animationDelay: "0.4s" }}>
            Dipercaya oleh 50.000+ developer di seluruh dunia
          </p>
        </div>

        {/* Code editor mockup */}
        <div className="mt-16 max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: "0.5s" }}>
          <div className="rounded-xl border border-border bg-card overflow-hidden" style={{ boxShadow: "var(--card-shadow-hover)" }}>
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/50">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-destructive/60" />
                <span className="w-3 h-3 rounded-full bg-yellow-400/60" />
                <span className="w-3 h-3 rounded-full bg-green-400/60" />
              </div>
              <span className="text-xs text-muted-foreground font-mono ml-2">app.tsx</span>
            </div>
            <div className="p-5 font-mono text-sm leading-relaxed">
              <div><span className="text-primary">const</span> <span className="text-foreground">sapaan</span> = <span className="text-green-600">"Halo, Dunia!"</span>;</div>
              <div className="mt-1"><span className="text-primary">function</span> <span className="text-foreground">belajar</span>(<span className="text-muted-foreground">topik</span>: <span className="text-primary">string</span>) {"{"}</div>
              <div className="ml-4"><span className="text-primary">return</span> <span className="text-green-600">{"`Kuasai ${topik} hari ini!`"}</span>;</div>
              <div>{"}"}</div>
              <div className="mt-2 flex items-center gap-2">
                <span className="text-muted-foreground">{">"}</span>
                <span className="w-2 h-5 bg-primary animate-pulse inline-block" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
