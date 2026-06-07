import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BlankSpaceQuizProps {
  question: string;
  codeSnippet: string;
  syntaxChips: string[];
  correctAnswer: string[];
  explanation: string;
  onAnswer: (isCorrect: boolean, userAnswer?: string) => void;
}

const BlankSpaceQuiz = ({ question, codeSnippet, syntaxChips, correctAnswer, explanation, onAnswer }: BlankSpaceQuizProps) => {
  const BLANK_RE = /_{2,}/g;
  const blankCount = (codeSnippet.match(BLANK_RE) || []).length;
  const [filledBlanks, setFilledBlanks] = useState<string[]>(new Array(blankCount).fill(""));
  const [usedChips, setUsedChips] = useState<Set<number>>(new Set());
  const [submitted, setSubmitted] = useState(false);
  const isCorrect = submitted && JSON.stringify(filledBlanks) === JSON.stringify(correctAnswer);

  const handleChipClick = (chip: string, chipIndex: number) => {
    if (submitted) return;
    if (usedChips.has(chipIndex)) return;
    const nextBlankIdx = filledBlanks.findIndex((b) => b === "");
    if (nextBlankIdx === -1) return;
    const nextFilled = [...filledBlanks];
    nextFilled[nextBlankIdx] = chip;
    setFilledBlanks(nextFilled);
    const nextUsed = new Set(usedChips);
    nextUsed.add(chipIndex);
    setUsedChips(nextUsed);
  };

  const handleBlankClick = (blankIdx: number) => {
    if (submitted) return;
    const chip = filledBlanks[blankIdx];
    if (!chip) return;
    const chipIdx = syntaxChips.indexOf(chip);
    const nextFilled = [...filledBlanks];
    nextFilled[blankIdx] = "";
    setFilledBlanks(nextFilled);
    const nextUsed = new Set(usedChips);
    nextUsed.delete(chipIdx);
    setUsedChips(nextUsed);
  };

  const handleSubmit = () => {
    setSubmitted(true);
    onAnswer(JSON.stringify(filledBlanks) === JSON.stringify(correctAnswer), filledBlanks.join(", "));
  };

  // Render code with blanks replaced
  const renderCode = () => {
    const parts = codeSnippet.split(BLANK_RE);
    return (
      <div className="font-mono text-sm leading-relaxed whitespace-pre-wrap">
        {parts.map((part, i) => (
          <span key={i}>
            {part}
            {i < parts.length - 1 && (
              <button
                onClick={() => handleBlankClick(i)}
                className={`inline-flex items-center min-w-[80px] h-7 px-2 mx-0.5 rounded border-2 border-dashed transition-all ${
                  filledBlanks[i]
                    ? submitted
                      ? filledBlanks[i] === correctAnswer[i]
                        ? "border-green-500 bg-green-500/10 text-green-600"
                        : "border-red-500 bg-red-500/10 text-red-600"
                      : "border-primary bg-primary/10 text-primary cursor-pointer"
                    : "border-muted-foreground/30 text-muted-foreground"
                }`}
              >
                {filledBlanks[i] || "____"}
              </button>
            )}
          </span>
        ))}
      </div>
    );
  };

  return (
    <div className="space-y-4">
      <p className="font-medium text-foreground text-lg">{question}</p>

      {/* Code block */}
      <div className="rounded-xl bg-muted/50 border border-border p-5 overflow-x-auto">
        {renderCode()}
      </div>

      {/* Syntax chips */}
      <div className="flex flex-wrap gap-2">
        {syntaxChips.map((chip, i) => (
          <motion.button
            key={i}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleChipClick(chip, i)}
            disabled={usedChips.has(i) || submitted}
            className={`px-3 py-1.5 rounded-lg text-sm font-mono border transition-all ${
              usedChips.has(i)
                ? "opacity-30 border-border"
                : "border-primary/30 bg-primary/5 text-primary hover:bg-primary/10 cursor-pointer"
            }`}
          >
            {chip}
          </motion.button>
        ))}
      </div>

      {!submitted && (
        <Button
          onClick={handleSubmit}
          disabled={filledBlanks.some((b) => b === "")}
          className="w-full"
          >
           Periksa Jawaban
        </Button>
      )}

      {submitted && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`p-4 rounded-xl border ${
            isCorrect ? "border-green-500/30 bg-green-500/5" : "border-red-500/30 bg-red-500/5"
          }`}
        >
          <p className="text-sm font-medium mb-1">
             {isCorrect ? "✨ Mantap!" : "❌ Belum tepat!"}
           </p>
          <p className="text-xs text-muted-foreground">{explanation}</p>
        </motion.div>
      )}
    </div>
  );
};

export default BlankSpaceQuiz;
