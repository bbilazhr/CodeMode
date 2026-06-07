import { Home, Trophy, User } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const tabs = [
  { icon: Home, label: "Beranda", path: "/dashboard" },
  { icon: Trophy, label: "Peringkat", path: "/dashboard?tab=leaderboard" },
  { icon: User, label: "Profil", path: "/profile" },
];

const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav className="fixed bottom-4 left-1/2 z-50 w-[min(92vw,24rem)] -translate-x-1/2 safe-area-bottom">
      <div className="flex items-center justify-around h-16 rounded-full border border-border/70 bg-card/95 px-2 shadow-[0_12px_30px_hsl(var(--foreground)/0.08)] backdrop-blur-xl">
        {tabs.map((tab) => {
          const isActive =
            tab.path === "/dashboard"
              ? location.pathname === "/dashboard" && !location.search.includes("tab=leaderboard")
              : tab.path === "/dashboard?tab=leaderboard"
              ? location.search.includes("tab=leaderboard")
              : location.pathname === tab.path;

          return (
            <button
              key={tab.label}
              onClick={() => navigate(tab.path)}
              className={`flex min-w-[4.5rem] flex-col items-center gap-1 rounded-full px-4 py-2 transition-colors ${
                isActive ? "bg-primary/10 text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <tab.icon className="h-5 w-5" />
              <span className="text-[10px] font-medium">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
