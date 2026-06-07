import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, X, Loader2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import ReactMarkdown from "react-markdown";
import { supabase } from "@/integrations/supabase/client";

interface AITutorModalProps {
  isOpen: boolean;
  onClose: () => void;
  question: string;
  userCode?: string;
  userAnswer?: string;
  correctAnswer: string;
  mode?: "hint" | "correction";
  questionType?: string;
  autoFetch?: boolean;
}

const AITutorModal = ({
  isOpen,
  onClose,
  question,
  userCode,
  userAnswer,
  correctAnswer,
  mode = "hint",
  questionType,
  autoFetch = false,
}: AITutorModalProps) => {
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchAI = async () => {
    setLoading(true);
    setError(null);
    setContent("");
    const userResponse = userCode ?? userAnswer ?? "(belum ada jawaban)";
    try {
      let systemPrompt = "";
      let userPrompt = "";

      if (mode === "correction") {
        systemPrompt = `Anda adalah Tutor AI cerdas untuk CodeMode (platform belajar coding berbahasa Indonesia).
Tugas Anda: KOREKSI jawaban siswa yang salah dengan ramah, jelas, dan mendidik.

ATURAN UTAMA:
1. JANGAN PERNAH menyebutkan, membocorkan, atau menuliskan jawaban yang benar/sintaks kode solusi yang tepat di dalam penjelasan Anda. Biarkan siswa mencarinya sendiri. Ini adalah aturan mutlak.
2. Analisis Kesalahan: Jelaskan secara umum bagian mana dari konsep jawaban siswa yang keliru. Jika jawaban siswa kosong atau sangat tidak nyambung, fokuslah ke penjelasan konsep dasarnya.
3. Konsep Dasar: Berikan konsep singkat atau teori yang relevan agar siswa memahami letak kesalahannya.
4. Petunjuk Perbaikan: Berikan arah perbaikan atau langkah yang perlu diambil secara sokratik untuk membantu mereka membetulkan jawabannya sendiri secara mandiri.
5. Batasan: Singkat dan padat (3-5 kalimat saja). Wajib gunakan markdown (bold, code) untuk istilah coding.
6. Persona: Gunakan bahasa Indonesia yang hangat, suportif, dan menyemangati.`;

        userPrompt = `**Tipe soal:** ${questionType || "umum"}
**Pertanyaan:** ${question}
**Jawaban siswa:** ${userResponse}
**Jawaban yang benar:** ${correctAnswer}

Berikan koreksi terstruktur yang membantu siswa memahami kesalahannya sesuai aturan.`;
      } else {
        systemPrompt = `Anda adalah Tutor AI Sokratik untuk CodeMode (platform belajar coding berbahasa Indonesia).
Tugas Anda: Bantu siswa berpikir mandiri dengan memberikan petunjuk (hint) TANPA memberi jawaban langsung.

ATURAN UTAMA:
1. JANGAN PERNAH membocorkan, menuliskan, atau memberi tahukan jawaban benar yang tertera pada input. Anggap informasi tersebut rahasia mutlak. Anda tidak boleh menuliskannya di penjelasan sama sekali.
2. Ajukan satu pertanyaan pemandu, berikan analogi sederhana, atau ingatkan konsep dasar yang relevan agar siswa dapat menemukan jawabannya sendiri.
3. Batasan: Cukup 2-4 kalimat saja. Wajib gunakan markdown (bold, code) jika menuliskan istilah teknis.
4. Persona: Gunakan bahasa Indonesia yang hangat, interaktif, dan menyemangati.`;

        userPrompt = `**Tipe soal:** ${questionType || "umum"}
**Pertanyaan:** ${question}
**Percobaan siswa:** ${userResponse}
**Konsep jawaban benar (RAHASIA, JANGAN DIBOCORKAN):** ${correctAnswer}

Berikan satu hint Sokratik yang mengarahkan siswa secara perlahan.`;
      }

      const geminiApiKey = import.meta.env.VITE_GEMINI_API_KEY;
      let resp: Response;

      if (geminiApiKey && geminiApiKey !== "your_gemini_api_key_here") {
        // Try models in order: lite first (higher free quota), then fallback
        const MODELS = [
          "gemini-2.0-flash-lite",
          "gemini-1.5-flash",
          "gemini-2.0-flash",
        ];
        const requestBody = JSON.stringify({
          contents: [{ parts: [{ text: userPrompt }] }],
          systemInstruction: { parts: [{ text: systemPrompt }] },
          generationConfig: { temperature: 0.7 },
        });

        let lastError = "";
        let success = false;
        for (const model of MODELS) {
          const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:streamGenerateContent?alt=sse&key=${geminiApiKey}`;
          resp = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: requestBody,
          });
          if (resp.ok) { success = true; break; }
          // Skip to next model on quota (429) OR model-not-found (404)
          try {
            const j = await resp.clone().json();
            const errMsg = j?.error?.message || "";
            const shouldTryNext =
              resp.status === 429 ||
              resp.status === 404 ||
              errMsg.toLowerCase().includes("quota") ||
              errMsg.toLowerCase().includes("resource_exhausted") ||
              errMsg.toLowerCase().includes("not found");
            lastError = errMsg || `Error ${resp.status}`;
            if (shouldTryNext) continue;
          } catch { lastError = `Error ${resp.status}`; }
          break;
        }
        if (!success) {
          const isQuota = resp!.status === 429 || lastError.toLowerCase().includes("quota");
          throw new Error(
            isQuota
              ? "Kuota Gemini AI gratis Anda sudah habis hari ini. Coba lagi besok atau upgrade API key di Google AI Studio."
              : lastError || "Gagal menghubungi Tutor AI."
          );
        }
      } else {
        const { data: { session } } = await supabase.auth.getSession();
        const url = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/ai-tutor`;
        resp = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            apikey: import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY,
            ...(session?.access_token
              ? { Authorization: `Bearer ${session.access_token}` }
              : {}),
          },
          body: JSON.stringify({ question, userCode, userAnswer, correctAnswer, mode, questionType }),
        });
      }

      if (!resp!.ok || !resp!.body) {
        let msg = `Gagal memanggil tutor AI (${resp!.status}).`;
        try {
          const j = await resp!.json();
          if (j?.error) {
            if (typeof j.error === "string") msg = j.error;
            else if (typeof j.error?.message === "string") msg = j.error.message;
            else msg = JSON.stringify(j.error);
          }
        } catch {}
        throw new Error(msg);
      }

      const reader = resp!.body!.getReader();
      const decoder = new TextDecoder();
      setLoading(false);

      if (geminiApiKey && geminiApiKey !== "your_gemini_api_key_here") {
        // Direct stream parsing from Gemini (SSE format)
        let buffer = "";
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split("\n");
          buffer = lines.pop() || "";

          for (const line of lines) {
            if (line.startsWith("data: ")) {
              try {
                const jsonStr = line.slice(6).trim();
                if (jsonStr === "[DONE]") continue;
                const data = JSON.parse(jsonStr);
                const text = data.candidates?.[0]?.content?.parts?.[0]?.text || "";
                if (text) {
                  setContent((prev) => prev + text);
                }
              } catch (e) {
                console.error("Error parsing direct stream chunk:", e);
              }
            }
          }
        }
        if (buffer.startsWith("data: ")) {
          try {
            const jsonStr = buffer.slice(6).trim();
            if (jsonStr !== "[DONE]") {
              const data = JSON.parse(jsonStr);
              const text = data.candidates?.[0]?.content?.parts?.[0]?.text || "";
              if (text) {
                setContent((prev) => prev + text);
              }
            }
          } catch {}
        }
      } else {
        // Plain text stream from Edge Function
        let acc = "";
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          acc += decoder.decode(value, { stream: true });
          setContent(acc);
        }
        acc += decoder.decode();
        if (acc) {
          setContent(acc);
        }
      }
    } catch (e: any) {
      console.warn("Falling back to local smart tutor due to API failure:", e);
      try {
        const responseText = generateLocalAIResponse(question, userResponse, correctAnswer, mode, questionType);
        let currentIndex = 0;
        setLoading(false);
        setContent("");
        
        const intervalId = setInterval(() => {
          if (currentIndex < responseText.length) {
            const sliceSize = Math.floor(Math.random() * 3) + 1;
            const nextChunk = responseText.slice(currentIndex, currentIndex + sliceSize);
            setContent((prev) => prev + nextChunk);
            currentIndex += sliceSize;
          } else {
            clearInterval(intervalId);
          }
        }, 12);
      } catch (fallbackError) {
        const msg =
          typeof e?.message === "string"
            ? e.message
            : typeof e === "string"
            ? e
            : "Gagal memanggil tutor AI. Coba lagi.";
        setError(msg);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen && autoFetch && !content && !loading) {
      fetchAI();
    }
    if (!isOpen) {
      setContent("");
      setError(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  const isCorrection = mode === "correction";

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-lg rounded-2xl bg-card/95 backdrop-blur-xl border border-white/20 p-6"
            style={{ boxShadow: "0 8px 40px hsl(var(--primary) / 0.15)" }}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  {isCorrection ? <Sparkles className="h-5 w-5 text-primary" /> : <Bot className="h-5 w-5 text-primary" />}
                </div>
                <div>
                  <h3 className="font-heading font-bold text-foreground">
                    {isCorrection ? "Koreksi Tutor AI" : "Tutor AI"}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {isCorrection ? "Penjelasan kesalahan & arah perbaikan" : "Mode hint Sokratik"}
                  </p>
                </div>
              </div>
              <button onClick={onClose} className="text-muted-foreground hover:text-foreground">
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="min-h-[140px] p-4 rounded-xl bg-muted/30 border border-border mb-4">
              {!content && !loading && !error && (
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-3">
                    {isCorrection
                      ? "Minta tutor AI untuk menjelaskan kenapa jawaban Anda kurang tepat."
                      : "Saya tidak akan memberi jawabannya — tapi saya akan membantu Anda memikirkan cara menyelesaikannya."}
                  </p>
                  <Button onClick={fetchAI} className="gap-2">
                    <Bot className="h-4 w-4" />
                    {isCorrection ? "Minta Koreksi" : "Dapatkan Hint"}
                  </Button>
                </div>
              )}

              {loading && (
                <div className="flex items-center justify-center gap-2 py-6">
                  <Loader2 className="h-5 w-5 animate-spin text-primary" />
                  <span className="text-sm text-muted-foreground">Tutor AI sedang berpikir...</span>
                </div>
              )}

              {error && (
                <div className="text-center">
                  <p className="text-sm text-red-500 mb-2">{error}</p>
                  <Button variant="outline" size="sm" onClick={fetchAI}>Coba Lagi</Button>
                </div>
              )}

              {content && (
                <div className="prose prose-sm text-foreground max-w-none">
                  <ReactMarkdown>{content}</ReactMarkdown>
                </div>
              )}
            </div>

            <p className="text-xs text-muted-foreground text-center">
              {isCorrection ? "💡 Pelajari koreksi ini, lalu coba lagi soalnya" : "💡 AI memberikan arahan tanpa membocorkan jawaban"}
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

function generateLocalAIResponse(
  question: string,
  userAnswer: string,
  correctAnswer: string,
  mode: "hint" | "correction",
  questionType?: string
): string {
  const cleanUser = (userAnswer || "").trim().toLowerCase();
  const cleanCorrect = (correctAnswer || "").trim().toLowerCase();
  const cleanQuestion = question.toLowerCase();

  // 1. CORRECTION MODE
  if (mode === "correction") {
    if (!cleanUser || cleanUser === "(belum ada jawaban)") {
      return `### Koreksi Tutor AI 🤖\n\nJawaban Anda masih kosong. Tidak apa-apa, yuk coba lagi! 💪\n\n*   **Petunjuk:** Baca kembali soal dengan teliti, lalu tuliskan kata kunci atau konsep utama yang relevan dengan pertanyaan tersebut.\n*   Anda pasti bisa menemukan jawabannya sendiri!`;
    }

    if (cleanQuestion.includes("html") || cleanQuestion.includes("tag") || cleanQuestion.includes("elemen")) {
      return `### Koreksi Tutor AI 🤖\n\nJawaban Anda \`${userAnswer}\` belum tepat.\n\n*   **Analisis:** Elemen HTML yang diminta berbeda dari yang Anda ketikkan. Perhatikan baik-baik kata kunci atau fungsi yang disebut dalam soal.\n*   **Konsep Dasar:** Tag HTML biasanya menggunakan sintaks \`<nama-tag>\` — pikirkan singkatan bahasa Inggris dari fungsi elemen tersebut.\n*   **Petunjuk:** Apa kata bahasa Inggris yang paling merepresentasikan fungsi elemen yang diminta soal?`;
    }

    if (cleanQuestion.includes("css") || cleanQuestion.includes("style") || cleanQuestion.includes("layout")) {
      return `### Koreksi Tutor AI 🤖\n\nJawaban Anda \`${userAnswer}\` belum tepat untuk konteks CSS ini.\n\n*   **Analisis:** Properti atau nilai yang Anda tulis tidak sesuai dengan apa yang diminta soal.\n*   **Konsep Dasar:** Dalam CSS, setiap properti memiliki nama spesifik dalam bahasa Inggris. Perhatikan apakah Anda mendeskripsikan *warna*, *tata letak*, atau *spasi* elemen.\n*   **Petunjuk:** Coba baca ulang soal — apa efek visual yang ingin dicapai, dan properti CSS apa yang mengontrolnya?`;
    }

    if (cleanQuestion.includes("javascript") || cleanQuestion.includes("js") || cleanQuestion.includes("variabel") || cleanQuestion.includes("fungsi")) {
      return `### Koreksi Tutor AI 🤖\n\nJawaban Anda \`${userAnswer}\` belum sesuai untuk konteks JavaScript ini.\n\n*   **Analisis:** Perhatikan apakah jawaban Anda sudah memperhatikan *sintaks*, *tipe data*, atau *keyword* yang tepat.\n*   **Konsep Dasar:** JavaScript sensitif huruf besar-kecil. Apakah ada keyword spesifik (seperti \`const\`, \`let\`, \`function\`) yang relevan dengan soal ini?\n*   **Petunjuk:** Coba bayangkan alur kerja kode — apa yang seharusnya terjadi step by step?`;
    }

    return `### Koreksi Tutor AI 🤖\n\nJawaban Anda \`${userAnswer}\` belum tepat.\n\n*   **Analisis:** Nilai yang dimasukkan belum sesuai dengan konsep yang diuji soal ini.\n*   **Konsep Dasar:** Baca ulang soal dan identifikasi kata kunci utamanya — apa yang sebenarnya ditanyakan?\n*   **Petunjuk:** Coba tuliskan jawaban yang lebih sederhana dan langsung merujuk ke konsep tersebut. Anda pasti bisa! 💪`;
  }

  // 2. HINT (SOCRATIC) MODE
  else {
    if (cleanQuestion.includes("html") || cleanQuestion.includes("tag") || cleanQuestion.includes("elemen")) {
      if (cleanCorrect.includes("href")) {
        return `### Petunjuk Tutor AI 🤖\n\nIngat kembali atribut yang digunakan pada tag jangkar (\`<a>\`) untuk menentukan **alamat tujuan tautan** (URL).\n\n*   Singkatannya merupakan singkatan dari *Hypertext Reference*.\n*   Apakah Anda ingat nama atribut tersebut? Coba ketikkan!`;
      }
      if (cleanCorrect.includes("img") || cleanCorrect.includes("src")) {
        return `### Petunjuk Tutor AI 🤖\n\nUntuk menampilkan gambar, kita menggunakan tag khusus gambar dan atribut untuk **sumber berkas** gambar (*Source*).\n\n*   Atribut sumber gambar disingkat menjadi 3 huruf saja.\n*   Coba ingat-ingat singkatan dari kata *Source*!`;
      }
      if (cleanCorrect.includes("p")) {
        return `### Petunjuk Tutor AI 🤖\n\nTag HTML ini digunakan untuk membungkus **paragraf** teks.\n\n*   Nama tag ini diambil dari huruf pertama kata *Paragraph*.\n*   Coba ketikkan tag satu huruf tersebut!`;
      }
      return `### Petunjuk Tutor AI 🤖\n\nCoba tinjau kembali tag atau elemen HTML dasar untuk topik ini.\n\n*   Pikirkan singkatan bahasa Inggris dari elemen tersebut (misalnya \`h1\` untuk *Heading 1*, \`p\` untuk *Paragraph*).\n*   Apakah Anda ingin mencoba menebak singkatan yang relevan?`;
    }

    if (cleanQuestion.includes("css") || cleanQuestion.includes("style") || cleanQuestion.includes("layout")) {
      if (cleanCorrect.includes("color")) {
        return `### Petunjuk Tutor AI 🤖\n\nProperti CSS ini digunakan untuk mengubah **warna teks** elemen.\n\n*   Coba gunakan kata bahasa Inggris dari kata 'warna'.\n*   Jangan tertukar dengan properti *background-color* yang digunakan untuk warna latar belakang!`;
      }
      if (cleanCorrect.includes("margin") || cleanCorrect.includes("padding")) {
        return `### Petunjuk Tutor AI 🤖\n\nIngat kembali perbedaan antara jarak di **luar** batas elemen (*margin*) dan jarak di **dalam** elemen (*padding*).\n\n*   Jika Anda ingin mengatur jarak antara batas elemen dengan konten di dalamnya, gunakan properti *padding*.\n*   Jika Anda ingin mengatur jarak antar elemen tetangga, gunakan *margin*.`;
      }
      return `### Petunjuk Tutor AI 🤖\n\nUntuk mendesain halaman, perhatikan aturan selector dan properti CSS.\n\n*   *Selector* menentukan elemen mana yang ingin dihias (tag, class dengan titik \`.\`, atau ID dengan pagar \`#\`).\n*   Properti CSS ditulis dalam bahasa Inggris (misal: *display*, *position*, *flex*).\n*   Coba tinjau kembali sintaks penulisan properti tersebut!`;
    }

    if (cleanQuestion.includes("javascript") || cleanQuestion.includes("js") || cleanQuestion.includes("variabel") || cleanQuestion.includes("fungsi")) {
      if (cleanCorrect.includes("const")) {
        return `### Petunjuk Tutor AI 🤖\n\nIngat kembali keyword untuk mendeklarasikan variabel yang **nilainya tetap (konstan)** dan tidak bisa diubah setelah diinisialisasi.\n\n*   Keyword ini disingkat dari kata *Constant*.\n*   Terdiri dari 5 huruf. Coba ingat kembali!`;
      }
      if (cleanCorrect.includes("let") || cleanCorrect.includes("var")) {
        return `### Petunjuk Tutor AI 🤖\n\nIngat kembali keyword modern untuk mendeklarasikan variabel yang **nilainya dapat diubah** di JavaScript dengan cakupan blok (*block scope*).\n\n*   Keyword ini terdiri dari 3 huruf saja dan lebih disukai daripada *var* di era ES6+.\n*   Apakah Anda ingat namanya?`;
      }
      return `### Petunjuk Tutor AI 🤖\n\nMari kita analisis logika kodenya. Pikirkan alur eksekusi baris demi baris di JavaScript:\n\n*   Periksa tanda kurung \`()\` untuk fungsi atau kondisi, dan kurung kurawal \`{}\` untuk blok kode.\n*   Ingat bahwa JavaScript bersifat *case-sensitive* (sensitif terhadap huruf besar/kecil).\n*   Bagian logika manakah yang menurut Anda perlu disesuaikan?`;
    }

    return `### Petunjuk Tutor AI 🤖\n\nMari kita telaah pertanyaan ini bersama-sama.\n\n*   Tinjau kembali kata kunci utama dari materi yang sedang dipelajari.\n*   Pikirkan konsep dasar yang paling sering dibahas di bagian ringkasan teori di atas.\n*   Cobalah menuliskan jawaban sederhana terlebih dahulu berdasarkan pemahaman Anda!`;
  }
}

export default AITutorModal;
