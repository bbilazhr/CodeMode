import { Button } from "@/components/ui/button";
import { LogOut, User, LayoutDashboard, Bell } from "lucide-react";
import logo from "@/assets/logo_codemode.png";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { user, signOut } = useAuth();

  // Pages where we hide the landing nav links (Kursus / Fitur / Dasbor)
  const isAppPage = ["/dashboard", "/profile", "/leaderboard"].some(
    (p) => location.pathname === p || location.pathname.startsWith("/profile/")
  );
  const isDashboard = location.pathname === "/dashboard";
  const isLanding = location.pathname === "/";

  // Pending friend requests for notification badge
  const { data: pendingCount } = useQuery({
    queryKey: ["pending_friends_count", user?.id],
    queryFn: async () => {
      if (!user) return 0;
      const { count } = await supabase
        .from("friendships")
        .select("id", { count: "exact", head: true })
        .eq("addressee_id", user.id)
        .eq("status", "pending");
      return count ?? 0;
    },
    enabled: !!user,
    refetchInterval: 30000, // refresh every 30s
  });

  const hasPending = (pendingCount ?? 0) > 0;

  const isProfilePage = location.pathname.startsWith("/profile");

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 border-b backdrop-blur-lg transition-all ${
        isDashboard ? "bg-background/95 border-border/60" : "bg-background/80 border-border"
      }`}
    >
      <div
        className={`container mx-auto flex items-center justify-between max-w-7xl px-4 sm:px-6 lg:px-8 ${
          isDashboard ? "h-[4.5rem]" : "h-16"
        }`}
      >
        <a href="/" className="flex items-center gap-2 font-heading font-bold text-xl text-foreground">
          <img src={logo} alt="CodeMode" className="h-8" />
        </a>

        {/* Centre nav links — hidden on app pages */}
        <div className="hidden md:flex items-center gap-8">
          {!isAppPage && (
            <>
              <a href="/#courses" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Kursus
              </a>
              <a href="/#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Fitur
              </a>
              {user && (
                <button
                  onClick={() => navigate("/dashboard")}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  Dasbor
                </button>
              )}
            </>
          )}
        </div>

        {/* Right action area */}
        <div className="hidden md:flex items-center gap-2">
          {user ? (
            <>
              {!isDashboard && (
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => navigate("/dashboard")} 
                  className={isProfilePage ? "" : "gap-1.5"}
                  title="Dasbor"
                >
                  <LayoutDashboard className="h-4 w-4" />
                  {!isProfilePage && "Dasbor"}
                </Button>
              )}
              {/* Profile button with notification dot */}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate("/profile")}
                className={`relative ${isProfilePage ? "" : "gap-1.5"}`}
                title="Profil"
              >
                <User className="h-4 w-4" />
                {!isProfilePage && "Profil"}
                {hasPending && (
                  <span className="absolute -top-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-red-500 ring-2 ring-background animate-pulse" />
                )}
              </Button>
              <Button variant="ghost" size="sm" onClick={handleSignOut}>
                <LogOut className="h-4 w-4 mr-1.5" />
                Keluar
              </Button>
            </>
          ) : (
            <>
              <Button variant="ghost" size="sm" onClick={() => navigate("/auth")}>
                Masuk
              </Button>
              <Button size="sm" onClick={() => navigate("/auth")}>
                {isLanding ? "Mulai Gratis" : "Mulai"}
              </Button>
            </>
          )}
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden text-foreground relative" onClick={() => setOpen(!open)}>
          <LayoutDashboard className="h-5 w-5" />
          {hasPending && (
            <span className="absolute -top-1 -right-1 h-2.5 w-2.5 rounded-full bg-red-500 ring-2 ring-background" />
          )}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background p-4 space-y-3">
          {!isAppPage && (
            <>
              <a href="/#courses" className="block text-sm font-medium text-muted-foreground">
                Kursus
              </a>
              <a href="/#features" className="block text-sm font-medium text-muted-foreground">
                Fitur
              </a>
              {user && (
                <button
                  onClick={() => { navigate("/dashboard"); setOpen(false); }}
                  className="block text-sm font-medium text-muted-foreground"
                >
                  Dasbor
                </button>
              )}
            </>
          )}
          <div className="flex gap-2 pt-2">
            {user ? (
              <>
                {!isDashboard && (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="flex-1"
                    onClick={() => { navigate("/dashboard"); setOpen(false); }}
                  >
                    <LayoutDashboard className={`h-4 w-4 ${isProfilePage ? "" : "mr-1.5"}`} />
                    {!isProfilePage && "Dasbor"}
                  </Button>
                )}
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex-1 relative"
                  onClick={() => { navigate("/profile"); setOpen(false); }}
                >
                  <User className={`h-4 w-4 ${isProfilePage ? "" : "mr-1.5"}`} />
                  {!isProfilePage && "Profil"}
                  {hasPending && (
                    <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500" />
                  )}
                </Button>
                <Button variant="ghost" size="sm" className="flex-1" onClick={handleSignOut}>
                  <LogOut className="h-4 w-4 mr-1.5" /> Keluar
                </Button>
              </>
            ) : (
              <>
                <Button variant="ghost" size="sm" className="flex-1" onClick={() => navigate("/auth")}>
                  Masuk
                </Button>
                <Button size="sm" className="flex-1" onClick={() => navigate("/auth")}>
                  {isLanding ? "Mulai Gratis" : "Mulai"}
                </Button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
