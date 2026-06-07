import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface LearningPersonaSurveyProps {
  onSubmit: (data: { background: string; goal: string; experience_level: string }) => void;
  isSubmitting: boolean;
}

const LearningPersonaSurvey = ({ onSubmit, isSubmitting }: LearningPersonaSurveyProps) => {
  const [step, setStep] = useState(0);
  const [background, setBackground] = useState("");
  const [goal, setGoal] = useState("");
  const [level, setLevel] = useState("");

  const steps = [
    {
      title: "Apa latar belakang Anda?",
      options: [
        { value: "none", label: "🌱 Pemula Total", desc: "Belum punya pengalaman coding" },
        { value: "student", label: "📚 Pelajar", desc: "Sedang belajar CS/IT" },
        { value: "self_taught", label: "💻 Otodidak", desc: "Belajar dari tutorial" },
        { value: "professional", label: "🏢 Profesional", desc: "Bekerja di bidang tech" },
      ],
      selected: background,
      onSelect: setBackground,
    },
    {
      title: "Apa tujuan Anda?",
      options: [
        { value: "career", label: "🚀 Pindah Karier", desc: "Mendapatkan pekerjaan di bidang tech" },
        { value: "skill", label: "🔧 Bangun Skill", desc: "Meningkatkan skill tertentu" },
        { value: "project", label: "🎯 Bangun Proyek", desc: "Membuat sesuatu yang spesifik" },
        { value: "general", label: "🧠 Pengetahuan Umum", desc: "Belajar untuk kesenangan" },
      ],
      selected: goal,
      onSelect: setGoal,
    },
    {
      title: "Level pengalaman?",
      options: [
        { value: "beginner", label: "🟢 Pemula", desc: "Baru mulai" },
        { value: "intermediate", label: "🟡 Menengah", desc: "Sudah paham dasar" },
        { value: "advanced", label: "🔴 Lanjutan", desc: "Siap untuk tantangan" },
      ],
      selected: level,
      onSelect: setLevel,
    },
  ];

  const current = steps[step];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-2xl bg-card/90 backdrop-blur-xl border border-white/20 p-8 max-w-lg mx-auto"
      style={{ boxShadow: "0 8px 32px hsl(var(--primary) / 0.1)" }}
    >
      <div className="flex gap-1.5 mb-6">
        {steps.map((_, i) => (
          <div key={i} className={`h-1 flex-1 rounded-full ${i <= step ? "bg-primary" : "bg-muted"}`} />
        ))}
      </div>

      <h3 className="font-heading font-bold text-xl text-foreground mb-6">{current.title}</h3>

      <div className="space-y-3">
        {current.options.map((opt) => (
          <button
            key={opt.value}
            onClick={() => current.onSelect(opt.value)}
            className={`w-full text-left p-4 rounded-xl border transition-all ${
              current.selected === opt.value
                ? "border-primary bg-primary/10"
                : "border-border hover:border-primary/30"
            }`}
          >
            <p className="font-medium text-foreground">{opt.label}</p>
            <p className="text-xs text-muted-foreground mt-0.5">{opt.desc}</p>
          </button>
        ))}
      </div>

      <div className="flex justify-between mt-6">
        {step > 0 && (
          <Button variant="ghost" onClick={() => setStep(step - 1)}>Kembali</Button>
        )}
        <div className="ml-auto">
          {step < steps.length - 1 ? (
            <Button onClick={() => setStep(step + 1)} disabled={!current.selected}>
              Lanjut
            </Button>
          ) : (
            <Button
              onClick={() => onSubmit({ background, goal, experience_level: level })}
              disabled={!level || isSubmitting}
            >
              {isSubmitting ? "Menyimpan..." : "Mulai Belajar"}
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default LearningPersonaSurvey;
