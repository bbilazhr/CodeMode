import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Editor from "react-simple-code-editor";
// @ts-ignore
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-python";
import "prismjs/themes/prism-tomorrow.css";

interface ShortCodingQuizProps {
  question: string;
  codeSnippet: string;
  correctAnswer: string;
  explanation: string;
  onAnswer: (isCorrect: boolean, userAnswer?: string) => void;
  failCount: number;
  onRequestHint: () => void;
}

const ShortCodingQuiz = ({
  question,
  codeSnippet,
  correctAnswer,
  explanation,
  onAnswer,
  failCount,
  onRequestHint,
}: ShortCodingQuizProps) => {
  const [code, setCode] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const normalize = (s: string) =>
    s.replace(/\s+/g, "").replace(/['"]/g, '"').trim().toLowerCase();

  const handleSubmit = () => {
    const correct = normalize(code) === normalize(correctAnswer);
    setIsCorrect(correct);
    setSubmitted(true);
    onAnswer(correct, code);
  };

  const handleRetry = () => {
    setSubmitted(false);
    setIsCorrect(false);
    setCode("");
  };

  return (
    <div className="space-y-4">
      <p className="font-medium text-foreground text-lg">{question}</p>

      {/* Starter code (read-only display) */}
      {codeSnippet && (
        <div className="rounded-xl bg-[#1d1f21] p-4 font-mono text-sm text-gray-300 overflow-x-auto whitespace-pre-wrap">
          {codeSnippet}
        </div>
      )}

      {/* Code editor */}
      <div className="rounded-xl border border-border overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-2 bg-muted/50 border-b border-border">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-400/60" />
            <span className="w-3 h-3 rounded-full bg-yellow-400/60" />
            <span className="w-3 h-3 rounded-full bg-green-400/60" />
          </div>
          <span className="text-xs text-muted-foreground font-mono">solusi.js</span>
        </div>
        <Editor
          value={code}
          onValueChange={setCode}
          highlight={(code) => highlight(code, languages.js, "javascript")}
          padding={16}
          disabled={submitted}
          placeholder="// Tulis kode Anda di sini..."
          style={{
            fontFamily: '"Fira Code", "JetBrains Mono", monospace',
            fontSize: 14,
            lineHeight: "1.6",
            minHeight: "100px",
            backgroundColor: "hsl(var(--card))",
          }}
          className="focus:outline-none"
        />
      </div>

      {!submitted ? (
        <div className="flex gap-3">
          <Button onClick={handleSubmit} disabled={!code.trim()} className="flex-1">
            Jalankan & Periksa
          </Button>
          {failCount >= 2 && (
            <Button variant="outline" onClick={onRequestHint} className="gap-2">
              🤖 Dapatkan Hint AI
            </Button>
          )}
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isCorrect ? { opacity: 1, y: 0 } : { opacity: 1, y: 0, x: [0, -8, 8, -4, 4, 0] }}
          transition={{ duration: 0.4 }}
          className={`p-4 rounded-xl border ${
            isCorrect ? "border-green-500/30 bg-green-500/5" : "border-red-500/30 bg-red-500/5"
          }`}
        >
          <p className="text-sm font-medium mb-1">
             {isCorrect ? "✨ Mantap!" : "❌ Belum tepat!"}
          </p>
          <p className="text-xs text-muted-foreground">{explanation}</p>
          {!isCorrect && (
            <Button variant="ghost" size="sm" onClick={handleRetry} className="mt-2">
               Coba Lagi
            </Button>
          )}
        </motion.div>
      )}
    </div>
  );
};

export default ShortCodingQuiz;
