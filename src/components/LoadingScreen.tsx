import logo from "@/assets/logo_codemode.png";
import { motion } from "framer-motion";

const LoadingScreen = () => (
  <div className="min-h-screen w-full bg-background flex items-center justify-center">
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col items-center gap-3"
    >
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        className="relative"
      >
        <motion.div
          className="absolute inset-0 rounded-2xl bg-primary/30 blur-2xl"
          animate={{ opacity: [0.4, 0.8, 0.4], scale: [0.9, 1.1, 0.9] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        />
        <img src={logo} alt="CodeMode" className="relative h-20 w-auto drop-shadow-xl" />
      </motion.div>
      <span className="font-heading font-bold text-lg text-foreground tracking-tight">
        CodeMode
      </span>
      <div className="mt-2 h-1 w-32 overflow-hidden rounded-full bg-muted">
        <motion.div
          className="h-full w-1/3 rounded-full bg-primary"
          animate={{ x: ["-100%", "300%"] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </motion.div>
  </div>
);

export default LoadingScreen;
