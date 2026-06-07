import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import BottomNav from "@/components/BottomNav";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft, Trophy, Flame, Heart, BookOpen, BarChart3,
  CheckCircle2, Crown, Sparkles, Target, Medal, UserPlus,
  Users, Check, X
} from "lucide-react";

const FriendProfile = () => {
  const { userId } = useParams<{ userId: string }>();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { toast } = useToast();

  /* ── Target user's profile ── */
  const { data: profile, isLoading } = useQuery({
    queryKey: ["friend_profile", userId],
    queryFn: async () => {
      const { data } = await supabase
        .from("profiles")
        .select("*")
        .eq("user_id", userId!)
        .maybeSingle();
      return data;
    },
    enabled: !!userId,
  });

  const { data: analytics } = useQuery({
    queryKey: ["friend_analytics", userId],
    queryFn: async () => {
      const { data } = await supabase
        .from("user_analytics")
        .select("*")
        .eq("user_id", userId!)
        .maybeSingle();
      return data;
    },
    enabled: !!userId,
  });

  const { data: streaks } = useQuery({
    queryKey: ["friend_streaks", userId],
    queryFn: async () => {
      const { data } = await supabase
        .from("user_streaks")
        .select("*")
        .eq("user_id", userId!)
        .maybeSingle();
      return data;
    },
    enabled: !!userId,
  });

  const { data: hearts } = useQuery({
    queryKey: ["friend_hearts", userId],
    queryFn: async () => {
      const { data } = await supabase
        .from("user_hearts")
        .select("*")
        .eq("user_id", userId!)
        .maybeSingle();
      return data;
    },
    enabled: !!userId,
  });

  const { data: enrollments } = useQuery({
    queryKey: ["friend_enrollments", userId],
    queryFn: async () => {
      const { data } = await supabase
        .from("enrollments")
        .select("course_id")
        .eq("user_id", userId!);
      return data || [];
    },
    enabled: !!userId,
  });

  const { data: lessonProgress } = useQuery({
    queryKey: ["friend_lesson_progress", userId],
    queryFn: async () => {
      const { data } = await supabase
        .from("lesson_progress")
        .select("id, completed")
        .eq("user_id", userId!);
      return data || [];
    },
    enabled: !!userId,
  });

  const { data: quizAttempts } = useQuery({
    queryKey: ["friend_quiz_attempts", userId],
    queryFn: async () => {
      const { data } = await supabase
        .from("quiz_attempts")
        .select("is_correct")
        .eq("user_id", userId!);
      return data || [];
    },
    enabled: !!userId,
  });

  /* ── Friendship status with current user ── */
  const { data: friendship, refetch: refetchFriendship } = useQuery({
    queryKey: ["friendship_status", user?.id, userId],
    queryFn: async () => {
      if (!user || !userId) return null;
      const { data } = await supabase
        .from("friendships")
        .select("*")
        .or(
          `and(requester_id.eq.${user.id},addressee_id.eq.${userId}),and(requester_id.eq.${userId},addressee_id.eq.${user.id})`
        )
        .maybeSingle();
      return data;
    },
    enabled: !!user && !!userId,
  });

  const sendFriendRequest = async () => {
    if (!user || !userId) return;
    const { error } = await supabase.from("friendships").insert({
      requester_id: user.id,
      addressee_id: userId,
      status: "pending",
    });
    if (error) {
      toast({ title: "Gagal mengirim", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Permintaan pertemanan terkirim! 🤝" });
      refetchFriendship();
    }
  };

  const respondRequest = async (accept: boolean) => {
    if (!friendship) return;
    if (accept) {
      await supabase.from("friendships").update({ status: "accepted" }).eq("id", friendship.id);
      toast({ title: "Teman ditambahkan! 🎉" });
    } else {
      await supabase.from("friendships").delete().eq("id", friendship.id);
      toast({ title: "Permintaan ditolak" });
    }
    refetchFriendship();
  };

  const removeFriend = async () => {
    if (!friendship) return;
    await supabase.from("friendships").delete().eq("id", friendship.id);
    toast({ title: "Teman dihapus" });
    refetchFriendship();
  };

  /* ── Derived stats ── */
  const totalXp = analytics?.total_xp || 0;
  const level = Math.max(1, Math.floor(totalXp / 1000) + 1);
  const totalQuizzes = quizAttempts?.length || 0;
  const correctQuizzes = quizAttempts?.filter((q) => q.is_correct).length || 0;
  const avgScore = totalQuizzes > 0 ? Math.round((correctQuizzes / totalQuizzes) * 100) : 0;
  const completedLessons = lessonProgress?.filter((l) => l.completed).length || 0;
  const enrolledCount = enrollments?.length || 0;

  const skills = [
    { name: "Logika", value: Number(analytics?.logic_score || 0), color: "bg-blue-500" },
    { name: "Visual / UI", value: Number(analytics?.visual_score || 0), color: "bg-violet-500" },
    { name: "Markup", value: Number(analytics?.markup_score || 0), color: "bg-emerald-500" },
    { name: "Database", value: Number(analytics?.database_score || 0), color: "bg-amber-500" },
    { name: "Keamanan", value: Number(analytics?.security_score || 0), color: "bg-rose-500" },
  ];
  const maxSkill = Math.max(...skills.map((s) => s.value), 1);

  const achievements = [
    { id: "first", icon: Sparkles, title: "Langkah Pertama", desc: "Selesaikan kuis pertama", done: totalQuizzes >= 1, color: "from-blue-500 to-cyan-500" },
    { id: "streak3", icon: Flame, title: "Konsisten", desc: "Streak 3 hari berturut-turut", done: (streaks?.current_streak || 0) >= 3, color: "from-orange-500 to-red-500" },
    { id: "lessons5", icon: BookOpen, title: "Pembelajar Aktif", desc: "Selesaikan 5 pelajaran", done: completedLessons >= 5, color: "from-emerald-500 to-teal-500" },
    { id: "perfect", icon: Crown, title: "Raja Kuis", desc: "Capai akurasi 80%+", done: avgScore >= 80 && totalQuizzes >= 5, color: "from-amber-500 to-yellow-500" },
    { id: "xp1k", icon: Trophy, title: "Pengumpul XP", desc: "Kumpulkan 1.000 XP", done: totalXp >= 1000, color: "from-violet-500 to-purple-500" },
    { id: "enroll3", icon: Target, title: "Penjelajah", desc: "Daftar di 3 kursus", done: enrolledCount >= 3, color: "from-pink-500 to-rose-500" },
  ];

  const username = (profile as any)?.username || profile?.display_name?.toLowerCase().replace(/\s+/g, "") || "user";
  const isOwnProfile = user?.id === userId;

  /* ── Friendship button ── */
  const renderFriendBtn = () => {
    if (isOwnProfile) return null;
    if (!friendship) {
      return (
        <Button size="sm" className="gap-1.5" onClick={sendFriendRequest}>
          <UserPlus className="h-4 w-4" /> Tambah Teman
        </Button>
      );
    }
    if (friendship.status === "accepted") {
      return (
        <Button size="sm" variant="outline" className="gap-1.5 text-rose-600 border-rose-200 hover:bg-rose-50" onClick={removeFriend}>
          <Users className="h-4 w-4" /> Hapus Teman
        </Button>
      );
    }
    if (friendship.status === "pending" && friendship.requester_id === user?.id) {
      return (
        <Button size="sm" variant="outline" className="gap-1.5 text-muted-foreground" disabled>
          Menunggu konfirmasi…
        </Button>
      );
    }
    // pending and current user is the addressee → show accept/decline
    return (
      <div className="flex gap-2">
        <Button size="sm" className="gap-1.5" onClick={() => respondRequest(true)}>
          <Check className="h-4 w-4" /> Terima
        </Button>
        <Button size="sm" variant="outline" className="gap-1.5" onClick={() => respondRequest(false)}>
          <X className="h-4 w-4" /> Tolak
        </Button>
      </div>
    );
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-2 border-primary border-t-transparent rounded-full" />
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="min-h-screen bg-muted/30">
        <Navbar />
        <div className="container mx-auto pt-24 text-center">
          <p className="text-muted-foreground">Pengguna tidak ditemukan.</p>
          <Button variant="ghost" className="mt-4" onClick={() => navigate(-1)}>
            <ArrowLeft className="h-4 w-4 mr-2" /> Kembali
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-muted/30">
      <Navbar />
      <div className="container mx-auto pt-20 pb-16 max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Back button */}
        <Button variant="ghost" size="sm" className="mb-3 gap-1.5 h-8 text-xs text-muted-foreground" onClick={() => navigate(-1)}>
          <ArrowLeft className="h-3.5 w-3.5" /> Kembali
        </Button>

        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative overflow-hidden rounded-3xl border border-border/70 bg-card p-4 sm:p-6 shadow-[0_20px_50px_hsl(var(--foreground)/0.06)]"
        >
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
          <div className="pointer-events-none absolute -left-10 bottom-0 h-48 w-48 rounded-full bg-amber-400/10 blur-2xl" />

          <div className="relative flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-4 sm:gap-5">
              <div className="relative h-16 w-16 sm:h-20 sm:w-20 lg:h-24 lg:w-24 rounded-full bg-muted flex items-center justify-center overflow-hidden shrink-0">
                {profile?.avatar_url ? (
                  <img src={profile.avatar_url} alt="" className="w-full h-full object-cover" />
                ) : (
                  <span className="text-3xl sm:text-4xl font-extrabold text-primary">
                    {(profile?.display_name || "U").charAt(0).toUpperCase()}
                  </span>
                )}
              </div>

              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-foreground">
                    {profile?.display_name || "Pengguna"}
                  </h1>
                  {friendship?.status === "accepted" && (
                    <Badge className="bg-emerald-500/10 text-emerald-600 border-emerald-200">
                      <Users className="h-3 w-3 mr-1" /> Teman
                    </Badge>
                  )}
                  {(profile as any)?.role && (
                    <Badge className="bg-primary/10 text-primary border-primary/20">
                      {(profile as any).role}
                    </Badge>
                  )}
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">@{username}</p>
                {(profile as any)?.bio && (
                  <p className="text-xs sm:text-sm text-muted-foreground mt-1 max-w-md">{(profile as any).bio}</p>
                )}
                <div className="mt-2 flex items-center gap-1.5 sm:gap-2 flex-wrap">
                  <span className="inline-flex items-center gap-1 sm:gap-1.5 rounded-full bg-amber-500/10 px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-bold text-amber-600">
                    <Trophy className="h-3 sm:h-3.5 w-3 sm:w-3.5" /> {totalXp.toLocaleString("id-ID")} XP
                  </span>
                  <span className="inline-flex items-center gap-1 sm:gap-1.5 rounded-full bg-orange-500/10 px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-bold text-orange-600">
                    <Flame className="h-3 sm:h-3.5 w-3 sm:w-3.5" /> {streaks?.current_streak || 0} hari
                  </span>
                  <span className="inline-flex items-center gap-1 sm:gap-1.5 rounded-full bg-violet-500/10 px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-bold text-violet-600">
                    Level {level}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex gap-2 shrink-0">{renderFriendBtn()}</div>
          </div>
        </motion.div>

        {/* STATS GRID */}
        <div className="mt-4 grid gap-3 grid-cols-2 lg:grid-cols-4">
          {[
            { icon: CheckCircle2, label: "Total Kuis", value: totalQuizzes, color: "bg-blue-500/10 text-blue-600" },
            { icon: BarChart3, label: "Akurasi Rata-rata", value: `${avgScore}%`, color: "bg-emerald-500/10 text-emerald-600" },
            { icon: BookOpen, label: "Pelajaran Selesai", value: completedLessons, color: "bg-amber-500/10 text-amber-600" },
            { icon: Medal, label: "Kursus Terdaftar", value: enrolledCount, color: "bg-violet-500/10 text-violet-600" },
          ].map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="rounded-2xl border border-border/70 bg-card p-3.5 sm:p-4 shadow-sm"
            >
              <div className={`inline-flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-xl ${s.color}`}>
                <s.icon className="h-4 sm:h-4.5 w-4 sm:w-4.5" />
              </div>
              <p className="mt-2 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-muted-foreground">{s.label}</p>
              <p className="mt-0.5 text-xl sm:text-2xl font-extrabold text-foreground">{s.value}</p>
            </motion.div>
          ))}
        </div>

        {/* SKILLS + ACHIEVEMENTS */}
        <div className="mt-4 grid gap-4 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl border border-border/70 bg-card p-4 sm:p-5 shadow-sm"
          >
            <div className="flex items-center gap-2 mb-0.5">
              <BarChart3 className="h-4.5 w-4.5 text-primary" />
              <h2 className="font-heading font-bold text-base sm:text-lg text-foreground">Performa Skill</h2>
            </div>
            <p className="text-[11px] sm:text-xs text-muted-foreground mb-4">Analisis kemampuan berdasarkan kategori</p>
            <div className="space-y-3.5">
              {skills.map((s) => {
                const pct = (s.value / Math.max(maxSkill, 1)) * 100;
                return (
                  <div key={s.name}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs sm:text-sm font-semibold text-foreground">{s.name}</span>
                      <span className="text-xs sm:text-sm font-bold text-muted-foreground">{Math.round(s.value)}</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                      <motion.div
                        className={`h-full rounded-full ${s.color}`}
                        initial={{ width: 0 }}
                        animate={{ width: `${pct}%` }}
                        transition={{ duration: 0.6 }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl border border-border/70 bg-card p-4 sm:p-5 shadow-sm"
          >
            <div className="flex items-center gap-2 mb-4">
              <Trophy className="h-4.5 w-4.5 text-amber-500" />
              <h2 className="font-heading font-bold text-base sm:text-lg text-foreground">Pencapaian</h2>
            </div>
            <div className="space-y-2.5">
              {achievements.map((a) => (
                <div
                  key={a.id}
                  className={`flex items-center gap-2.5 rounded-xl border p-2.5 transition-all ${
                    a.done ? "border-border/70 bg-background" : "border-border/50 bg-muted/30 opacity-60"
                  }`}
                >
                  <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${a.color} text-white shadow-sm`}>
                    <a.icon className="h-4.5 w-4.5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs sm:text-sm font-bold text-foreground truncate">{a.title}</p>
                    <p className="text-[10px] sm:text-xs text-muted-foreground truncate">{a.desc}</p>
                  </div>
                  {a.done && <CheckCircle2 className="h-4.5 w-4.5 text-emerald-500 shrink-0" />}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      <BottomNav />
    </div>
  );
};

export default FriendProfile;
