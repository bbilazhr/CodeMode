import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";

interface CorrectAnswerPopupProps {
  show: boolean;
}

/**
 * Custom "BENAR!" popup — intentionally distinct from the reference design.
 * Uses a centered glassmorphism pill with blue gradient + sparkle burst.
 */
const CorrectAnswerPopup = ({ show }: CorrectAnswerPopupProps) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, scale: 0.7, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: -10 }}
          transition={{ type: "spring", stiffness: 280, damping: 18 }}
          className="pointer-events-none absolute inset-x-0 -top-6 z-30 flex justify-center"
        >
          <div className="relative">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.4, 1] }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 -m-3 rounded-full bg-primary/20 blur-xl"
            />
            <div className="relative flex items-center gap-2 rounded-2xl border border-primary/40 bg-gradient-to-r from-primary/90 to-blue-500/90 px-5 py-2 backdrop-blur-md shadow-[0_10px_30px_hsl(var(--primary)/0.45)]">
              <Sparkles className="h-4 w-4 text-white" />
              <span className="text-sm font-extrabold uppercase tracking-widest text-white">
                Benar!
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CorrectAnswerPopup;
