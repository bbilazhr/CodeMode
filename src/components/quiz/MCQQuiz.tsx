import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";

interface MCQQuizProps {
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  onAnswer: (isCorrect: boolean, userAnswer?: string) => void;
}

const MCQQuiz = ({ question, options, correctAnswer, explanation, onAnswer }: MCQQuizProps) => {
  const shuffledOptions = useMemo(() => {
    return [...options].sort(() => Math.random() - 0.5);
  }, [question]);

  const [selected, setSelected] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const isCorrect = selected === correctAnswer;

  const handleSelect = (opt: string) => {
    if (submitted) return;
    setSelected(opt);
    setSubmitted(true);
    onAnswer(opt === correctAnswer, opt);
  };

  return (
    <div className="space-y-4">
      <p className="font-medium text-foreground text-lg">{question}</p>
      <div className="grid gap-3">
        {shuffledOptions.map((opt, i) => {
          const isThis = selected === opt;
          let style = "border-border bg-card hover:border-primary/40";
          if (submitted) {
            if (isCorrect && isThis) style = "border-green-500 bg-green-500/10"; // correct answer
            else if (isThis && !isCorrect) style = "border-red-500 bg-red-500/10"; // wrong choice
            else style = "border-border bg-card opacity-50"; // other options — no green reveal
          }

          return (
            <motion.button
              key={i}
              whileTap={!submitted ? { scale: 0.98 } : undefined}
              animate={submitted && isThis && !isCorrect ? { x: [0, -8, 8, -4, 4, 0] } : undefined}
              transition={{ duration: 0.4 }}
              onClick={() => handleSelect(opt)}
              disabled={submitted}
              className={`w-full text-left p-4 rounded-xl border transition-all ${style}`}
            >
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center text-sm font-mono font-bold text-muted-foreground">
                  {String.fromCharCode(65 + i)}
                </span>
                <span className="text-sm font-medium text-foreground flex-1">{opt}</span>
                {submitted && isCorrect && isThis && <CheckCircle2 className="h-5 w-5 text-green-500" />}
                {submitted && isThis && !isCorrect && <XCircle className="h-5 w-5 text-red-500" />}
              </div>
            </motion.button>
          );
        })}
      </div>

      {submitted && isCorrect && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 rounded-xl border border-green-500/30 bg-green-500/5"
        >
          <p className="text-sm font-medium mb-1">✨ Mantap!</p>
          <p className="text-xs text-muted-foreground">{explanation}</p>
        </motion.div>
      )}

      {submitted && !isCorrect && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 rounded-xl border border-red-500/30 bg-red-500/5"
        >
          <p className="text-sm font-medium mb-1">❌ Belum tepat!</p>
          <p className="text-xs text-muted-foreground">Gunakan Tutor AI untuk petunjuk, atau coba lagi.</p>
        </motion.div>
      )}
    </div>
  );
};

export default MCQQuiz;
