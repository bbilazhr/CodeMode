import { useState, useMemo, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MCQQuiz from "./MCQQuiz";
import BlankSpaceQuiz from "./BlankSpaceQuiz";
import ShortCodingQuiz from "./ShortCodingQuiz";
import TrueFalseQuiz from "./TrueFalseQuiz";
import AITutorModal from "./AITutorModal";
import WrongAnswerPopup from "./WrongAnswerPopup";
import CorrectAnswerPopup from "./CorrectAnswerPopup";
import { ChevronRight, Trophy, X, Clock, CheckCircle2, XCircle, Home, RotateCcw, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

interface QuizQuestion {
  id: string;
  question_type: string;
  question_text: string;
  options: string[] | null;
  correct_answer: any;
  code_snippet: string | null;
  syntax_chips: string[] | null;
  explanation: string | null;
  order_index: number;
  skill_category: string;
}

interface Quiz {
  id: string;
  title: string;
  quiz_type: string;
  difficulty: string;
  xp_reward: number;
  quiz_questions: QuizQuestion[];
}

interface QuizContainerProps {
  quiz: Quiz;
  onQuestionAnswered: (questionId: string, skillCategory: string, isCorrect: boolean, xp: number) => void;
  onQuizComplete: () => void;
  onAdvanceLesson?: () => void;
  hasNextLesson?: boolean;
  onExit?: () => void;
  hearts?: number;
}

const MAX_QUESTIONS = 20;
const QUIZ_DURATION_SECONDS = 20 * 60; // 20 minutes

function shuffleAndPick<T extends { id: string }>(arr: T[], count: number): T[] {
  // Dedupe by id to prevent the same question from appearing twice
  const seen = new Set<string>();
  const unique = arr.filter((q) => {
    if (seen.has(q.id)) return false;
    seen.add(q.id);
    return true;
  });
  const shuffled = [...unique].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

function formatTime(seconds: number) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}

const QuizContainer = ({ quiz, onQuestionAnswered, onQuizComplete, onAdvanceLesson, hasNextLesson, onExit, hearts = 5 }: QuizContainerProps) => {
  const allQuestions = [...(quiz.quiz_questions || [])].sort((a, b) => a.order_index - b.order_index);
  const questions = useMemo(() => shuffleAndPick(allQuestions, MAX_QUESTIONS), [quiz.id]);

  const [currentIdx, setCurrentIdx] = useState(0);
  const [answered, setAnswered] = useState<Record<string, boolean>>({});
  const [failCounts, setFailCounts] = useState<Record<string, number>>({});
  const [showAI, setShowAI] = useState(false);
  const [aiMode, setAIMode] = useState<"hint" | "correction">("hint");
  const [lastUserAnswer, setLastUserAnswer] = useState<string>("");
  const [complete, setComplete] = useState(false);
  const [retryKey, setRetryKey] = useState(0);
  const [showWrong, setShowWrong] = useState(false);
  const [showCorrect, setShowCorrect] = useState(false);

  const startTimeRef = useRef<number>(Date.now());
  const [elapsed, setElapsed] = useState(0);
  const [finalDuration, setFinalDuration] = useState(0);

  const remaining = Math.max(0, QUIZ_DURATION_SECONDS - elapsed);

  // Timer tick
  useEffect(() => {
    if (complete) return;
    const id = window.setInterval(() => {
      setElapsed(Math.floor((Date.now() - startTimeRef.current) / 1000));
    }, 1000);
    return () => window.clearInterval(id);
  }, [complete]);

  // Auto-finish when time runs out
  useEffect(() => {
    if (!complete && remaining === 0 && elapsed > 0) {
      setFinalDuration(elapsed);
      setComplete(true);
      onQuizComplete();
    }
  }, [remaining, elapsed, complete, onQuizComplete]);

  const current = questions[currentIdx];
  if (!current && !complete) return null;

  const handleAnswer = (isCorrect: boolean, userAnswer?: string) => {
    const xpPerQ = Math.round(quiz.xp_reward / Math.max(questions.length, 1));
    if (answered[current.id] === undefined) {
      onQuestionAnswered(current.id, current.skill_category, isCorrect, isCorrect ? xpPerQ : 0);
    }
    setAnswered((prev) => ({ ...prev, [current.id]: isCorrect }));
    setLastUserAnswer(userAnswer ?? "");
    if (!isCorrect) {
      setFailCounts((prev) => ({ ...prev, [current.id]: (prev[current.id] || 0) + 1 }));
      setShowWrong(true);
      window.setTimeout(() => setShowWrong(false), 1600);
    } else {
      setShowCorrect(true);
      window.setTimeout(() => setShowCorrect(false), 1400);
    }
  };

  const openCorrection = () => {
    setAIMode("correction");
    setShowAI(true);
  };

  const openHint = () => {
    setAIMode("hint");
    setShowAI(true);
  };

  const handleRetry = () => {
    setAnswered((prev) => {
      const next = { ...prev };
      delete next[current.id];
      return next;
    });
    setRetryKey((k) => k + 1);
  };

  const handleNext = () => {
    setCurrentIdx((idx) => {
      if (idx < questions.length - 1) {
        return idx + 1;
      }
      setFinalDuration(Math.floor((Date.now() - startTimeRef.current) / 1000));
      setComplete(true);
      onQuizComplete();
      return idx;
    });
  };

  const correctCount = Object.values(answered).filter(Boolean).length;
  const wrongCount = Object.values(answered).filter((v) => v === false).length;
  const totalAnswered = correctCount + wrongCount;
  const percentage = totalAnswered > 0 ? Math.round((correctCount / totalAnswered) * 100) : 0;
  const earnedXp = Math.round((correctCount / Math.max(questions.length, 1)) * quiz.xp_reward);

  const getGrade = () => {
    if (percentage >= 90) return { letter: "A", color: "text-green-500", msg: "Luar biasa! 🌟" };
    if (percentage >= 80) return { letter: "B", color: "text-primary", msg: "Kerja bagus! 💪" };
    if (percentage >= 70) return { letter: "C", color: "text-yellow-500", msg: "Usaha yang bagus! 👍" };
    if (percentage >= 60) return { letter: "D", color: "text-orange-500", msg: "Tetap berlatih! 📚" };
    return { letter: "F", color: "text-destructive", msg: "Pelajari lagi materinya lalu coba ulang! 🔄" };
  };

  const timeLow = remaining <= 30 && !complete;

  // ===== Completion Screen =====
  if (complete) {
    const grade = getGrade();
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center p-8 rounded-2xl bg-card/90 backdrop-blur-xl border border-border max-w-xl mx-auto"
        style={{ boxShadow: "0 8px 32px hsl(var(--primary) / 0.12)" }}
      >
        <div className="relative w-32 h-32 mx-auto mb-6">
          <div className="absolute inset-0 rounded-full border-4 border-primary/30" />
          <div className="absolute inset-0 rounded-full flex flex-col items-center justify-center">
            <span className={`text-4xl font-black ${grade.color}`}>{earnedXp}</span>
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground">XP</span>
          </div>
          <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center shadow-lg">
            <Trophy className="h-5 w-5 text-white" />
          </div>
        </div>

        <h3 className="font-heading font-bold text-2xl text-foreground mb-1">
          {percentage >= 70 ? "Kerja Bagus!" : "Tetap Semangat!"}
        </h3>
        <p className="text-muted-foreground mb-6 text-sm">{grade.msg}</p>

        <div className="grid grid-cols-3 gap-3 mb-6 p-3 rounded-2xl bg-muted/40 border border-border">
          <div className="flex flex-col items-center gap-1">
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Waktu</span>
            <div className="flex items-center gap-1.5 text-foreground font-bold">
              <Clock className="h-3.5 w-3.5" />
              {formatTime(finalDuration)}
            </div>
          </div>
          <div className="flex flex-col items-center gap-1 border-x border-border">
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Benar</span>
            <div className="flex items-center gap-1.5 text-green-500 font-bold">
              <CheckCircle2 className="h-3.5 w-3.5" />
              {correctCount}
            </div>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Salah</span>
            <div className="flex items-center gap-1.5 text-destructive font-bold">
              <XCircle className="h-3.5 w-3.5" />
              {wrongCount}
            </div>
          </div>
        </div>

        <p className="text-xs text-muted-foreground mb-4">
          Nilai: <span className={`font-bold ${grade.color}`}>{grade.letter}</span> · {percentage}% ({correctCount}/{questions.length})
        </p>

        {onAdvanceLesson && (
          <Button onClick={onAdvanceLesson} size="lg" className="w-full gap-2">
            <Home className="h-4 w-4" />
            {hasNextLesson ? "Lanjut ke Materi Berikutnya" : "Kembali ke Kursus"}
          </Button>
        )}
      </motion.div>
    );
  }

  // ===== Quiz In-Progress (full-page layout) =====
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* Top bar: close + title + timer */}
      <div className="flex items-center gap-4">
        {onExit && (
          <button
            onClick={onExit}
            className="w-9 h-9 rounded-full bg-muted hover:bg-muted/70 flex items-center justify-center transition-colors"
            aria-label="Keluar kuis"
          >
            <X className="h-4 w-4 text-foreground" />
          </button>
        )}
        <div className="flex-1 min-w-0">
          <p className="font-heading font-bold text-foreground truncate flex items-center gap-2">
            {quiz.title}
            <span className="text-[10px] px-2 py-0.5 rounded bg-primary/10 text-primary uppercase tracking-wider">
              {quiz.difficulty}
            </span>
          </p>
          <p className="text-xs text-muted-foreground">Soal {currentIdx + 1} dari {questions.length}</p>
        </div>
        <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-sm font-mono font-bold ${
          timeLow ? "border-red-500/40 bg-red-500/10 text-red-500 animate-pulse" : "border-border bg-muted text-foreground"
        }`}>
          <Clock className="h-3.5 w-3.5" />
          {formatTime(remaining)}
        </div>
      </div>

      {/* Progress bar */}
      <div className="h-1.5 rounded-full bg-muted overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-primary"
          animate={{ width: `${((currentIdx + 1) / questions.length) * 100}%` }}
        />
      </div>

      {/* Quiz card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`${current.id}-${retryKey}`}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          className={`relative p-6 rounded-2xl bg-card/90 backdrop-blur-xl border transition-colors ${
            showWrong ? "border-red-500" : showCorrect ? "border-primary" : "border-border"
          }`}
          style={{
            boxShadow: showWrong
              ? "0 4px 24px hsl(0 85% 55% / 0.18)"
              : showCorrect
              ? "0 4px 24px hsl(var(--primary) / 0.22)"
              : "0 4px 24px hsl(var(--primary) / 0.08)",
          }}
        >
          <WrongAnswerPopup show={showWrong} />
          <CorrectAnswerPopup show={showCorrect} />

          {current.question_type === "mcq" && current.options && (
            <MCQQuiz
              key={`mcq-${retryKey}`}
              question={current.question_text}
              options={current.options as string[]}
              correctAnswer={current.correct_answer as string}
              explanation={current.explanation || ""}
              onAnswer={handleAnswer}
            />
          )}
          {current.question_type === "blank_space" && current.code_snippet && current.syntax_chips && (
            <BlankSpaceQuiz
              key={`blank-${retryKey}`}
              question={current.question_text}
              codeSnippet={current.code_snippet}
              syntaxChips={current.syntax_chips as string[]}
              correctAnswer={current.correct_answer as string[]}
              explanation={current.explanation || ""}
              onAnswer={handleAnswer}
            />
          )}
          {current.question_type === "short_coding" && (
            <ShortCodingQuiz
              key={`short-${retryKey}`}
              question={current.question_text}
              codeSnippet={current.code_snippet || ""}
              correctAnswer={current.correct_answer as string}
              explanation={current.explanation || ""}
              onAnswer={handleAnswer}
              failCount={failCounts[current.id] || 0}
              onRequestHint={openHint}
            />
          )}
          {(current.question_type === "true_false" || current.question_type === "truefalse") && (
            <TrueFalseQuiz
              key={`tf-${retryKey}`}
              question={current.question_text}
              correctAnswer={current.correct_answer as boolean | string}
              explanation={current.explanation || ""}
              onAnswer={handleAnswer}
            />
          )}
        </motion.div>
      </AnimatePresence>

      {answered[current.id] === true && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Button onClick={handleNext} className="w-full gap-2">
            {currentIdx < questions.length - 1 ? "Soal Berikutnya" : "Selesaikan Quiz"}
            <ChevronRight className="h-4 w-4" />
          </Button>
        </motion.div>
      )}

      {answered[current.id] === false && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-2">
          {hearts <= 0 ? (
            <>
              <p className="text-center text-sm text-destructive font-medium">
                ❤️ Hearts habis — jawaban salah ini akan tercatat di hasil akhir.
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <Button onClick={openCorrection} variant="secondary" className="flex-1 gap-2">
                  <Sparkles className="h-4 w-4" />
                  Lihat Koreksi Tutor AI
                </Button>
                <Button onClick={handleNext} className="flex-1 gap-2">
                  {currentIdx < questions.length - 1 ? "Soal Berikutnya" : "Selesaikan Quiz"}
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </>
          ) : (
            <>
              <p className="text-center text-sm text-destructive font-medium">
                Jawaban belum tepat — minta koreksi tutor AI atau coba lagi. (Sisa hearts: {hearts})
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <Button onClick={openCorrection} variant="secondary" className="flex-1 gap-2">
                  <Sparkles className="h-4 w-4" />
                  Koreksi dengan Tutor AI
                </Button>
                <Button onClick={handleRetry} variant="outline" className="flex-1 gap-2">
                  <RotateCcw className="h-4 w-4" />
                  Coba Lagi
                </Button>
              </div>
            </>
          )}
        </motion.div>
      )}

      <AITutorModal
        isOpen={showAI}
        onClose={() => setShowAI(false)}
        question={current.question_text}
        userAnswer={lastUserAnswer}
        userCode={current.question_type === "short_coding" ? lastUserAnswer : undefined}
        correctAnswer={typeof current.correct_answer === "string" ? current.correct_answer : JSON.stringify(current.correct_answer)}
        mode={aiMode}
        questionType={current.question_type}
        autoFetch={aiMode === "correction"}
      />
    </div>
  );
};

export default QuizContainer;
