import { motion, AnimatePresence } from "framer-motion";
import { AlertTriangle } from "lucide-react";

interface WrongAnswerPopupProps {
  show: boolean;
}

/**
 * Custom "SALAH" popup — intentionally distinct from the reference image.
 * Centered top pill with warning icon and subtle shake.
 */
const WrongAnswerPopup = ({ show }: WrongAnswerPopupProps) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, scale: 0.7, y: 20 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
            x: [0, -6, 6, -4, 4, 0],
          }}
          exit={{ opacity: 0, scale: 0.6, y: -10 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
          className="pointer-events-none absolute inset-x-0 -top-6 z-30 flex justify-center"
        >
          <div className="relative">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.4, 1] }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 -m-3 rounded-full bg-red-500/20 blur-xl"
            />
            <div className="relative flex items-center gap-2 rounded-2xl border border-red-400/40 bg-gradient-to-r from-red-500/90 to-rose-600/90 px-5 py-2 backdrop-blur-md shadow-[0_10px_30px_hsl(0_85%_55%/0.45)]">
              <AlertTriangle className="h-4 w-4 text-white" />
              <span className="text-sm font-extrabold uppercase tracking-widest text-white">
                Coba Lagi
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WrongAnswerPopup;
