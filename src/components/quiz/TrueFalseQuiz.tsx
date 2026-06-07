import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, XCircle, Check, X } from "lucide-react";

interface TrueFalseQuizProps {
  question: string;
  correctAnswer: boolean | string;
  explanation: string;
  onAnswer: (isCorrect: boolean, userAnswer?: string) => void;
}

const normalize = (v: boolean | string) => {
  if (typeof v === "boolean") return v;
  return String(v).toLowerCase() === "true" || String(v).toLowerCase() === "benar";
};

const TrueFalseQuiz = ({ question, correctAnswer, explanation, onAnswer }: TrueFalseQuizProps) => {
  const [selected, setSelected] = useState<boolean | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const correctBool = normalize(correctAnswer);
  const isCorrect = selected === correctBool;

  const handleSelect = (val: boolean) => {
    if (submitted) return;
    setSelected(val);
    setSubmitted(true);
    onAnswer(val === correctBool, val ? "Benar" : "Salah");
  };

  const options: { val: boolean; label: string; Icon: typeof Check }[] = [
    { val: true, label: "Benar", Icon: Check },
    { val: false, label: "Salah", Icon: X },
  ];

  return (
    <div className="space-y-4">
      <p className="font-medium text-foreground text-lg">{question}</p>
      <div className="grid grid-cols-2 gap-3">
        {options.map((o) => {
          const isThis = selected === o.val;
          const isRight = o.val === correctBool;
          let style = "border-border bg-card hover:border-primary/40";
          if (submitted) {
            if (isRight) style = "border-green-500 bg-green-500/10";
            else if (isThis) style = "border-red-500 bg-red-500/10";
            else style = "border-border bg-card opacity-50";
          }
          return (
            <motion.button
              key={o.label}
              whileTap={!submitted ? { scale: 0.97 } : undefined}
              animate={submitted && isThis && !isCorrect ? { x: [0, -8, 8, -4, 4, 0] } : undefined}
              onClick={() => handleSelect(o.val)}
              disabled={submitted}
              className={`flex flex-col items-center justify-center gap-2 p-6 rounded-xl border transition-all ${style}`}
            >
              <o.Icon className={`h-8 w-8 ${o.val ? "text-green-600" : "text-red-500"}`} />
              <span className="text-base font-bold text-foreground">{o.label}</span>
              {submitted && isRight && <CheckCircle2 className="h-4 w-4 text-green-500" />}
              {submitted && isThis && !isCorrect && <XCircle className="h-4 w-4 text-red-500" />}
            </motion.button>
          );
        })}
      </div>

      {submitted && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`p-4 rounded-xl border ${isCorrect ? "border-green-500/30 bg-green-500/5" : "border-red-500/30 bg-red-500/5"}`}
        >
          <p className="text-sm font-medium mb-1">{isCorrect ? "✨ Mantap!" : "❌ Belum tepat!"}</p>
          <p className="text-xs text-muted-foreground">{explanation}</p>
        </motion.div>
      )}
    </div>
  );
};

export default TrueFalseQuiz;
