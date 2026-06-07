import { BookOpen, Zap, MessageSquare, Trophy } from "lucide-react";

const features = [
  { icon: BookOpen, title: "Pelajaran Interaktif", description: "Coding langsung di browser dengan umpan balik instan dan latihan terpandu." },
  { icon: Zap, title: "Review Kode AI", description: "Dapatkan saran personal dan praktik terbaik dari asisten AI kami." },
  { icon: MessageSquare, title: "Dukungan Komunitas", description: "Bergabung dengan ribuan pelajar untuk diskusi, review kode, dan pair programming." },
  { icon: Trophy, title: "Sertifikasi", description: "Raih sertifikat yang diakui industri untuk menunjukkan kemampuan Anda." },
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Semua yang Anda butuhkan untuk naik level
          </h2>
          <p className="text-muted-foreground">
            Dibuat untuk developer yang ingin skill praktis, bukan sekadar teori.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="rounded-xl bg-card border border-border p-6 text-center transition-all hover:-translate-y-1" style={{ boxShadow: "var(--card-shadow)" }}>
              <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
