import { GoogleGenAI } from "@google/genai";

// 1. Inisialisasi API Gemini dengan API Key milikmu
// Disarankan menggunakan process.env.GEMINI_API_KEY demi keamanan
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "AIzaSyCK5XWERw20A4TLqEkfnMOJXwC8Dg-m3t0" });

/**
 * Fungsi untuk memberikan respons AI Tutor (Koreksi atau Hint Sokratik)
 * @param {Object} data - Objek penampung data kuis dari frontend
 */
async function dapatkanResponTutor(data) {
  const { 
    question, 
    userCode, 
    userAnswer, 
    correctAnswer, 
    mode = "hint", 
    questionType 
  } = data;

  // Validasi awal jika pertanyaan tidak ada
  if (!question) {
    console.error("Error: Missing question");
    return { error: "Missing question" };
  }

  // Menentukan response siswa (mendukung code atau jawaban teks pilihan ganda/singkat)
  const userResponse = userCode ?? userAnswer ?? "(belum ada jawaban)";

  let systemPrompt = "";
  let userPrompt = "";

  // 2. Pemisahan Logika Prompt (Versi Optimasi)
  if (mode === "correction") {
    systemPrompt = `Anda adalah Tutor AI cerdas untuk CodeMode (platform belajar coding berbahasa Indonesia).
Tugas Anda: KOREKSI jawaban siswa yang salah dengan ramah, jelas, dan mendidik.

Aturan:
1. Analisis Kesalahan: Jelaskan secara spesifik bagian mana dari jawaban siswa yang keliru. Jika jawaban siswa kosong atau sangat tidak nyambung, lewati bagian ini dan langsung fokus ke aturan nomor 2.
2. Konsep Dasar: Berikan aturan atau konsep singkat yang relevan dengan soal tersebut agar siswa paham teorinya.
3. Petunjuk Perbaikan: Tunjukkan arah perbaikan tanpa menyebut jawaban final secara harfiah, kecuali jika konsepnya memang nama fungsi/keyword tertentu — cukup beri petunjuk yang sangat kuat.
4. Batasan: Singkat dan padat (3-5 kalimat saja). Wajib gunakan markdown (bold, code) untuk sintaks atau istilah coding.
5. Persona: Gunakan bahasa Indonesia yang hangat, suportif, dan menyemangati.`;

    userPrompt = `**Tipe soal:** ${questionType || "umum"}
**Pertanyaan:** ${question}
**Jawaban siswa:** ${userResponse}
**Jawaban yang benar:** ${correctAnswer}

Berikan koreksi terstruktur yang membantu siswa memahami kesalahannya sesuai aturan.`;
  } else {
    systemPrompt = `Anda adalah Tutor AI Sokratik untuk CodeMode (platform belajar coding berbahasa Indonesia).
Tugas Anda: Bantu siswa berpikir mandiri dengan memberikan petunjuk (hint) TANPA memberi jawaban langsung.

Aturan Keras:
1. JANGAN PERNAH menyebutkan atau membocorkan "Konsep jawaban benar" yang tertera pada input. Anggap informasi tersebut rahasia mutlak.
2. Ajukan satu pertanyaan pemandu, analogi sederhana, atau sebut konsep dasar yang perlu mereka tinjau ulang agar mereka bisa menemukan jawabannya sendiri.
3. Batasan: Cukup 2-4 kalimat saja. Wajib gunakan markdown (bold, code) jika menuliskan istilah teknis.
4. Persona: Gunakan bahasa Indonesia yang hangat, interaktif, dan menyemangati.`;

    userPrompt = `**Tipe soal:** ${questionType || "umum"}
**Pertanyaan:** ${question}
**Percobaan siswa:** ${userResponse}
**Konsep jawaban benar (RAHASIA, JANGAN DIBOCORKAN):** ${correctAnswer}

Berikan satu hint Sokratik yang mengarahkan siswa secara perlahan.`;
  }

  // 3. Eksekusi Pemanggilan ke API Gemini
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-1.5-flash', // Model super cepat, cocok untuk aplikasi kuis interaktif
      config: {
        systemInstruction: systemPrompt
      },
      contents: userPrompt
    });

    return {
      success: true,
      text: response.text
    };

  } catch (error) {
    console.error("Terjadi kesalahan pada AI Tutor:", error);
    return { 
      success: false, 
      error: error.message || "Unknown error terjadi pada Gemini API" 
    };
  }
}

// =========================================================================
// CONTOH CARA PENGGUNAAN & PENGUJIAN DI LOKAL
// =========================================================================

async function jalankanUjiCoba() {
  console.log("--- Menguji Mode Correction ---");
  const dataUjiCorrection = {
    question: "Bagaimana cara membuat variabel yang nilainya tidak bisa diubah di JavaScript?",
    userAnswer: "let X = 10;",
    correctAnswer: "Menggunakan keyword 'const'",
    mode: "correction",
    questionType: "JavaScript Dasar"
  };

  const hasilKoreksi = await dapatkanResponTutor(dataUjiCorrection);
  if (hasilKoreksi.success) {
    console.log(hasilKoreksi.text);
  }

  console.log("\n--------------------------------------------------\n");

  console.log("--- Menguji Mode Hint (Sokratik) ---");
  const dataUjiHint = {
    question: "Keyword apa yang digunakan untuk membuat fungsi di Python?",
    userAnswer: "function hitung()",
    correctAnswer: "keyword 'def'",
    mode: "hint",
    questionType: "Python Dasar"
  };

  const hasilHint = await dapatkanResponTutor(dataUjiHint);
  if (hasilHint.success) {
    console.log(hasilHint.text);
  }
}

// Jalankan fungsi uji coba jika kamu mengeksekusi file ini langsung (node tutor.js)
jalankanUjiCoba();