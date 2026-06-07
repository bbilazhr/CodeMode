import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";
import { useQueryClient } from "@tanstack/react-query";
import logo from "@/assets/logo_codemode.png";

const questions = [
  {
    title: "Apa yang membawa Anda ke CodeMode?",
    options: [
      { value: "career", label: "🚀 Pindah Karier", desc: "Saya ingin mendapatkan pekerjaan di bidang tech" },
      { value: "skill", label: "🔧 Tingkatkan Skill", desc: "Meningkatkan kemampuan saya saat ini" },
      { value: "project", label: "🎯 Bangun Proyek", desc: "Saya punya sesuatu spesifik yang ingin dibuat" },
      { value: "curiosity", label: "🧠 Rasa Ingin Tahu", desc: "Sekadar mengeksplorasi dan belajar" },
    ],
  },
  {
    title: "Bagaimana pengalaman coding Anda?",
    options: [
      { value: "none", label: "🌱 Pemula Total", desc: "Belum pernah menulis kode" },
      { value: "beginner", label: "📗 Sudah Tahu Dasar", desc: "Sudah mencoba beberapa tutorial" },
      { value: "intermediate", label: "📘 Menengah", desc: "Pernah membuat proyek kecil" },
      { value: "advanced", label: "📕 Lanjutan", desc: "Nyaman dengan kode yang kompleks" },
    ],
  },
  {
    title: "Bidang mana yang paling menarik bagi Anda?",
    options: [
      { value: "frontend", label: "🎨 Front-End", desc: "Membangun antarmuka yang menarik" },
      { value: "backend", label: "⚙️ Back-End", desc: "Logika server & API" },
      { value: "data", label: "📊 Data Science", desc: "Analisis data & ML" },
      { value: "mobile", label: "📱 Mobile", desc: "Aplikasi iOS & Android" },
    ],
  },
  {
    title: "Apakah Anda punya pengalaman desain?",
    options: [
      { value: "none", label: "🚫 Tidak Ada", desc: "Belum pernah memakai tools desain" },
      { value: "basic", label: "✏️ Dasar", desc: "Pernah memakai Canva atau sejenisnya" },
      { value: "figma", label: "🎯 Pengguna Figma", desc: "Nyaman menggunakan Figma" },
      { value: "pro", label: "💎 Profesional", desc: "Desain adalah keahlian saya" },
    ],
  },
  {
    title: "Berapa banyak waktu yang bisa Anda sediakan setiap hari?",
    options: [
      { value: "15min", label: "⏱️ 15 menit", desc: "Sesi harian singkat" },
      { value: "30min", label: "🕐 30 menit", desc: "Belajar fokus dalam waktu singkat" },
      { value: "1hr", label: "🕑 1 jam", desc: "Latihan harian yang serius" },
      { value: "2hr+", label: "🕒 2+ jam", desc: "Sesi mendalam dan imersif" },
    ],
  },
  {
    title: "Gaya belajar apa yang Anda sukai?",
    options: [
      { value: "visual", label: "👁️ Visual", desc: "Video dan diagram" },
      { value: "reading", label: "📖 Membaca", desc: "Artikel dan dokumentasi" },
      { value: "hands_on", label: "🛠️ Praktik Langsung", desc: "Belajar sambil membangun" },
      { value: "mix", label: "🔄 Campuran", desc: "Sedikit dari semuanya" },
    ],
  },
  {
    title: "Apakah Anda tertarik dengan security?",
    options: [
      { value: "very", label: "🔒 Sangat Tertarik", desc: "Cybersecurity sangat menarik" },
      { value: "somewhat", label: "🛡️ Cukup Tertarik", desc: "Penting untuk tahu dasarnya" },
      { value: "not_really", label: "🤷 Tidak Terlalu", desc: "Saya lebih tertarik bidang lain" },
      { value: "already_know", label: "🎓 Sudah Paham", desc: "Saya sudah punya pengetahuan security" },
    ],
  },
];

function computeRole(answers: string[]): { role: string; courses: string[] } {
  const [goal, experience, interest, design, , , security] = answers;

  const courseMap: Record<string, string> = {
    frontend: "a3333333-3333-3333-3333-333333333333",
    backend: "a2222222-2222-2222-2222-222222222222",
    data: "a1111111-1111-1111-1111-111111111111",
    mobile: "a4444444-4444-4444-4444-444444444444",
  };

  let role = "Explorer";
  const recommended: string[] = [];

  if (interest && courseMap[interest]) {
    recommended.push(courseMap[interest]);
  }

  if (experience === "advanced") {
    role = goal === "career" ? "Specialist" : "Innovator";
  } else if (experience === "intermediate") {
    role = goal === "career" ? "Achiever" : "Builder";
  } else if (experience === "beginner") {
    role = goal === "career" ? "Transitioner" : "Explorer";
  } else {
    role = "Newcomer";
  }

  if (design === "figma" || design === "pro" || interest === "frontend") {
    if (!recommended.includes("a5555555-5555-5555-5555-555555555555")) {
      recommended.push("a5555555-5555-5555-5555-555555555555");
    }
  }

  if (security === "very" || security === "already_know") {
    recommended.push("a6666666-6666-6666-6666-666666666666");
  }

  const allCourses = Object.values(courseMap);
  for (const c of allCourses) {
    if (recommended.length >= 3) break;
    if (!recommended.includes(c)) recommended.push(c);
  }

  return { role, courses: recommended.slice(0, 4) };
}

const Onboarding = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>(new Array(7).fill(""));
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { user } = useAuth();
  const { toast } = useToast();
  const qc = useQueryClient();

  const current = questions[step];
  const progress = ((step + 1) / questions.length) * 100;

  const handleSelect = (value: string) => {
    const newAnswers = [...answers];
    newAnswers[step] = value;
    setAnswers(newAnswers);
  };

  const handleNext = async () => {
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setLoading(true);
      try {
        const { role, courses } = computeRole(answers);
        if (user) {
          // 1. Simpan tanda onboarding telah selesai ke tabel profiles
          await supabase
            .from("profiles" as any)
            .update({ role, onboarding_completed: true } as any)
            .eq("user_id", user.id);
          
          // 2. Simpan hasil pilihan kuis mendalam ke data preferensi belajar
          await supabase
            .from("user_learning_profiles" as any)
            .upsert({
              user_id: user.id,
              background: answers[1] || "none",
              goal: answers[0] || "general",
              experience_level: answers[1] || "beginner",
              learning_persona: role,
            } as any, { onConflict: "user_id" });

          // 3. Kaitkan paket rekomendasi course awal agar langsung tampil di Dashboard
          if (courses.length > 0) {
            const enrollmentData = courses.map((courseId) => ({
              user_id: user.id,
              course_id: courseId,
              status: "recommended",
            }));

            await supabase
              .from("user_courses" as any)
              .upsert(enrollmentData as any, { onConflict: "user_id,course_id" });
          }

          // 4. Bangun record analisis awal progress belajar
          await supabase
            .from("user_analytics" as any)
            .upsert({ user_id: user.id } as any, { onConflict: "user_id" });
        }
        
        toast({ title: `Selamat datang, ${role}! 🎉`, description: "Jalur belajar Anda sudah siap." });
        
        await qc.invalidateQueries({ queryKey: ["profile"] });
        
        // PENGALIHAN LANGSUNG KE DASHBOARD UTAMA
        navigate("/dashboard");
      } catch (e: any) {
        toast({ title: "Terjadi kesalahan", description: e.message, variant: "destructive" });
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="w-full max-w-lg space-y-6">
        <div className="text-center">
          <img src={logo} alt="CodeMode" className="h-10 mx-auto mb-4" />
          <p className="text-sm text-muted-foreground">
            Pertanyaan {step + 1} dari {questions.length}
          </p>
        </div>

        {/* Progress bar */}
        <div className="h-2 rounded-full bg-muted overflow-hidden">
          <motion.div
            className="h-full rounded-full bg-primary"
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>

        <motion.div
          key={step}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          className="rounded-2xl bg-card border border-border p-6 space-y-5"
          style={{ boxShadow: "var(--card-shadow-hover)" }}
        >
          <h2 className="font-heading font-bold text-xl text-foreground">{current.title}</h2>

          <div className="space-y-3">
            {current.options.map((opt) => (
              <button
                key={opt.value}
                onClick={() => handleSelect(opt.value)}
                className={`w-full text-left p-4 rounded-xl border transition-all ${
                  answers[step] === opt.value
                    ? "border-primary bg-primary/10"
                    : "border-border hover:border-primary/30"
                }`}
              >
                <p className="font-medium text-foreground">{opt.label}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{opt.desc}</p>
              </button>
            ))}
          </div>

          <div className="flex justify-between pt-2">
            {step > 0 && (
              <Button variant="ghost" onClick={() => setStep(step - 1)}>Kembali</Button>
            )}
            <div className="ml-auto">
              <Button
                onClick={handleNext}
                disabled={!answers[step] || loading}
              >
                {loading ? "Menyiapkan..." : step < questions.length - 1 ? "Lanjut" : "Mulai Belajar 🚀"}
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Onboarding;