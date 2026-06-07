/// <reference lib="deno.ns" />

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const {
      question,
      userCode,
      userAnswer,
      correctAnswer,
      mode,
      questionType,
    } = await req.json();

    // tempel API key Gemini kamu di sini
    const apiKey = "GEMINI_API_KEY";

    const userResponse =
      userCode ?? userAnswer ?? "(belum ada jawaban)";

    let systemPrompt = "";
    let userPrompt = "";

    if (mode === "correction") {
      systemPrompt = `
Anda adalah Tutor AI untuk CodeMode, platform belajar coding berbahasa Indonesia.
Tugas Anda: Membantu siswa yang menjawab salah agar bisa menemukan jawaban sendiri melalui petunjuk Sokratik.

ATURAN MUTLAK (wajib dipatuhi, tidak ada pengecualian):
1. DILARANG KERAS menyebutkan, menulis, menyingkat, mengisyaratkan, atau mengkodekan jawaban yang benar dalam bentuk apapun — termasuk kode, teks, hint langsung, atau contoh yang "kebetulan" sama dengan jawaban.
2. DILARANG memberi contoh kode yang secara langsung adalah jawaban dari soal.
3. JANGAN gunakan kata "Saran: ketikkan ..." atau "jawabannya adalah ..." atau frasa serupa.
4. Tugas Anda hanya: jelaskan MENGAPA jawaban siswa salah, berikan KONSEP DASAR yang relevan, dan ajukan satu PERTANYAAN PEMANDU Sokratik agar siswa berpikir sendiri.
5. Maksimal 4-5 kalimat. Gunakan bahasa Indonesia yang hangat dan menyemangati.
6. Gunakan markdown (bold, code) untuk istilah teknis, tapi BUKAN untuk menulis jawaban.
`;

      userPrompt = `
Tipe soal: ${questionType || "umum"}

Pertanyaan:
${question}

Jawaban siswa:
${userResponse}

Jawaban benar (RAHASIA, JANGAN DIBOCORKAN):
${correctAnswer}

Berikan koreksi terstruktur yang membantu siswa memahami kesalahannya tanpa membocorkan jawaban akhir.
`;
    } else {
      systemPrompt = `
Anda adalah Tutor AI Sokratik untuk CodeMode, platform belajar coding berbahasa Indonesia.
Tugas Anda: Memberikan HINT saja, tanpa pernah menyebut jawaban yang benar.

ATURAN MUTLAK (wajib dipatuhi, tidak ada pengecualian):
1. DILARANG KERAS menyebutkan, menulis, menyingkat, mengisyaratkan, atau mengkodekan jawaban yang benar dalam bentuk apapun.
2. DILARANG memberi contoh yang secara langsung adalah jawaban dari soal.
3. Tugas Anda hanya: berikan satu analogi, satu pertanyaan pemandu, atau satu konsep dasar yang membantu siswa menemukan jawabannya sendiri.
4. Maksimal 3-4 kalimat. Gunakan bahasa Indonesia yang hangat dan interaktif.
5. Gunakan markdown (bold, code) untuk istilah teknis, tapi BUKAN untuk menulis jawaban.
`;

      userPrompt = `
Tipe soal: ${questionType || "umum"}

Pertanyaan:
${question}

Jawaban siswa:
${userResponse}

Jawaban benar (RAHASIA, JANGAN DIBOCORKAN):
${correctAnswer}

Berikan satu hint Sokratik yang mengarahkan siswa secara perlahan tanpa membocorkan jawaban akhir.
`;
    }

    const prompt = `
${systemPrompt}

${userPrompt}
`;

    const geminiResp = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: prompt,
                },
              ],
            },
          ],
          generationConfig: {
            temperature: 0.4,
            maxOutputTokens: 300,
          },
        }),
      },
    );

    if (!geminiResp.ok) {
      const errText = await geminiResp.text();

      return new Response(
        JSON.stringify({
          error: errText,
        }),
        {
          status: 500,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        },
      );
    }

    const data = await geminiResp.json();

    const text =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ??
      "Tutor AI tidak memberikan respon.";

    return new Response(text, {
      headers: {
        ...corsHeaders,
        "Content-Type": "text/plain; charset=utf-8",
      },
    });
  } catch (error: unknown) {
    const message =
      error instanceof Error
        ? error.message
        : "Terjadi kesalahan";

    return new Response(
      JSON.stringify({
        error: message,
      }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      },
    );
  }
});