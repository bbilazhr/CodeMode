import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CTA = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20">
      <div className="container">
        <div className="rounded-2xl p-10 sm:p-16 text-center" style={{ backgroundImage: "var(--hero-gradient)" }}>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-4 font-heading">
            Siap mulai coding?
          </h2>
          <p className="text-primary-foreground/80 max-w-md mx-auto mb-8">
            Bergabung dengan 50.000+ developer yang belajar coding lewat proyek interaktif dan umpan balik AI.
          </p>
          <Button size="lg" variant="secondary" className="gap-2 px-8 font-semibold" onClick={() => navigate("/auth")}>
            Mulai Gratis <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
