import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import BottomNav from "@/components/BottomNav";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  User, Flame, Heart, ArrowLeft, Save, Trophy, BookOpen,
  Target, Crown, Medal, Sparkles, Zap, CheckCircle2, BarChart3,
  Share2, Pencil, UserPlus, Users, Check, X, Search
} from "lucide-react";
import { motion } from "framer-motion";
import LoadingScreen from "@/components/LoadingScreen";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogDescription
} from "@/components/ui/dialog";

const Profile = () => {
  const { user, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const qc = useQueryClient();
  const [displayName, setDisplayName] = useState("");
  const [usernameInput, setUsernameInput] = useState("");
  const [bio, setBio] = useState("");
  const [saving, setSaving] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [friendsOpen, setFriendsOpen] = useState(false);
  const [friendSearch, setFriendSearch] = useState("");

  useEffect(() => {
    if (!authLoading && !user) navigate("/auth");
  }, [authLoading, user, navigate]);

  const { data: profile } = useQuery({
    queryKey: ["profile", user?.id],
    queryFn: async () => {
      if (!user) return null;
      const { data } = await supabase.from("profiles").select("*").eq("user_id", user.id).maybeSingle();
      return data;
    },
    enabled: !!user,
  });

  const { data: analytics } = useQuery({
    queryKey: ["user_analytics", user?.id],
    queryFn: async () => {
      if (!user) return null;
      const { data } = await supabase.from("user_analytics").select("*").eq("user_id", user.id).maybeSingle();
      return data;
    },
    enabled: !!user,
  });

  const { data: streaks } = useQuery({
    queryKey: ["user_streaks", user?.id],
    queryFn: async () => {
      if (!user) return null;
      const { data } = await supabase.from("user_streaks").select("*").eq("user_id", user.id).maybeSingle();
      return data;
    },
    enabled: !!user,
  });

  const { data: hearts } = useQuery({
    queryKey: ["user_hearts", user?.id],
    queryFn: async () => {
      if (!user) return null;
      const { data } = await supabase.from("user_hearts").select("*").eq("user_id", user.id).maybeSingle();
      return data;
    },
    enabled: !!user,
  });

  const { data: enrollments } = useQuery({
    queryKey: ["enrollments_count", user?.id],
    queryFn: async () => {
      if (!user) return [];
      const { data } = await supabase.from("enrollments").select("course_id, status").eq("user_id", user.id);
      return data || [];
    },
    enabled: !!user,
  });

  const { data: lessonProgress } = useQuery({
    queryKey: ["lesson_progress_count", user?.id],
    queryFn: async () => {
      if (!user) return [];
      const { data } = await supabase.from("lesson_progress").select("id, completed").eq("user_id", user.id);
      return data || [];
    },
    enabled: !!user,
  });

  const { data: quizAttempts } = useQuery({
    queryKey: ["quiz_attempts_all", user?.id],
    queryFn: async () => {
      if (!user) return [];
      const { data } = await supabase.from("quiz_attempts").select("is_correct").eq("user_id", user.id);
      return data || [];
    },
    enabled: !!user,
  });

  const { data: friendships, refetch: refetchFriendships } = useQuery({
    queryKey: ["friendships", user?.id],
    queryFn: async () => {
      if (!user) return [];
      const { data } = await supabase
        .from("friendships")
        .select("*")
        .or(`requester_id.eq.${user.id},addressee_id.eq.${user.id}`);
      if (!data) return [];
      const ids = Array.from(new Set(data.flatMap((f: any) => [f.requester_id, f.addressee_id]).filter((id: string) => id !== user.id)));
      const { data: profs } = ids.length
        ? await supabase.from("profiles").select("user_id, display_name, avatar_url, username").in("user_id", ids)
        : { data: [] as any[] };
      return data.map((f: any) => {
        const otherId = f.requester_id === user.id ? f.addressee_id : f.requester_id;
        const p = profs?.find((p: any) => p.user_id === otherId);
        return { ...f, otherId, otherName: p?.display_name || p?.username || "Pengguna", otherUsername: p?.username, otherAvatar: p?.avatar_url };
      });
    },
    enabled: !!user,
  });

  const { data: searchResults } = useQuery({
    queryKey: ["friend_search", friendSearch, user?.id],
    queryFn: async () => {
      if (!user || friendSearch.trim().length < 2) return [];
      const q = friendSearch.trim().toLowerCase().replace(/^@/, "");
      const { data } = await supabase
        .from("profiles")
        .select("user_id, display_name, avatar_url, username")
        .ilike("username", `%${q}%`)
        .neq("user_id", user.id)
        .limit(10);
      return data || [];
    },
    enabled: !!user && friendSearch.trim().length >= 2,
  });

  const sendFriendRequest = async (addresseeId: string) => {
    if (!user) return;
    const { error } = await supabase.from("friendships").insert({ requester_id: user.id, addressee_id: addresseeId, status: "pending" });
    if (error) {
      toast({ title: "Tidak dapat mengirim", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Permintaan terkirim! 🤝" });
      refetchFriendships();
    }
  };

  const respondFriendRequest = async (id: string, accept: boolean) => {
    if (accept) {
      await supabase.from("friendships").update({ status: "accepted" }).eq("id", id);
      toast({ title: "Teman ditambahkan! 🎉" });
    } else {
      await supabase.from("friendships").delete().eq("id", id);
      toast({ title: "Permintaan ditolak" });
    }
    refetchFriendships();
  };

  const removeFriend = async (id: string) => {
    await supabase.from("friendships").delete().eq("id", id);
    toast({ title: "Teman dihapus" });
    refetchFriendships();
  };

  useEffect(() => {
    if (profile) {
      setDisplayName(profile.display_name || "");
      setUsernameInput((profile as any).username || "");
      setBio(profile.bio || "");
    }
  }, [profile]);

  const handleSave = async () => {
    if (!user) return;
    const cleanUsername = usernameInput.trim().toLowerCase().replace(/[^a-z0-9_]/g, "");
    if (cleanUsername.length < 3) {
      toast({ title: "Username tidak valid", description: "Min. 3 karakter, hanya huruf/angka/_", variant: "destructive" });
      return;
    }
    setSaving(true);
    try {
      const { error } = await supabase.from("profiles").update({ display_name: displayName, bio, username: cleanUsername }).eq("user_id", user.id);
      if (error) throw error;
      qc.invalidateQueries({ queryKey: ["profile"] });
      toast({ title: "Profil berhasil diperbarui! ✨" });
      setEditOpen(false);
    } catch (e: any) {
      const msg = e.message?.includes("duplicate") || e.code === "23505" ? "Username sudah dipakai" : e.message;
      toast({ title: "Terjadi kesalahan", description: msg, variant: "destructive" });
    } finally {
      setSaving(false);
    }
  };

  if (authLoading) return <LoadingScreen />;

  const totalXp = analytics?.total_xp || 0;
  const level = Math.max(1, Math.floor(totalXp / 1000) + 1);
  const xpInLevel = totalXp % 1000;
  const levelProgress = (xpInLevel / 1000) * 100;

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

  const username = (profile as any)?.username || (profile?.display_name || user?.email?.split("@")[0] || "user").toLowerCase().replace(/\s+/g, "");
  const pendingIncoming = (friendships || []).filter((f: any) => f.status === "pending" && f.addressee_id === user?.id).length;

  return (
    <div className="min-h-screen bg-muted/30">
      <Navbar />
      <div className="container mx-auto pt-20 pb-16 max-w-6xl px-4 sm:px-6 lg:px-8">
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
                    {profile?.display_name || "Profil Anda"}
                  </h1>
                  {profile?.role && (
                    <Badge className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/15">
                      {profile.role}
                    </Badge>
                  )}
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">@{username}</p>
                <div className="mt-2 flex items-center gap-1.5 sm:gap-2 flex-wrap">
                  <span className="inline-flex items-center gap-1 sm:gap-1.5 rounded-full bg-amber-500/10 px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-bold text-amber-600">
                    <Trophy className="h-3 sm:h-3.5 w-3 sm:w-3.5" /> {totalXp.toLocaleString("id-ID")} XP
                  </span>
                  <span className="inline-flex items-center gap-1 sm:gap-1.5 rounded-full bg-orange-500/10 px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-bold text-orange-600">
                    <Flame className="h-3 sm:h-3.5 w-3 sm:w-3.5" /> {streaks?.current_streak || 0} hari
                  </span>
                  <span className="inline-flex items-center gap-1 sm:gap-1.5 rounded-full bg-rose-500/10 px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-bold text-rose-600">
                    <Heart className="h-3 sm:h-3.5 w-3 sm:w-3.5 fill-rose-600" /> {hearts?.hearts ?? 5}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex gap-2 flex-wrap sm:flex-nowrap">
              <Button variant="outline" size="sm" className="h-8 text-xs gap-1 relative flex-1 sm:flex-none" onClick={() => setFriendsOpen(true)}>
                <Users className="h-3.5 w-3.5" /> Teman
                {pendingIncoming > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 min-w-[18px] h-[18px] rounded-full bg-red-500 text-white text-[10px] font-bold flex items-center justify-center px-1 ring-2 ring-background">
                    {pendingIncoming}
                  </span>
                )}
              </Button>
              <Button variant="outline" size="sm" className="h-8 text-xs gap-1 flex-1 sm:flex-none" onClick={() => {
                navigator.clipboard?.writeText(window.location.href);
                toast({ title: "Tautan profil disalin!" });
              }}>
                <Share2 className="h-3.5 w-3.5" /> Bagikan
              </Button>
              <Button size="sm" className="h-8 text-xs gap-1 flex-1 sm:flex-none" onClick={() => setEditOpen(true)}>
                <Pencil className="h-3.5 w-3.5" /> Edit Profil
              </Button>
            </div>
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
              className="rounded-2xl border border-border/70 bg-card p-3.5 sm:p-4 shadow-sm hover:shadow-md transition-shadow"
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
                  className={`flex items-center gap-2.5 rounded-xl border p-2.5 transition-all ${a.done ? "border-border/70 bg-background" : "border-border/50 bg-muted/30 opacity-60"}`}
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

      {/* EDIT DIALOG */}
      <Dialog open={editOpen} onOpenChange={setEditOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Edit Profil</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-2">
            <div className="space-y-2">
              <Label htmlFor="dn">Nama tampilan</Label>
              <Input id="dn" value={displayName} onChange={(e) => setDisplayName(e.target.value)} placeholder="Nama Anda" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="un">Username</Label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">@</span>
                <Input
                  id="un"
                  value={usernameInput}
                  onChange={(e) => setUsernameInput(e.target.value.toLowerCase().replace(/[^a-z0-9_]/g, ""))}
                  placeholder="username_anda"
                  className="pl-7"
                  maxLength={24}
                />
              </div>
              <p className="text-[11px] text-muted-foreground">Min. 3 karakter. Huruf, angka, dan underscore.</p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="bio">Bio</Label>
              <Textarea id="bio" value={bio} onChange={(e) => setBio(e.target.value)} placeholder="Ceritakan tentang diri Anda..." rows={3} />
            </div>
            <div className="space-y-2">
              <Label>Email</Label>
              <Input value={user?.email || ""} disabled className="opacity-60" />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setEditOpen(false)}>Batal</Button>
            <Button onClick={handleSave} disabled={saving} className="gap-2">
              <Save className="h-4 w-4" /> {saving ? "Menyimpan..." : "Simpan"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* FRIENDS DIALOG */}
      <Dialog open={friendsOpen} onOpenChange={setFriendsOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2"><Users className="h-5 w-5 text-primary" /> Teman</DialogTitle>
            <DialogDescription>Cari pengguna berdasarkan username dan kirim permintaan pertemanan.</DialogDescription>
          </DialogHeader>

          <div className="space-y-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                value={friendSearch}
                onChange={(e) => setFriendSearch(e.target.value)}
                placeholder="Cari berdasarkan @username..."
                className="pl-9"
              />
            </div>

            {friendSearch.trim().length >= 2 && (
              <div className="space-y-2 max-h-48 overflow-y-auto">
                <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">Hasil Pencarian</p>
                {(searchResults || []).length === 0 && (
                  <p className="text-xs text-muted-foreground py-2">Tidak ada pengguna ditemukan.</p>
                )}
                {(searchResults || []).map((r: any) => {
                  const existing = friendships?.find((f: any) => f.otherId === r.user_id);
                  return (
                    <div key={r.user_id} className="flex items-center gap-3 rounded-xl border border-border/60 p-2.5">
                      <div className="h-9 w-9 rounded-full bg-muted flex items-center justify-center overflow-hidden text-sm font-bold text-primary">
                        {r.avatar_url ? <img src={r.avatar_url} alt="" className="w-full h-full object-cover" /> : (r.display_name || r.username || "U").charAt(0).toUpperCase()}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold truncate">{r.display_name || r.username}</p>
                        {r.username && <p className="text-[11px] text-muted-foreground truncate">@{r.username}</p>}
                      </div>
                      {existing ? (
                        <span className="text-[11px] font-bold text-muted-foreground">
                          {existing.status === "accepted" ? "Berteman ✓" : "Menunggu"}
                        </span>
                      ) : (
                        <Button size="sm" variant="outline" className="h-7 gap-1" onClick={() => sendFriendRequest(r.user_id)}>
                          <UserPlus className="h-3.5 w-3.5" /> Tambah
                        </Button>
                      )}
                    </div>
                  );
                })}
              </div>
            )}

            {/* Pending requests received */}
            {(friendships || []).filter((f: any) => f.status === "pending" && f.addressee_id === user?.id).length > 0 && (
              <div className="space-y-2">
                <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">Permintaan Masuk</p>
                {(friendships || []).filter((f: any) => f.status === "pending" && f.addressee_id === user?.id).map((f: any) => (
                  <div key={f.id} className="flex items-center gap-3 rounded-xl border border-border/60 p-2.5">
                    <div className="h-9 w-9 rounded-full bg-muted flex items-center justify-center overflow-hidden text-sm font-bold text-primary">
                      {f.otherAvatar ? <img src={f.otherAvatar} alt="" className="w-full h-full object-cover" /> : f.otherName.charAt(0).toUpperCase()}
                    </div>
                    <span className="flex-1 text-sm font-semibold truncate">{f.otherName}</span>
                    <Button size="sm" className="h-7 gap-1" onClick={() => respondFriendRequest(f.id, true)}>
                      <Check className="h-3.5 w-3.5" />
                    </Button>
                    <Button size="sm" variant="outline" className="h-7 gap-1" onClick={() => respondFriendRequest(f.id, false)}>
                      <X className="h-3.5 w-3.5" />
                    </Button>
                  </div>
                ))}
              </div>
            )}

            {/* Friends list */}
            <div className="space-y-2 max-h-56 overflow-y-auto">
              <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                Daftar Teman ({(friendships || []).filter((f: any) => f.status === "accepted").length})
              </p>
              {(friendships || []).filter((f: any) => f.status === "accepted").length === 0 && (
                <p className="text-xs text-muted-foreground py-2">Belum ada teman. Mulai cari di atas! 👆</p>
              )}
              {(friendships || []).filter((f: any) => f.status === "accepted").map((f: any) => (
                <div key={f.id} className="flex items-center gap-3 rounded-xl border border-border/60 p-2.5 hover:bg-muted/50 transition-colors">
                  <button
                    className="flex items-center gap-3 flex-1 min-w-0 text-left"
                    onClick={() => { setFriendsOpen(false); navigate(`/profile/${f.otherId}`); }}
                  >
                    <div className="h-9 w-9 rounded-full bg-muted flex items-center justify-center overflow-hidden text-sm font-bold text-primary shrink-0">
                      {f.otherAvatar ? <img src={f.otherAvatar} alt="" className="w-full h-full object-cover" /> : f.otherName.charAt(0).toUpperCase()}
                    </div>
                    <span className="flex-1 text-sm font-semibold truncate hover:text-primary transition-colors">{f.otherName}</span>
                  </button>
                  <Button size="sm" variant="ghost" className="h-7 text-rose-600 hover:text-rose-700 shrink-0" onClick={() => removeFriend(f.id)}>
                    Hapus
                  </Button>
                </div>
              ))}
            </div>

            {/* Pending sent */}
            {(friendships || []).filter((f: any) => f.status === "pending" && f.requester_id === user?.id).length > 0 && (
              <div className="space-y-2">
                <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">Menunggu Konfirmasi</p>
                {(friendships || []).filter((f: any) => f.status === "pending" && f.requester_id === user?.id).map((f: any) => (
                  <div key={f.id} className="flex items-center gap-3 rounded-xl border border-border/60 p-2.5 opacity-70">
                    <div className="h-9 w-9 rounded-full bg-muted flex items-center justify-center text-sm font-bold text-primary">
                      {f.otherName.charAt(0).toUpperCase()}
                    </div>
                    <span className="flex-1 text-sm font-semibold truncate">{f.otherName}</span>
                    <Button size="sm" variant="ghost" className="h-7 text-muted-foreground" onClick={() => removeFriend(f.id)}>
                      Batal
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
      <BottomNav />
    </div>
  );
};

export default Profile;
