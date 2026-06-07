import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Flame } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";

interface StreakSectionProps {
  currentStreak: number;
  longestStreak: number;
  lastActivityDate?: string | null;
  onCheckIn: () => void;
}

// Indonesian week starting Monday
const WEEK_LABELS = ["Sen", "Sel", "Rab", "Kam", "Jum", "Sab", "Min"];

const getWeekDays = () => {
  const today = new Date();
  // JS getDay(): 0=Sun..6=Sat. We want Monday-first index.
  const jsDay = today.getDay();
  const mondayOffset = jsDay === 0 ? 6 : jsDay - 1; // days since Monday
  const monday = new Date(today);
  monday.setDate(today.getDate() - mondayOffset);

  return Array.from({ length: 7 }, (_, i) => {
    const d = new Date(monday);
    d.setDate(monday.getDate() + i);
    return { key: d.toISOString(), date: d, label: WEEK_LABELS[i] };
  });
};

const getActiveDates = (currentStreak: number, lastActivityDate?: string | null) => {
  if (currentStreak <= 0) return new Set<string>();
  const anchor = lastActivityDate ? new Date(`${lastActivityDate}T00:00:00`) : new Date();
  const active = new Set<string>();
  for (let i = 0; i < Math.min(currentStreak, 7); i += 1) {
    const d = new Date(anchor);
    d.setDate(anchor.getDate() - i);
    active.add(d.toDateString());
  }
  return active;
};

const StreakSection = ({ currentStreak, longestStreak, lastActivityDate, onCheckIn }: StreakSectionProps) => {
  const weekDays = getWeekDays();
  const activeDates = getActiveDates(currentStreak, lastActivityDate);
  const today = new Date().toDateString();
  const [open, setOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const { user } = useAuth();
  const qc = useQueryClient();
  const { toast } = useToast();

  const handleConfirmCheckIn = async () => {
    if (!user) return;
    setSubmitting(true);
    try {
      const todayIso = new Date().toISOString().slice(0, 10);
      const { data: existing } = await supabase.from("user_streaks").select("*").eq("user_id", user.id).maybeSingle();

      let newCurrent = 1;
      if (existing) {
        if (existing.last_activity_date === todayIso) {
          newCurrent = existing.current_streak;
        } else {
          const yesterday = new Date();
          yesterday.setDate(yesterday.getDate() - 1);
          const yIso = yesterday.toISOString().slice(0, 10);
          newCurrent = existing.last_activity_date === yIso ? (existing.current_streak || 0) + 1 : 1;
        }
        const newLongest = Math.max(existing.longest_streak || 0, newCurrent);
        await supabase.from("user_streaks").update({
          current_streak: newCurrent,
          longest_streak: newLongest,
          last_activity_date: todayIso,
        }).eq("user_id", user.id);
      } else {
        await supabase.from("user_streaks").insert({
          user_id: user.id,
          current_streak: 1,
          longest_streak: 1,
          last_activity_date: todayIso,
        });
      }
      qc.invalidateQueries({ queryKey: ["user_streaks"] });
      toast({ title: "🔥 Check-in berhasil!", description: "Streak kamu bertambah." });
      setOpen(false);
      onCheckIn();
    } catch (e: any) {
      toast({ title: "Gagal check-in", description: e.message, variant: "destructive" });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <section className="rounded-3xl border border-border/70 bg-card p-6 shadow-[0_18px_40px_hsl(var(--foreground)/0.06)]">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div className="space-y-2">
              <p className="text-sm font-semibold text-foreground">Runtutan Belajar</p>
              <div>
                <h2 className="text-xl font-bold text-foreground">Streak</h2>
                <p className="text-sm text-muted-foreground">
                  Bukan cuma angka, streak bantu Anda membangun kebiasaan belajar yang konsisten.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 rounded-full bg-orange-500/10 px-4 py-2 text-sm font-medium text-orange-600">
              <Flame className="h-4 w-4" />
              Streak Terlama {longestStreak}
            </div>
          </div>

          <div className="flex items-end gap-2">
            <span className="text-4xl font-bold text-foreground">{currentStreak}</span>
            <Flame className="mb-1 h-5 w-5 text-orange-500" />
          </div>

          <div className="grid grid-cols-7 gap-2 rounded-2xl bg-muted/50 p-3 sm:gap-3 sm:p-4">
            {weekDays.map((day) => {
              const isActive = activeDates.has(day.date.toDateString());
              const isToday = day.date.toDateString() === today;
              return (
                <div key={day.key} className="flex flex-col items-center gap-2 text-center">
                  <div className={`flex h-11 w-11 items-center justify-center rounded-full border ${isActive ? "border-orange-500/40 bg-orange-500/10 text-orange-500" : isToday ? "border-primary/40 bg-primary/5 text-primary" : "border-border bg-background text-muted-foreground"}`}>
                    <Flame className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-medium capitalize text-muted-foreground">{day.label}</span>
                </div>
              );
            })}
          </div>

          <div className="flex flex-col gap-4 border-t border-border/70 pt-5 sm:flex-row sm:items-end sm:justify-between">
            <div className="space-y-2">
              <h3 className="text-base font-semibold text-foreground">Check-in Harian</h3>
              <p className="max-w-2xl text-sm text-muted-foreground">
                Check-in rutin membantu menciptakan ritme belajar yang teratur sehingga Anda lebih konsisten.
              </p>
            </div>
            <Button onClick={() => setOpen(true)}>Mulai check-in</Button>
          </div>
        </div>
      </section>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <div className="mx-auto mb-2 flex h-16 w-16 items-center justify-center rounded-full bg-orange-500/10">
              <Flame className="h-8 w-8 text-orange-500" />
            </div>
            <DialogTitle className="text-center text-2xl">Check-in Hari Ini</DialogTitle>
            <DialogDescription className="text-center">
              Konfirmasi check-in untuk menambah streak belajar Anda dan dapatkan bonus XP.
            </DialogDescription>
          </DialogHeader>
          <div className="my-4 rounded-2xl border border-orange-500/20 bg-orange-500/5 p-4 text-center">
            <p className="text-3xl font-extrabold text-orange-600">{currentStreak} → {currentStreak + 1}</p>
            <p className="mt-1 text-xs font-medium text-muted-foreground">Hari berturut-turut</p>
          </div>
          <DialogFooter className="gap-2 sm:gap-0">
            <Button variant="outline" onClick={() => setOpen(false)} className="flex-1">Nanti dulu</Button>
            <Button onClick={handleConfirmCheckIn} disabled={submitting} className="flex-1">
              {submitting ? "Memproses..." : "Ya, check-in!"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default StreakSection;
