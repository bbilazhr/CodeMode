import { Heart, Flame, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface GameHeaderProps {
  hearts: number;
  streak: number;
  xp: number;
  maxXp?: number;
}

const GameHeader = ({ hearts, streak, xp, maxXp = 1000 }: GameHeaderProps) => {
  const xpPercent = Math.min((xp / maxXp) * 100, 100);

  return (
    <div className="flex items-center gap-6 px-4 py-3 rounded-xl bg-card/80 backdrop-blur-md border border-white/10 shadow-lg">
      {/* Hearts */}
      <div className="flex items-center gap-1.5">
        <AnimatePresence>
          {Array.from({ length: 5 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ scale: 1 }}
              animate={{ scale: i < hearts ? 1 : 0.8, opacity: i < hearts ? 1 : 0.3 }}
              transition={{ type: "spring", stiffness: 500 }}
            >
              <Heart
                className={`h-5 w-5 ${i < hearts ? "text-red-500 fill-red-500" : "text-muted-foreground"}`}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Streak */}
      <div className="flex items-center gap-1.5">
        <Flame className={`h-5 w-5 ${streak > 0 ? "text-orange-500" : "text-muted-foreground"}`} />
        <span className="text-sm font-semibold text-foreground">{streak}</span>
      </div>

      {/* XP Bar */}
      <div className="flex-1 flex items-center gap-2">
        <Zap className="h-4 w-4 text-primary" />
        <div className="flex-1 h-2.5 rounded-full bg-muted overflow-hidden">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-primary to-primary/70"
            initial={{ width: 0 }}
            animate={{ width: `${xpPercent}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
        <span className="text-xs font-mono text-muted-foreground">{xp} Poin XP</span>
      </div>
    </div>
  );
};

export default GameHeader;
