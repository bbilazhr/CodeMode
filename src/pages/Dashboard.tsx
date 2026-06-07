  import { useEffect } from "react";
  import { useNavigate, useSearchParams } from "react-router-dom";
  import { useAuth } from "@/contexts/AuthContext";
  import { useQuery } from "@tanstack/react-query";
  import { supabase } from "@/integrations/supabase/client";
  import Navbar from "@/components/Navbar";
  import BottomNav from "@/components/BottomNav";
  import GameHeader from "@/components/course/GameHeader";
  import RadarSkillChart from "@/components/course/RadarSkillChart";
  import CourseCard from "@/components/CourseCard";
  import StreakSection from "@/components/dashboard/StreakSection";
  import DashboardHero from "@/components/dashboard/DashboardHero";
  import { Badge } from "@/components/ui/badge";
  import { Button } from "@/components/ui/button";
  import { Medal } from "lucide-react";
  import { motion } from "framer-motion";
  import LoadingScreen from "@/components/LoadingScreen";

  const Dashboard = () => {
    const { user, loading: authLoading } = useAuth();
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const activeTab = searchParams.get("tab") || "home";

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

    useEffect(() => {
      if (profile && !profile.onboarding_completed) navigate("/onboarding");
    }, [profile, navigate]);

    const { data: analytics } = useQuery({
      queryKey: ["user_analytics", user?.id],
      queryFn: async () => {
        if (!user) return null;
        const { data } = await supabase.from("user_analytics").select("*").eq("user_id", user.id).maybeSingle();
        return data;
      },
      enabled: !!user,
    });

    const { data: hearts } = useQuery({
      queryKey: ["user_hearts", user?.id],
      queryFn: async () => {
        if (!user) return null;
        let { data } = await supabase.from("user_hearts").select("*").eq("user_id", user.id).maybeSingle();
        if (!data) {
          const { data: newData } = await supabase.from("user_hearts").insert({ user_id: user.id, hearts: 5 }).select().single();
          data = newData;
        }
        return data;
      },
      enabled: !!user,
    });

    const { data: streaks } = useQuery({
      queryKey: ["user_streaks", user?.id],
      queryFn: async () => {
        if (!user) return null;
        let { data } = await supabase.from("user_streaks").select("*").eq("user_id", user.id).maybeSingle();
        if (!data) {
          const { data: newData } = await supabase.from("user_streaks").insert({ user_id: user.id, current_streak: 0, longest_streak: 0 }).select().single();
          data = newData;
        }
        // Auto-reset streak if last activity was more than 1 day ago
        if (data && data.last_activity_date && data.current_streak > 0) {
          const today = new Date().toISOString().slice(0, 10);
          const yesterday = new Date();
          yesterday.setDate(yesterday.getDate() - 1);
          const yIso = yesterday.toISOString().slice(0, 10);
          const lastActive = data.last_activity_date;
          if (lastActive !== today && lastActive !== yIso) {
            // More than 1 day gap → streak broken, reset to 0
            await supabase.from("user_streaks").update({ current_streak: 0 }).eq("user_id", user.id);
            data = { ...data, current_streak: 0 };
          }
        }
        return data;
      },
      enabled: !!user,
    });

    const { data: allCourses } = useQuery({
      queryKey: ["all_courses"],
      queryFn: async () => {
        const { data } = await supabase.from("courses").select("*").eq("is_published", true);
        return data || [];
      },
      enabled: !!user,
    });

    const { data: myEnrollments } = useQuery({
      queryKey: ["my_enrollments", user?.id],
      queryFn: async () => {
        if (!user) return [];
        const { data } = await supabase.from("enrollments").select("course_id").eq("user_id", user.id);
        return data || []; 
      },
      enabled: !!user,
    });

    const { data: leaderboard } = useQuery({
      queryKey: ["leaderboard"],
      queryFn: async () => {
        const { data: analyticsData } = await supabase.from("user_analytics").select("user_id, total_xp").order("total_xp", { ascending: false }).limit(10);
        if (!analyticsData?.length) return [];
        const userIds = analyticsData.map((a) => a.user_id);
        const { data: profiles } = await supabase.from("profiles").select("user_id, display_name, avatar_url, role").in("user_id", userIds);
        const { data: streaksData } = await supabase.from("user_streaks").select("user_id, current_streak").in("user_id", userIds);
        return analyticsData.map((a) => {
          const p = profiles?.find((p) => p.user_id === a.user_id);
          const s = streaksData?.find((s) => s.user_id === a.user_id);
          return { user_id: a.user_id, name: p?.display_name || "Anonymous", avatar: p?.avatar_url, role: p?.role || "Explorer", xp: a.total_xp, streak: s?.current_streak || 0 };
        });
      },
      enabled: !!user,
    });

    if (authLoading) return <LoadingScreen />;

    const handleCheckIn = () => {
      document.getElementById("all-courses")?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
      <div className="min-h-screen bg-muted/30 pb-24">
        {/* BERHASIL KITA PERBAIKI: Navbar dibungkus dalam container agar sejajar dengan konten di bawahnya */}
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Navbar />
        </div>
        
        {/* Container Hero Section */}
        {activeTab === "home" && (
          <div className="container mx-auto max-w-7xl pt-24 pb-2 px-4 sm:px-6 lg:px-8">
            <DashboardHero
              displayName={profile?.display_name || "Coder"}
              currentStreak={streaks?.current_streak || 0}
              longestStreak={streaks?.longest_streak || 0}
              totalXp={analytics?.total_xp || 0}
              onPrimaryAction={handleCheckIn}
            />
          </div>
        )}

        {/* Container Konten Utama Dashboard */}
        <div className={`container mx-auto max-w-7xl py-6 space-y-8 px-4 sm:px-6 lg:px-8 ${activeTab === "leaderboard" ? "pt-24" : ""}`}>

          {activeTab === "home" && (
            <div className="space-y-8">
              <StreakSection
                currentStreak={streaks?.current_streak || 0}
                longestStreak={streaks?.longest_streak || 0}
                lastActivityDate={streaks?.last_activity_date}
                onCheckIn={handleCheckIn}
              />

              {/* My Courses Section */}
              <section>
                <div className="flex items-end justify-between mb-3">
                  <div>
                    <h2 className="font-heading font-bold text-2xl text-foreground">🎯 Kursus Saya</h2>
                    <p className="text-sm text-muted-foreground">Lanjutkan dari progres terakhir Anda</p>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {myEnrollments?.length || 0} terdaftar
                  </Badge>
                </div>
                
                {allCourses && myEnrollments && myEnrollments.length > 0 ? (
                  <div className="grid sm:grid-cols-2 gap-4">
                    {allCourses
                      .filter((c: any) => 
                        myEnrollments.some((e: any) => (typeof e === 'object' ? e.course_id === c.id : e === c.id))
                      )
                      .map((c: any) => (
                        <CourseCard key={c.id} id={c.id} title={c.title || "Kursus"} description={c.description || ""} level={c.level || "Beginner"} duration={c.duration || ""} students="" icon={c.icon || "📖"} color={c.color || "#3572A5"} />
                      ))}
                  </div>
                ) : (
                  <div className="p-6 rounded-xl bg-muted/30 border border-border/50 text-center">
                    <p className="text-sm text-muted-foreground">Anda belum mendaftar kursus apa pun. Pilih salah satu di bawah untuk mulai! 🚀</p>
                  </div>
                )}
              </section>

              {/* All Courses Section */}
              <section id="all-courses">
                <div className="mb-3">
                  <h2 className="font-heading font-bold text-2xl text-foreground">📚 Semua Kursus</h2>
                  <p className="text-sm text-muted-foreground">Jelajahi seluruh katalog</p>
                </div>
                {allCourses && allCourses.length > 0 && (
                  <div className="grid sm:grid-cols-2 gap-4">
                    {allCourses.map((c: any) => (
                      <CourseCard key={c.id} id={c.id} title={c.title || "Kursus"} description={c.description || ""} level={c.level || "Beginner"} duration={c.duration || ""} students="" icon={c.icon || "📖"} color={c.color || "#3572A5"} />
                    ))}
                  </div>
                )}
              </section>

              {/* Radar Chart */}
              <RadarSkillChart analytics={analytics || null} />
            </div>
          )}

          {activeTab === "leaderboard" && (
            <div className="max-w-3xl mx-auto space-y-3">
              {(leaderboard || []).map((entry, i) => {
                const isMe = entry.user_id === user?.id;
                const rank = i + 1;
                const initial = (entry.name || "?").charAt(0).toUpperCase();
                const medalColors = ["text-amber-500", "text-slate-400", "text-orange-600"];
                return (
                  <motion.div
                    key={entry.user_id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                    className={`flex items-center gap-4 px-5 py-3.5 rounded-2xl border bg-card transition-all hover:shadow-md ${isMe ? "border-primary/40 ring-2 ring-primary/20" : "border-border/70"}`}
                  >
                    <div className="w-10 flex justify-center">
                      {rank <= 3 ? (
                        <Medal className={`h-6 w-6 ${medalColors[rank - 1]}`} />
                      ) : (
                        <span className="text-sm font-bold text-muted-foreground">#{rank}</span>
                      )}
                    </div>
                    <div className={`flex h-11 w-11 items-center justify-center rounded-full font-bold text-sm ${rank === 1 ? "bg-gradient-to-br from-amber-400 to-amber-600 text-white" : "bg-muted text-foreground"}`}>
                      {initial}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-bold text-foreground truncate">
                        {entry.name} {isMe && <span className="text-primary">(Anda)</span>}
                      </p>
                      <p className="text-xs text-muted-foreground truncate">@{(entry.name || "user").toLowerCase().replace(/\s+/g, "")}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-base font-extrabold text-primary">{entry.xp.toLocaleString("id-ID")} <span className="text-[10px] font-bold text-muted-foreground">XP</span></p>
                    </div>
                  </motion.div>
                );
              })}
              {(!leaderboard || leaderboard.length === 0) && (
                <p className="text-sm text-muted-foreground text-center py-8">Selesaikan quiz untuk tampil di papan peringkat!</p>
              )}
            </div>
          )}
        </div>
        <BottomNav />
      </div>
    );
  };

  export default Dashboard;