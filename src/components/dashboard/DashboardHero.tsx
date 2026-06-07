import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Flame, CheckCircle2, Target, Users, Dumbbell, Trophy, ArrowRight, Sparkles, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";

interface DashboardHeroProps {
  displayName: string;
  currentStreak: number;
  longestStreak: number;
  totalXp: number;
  onPrimaryAction: () => void;
}

interface Mission {
  id: string;
  title: string;
  description: string;
  reward: number;
  target: number;
  progress: number;
  icon: typeof Target;
  accent: string;
}

const todayKey = () => new Date().toISOString().slice(0, 10);

const DashboardHero = ({ displayName, currentStreak, longestStreak, totalXp, onPrimaryAction }: DashboardHeroProps) => {
  const { user } = useAuth();
  const qc = useQueryClient();
  const { toast } = useToast();

  const storageKey = `missions_claimed_${user?.id}_${todayKey()}`;
  const [claimedMissions, setClaimedMissions] = useState<Set<string>>(() => {
    if (typeof window === "undefined") return new Set();
    try {
      const raw = localStorage.getItem(storageKey);
      return new Set<string>(raw ? JSON.parse(raw) : []);
    } catch { return new Set(); }
  });
  const [streakClaimed, setStreakClaimed] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return localStorage.getItem(`streak_claimed_${user?.id}_${todayKey()}`) === "1";
  });

  // Today's lessons completed
  const { data: lessonsToday } = useQuery({
    queryKey: ["lessons_today", user?.id],
    queryFn: async () => {
      if (!user) return 0;
      const start = new Date(); start.setHours(0, 0, 0, 0);
      const { data } = await supabase
        .from("lesson_progress")
        .select("id, completed_at, completed")
        .eq("user_id", user.id)
        .eq("completed", true)
        .gte("completed_at", start.toISOString());
      return data?.length || 0;
    },
    enabled: !!user,
  });

  // Today's new accepted friendships
  const { data: friendsToday } = useQuery({
    queryKey: ["friends_today", user?.id],
    queryFn: async () => {
      if (!user) return 0;
      const start = new Date(); start.setHours(0, 0, 0, 0);
      const { data } = await supabase
        .from("friendships")
        .select("id")
        .eq("status", "accepted")
        .or(`requester_id.eq.${user.id},addressee_id.eq.${user.id}`)
        .gte("created_at", start.toISOString());
      return data?.length || 0;
    },
    enabled: !!user,
  });

  const xpToday = currentStreak > 0 ? Math.min(totalXp, 500) : Math.min(totalXp % 500, 500);

  const missions: Mission[] = useMemo(() => [
    { id: "xp-collector", title: "Pengumpul Poin", description: "Kumpulkan 500 XP hari ini", reward: 60, target: 500, progress: xpToday, icon: Target, accent: "text-blue-600 bg-blue-500/10" },
    { id: "warmup", title: "Pemanasan", description: "Selesaikan 1 pelajaran apa saja", reward: 20, target: 1, progress: lessonsToday || 0, icon: Dumbbell, accent: "text-emerald-600 bg-emerald-500/10" },
    { id: "marathon", title: "Marathon Belajar", description: "Selesaikan 3 pelajaran hari ini", reward: 50, target: 3, progress: lessonsToday || 0, icon: Trophy, accent: "text-amber-600 bg-amber-500/10" },
    { id: "friends", title: "Sosialita", description: "Berteman dengan 1 orang hari ini", reward: 10, target: 1, progress: friendsToday || 0, icon: Users, accent: "text-violet-600 bg-violet-500/10" },
  ], [xpToday, lessonsToday, friendsToday]);

  const persistClaimed = (next: Set<string>) => {
    setClaimedMissions(next);
    try { localStorage.setItem(storageKey, JSON.stringify([...next])); } catch {}
  };

  const addXp = async (amount: number, label: string) => {
    if (!user) return;
    const { data: existing } = await supabase.from("user_analytics").select("*").eq("user_id", user.id).maybeSingle();
    if (existing) {
      await supabase.from("user_analytics").update({ total_xp: (existing.total_xp || 0) + amount }).eq("user_id", user.id);
    } else {
      await supabase.from("user_analytics").insert({ user_id: user.id, total_xp: amount });
    }
    qc.invalidateQueries({ queryKey: ["user_analytics"] });
    toast({ title: `🏆 +${amount} XP`, description: label });
  };

  const handleMission = async (m: Mission) => {
    if (claimedMissions.has(m.id)) return;
    const completed = m.progress >= m.target;

    if (!completed) {
      // "Jalan" — kick off the activity
      if (m.id === "friends") {
        window.location.href = "/profile";
        toast({ title: "Cari teman 👥", description: "Kunjungi profil untuk menambah teman." });
        return;
      }
      onPrimaryAction();
      toast({ title: "Lanjutkan misi 💪", description: m.description });
      return;
    }

    // Claim reward
    const next = new Set(claimedMissions); next.add(m.id);
    persistClaimed(next);
    await addXp(m.reward, m.title);
  };

  const handleStreakClaim = async () => {
    if (streakClaimed) return;
    setStreakClaimed(true);
    try { localStorage.setItem(`streak_claimed_${user?.id}_${todayKey()}`, "1"); } catch {}
    await addXp(10, "Bonus streak harian");
  };

  return (
    <section className="space-y-5">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden rounded-3xl border border-border/70 bg-gradient-to-br from-primary/8 via-card to-card p-5 shadow-[0_18px_40px_hsl(var(--foreground)/0.06)]"
      >
        <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/10 blur-2xl" />
        <div className="relative flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-2xl shadow-sm">👋</div>
            <div>
              <h1 className="font-heading text-2xl sm:text-[28px] font-extrabold text-foreground tracking-tight">Halo, {displayName}!</h1>
              <p className="text-sm text-muted-foreground">Mari taklukkan misi hari ini 🚀</p>
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-2xl border border-border/70 bg-background px-4 py-2.5 shadow-sm">
            <Trophy className="h-5 w-5 text-amber-500" />
            <div className="leading-tight">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Total XP</p>
              <p className="text-base font-bold text-foreground">{totalXp.toLocaleString("id-ID")}</p>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-3xl border border-border/70 bg-card p-5 shadow-[0_18px_40px_hsl(var(--foreground)/0.06)]"
      >
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-emerald-600" />
            <h2 className="font-heading text-lg font-bold text-foreground">Misi Hari Ini</h2>
          </div>
          <span className="text-[11px] font-medium text-muted-foreground">Reset tiap 24 jam</span>
        </div>

        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {missions.map((mission, idx) => {
            const Icon = mission.icon;
            const claimed = claimedMissions.has(mission.id);
            const completed = mission.progress >= mission.target;
            const pct = Math.min(100, Math.round((mission.progress / mission.target) * 100));

            return (
              <motion.div
                key={mission.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * idx }}
                className="group rounded-2xl border border-border/60 bg-background p-3.5 transition-all hover:border-primary/40 hover:shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-2">
                    <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${mission.accent}`}>
                      <Icon className="h-4 w-4" />
                    </div>
                    <div className="flex items-center gap-1 rounded-full bg-amber-100 px-2 py-0.5 text-[11px] font-bold text-amber-700 dark:bg-amber-500/15 dark:text-amber-400">
                      <Trophy className="h-3 w-3" /> {mission.reward}
                    </div>
                  </div>

                  <div className="mt-2.5">
                    <p className="text-sm font-bold text-foreground leading-tight">{mission.title}</p>
                    <p className="mt-0.5 text-xs text-muted-foreground line-clamp-2">{mission.description}</p>
                  </div>
                </div>

                <div>
                  <div className="mt-3.5 flex items-center justify-between text-[10px] font-bold text-muted-foreground mb-1">
                    <span>{Math.min(mission.progress, mission.target)}/{mission.target}</span>
                    <span>{claimed ? 100 : pct}%</span>
                  </div>
                  <Progress value={claimed ? 100 : pct} className="h-1.5 w-full" />

                  <Button
                    size="sm"
                    variant={claimed ? "secondary" : completed ? "default" : "outline"}
                    disabled={claimed}
                    className="mt-3 h-8 w-full rounded-full text-[11px] font-bold uppercase tracking-wider gap-1"
                    onClick={() => handleMission(mission)}
                  >
                    {claimed ? "DIKLAIM ✓" : completed ? "KLAIM" : (<><Lock className="h-3 w-3" /> JALAN</>)}
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default DashboardHero;
