// Rich Indonesian Study Materials and 20 Quiz Questions for each lesson
// Designed to mimic a premium platform like Dicoding

export interface LocalQuestion {
  id: string;
  question_type: "mcq" | "blank_space" | "short_coding" | "true_false" | "truefalse";
  question_text: string;
  options: string[] | null;
  correct_answer: any;
  code_snippet: string | null;
  syntax_chips: string[] | null;
  explanation: string | null;
  skill_category: string;
}

export interface LessonData {
  title: string;
  markdownContent: string;
  videoUrl?: string;
  resources?: Array<{ type: string; url: string; label: string }>;
  questions: LocalQuestion[];
}

export const lessonMaterials: Record<string, LessonData> = {
  // HTML Dasar
  "HTML Dasar": {
    title: "HTML Dasar",
    markdownContent: `
# Panduan Lengkap & Mendalam: HTML Dasar untuk Web Modern

Selamat datang di langkah pertama Anda menjadi seorang **Web Developer Profesional**! Pada modul ini, kita akan mengupas tuntas **HTML (HyperText Markup Language)** secara mendalam, runut, dan terstruktur. 

HTML adalah fondasi absolut dari setiap halaman web yang ada di internet saat ini. Tanpa HTML, internet tidak akan memiliki struktur teks, gambar, formulir, atau tautan. Jika dianalogikan dengan konstruksi sebuah rumah:
*   **HTML** adalah struktur fondasi beton, kerangka besi rangka tiang, serta susunan batu bata dindingnya.
*   **CSS** adalah cat dinding, desain keramik, lampu hias, dan interior estetikanya.
*   **JavaScript** adalah instalasi listrik, sistem saklar otomatis, keran air cerdas, dan gerbang otomatisnya.

---

## 1. Mengenal HTML secara Komprehensif

### Apa itu HTML?
HTML merupakan singkatan dari **HyperText Markup Language**.
*   **HyperText**: Teks yang memiliki kemampuan interaktif untuk mengarahkan pengguna ke halaman lain melalui tautan (hyperlink).
*   **Markup**: Tanda penanda berupa kurung siku (\`<tag>\`) yang bertugas menginstruksikan peramban web (browser) mengenai bagaimana cara merender informasi atau konten tersebut secara visual.
*   **Language**: Aturan sintaksis terstruktur yang dipahami secara universal oleh browser di seluruh dunia.

HTML **bukanlah bahasa pemrograman** (karena tidak memiliki logika kondisional, fungsi komputasi aritmatika, atau loop), melainkan sebuah **bahasa markup** untuk menstrukturkan informasi di halaman web.

### Standar Struktur Dokumen HTML5
HTML5 adalah versi standar terbaru dan tercanggih saat ini. Berikut adalah struktur dokumen dasar HTML5 yang wajib Anda ketahui:

\`\`\`html
<!DOCTYPE html>
<html lang="id">
<head>
    <!-- Metadata Dokumen -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Halaman pembelajaran HTML dasar terbaik kelas industri.">
    <title>Belajar HTML Dasar - CodeMode</title>
</head>
<body>
    <!-- Konten Utama Halaman Web -->
    <header>
        <h1>Selamat Datang di Dunia Web Development!</h1>
    </header>
    <main>
        <p>HTML5 menyediakan elemen semantik yang kaya untuk SEO dan aksesibilitas.</p>
    </main>
    <footer>
        <p>&copy; 2026 CodeMode Platform Belajar.</p>
    </footer>
</body>
</html>
\`\`\`

### Penjelasan Baris Dokumen Dasar:
1.  **\`<!DOCTYPE html>\`**: Deklarasi wajib yang memberi tahu browser bahwa dokumen ini menggunakan standar HTML5 terbaru.
2.  **\`<html lang="id">\`**: Tag pembungkus seluruh dokumen. Atribut \`lang="id"\` memberi tahu mesin pencari (seperti Google) dan pembaca layar (screen reader) bahwa bahasa utama halaman ini adalah Bahasa Indonesia.
3.  **\`<head>\`**: Bagian kepala dokumen yang berisi informasi non-visual (metadata, konfigurasi karakter, skala viewport perangkat, serta pemanggilan berkas CSS/JS eksternal).
4.  **\`<meta charset="UTF-8">\`**: Menentukan enkoding karakter universal UTF-8 agar browser dapat merender huruf Latin, emoji, dan simbol dunia secara tepat tanpa error.
5.  **\`<meta name="viewport" content="width=device-width, initial-scale=1.0">\`**: Konfigurasi kritis untuk *Responsive Web Design* agar skala tampilan web menyesuaikan lebar layar gadget secara dinamis.
6.  **\`<body>\`**: Tubuh dokumen yang membungkus semua elemen visual (teks, gambar, tombol, navigasi) yang akan dilihat langsung oleh pengguna di layar.

---

## 2. Elemen Semantik HTML5 (Penting untuk SEO & Aksesibilitas)

Sebelum HTML5, para developer menggunakan tag non-semantik \`<div id="header">\` atau \`<div class="footer">\` untuk membagi bagian halaman. Sekarang, HTML5 memperkenalkan **Tag Semantik**—tag yang memiliki arti eksplisit bagi browser dan mesin pencari (SEO):

*   **\`<header>\`**: Digunakan untuk membungkus logo, nama situs, menu navigasi atas, atau informasi pembuka.
*   **\`<nav>\`**: Khusus untuk menampung tautan navigasi utama situs.
*   **\`<main>\`**: Membungkus konten utama dari sebuah halaman dokumen (hanya boleh ada satu \`<main>\` per halaman).
*   **\`<section>\`**: Mengelompokkan konten yang memiliki satu topik pembahasan spesifik.
*   **\`<article>\`**: Membungkus konten mandiri yang dapat didistribusikan ulang (seperti postingan blog, berita, atau forum).
*   **\`<aside>\`**: Menampung konten sampingan (sidebar, iklan, widget tambahan) yang berkaitan tidak langsung dengan konten utama.
*   **\`<footer>\`**: Berisi informasi penutup halaman seperti hak cipta (copyright), tautan kebijakan privasi, atau info kontak.

---

## 3. Tag-Tag Konten yang Paling Sering Digunakan

Mari kita bedah beberapa tag penting yang akan Anda gunakan sehari-hari:

### A. Tag Heading (\`<h1>\` sampai \`<h6>\`)
Heading berfungsi untuk membuat struktur hierarki tulisan. \`<h1>\` mewakili judul utama paling penting (biasanya satu per halaman), sedangkan \`<h2>\` hingga \`<h6>\` mewakili subjudul di bawahnya dengan tingkat kepentingan yang menurun secara berkala.
*   \`<h1>Pengenalan HTML Dasar</h1>\`
*   \`<h2>Struktur Dokumen</h2>\`

### B. Tag Paragraf (\`<p>\`)
Digunakan untuk menampung teks biasa, artikel, atau deskripsi. Browser secara otomatis memberikan sedikit margin vertikal di atas dan di bawah elemen ini agar teks mudah dibaca.
*   \`<p>Latihan konsisten adalah kunci utama menguasai pemrograman web.</p>\`

### C. Tag Tautan / Anchor (\`<a>\`)
Menghubungkan halaman satu dengan halaman lainnya. Tag ini wajib menggunakan atribut \`href\` (Hypertext Reference).
*   **Membuka di tab yang sama**: \`<a href="dashboard.html">Pergi ke Dashboard</a>\`
*   **Membuka di tab baru (direkomendasikan memakai atribut \`target="_blank"\` dan \`rel="noopener"\` untuk keamanan)**:
    \`<a href="https://google.com" target="_blank" rel="noopener">Buka Google</a>\`

### D. Tag Gambar (\`<img>\`)
Digunakan untuk menyematkan gambar secara visual. Tag ini adalah *self-closing tag* (tidak memerlukan tag penutup seperti \`</img>\`). Atribut wajibnya:
*   \`src\`: Path/lokasi berkas gambar berada.
*   \`alt\`: Teks alternatif untuk mendeskripsikan gambar jika gambar gagal dimuat, serta sangat penting untuk SEO dan membantu penyandang tuna netra yang menggunakan aplikasi pembaca layar.
*   Contoh: \`<img src="belajar-coding.jpg" alt="Seorang mahasiswa sedang belajar coding HTML dasar" loading="lazy" />\`

### E. Tag List (Daftar Poin)
HTML membagi list menjadi dua tipe utama:
1.  **Unordered List (\`<ul>\`)**: Menggunakan penanda poin bulat biasa (bullet points).
2.  **Ordered List (\`<ol>\`)**: Menggunakan penanda angka atau huruf terurut (1, 2, 3, dst).
3.  Setiap item di dalam list wajib dibungkus oleh tag **List Item (\`<li>\`)**.

*Contoh Unordered List:*
\`\`\`html
<ul>
    <li>Belajar Tag Dasar</li>
    <li>Membuat Form</li>
    <li>Menghubungkan CSS</li>
</ul>
\`\`\`

---

## 4. Formulir Interaktif (\`<form>\` & \`<input>\`)

Formulir digunakan untuk mengumpulkan input data dari pengguna (seperti pendaftaran akun, pencarian barang, login).

\`\`\`html
<form action="/proses-data" method="POST" className="space-y-4">
    <div>
        <label for="nama">Nama Lengkap:</label>
        <input type="text" id="nama" name="username" placeholder="Masukkan nama Anda" required />
    </div>
    <div>
        <label for="email">Alamat Email:</label>
        <input type="email" id="email" name="useremail" placeholder="contoh@domain.com" required />
    </div>
    <div>
        <label for="gender">Pilih Gender:</label>
        <input type="radio" id="pria" name="gender" value="pria"> <label for="pria">Pria</label>
        <input type="radio" id="wanita" name="gender" value="wanita"> <label for="wanita">Wanita</label>
    </div>
    <button type="submit">Kirim Data</button>
</form>
\`\`\`

### Atribut Penting Input Form:
*   \`type\`: Menentukan tipe input (seperti \`text\`, \`email\`, \`password\` untuk menyembunyikan karakter, \`radio\` untuk memilih salah satu opsi, \`checkbox\` untuk banyak opsi).
*   \`placeholder\`: Teks petunjuk abu-abu di dalam input sebelum diisi.
*   \`required\`: Memaksa pengguna mengisi kolom tersebut sebelum formulir bisa dikirim ke server.

---

## 5. Praktik Terbaik (Best Practices) Menulis HTML Dasar
1.  **Selalu Gunakan Tag Semantik**: Jangan membungkus seluruh konten Anda dengan \`<div>\`. Gunakan \`<header>\`, \`<main>\`, \`<article>\`, dan \`<footer>\` demi kualitas SEO yang maksimal.
2.  **Tutup Setiap Tag**: Pastikan setiap tag pembuka memiliki tag penutup yang sejajar dan rapi untuk mencegah bug rendering visual.
3.  **Gunakan Atribut Alt pada Gambar**: Menghilangkan atribut \`alt\` akan menurunkan nilai SEO halaman web Anda secara drastis.
4.  **Gunakan Penulisan Huruf Kecil (Lowercase)**: Selalu tulis nama tag dan atribut dengan huruf kecil (misalnya \`<img>\` dan \`src\`, bukan \`<IMG>\` dan \`SRC\`) sesuai konvensi standar W3C.
`,
    questions: [
      {
        id: "html-q1",
        question_type: "mcq",
        question_text: "Apa kepanjangan dari HTML?",
        options: ["HyperText Markup Language", "HyperText Multi Language", "HyperTransfer Markup Language", "Home Tool Markup Language"],
        correct_answer: "HyperText Markup Language",
        code_snippet: null,
        syntax_chips: null,
        explanation: "HTML singkatan dari HyperText Markup Language, yaitu bahasa standar untuk menstrukturkan halaman web.",
        skill_category: "markup"
      },
      {
        id: "html-q2",
        question_type: "mcq",
        question_text: "Tag HTML mana yang menghasilkan judul dengan ukuran terbesar?",
        options: ["<h1>", "<heading>", "<head>", "<h6>"],
        correct_answer: "<h1>",
        code_snippet: null,
        syntax_chips: null,
        explanation: "Tag <h1> digunakan untuk heading tingkat pertama yang berukuran paling besar.",
        skill_category: "markup"
      },
      {
        id: "html-q3",
        question_type: "mcq",
        question_text: "Tag apa yang digunakan untuk membuat baris baru (line break) tanpa membuat paragraf baru?",
        options: ["<br>", "<lb>", "<break>", "<newline>"],
        correct_answer: "<br>",
        code_snippet: null,
        syntax_chips: null,
        explanation: "Tag <br> singkatan dari break, digunakan untuk pindah baris.",
        skill_category: "markup"
      },
      {
        id: "html-q4",
        question_type: "mcq",
        question_text: "Atribut mana yang digunakan untuk menentukan URL tujuan pada elemen anchor (link)?",
        options: ["href", "src", "link", "target"],
        correct_answer: "href",
        code_snippet: null,
        syntax_chips: null,
        explanation: "href singkatan dari Hypertext Reference, atribut wajib pada tag <a>.",
        skill_category: "markup"
      },
      {
        id: "html-q5",
        question_type: "mcq",
        question_text: "Manakah penulisan tag gambar (<img>) yang benar dan valid?",
        options: ["<img src='logo.png' alt='Logo' />", "<img href='logo.png'>", "<image src='logo.png'>", "<img alt='Logo'></img>"],
        correct_answer: "<img src='logo.png' alt='Logo' />",
        code_snippet: null,
        syntax_chips: null,
        explanation: "Tag <img> menggunakan atribut src untuk sumber gambar, alt untuk deskripsi alternatif, dan merupakan self-closing tag.",
        skill_category: "markup"
      },
      {
        id: "html-q6",
        question_type: "mcq",
        question_text: "Tag HTML manakah yang digunakan untuk membuat list dengan poin angka terurut (ordered list)?",
        options: ["<ol>", "<ul>", "<li>", "<dl>"],
        correct_answer: "<ol>",
        code_snippet: null,
        syntax_chips: null,
        explanation: "<ol> singkatan dari Ordered List, menghasilkan list terurut seperti 1, 2, 3.",
        skill_category: "markup"
      },
      {
        id: "html-q7",
        question_type: "mcq",
        question_text: "Tag HTML manakah yang digunakan untuk membuat list dengan simbol bulat (unordered list)?",
        options: ["<ul>", "<ol>", "<li>", "<list>"],
        correct_answer: "<ul>",
        code_snippet: null,
        syntax_chips: null,
        explanation: "<ul> singkatan dari Unordered List, menghasilkan list poin-poin bulat biasa (bullets).",
        skill_category: "markup"
      },
      {
        id: "html-q8",
        question_type: "mcq",
        question_text: "Bagaimana cara membuat checkbox di HTML?",
        options: ["<input type='checkbox'>", "<checkbox>", "<input type='check'>", "<input type='box'>"],
        correct_answer: "<input type='checkbox'>",
        code_snippet: null,
        syntax_chips: null,
        explanation: "Elemen input dengan tipe 'checkbox' digunakan untuk menampilkan kotak centang di form HTML.",
        skill_category: "markup"
      },
      {
        id: "html-q9",
        question_type: "mcq",
        question_text: "Elemen HTML mana yang digunakan untuk mengelompokkan konten secara umum tanpa arti semantik khusus?",
        options: ["<div>", "<span>", "<section>", "<article>"],
        correct_answer: "<div>",
        code_snippet: null,
        syntax_chips: null,
        explanation: "<div> adalah elemen tingkat blok (block-level) yang bersifat generik tanpa arti semantik.",
        skill_category: "markup"
      },
      {
        id: "html-q10",
        question_type: "mcq",
        question_text: "Karakter apa yang digunakan untuk menunjukkan tag penutup di HTML?",
        options: ["/", "<", "*", "\\"],
        correct_answer: "/",
        code_snippet: null,
        syntax_chips: null,
        explanation: "Garis miring (slash) '/' disisipkan setelah kurung siku buka tag penutup, misalnya </p>.",
        skill_category: "markup"
      },
      {
        id: "html-q11",
        question_type: "mcq",
        question_text: "Manakah tag yang digunakan untuk membuat judul kolom pada tabel?",
        options: ["<th>", "<td>", "<tr>", "<thead_cell>"],
        correct_answer: "<th>",
        code_snippet: null,
        syntax_chips: null,
        explanation: "<th> singkatan dari Table Header, secara default membuat teks menjadi tebal dan rata tengah.",
        skill_category: "markup"
      },
      {
        id: "html-q12",
        question_type: "mcq",
        question_text: "Atribut target='_blank' pada tag <a> digunakan untuk apa?",
        options: ["Membuka link di tab/jendela baru", "Membuka link secara rahasia", "Menghapus halaman saat ini", "Membuat halaman tidak bisa kembali"],
        correct_answer: "Membuka link di tab/jendela baru",
        code_snippet: null,
        syntax_chips: null,
        explanation: "target='_blank' memerintahkan browser untuk membuka tautan tersebut pada tab baru.",
        skill_category: "markup"
      },
      {
        id: "html-q13",
        question_type: "mcq",
        question_text: "Tag HTML mana yang digunakan untuk memberikan judul dokumen yang tampil di tab browser?",
        options: ["<title>", "<head>", "<meta>", "<header>"],
        correct_answer: "<title>",
        code_snippet: null,
        syntax_chips: null,
        explanation: "Tag <title> mendefinisikan judul halaman di tab browser web.",
        skill_category: "markup"
      },
      {
        id: "true_false",
        question_text: "Tag <br> membutuhkan tag penutup </br> agar valid di HTML5.",
        options: ["True", "False"],
        correct_answer: false,
        code_snippet: null,
        syntax_chips: null,
        explanation: "False. Tag <br> adalah elemen kosong (empty element) dan tidak membutuhkan tag penutup.",
        skill_category: "markup"
      },
      {
        id: "true_false",
        question_text: "Atribut class boleh bernilai sama untuk beberapa elemen HTML yang berbeda.",
        options: ["True", "False"],
        correct_answer: true,
        code_snippet: null,
        syntax_chips: null,
        explanation: "True. Class ditujukan agar bisa digunakan secara berulang pada banyak elemen, berbeda dengan id yang harus unik.",
        skill_category: "markup"
      },
      {
        id: "true_false",
        question_text: "Konten visual utama yang dilihat pengguna harus ditulis di dalam tag <head>.",
        options: ["True", "False"],
        correct_answer: false,
        code_snippet: null,
        syntax_chips: null,
        explanation: "False. Konten visual utama ditulis di dalam tag <body>. Tag <head> menyimpan metadata dan informasi latar belakang.",
        skill_category: "markup"
      },
      {
        id: "html-blank1",
        question_type: "blank_space",
        question_text: "Lengkapi tag heading terbesar di bawah ini:",
        options: null,
        correct_answer: ["<h1>"],
        code_snippet: "___ Belajar HTML Dasar </h1>",
        syntax_chips: ["<h1>", "<h2>", "<head>", "<header>"],
        explanation: "<h1> adalah tag penanda heading tingkat 1 (terbesar).",
        skill_category: "markup"
      },
      {
        id: "html-blank2",
        question_type: "blank_space",
        question_text: "Lengkapi atribut sumber gambar di bawah ini:",
        options: null,
        correct_answer: ["src"],
        code_snippet: "<img ___=\"avatar.png\" alt=\"Profil Saya\" />",
        syntax_chips: ["src", "href", "source", "link"],
        explanation: "src (source) menentukan lokasi berkas gambar yang akan dimuat.",
        skill_category: "markup"
      },
      {
        id: "html-sc1",
        question_type: "short_coding",
        question_text: "Tuliskan tag paragraf berisi teks 'Halo' secara lengkap:",
        options: null,
        correct_answer: "<p>Halo</p>",
        code_snippet: null,
        syntax_chips: null,
        explanation: "Penulisan paragraf yang valid dimulai dengan <p>, diikuti teks, lalu ditutup dengan </p>.",
        skill_category: "markup"
      },
      {
        id: "html-sc2",
        question_type: "short_coding",
        question_text: "Tuliskan tag line break biasa (tanpa spasi penutup XHTML):",
        options: null,
        correct_answer: "<br>",
        code_snippet: null,
        syntax_chips: null,
        explanation: "<br> adalah sintaks standar HTML5 untuk pindah baris.",
        skill_category: "markup"
      }
    ]
  },

  // CSS & Styling
  "CSS & Styling": {
    title: "CSS & Styling",
    markdownContent: `
# Panduan Lengkap & Mendalam: CSS & Styling untuk Hiasan Web Kelas Industri

Halaman web HTML tanpa **CSS (Cascading Style Sheets)** akan terlihat sangat kaku, polos, dan membosankan—mirip seperti dokumen teks biasa tahun 1990-an. Di sinilah CSS berperan sebagai penata gaya utama! 

Jika dianalogikan:
*   **HTML** menyusun kerangka bata dan tata ruang rumah Anda.
*   **CSS** mewarnai dinding, memasang wallpaper bermotif, memilih jenis keramik, mendesain tata letak furnitur, hingga memberikan efek lampu sorot malam hari.

---

## 1. Apa itu CSS dan Cara Menghubungkannya?

CSS adalah bahasa lembar gaya (*style sheet language*) yang digunakan untuk mengontrol tampilan visual elemen dokumen yang ditulis dengan HTML. CSS memisahkan struktur konten (HTML) dari desain visualnya (CSS) sehingga manajemen kode menjadi jauh lebih efisien.

Ada tiga cara untuk menyematkan CSS ke dalam dokumen HTML:

### A. Inline CSS
Menulis aturan gaya langsung pada tag pembuka HTML menggunakan atribut \`style\`.
*   **Kelebihan**: Sangat cepat untuk perbaikan kecil satu elemen.
*   **Kelemahan**: Sulit dirawat, mengotori struktur HTML, dan kode tidak bisa digunakan berulang.
*   *Contoh*: \`<button style="background-color: blue; color: white; padding: 10px;">Klik Saya</button>\`

### B. Internal CSS
Menulis kode CSS di dalam elemen \`<style>\` di dalam bagian \`<head>\` dokumen HTML.
*   **Kelebihan**: Bagus untuk gaya khusus yang hanya berlaku pada satu halaman web tunggal.
*   **Kelemahan**: Menambah ukuran berkas HTML dan gaya tidak bisa digunakan di halaman web lain.
*   *Contoh*:
    \`\`\`html
    <head>
        <style>
            body { background-color: #f8fafc; }
            h1 { color: #1e3a8a; }
        </style>
    </head>
    \`\`\`

### C. External CSS (Sangat Direkomendasikan)
Menulis seluruh kode gaya di berkas terpisah dengan ekstensi \`.css\` (misalnya \`style.css\`), lalu menghubungkannya menggunakan tag \`<link>\` di dalam head HTML.
*   **Kelebihan**: Metode terbersih, performa muat halaman lebih cepat karena peramban melakukan *caching*, dan satu berkas CSS bisa menghias ribuan halaman web sekaligus!
*   *Contoh*:
    \`\`\`html
    <head>
        <link rel="stylesheet" href="style.css">
    </head>
    \`\`\`

---

## 2. Struktur Dasar CSS (Selector & Declaration Block)

Aturan penulisan CSS terdiri dari dua bagian utama: **Selector** dan **Declaration Block**.

\`\`\`css
selector {
    properti: nilai;
    properti: nilai;
}
\`\`\`

*   **Selector**: Elemen target yang ingin kita hias (tag, class, atau ID).
*   **Declaration**: Kunci properti visual yang ingin diubah diikuti nilainya (misal \`color: red;\`).
*   **Tanda Titik Koma (\`;\`)\**: Wajib diletakkan di akhir setiap deklarasi sebagai tanda pemisah aturan.

### Tipe Selector Utama:
1.  **Selector Tag / Elemen**: Menghias semua tag yang cocok.
    \`\`\`css
    p {
        line-height: 1.6;
        color: #334155;
    }
    \`\`\`
2.  **Selector Class (Awalan Titik \`.\`)**: Menghias seluruh elemen yang memiliki atribut class tersebut. Bisa digunakan berulang-ulang pada banyak tag berbeda.
    \`\`\`css
    .btn-primary {
        background-color: #3b82f6;
        border-radius: 8px;
    }
    \`\`\`
3.  **Selector ID (Awalan Pagar \`#\`)**: Menghias elemen tunggal yang memiliki atribut ID tersebut. ID bersifat unik dan hanya boleh digunakan **sekali saja** per halaman.
    \`\`\`css
    #navbar-utama {
        display: flex;
        justify-content: space-between;
    }
    \`\`\`

---

## 3. Memahami Box Model CSS secara Mendalam

Ini adalah konsep terpenting dalam CSS! Setiap elemen HTML digambarkan sebagai sebuah kotak persegi (*rectangular box*) virtual. Struktur Box Model terdiri dari (dari dalam keluar):

1.  **Content (Konten)**: Area utama tempat teks, gambar, atau data dari tag berada. Lebar dan tingginya diatur lewat \`width\` dan \`height\`.
2.  **Padding (Ruang Dalam)**: Jarak kosong antara tepi Konten dengan garis batas luar (Border). Padding berada di *dalam* elemen dan ikut diwarnai oleh latar belakang (\`background-color\`).
3.  **Border (Garis Tepi)**: Garis pembatas fisik yang mengelilingi Padding dan Konten. Ketebalan dan warnanya bisa dihias (misal \`border: 2px solid black;\`).
4.  **Margin (Ruang Luar)**: Jarak kosong di luar Border yang memisahkan elemen ini dengan kotak elemen lain di sekitarnya. Margin selalu transparan dan tidak memiliki warna.

### Trik Emas Box Sizing:
Secara default, jika Anda menetapkan lebar kotak \`width: 200px;\` lalu menambahkan \`padding: 20px;\` dan \`border: 5px;\`, lebar total fisik kotak akan membengkak menjadi \`250px\`. 

Untuk mencegah pembengkakan ukuran ini, pasang aturan berikut di bagian paling atas berkas CSS Anda agar padding dan border dihitung di *dalam* batas lebar asal:
\`\`\`css
* {
    box-sizing: border-box;
}
\`\`\`

---

## 4. Sistem Layout Modern: Flexbox & Grid

Mengatur elemen di halaman web zaman dulu sangat sulit karena harus menggunakan properti \`float\` atau \`table\`. Sekarang, kita menggunakan dua layout modern yang sangat kuat:

### A. CSS Flexbox (Tata Letak Satu Dimensi)
Sangat ideal untuk menyusun elemen dalam satu baris (horizontal) atau satu kolom (vertikal). Misalnya: bar navigasi menu, deretan kartu, atau item di dalam header.
\`\`\`css
.parent-container {
    display: flex;
    justify-content: space-between; /* Menyebar item ke kiri dan kanan */
    align-items: center;            /* Menyejajarkan item di posisi tengah vertikal */
    flex-wrap: wrap;                /* Mengizinkan item turun baris jika layar sempit */
}
\`\`\`

### B. CSS Grid (Tata Letak Dua Dimensi)
Sangat ideal untuk membuat struktur tata letak halaman yang kompleks berupa baris dan kolom sekaligus (dua dimensi). Misalnya: galeri foto grid atau pembagian layout dashboard besar.
\`\`\`css
.gallery-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* Membuat 3 kolom dengan lebar seimbang */
    grid-gap: 20px;                        /* Jarak antar sel grid sebesar 20px */
}
\`\`\`
`,
    questions: [
      {
        id: "css-q1",
        question_type: "mcq",
        question_text: "Apa kepanjangan dari CSS?",
        options: ["Cascading Style Sheets", "Creative Style System", "Computer Style Sheets", "Custom Styling Syntax"],
        correct_answer: "Cascading Style Sheets",
        code_snippet: null,
        syntax_chips: null,
        explanation: "CSS singkatan dari Cascading Style Sheets, digunakan untuk menghias tata letak dan tampilan HTML.",
        skill_category: "visual"
      },
      {
        id: "css-q2",
        question_type: "mcq",
        question_text: "Properti CSS mana yang digunakan untuk mengubah warna teks?",
        options: ["color", "text-color", "font-color", "text-style"],
        correct_answer: "color",
        code_snippet: null,
        syntax_chips: null,
        explanation: "Properti 'color' digunakan khusus untuk mewarnai teks elemen HTML.",
        skill_category: "visual"
      },
      {
        id: "css-q3",
        question_type: "mcq",
        question_text: "Bagaimana cara menargetkan elemen dengan class 'tombol' di berkas CSS external?",
        options: [".tombol", "#tombol", "tombol", "@tombol"],
        correct_answer: ".tombol",
        code_snippet: null,
        syntax_chips: null,
        explanation: "Selector untuk class ditandai dengan awalan titik (dot) '.', sedangkan '#' untuk id.",
        skill_category: "visual"
      },
      {
        id: "css-q4",
        question_type: "mcq",
        question_text: "Bagaimana cara menargetkan elemen dengan id 'konten' di berkas CSS?",
        options: ["#konten", ".konten", "konten", "*konten"],
        correct_answer: "#konten",
        code_snippet: null,
        syntax_chips: null,
        explanation: "Selector ID ditandai dengan awalan tanda pagar '#'.",
        skill_category: "visual"
      },
      {
        id: "css-q5",
        question_type: "mcq",
        question_text: "Di bagian manakah tag <link> diletakkan untuk menghubungkan berkas CSS eksternal?",
        options: ["Di dalam tag <head>", "Di bagian paling bawah tag <body>", "Di dalam tag <script>", "Setelah tag </html>"],
        correct_answer: "Di dalam tag <head>",
        code_snippet: null,
        syntax_chips: null,
        explanation: "Menghubungkan stylesheet eksternal dilakukan di bagian <head> agar browser memuat gaya sebelum merender halaman.",
        skill_category: "visual"
      },
      {
        id: "css-q6",
        question_type: "mcq",
        question_text: "Properti mana yang mengontrol jarak di DALAM kotak antara konten dan garis pembatas (border)?",
        options: ["padding", "margin", "border-width", "spacing"],
        correct_answer: "padding",
        code_snippet: null,
        syntax_chips: null,
        explanation: "Padding adalah ruang kosong di dalam elemen (di antara isi teks dan garis tepi).",
        skill_category: "visual"
      },
      {
        id: "css-q7",
        question_type: "mcq",
        question_text: "Properti mana yang mengontrol jarak di LUAR kotak antara garis pembatas dengan elemen eksternal?",
        options: ["margin", "padding", "border-spacing", "offset"],
        correct_answer: "margin",
        code_snippet: null,
        syntax_chips: null,
        explanation: "Margin adalah ruang kosong di luar elemen yang memisahkan elemen tersebut dari elemen lainnya.",
        skill_category: "visual"
      },
      {
        id: "css-q8",
        question_type: "mcq",
        question_text: "Properti CSS mana yang digunakan untuk mempertebal tulisan (menjadikan teks bold)?",
        options: ["font-weight", "font-style", "text-transform", "font-size"],
        correct_answer: "font-weight",
        code_snippet: null,
        syntax_chips: null,
        explanation: "font-weight digunakan untuk menentukan ketebalan huruf (bold, normal, 700, 400).",
        skill_category: "visual"
      },
      {
        id: "css-q9",
        question_type: "mcq",
        question_text: "Bagaimana cara membuat teks menjadi rata tengah di CSS?",
        options: ["text-align: center", "align: center", "text-position: middle", "align-content: center"],
        correct_answer: "text-align: center",
        code_snippet: null,
        syntax_chips: null,
        explanation: "text-align: center menyejajarkan teks di tengah elemen pembungkusnya.",
        skill_category: "visual"
      },
      {
        id: "css-q10",
        question_type: "mcq",
        question_text: "Nilai properti display apa yang digunakan untuk mengaktifkan tata letak Flexbox?",
        options: ["flex", "grid", "block", "inline-block"],
        correct_answer: "flex",
        code_snippet: null,
        syntax_chips: null,
        explanation: "display: flex mengaktifkan modul Flexbox satu dimensi pada container.",
        skill_category: "visual"
      },
      {
        id: "css-q11",
        question_type: "mcq",
        question_text: "Manakah properti yang digunakan untuk menentukan jenis font yang dipakai elemen?",
        options: ["font-family", "font-type", "font-style", "text-font"],
        correct_answer: "font-family",
        code_snippet: null,
        syntax_chips: null,
        explanation: "font-family menentukan daftar nama keluarga font yang akan digunakan browser.",
        skill_category: "visual"
      },
      {
        id: "css-q12",
        question_type: "mcq",
        question_text: "Bagaimana cara menghilangkan garis bawah (underline) bawaan pada tautan <a>?",
        options: ["text-decoration: none", "text-underline: none", "link-style: plain", "border: none"],
        correct_answer: "text-decoration: none",
        code_snippet: null,
        syntax_chips: null,
        explanation: "text-decoration: none digunakan untuk menghapus garis dekorasi bawaan pada elemen teks.",
        skill_category: "visual"
      },
      {
        id: "css-q13",
        question_type: "mcq",
        question_text: "Bagaimana cara membuat sudut elemen menjadi bulat (misalnya tombol atau kotak)?",
        options: ["border-radius", "border-round", "corner-radius", "border-smooth"],
        correct_answer: "border-radius",
        code_snippet: null,
        syntax_chips: null,
        explanation: "border-radius menentukan kelengkungan sudut garis luar elemen.",
        skill_category: "visual"
      },
      {
        id: "true_false",
        question_text: "Inline CSS diletakkan secara terpisah dalam berkas dengan ekstensi .css.",
        options: ["True", "False"],
        correct_answer: false,
        code_snippet: null,
        syntax_chips: null,
        explanation: "False. Inline CSS ditulis langsung pada tag pembuka HTML menggunakan atribut style.",
        skill_category: "visual"
      },
      {
        id: "true_false",
        question_text: "Setiap elemen HTML dianggap sebagai kotak persegi panjang dalam prinsip CSS Box Model.",
        options: ["True", "False"],
        correct_answer: true,
        code_snippet: null,
        syntax_chips: null,
        explanation: "True. Ini adalah konsep dasar Box Model di mana semua elemen dibungkus kotak pembatas virtual.",
        skill_category: "visual"
      },
      {
        id: "true_false",
        question_text: "Flexbox sangat bagus untuk tata letak satu dimensi (baris tunggal atau kolom tunggal).",
        options: ["True", "False"],
        correct_answer: true,
        code_snippet: null,
        syntax_chips: null,
        explanation: "True. Flexbox dirancang untuk menyelaraskan item dalam satu dimensi, sementara CSS Grid dirancang untuk dua dimensi.",
        skill_category: "visual"
      },
      {
        id: "css-blank1",
        question_type: "blank_space",
        question_text: "Lengkapi properti untuk mengaktifkan layout Flexbox:",
        options: null,
        correct_answer: ["display: flex"],
        code_snippet: ".kontainer { ___ ; justify-content: center; }",
        syntax_chips: ["display: flex", "display: grid", "display: block", "display: inline"],
        explanation: "display: flex menginisialisasi container menjadi Flexbox.",
        skill_category: "visual"
      },
      {
        id: "css-blank2",
        question_type: "blank_space",
        question_text: "Lengkapi properti untuk melengkungkan sudut sudut elemen kotak:",
        options: null,
        correct_answer: ["border-radius"],
        code_snippet: ".tombol { ___: 8px; }",
        syntax_chips: ["border-radius", "border-width", "padding-radius", "margin-radius"],
        explanation: "border-radius memberi efek kelengkungan lingkaran pada sudut sudut elemen.",
        skill_category: "visual"
      },
      {
        id: "css-sc1",
        question_type: "short_coding",
        question_text: "Tuliskan kode CSS lengkap untuk menetapkan warna teks menjadi hijau (green):",
        options: null,
        correct_answer: "color: green;",
        code_snippet: null,
        syntax_chips: null,
        explanation: "Format penulisan deklarasi CSS adalah properti diikuti titik dua (:), lalu nilai, lalu titik koma (;).",
        skill_category: "visual"
      },
      {
        id: "css-sc2",
        question_type: "short_coding",
        question_text: "Tuliskan kode CSS lengkap untuk menetapkan warna latar belakang menjadi biru (blue):",
        options: null,
        correct_answer: "background-color: blue;",
        code_snippet: null,
        syntax_chips: null,
        explanation: "Properti background-color digunakan untuk mewarnai bidang latar belakang elemen.",
        skill_category: "visual"
      }
    ]
  },

  // Responsive Design
  "Responsive Design": {
    title: "Responsive Design",
    markdownContent: `
# Panduan Lengkap & Mendalam: Responsive Web Design untuk Era Multi-Perangkat

Saat ini, lebih dari **60% lalu lintas internet global** berasal dari perangkat seluler (smartphone dan tablet). Mengembangkan website yang hanya terlihat bagus di layar monitor desktop besar adalah kegagalan fatal. 

Website modern wajib menerapkan **Responsive Web Design (RWD)** agar tampilannya otomatis menyesuaikan ukuran layar apa pun secara dinamis, cerdas, dan fungsional tanpa merusak susunan antarmuka.

---

## 1. Apa itu Responsive Web Design (RWD)?

Responsive Web Design adalah sebuah metodologi perancangan web di mana halaman web dirancang untuk beradaptasi dengan lingkungan pembacaan pengguna (lebar layar, tinggi layar, resolusi warna, serta orientasi portrait/landscape) secara otomatis.

Tiga pilar teknis utama dari RWD adalah:
1.  **Fluid Grids (Kisi Fleksibel)**: Menghindari penggunaan ukuran piksel kaku (\`px\`) dan menggantinya dengan unit relatif berbasis persentase (\`%\`), em, rem, atau pecahan grid (\`fr\`).
2.  **Flexible Media (Media Dinamis)**: Memastikan gambar, video, dan kanvas dapat menyusut atau membesar mengikuti batas dimensi kontainer pembungkusnya.
3.  **Media Queries (Kueri Media)**: Mengaplikasikan aturan gaya CSS yang berbeda secara kondisional berdasarkan lebar area pandang (*viewport*) aktif.

---

## 2. Meta Viewport Tag: Langkah Pertama yang Kritis

Jika Anda tidak menambahkan tag meta viewport di dokumen HTML Anda, browser seluler (seperti Safari di iPhone atau Chrome di Android) akan berasumsi halaman Anda adalah halaman desktop biasa. Browser HP kemudian akan merender halaman web secara sangat lebar (biasanya 980px) lalu memperkecilnya secara ekstrem sehingga teks menjadi sangat kecil dan tidak terbaca.

Pastikan tag berikut selalu ada di dalam bagian \`<head>\` HTML Anda:

\`\`\`html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
\`\`\`

### Makna Atribut Viewport:
*   **\`width=device-width\`**: Menginstruksikan browser seluler untuk menetapkan lebar area pandang (viewport) web agar sama persis dengan lebar layar fisik perangkat (misal 390px untuk iPhone 13).
*   **\`initial-scale=1.0\`**: Menetapkan tingkat zoom awal ketika halaman pertama kali dimuat ke skala normal 1:1, mencegah browser melakukan zoom-out otomatis yang mengganggu.

---

## 3. Satuan Ukuran Relatif vs. Absolut

Dalam responsive design, pemilihan unit CSS sangat menentukan fleksibilitas tata letak:

*   **Piksel (\`px\`) [Absolut]**: Ukuran tetap yang tidak berubah sama sekali di layar manapun. Sangat baik digunakan untuk ketebalan garis pembatas kecil (\`border: 1px;\`).
*   **Persentase (\`%\`) [Relatif]**: Menentukan ukuran elemen relatif terhadap ukuran kontainer induknya. Contoh: \`width: 50%;\` membuat elemen selalu mengambil setengah lebar kontainernya.
*   **\`em\` & \`rem\` [Relatif]**:
    *   \`rem\` (Root EM): Mengikuti ukuran font dari elemen HTML paling atas (root). Jika root HTML diatur \`16px\`, maka \`1rem = 16px\`, \`2rem = 32px\`. Sangat direkomendasikan untuk ukuran font, margin, dan padding demi aksesibilitas.
    *   \`em\`: Mengikuti ukuran font dari elemen induk terdekatnya.
*   **\`vw\` & \`vh\` (Viewport Units) [Relatif]**:
    *   \`1vw\`: 1% dari lebar total layar browser.
    *   \`1vh\`: 1% dari tinggi total layar browser.
    *   \`100vh\` membuat tinggi elemen pas setinggi layar perangkat (bagus untuk hero section pembuka).

---

## 4. Media Queries dan Cara Menentukan Breakpoints

Media Queries adalah fitur CSS3 paling revolusioner yang mendeteksi karakteristik media layar pengguna untuk menerapkan gaya CSS tertentu secara kondisional.

### Contoh Implementasi Alur Mobile-First:
\`\`\`css
/* 1. Gaya CSS Dasar untuk HP (Mobile-First) */
.card-container {
    display: flex;
    flex-direction: column; /* Kartu tersusun menurun ke bawah di layar HP */
    padding: 10px;
}

/* 2. Gaya CSS khusus untuk Tablet (Lebar layar mulai dari 768px ke atas) */
@media (min-width: 768px) {
    .card-container {
        flex-direction: row; /* Kartu bersanding horizontal di tablet */
        padding: 20px;
    }
}

/* 3. Gaya CSS khusus untuk Desktop besar (Lebar layar mulai dari 1024px ke atas) */
@media (min-width: 1024px) {
    .card-container {
        max-width: 1200px;
        margin: 0 auto; /* Tengah-kan kontainer di monitor besar */
    }
}
\`\`\`

### Standar Breakpoints Industri (Dicoding & Global):
*   \`max-width: 480px\`: Layar smartphone kecil / potret.
*   \`min-width: 481px\` dan \`max-width: 768px\`: Tablet potret atau smartphone landscape.
*   \`min-width: 769px\` dan \`max-width: 1024px\`: Tablet landscape, netbook, atau laptop kecil.
*   \`min-width: 1025px\` ke atas: Monitor desktop komputer normal atau TV.

---

## 5. Membuat Media/Gambar Fleksif (Fluid Media)
Jika sebuah gambar berukuran \`width: 800px;\` dimuat di layar HP berlebar \`360px\`, gambar tersebut akan meluap (*overflow*) keluar layar dan memicu munculnya bar scroll horizontal yang mengganggu estetika.

Untuk menghindari masalah ini, terapkan aturan emas CSS berikut untuk semua media visual Anda:
\`\`\`css
img, video, iframe {
    max-width: 100%;
    height: auto;
}
\`\`\`
*   \`max-width: 100%\`: Memaksa gambar menyusut jika layar perangkat lebih kecil dari lebar asli gambar, tetapi mencegah gambar membesar pecah melebihi dimensi aslinya jika layar sangat lebar.
*   \`height: auto\`: Menjaga aspek rasio perbandingan tinggi dan lebar gambar tetap proporsional agar gambar tidak gepeng.
`,
    questions: [
      {
        id: "resp-q1",
        question_type: "mcq",
        question_text: "Apa tujuan utama dari Responsive Web Design?",
        options: ["Menyesuaikan tampilan web secara otomatis di semua ukuran layar", "Membuat halaman web memuat gambar lebih cepat", "Mengenkripsi data pengguna di server seluler", "Memaksa pengguna mengunduh aplikasi seluler"],
        correct_answer: "Menyesuaikan tampilan web secara otomatis di semua ukuran layar",
        code_snippet: null,
        syntax_chips: null,
        explanation: "RWD bertujuan agar tata letak web fleksibel mengikuti ukuran viewport perangkat apapun.",
        skill_category: "visual"
      },
      {
        id: "resp-q2",
        question_type: "mcq",
        question_text: "Tag meta apa yang wajib dipasang di <head> agar responsive design dapat berjalan di HP?",
        options: ["<meta name='viewport'>", "<meta name='responsive'>", "<meta name='screen-size'>", "<meta name='mobile-first'>"],
        correct_answer: "<meta name='viewport'>",
        code_snippet: null,
        syntax_chips: null,
        explanation: "Tag meta viewport memberitahu browser cara mengontrol dimensi dan skala area tampilan web.",
        skill_category: "visual"
      },
      {
        id: "resp-q3",
        question_type: "mcq",
        question_text: "Fitur CSS manakah yang digunakan untuk menulis gaya berbeda berdasarkan kondisi media layar?",
        options: ["@media query", "@screen style", "@device rule", "@viewport select"],
        correct_answer: "@media query",
        code_snippet: null,
        syntax_chips: null,
        explanation: "Media query (@media) mendeteksi tipe dan karakteristik media seperti resolusi atau lebar layar.",
        skill_category: "visual"
      },
      {
        id: "resp-q4",
        question_type: "mcq",
        question_text: "Manakah nilai properti gambar yang membuatnya fleksibel dan tidak pecah melampaui kontainer induk?",
        options: ["max-width: 100%; height: auto;", "width: 100vw; height: 100vh;", "width: auto; height: 100%;", "image-size: responsive;"],
        correct_answer: "max-width: 100%; height: auto;",
        code_snippet: null,
        syntax_chips: null,
        explanation: "max-width: 100% membatasi gambar agar paling lebar sama dengan kontainernya, height: auto menjaga rasio aspek gambar.",
        skill_category: "visual"
      },
      {
        id: "resp-q5",
        question_type: "mcq",
        question_text: "Satuan lebar manakah yang paling bersifat dinamis dan responsif dibandingkan piksel absolut?",
        options: ["%", "px", "pt", "in"],
        correct_answer: "%",
        code_snippet: null,
        syntax_chips: null,
        explanation: "Persentase '%' adalah satuan relatif yang menyesuaikan ukuran elemen terhadap lebar elemen induknya.",
        skill_category: "visual"
      },
      {
        id: "resp-q6",
        question_type: "mcq",
        question_text: "Apa arti dari breakpoints di dalam CSS responsive layout?",
        options: ["Batas lebar piksel di mana aturan CSS baru mulai diterapkan melalui media query", "Waktu jeda server saat memuat script", "Fungsi untuk merusak susunan grid secara acak", "Sistem keamanan penahan bot"],
        correct_answer: "Batas lebar piksel di mana aturan CSS baru mulai diterapkan melalui media query",
        code_snippet: null,
        syntax_chips: null,
        explanation: "Breakpoints menentukan batas ukuran layar (misalnya 768px) untuk mengubah susunan tata letak.",
        skill_category: "visual"
      },
      {
        id: "resp-q7",
        question_type: "mcq",
        question_text: "Pendekatan 'Mobile-First' dalam pengembangan CSS berarti:",
        options: ["Menulis kode dasar untuk layar terkecil (HP) dahulu, lalu memakai media query untuk desktop", "Membuat aplikasi android terlebih dahulu baru iOS", "Menulis kode CSS desktop terlebih dahulu lalu mengecilkan", "Menghapus seluruh elemen visual desktop"],
        correct_answer: "Menulis kode dasar untuk layar terkecil (HP) dahulu, lalu memakai media query untuk desktop",
        code_snippet: null,
        syntax_chips: null,
        explanation: "Mobile-First mengoptimalkan performa seluler terlebih dahulu lalu menumpuk gaya untuk layar yang lebih lebar.",
        skill_category: "visual"
      },
      {
        id: "resp-q8",
        question_type: "mcq",
        question_text: "Apakah singkatan dari RWD dalam perancangan situs modern?",
        options: ["Responsive Web Design", "Rapid Web Development", "Realtime Web Database", "Robust Widget Deployment"],
        correct_answer: "Responsive Web Design",
        code_snippet: null,
        syntax_chips: null,
        explanation: "RWD singkatan dari Responsive Web Design.",
        skill_category: "visual"
      },
      {
        id: "resp-q9",
        question_type: "mcq",
        question_text: "Dalam grid sistem responsif, properti apa yang paling cocok untuk menentukan grid kolom dinamis?",
        options: ["grid-template-columns", "grid-align", "grid-flex", "grid-row-gap"],
        correct_answer: "grid-template-columns",
        code_snippet: null,
        syntax_chips: null,
        explanation: "grid-template-columns mendefinisikan jumlah dan ukuran kolom di dalam tata letak CSS Grid.",
        skill_category: "visual"
      },
      {
        id: "resp-q10",
        question_type: "mcq",
        question_text: "Satuan 100vw dalam CSS mewakili apa?",
        options: ["100% dari lebar layar browser (Viewport Width)", "100% dari lebar elemen induk", "100 piksel khusus seluler", "100 karakter tulisan"],
        correct_answer: "100% dari lebar layar browser (Viewport Width)",
        code_snippet: null,
        syntax_chips: null,
        explanation: "vw mewakili Viewport Width (lebar area pandang layar aktif). 100vw berarti selebar penuh layar.",
        skill_category: "visual"
      },
      {
        id: "resp-q11",
        question_type: "mcq",
        question_text: "Satuan 100vh dalam CSS mewakili apa?",
        options: ["100% dari tinggi layar browser (Viewport Height)", "100% dari tinggi halaman web total", "100 piksel tinggi absolut", "100 kali volume layar"],
        correct_answer: "100% dari tinggi layar browser (Viewport Height)",
        code_snippet: null,
        syntax_chips: null,
        explanation: "vh mewakili Viewport Height. 100vh berarti setinggi penuh layar browser.",
        skill_category: "visual"
      },
      {
        id: "resp-q12",
        question_type: "mcq",
        question_text: "Apa kegunaan utama dari flex-wrap: wrap;?",
        options: ["Membiarkan elemen flex turun ke baris baru ketika ruang horizontal habis", "Menyembunyikan teks yang meluap", "Membungkus elemen dengan warna latar", "Menghapus properti flexbox"],
        correct_answer: "Membiarkan elemen flex turun ke baris baru ketika ruang horizontal habis",
        code_snippet: null,
        syntax_chips: null,
        explanation: "flex-wrap: wrap memaksa item flex turun ke baris baru demi menjaga responsivitas ukuran elemen.",
        skill_category: "visual"
      },
      {
        id: "resp-q13",
        question_type: "mcq",
        question_text: "Atribut meta viewport initial-scale=1.0 secara khusus mengatur:",
        options: ["Skala perbesaran (zoom) awal saat dimuat", "Kecepatan muat halaman", "Kualitas gambar default", "Ketinggian container utama"],
        correct_answer: "Skala perbesaran (zoom) awal saat dimuat",
        code_snippet: null,
        syntax_chips: null,
        explanation: "initial-scale=1.0 menetapkan pembesaran normal 1:1 tanpa zoom bawaan dari browser mobile.",
        skill_category: "visual"
      },
      {
        id: "true_false",
        question_text: "Metode Media Query hanya dapat menyaring lebar layar dan tidak bisa menyaring orientasi layar portrait/landscape.",
        options: ["True", "False"],
        correct_answer: false,
        code_snippet: null,
        syntax_chips: null,
        explanation: "False. Media Query bisa memfilter berdasarkan orientasi seperti @media (orientation: landscape).",
        skill_category: "visual"
      },
      {
        id: "true_false",
        question_text: "Satuan px sangat direkomendasikan untuk layout yang sangat adaptif di HP.",
        options: ["True", "False"],
        correct_answer: false,
        code_snippet: null,
        syntax_chips: null,
        explanation: "False. Piksel 'px' bersifat absolut dan kaku, sementara RWD mengutamakan persen (%) atau em/rem.",
        skill_category: "visual"
      },
      {
        id: "true_false",
        question_text: "Desain Mobile-First memicu pemuatan data internet yang lebih hemat pada perangkat seluler.",
        options: ["True", "False"],
        correct_answer: true,
        code_snippet: null,
        syntax_chips: null,
        explanation: "True. Dengan Mobile-First, gambar dan script berat desktop tidak langsung dimuat oleh HP, sehingga menghemat kuota data.",
        skill_category: "visual"
      },
      {
        id: "resp-blank1",
        question_type: "blank_space",
        question_text: "Lengkapi sintaks media query untuk layar dengan lebar maksimal 768px:",
        options: null,
        correct_answer: ["@media"],
        code_snippet: "___ (max-width: 768px) { .header { background: red; } }",
        syntax_chips: ["@media", "@screen", "@device", "@responsive"],
        explanation: "@media adalah deklarasi CSS untuk memulai blok kueri media.",
        skill_category: "visual"
      },
      {
        id: "resp-blank2",
        question_type: "blank_space",
        question_text: "Lengkapi meta tag viewport di bawah ini:",
        options: null,
        correct_answer: ["viewport"],
        code_snippet: "<meta name=\"___\" content=\"width=device-width, initial-scale=1.0\">",
        syntax_chips: ["viewport", "screen", "layout", "view-size"],
        explanation: "Nama metadata ini adalah 'viewport' yang bertugas mengendalikan area pandang peramban web.",
        skill_category: "visual"
      },
      {
        id: "resp-sc1",
        question_type: "short_coding",
        question_text: "Tuliskan CSS lengkap untuk membatasi lebar gambar maksimal 100% dari induknya:",
        options: null,
        correct_answer: "max-width: 100%;",
        code_snippet: null,
        syntax_chips: null,
        explanation: "max-width: 100% adalah instruksi dasar pencegah gambar melebar melewati kontainer.",
        skill_category: "visual"
      },
      {
        id: "resp-sc2",
        question_type: "short_coding",
        question_text: "Tuliskan CSS lengkap untuk membuat tinggi gambar menyesuaikan otomatis (auto):",
        options: null,
        correct_answer: "height: auto;",
        code_snippet: null,
        syntax_chips: null,
        explanation: "height: auto memastikan rasio tinggi gambar tetap proporsional sesuai dengan lebar barunya.",
        skill_category: "visual"
      }
    ]
  },

  // JavaScript ES6+
  "JavaScript ES6+": {
    title: "JavaScript ES6+",
    markdownContent: `
# Panduan Lengkap & Mendalam: JavaScript ES6+ untuk Aplikasi Web Skala Besar

Jika HTML menyusun tiang pancang fisik dan CSS melapisinya dengan dekorasi visual, maka **JavaScript** adalah daya dorong utama yang menggerakkan seluruh sistem halaman! JavaScript menghidupkan elemen kaku, menangani klik tombol interaktif, mengirim formulir secara asinkron ke server, hingga merender komponen antarmuka yang dinamis secara langsung.

ECMAScript 6 (ES6), dirilis secara resmi pada tahun 2015, adalah tonggak perubahan paling revolusioner dalam sejarah JavaScript. ES6 memperkenalkan banyak fitur canggih yang membuat penulisan kode menjadi jauh lebih ringkas, aman, terstruktur, dan modern.

---

## 1. Deklarasi Variabel Modern: \`let\` & \`const\`

Sebelum hadirnya ES6, kita menggunakan kata kunci \`var\` untuk membuat variabel. Namun, \`var\` memiliki beberapa kelemahan fundamental:
1.  **Function Scope**: Variabel \`var\` tidak peduli dengan batas blok kurung siku \`{}\` (seperti blok \`if\` atau \`for\`), sehingga berpotensi besar memicu tabrakan nama variabel (*variable leaking*).
2.  **Hoisting**: Variabel \`var\` bisa diakses sebelum baris deklarasinya ditulis, yang sering kali menghasilkan bug bernilai \`undefined\` yang sulit dilacak.

### Solusi ES6:
*   **\`let\`**: Digunakan untuk mendeklarasikan variabel yang nilainya bisa diubah (*re-assigned*) di kemudian hari. Sangat cocok untuk penghitung loop atau penampung status yang dinamis.
*   **\`const\`** (Constant): Digunakan untuk variabel yang nilainya mutlak tetap dan tidak dapat ditimpa kembali setelah dideklarasikan pertama kali.
*   *Catatan Emas*: Selalu gunakan \`const\` secara default. Gunakan \`let\` hanya jika Anda tahu persis nilai variabel tersebut akan berubah di alur berikutnya.

\`\`\`javascript
const apiEndpoint = "https://api.codemode.com/v1"; // Nilai mutlak konstan
let userScore = 100;
userScore = 150; // Valid dan aman

// apiEndpoint = "https://api.lain.com"; // Error: Assignment to constant variable!
\`\`\`

---

## 2. Arrow Functions (\`=>\`)

Arrow functions menyediakan cara baru untuk menulis fungsi dengan sintaksis yang jauh lebih singkat dan bersih, serta menghilangkan keharusan menulis kata kunci \`function\` dan \`return\` untuk ekspresi satu baris.

\`\`\`javascript
// Fungsi Tradisional (ES5)
function hitungLuas(panjang, lebar) {
    return panjang * lebar;
}

// Arrow Function Modern (ES6)
const hitungLuasES6 = (panjang, lebar) => panjang * lebar; // Return secara implisit!
\`\`\`

### Aturan Ringkas Arrow Function:
*   Jika fungsi hanya menerima **satu parameter**, kurung lingkaran \`()\` boleh dihilangkan: \`const kuadrat = x => x * x;\`
*   Jika isi fungsi hanya berupa **satu ekspresi pengembalian nilai**, kurung kurawal \`{}\` dan kata kunci \`return\` tidak perlu ditulis (implisit return).
*   **Lexical \`this\`**: Arrow function tidak mengikat konteks \`this\` sendiri. Kata kunci \`this\` di dalam arrow function akan merujuk ke lingkup luar eksternalnya, yang sangat membantu saat menulis kode React atau manipulasi DOM.

---

## 3. Template Literals

Menggabungkan teks string dengan nilai variabel (*string concatenation*) menggunakan operator plus (\`+\`) sangat melelahkan dan rentan memicu bug spasi atau kutip terpotong.

Template Literals memecahkan masalah ini dengan menggunakan karakter **backtick (\` \` \`)** dan placeholder ekspresi **\`\${variabel}\`**:

\`\`\`javascript
const namaUser = "Nabila";
const xpDiperoleh = 450;

// Cara Lama (ES5)
console.log("Selamat " + namaUser + ", Anda mendapatkan " + xpDiperoleh + " XP hari ini!");

// Cara Modern (ES6 Template Literals)
console.log(\`Selamat \${namaUser}, Anda mendapatkan \${xpDiperoleh} XP hari ini!\`);
\`\`\`
Template literals juga secara alami mendukung penulisan string multibaris tanpa perlu menyisipkan karakter \`\\n\` secara manual.

---

## 4. Destructuring Assignment (Objek & Array)

Destructuring memudahkan kita mengekstrak nilai-nilai dari properti objek atau elemen array secara instan ke dalam variabel-variabel baru yang independen.

\`\`\`javascript
const student = {
    username: "coder_id",
    xp: 2500,
    skills: ["HTML", "CSS", "JS"]
};

// Cara Lama (ES5)
const usernameLama = student.username;
const xpLama = student.xp;

// Cara Modern (ES6 Destructuring Objek)
const { username, xp, skills } = student;
console.log(username); // coder_id
console.log(skills[0]); // HTML
\`\`\`

---

## 5. Metode Array Modern: \`map()\`, \`filter()\`, & \`reduce()\`

Dibandingkan menggunakan loop kaku seperti \`for\` biasa untuk memproses deretan data, ES6 menyediakan metode pemrograman fungsional (*functional programming methods*) yang sangat elegan pada array:

### A. \`map()\`
Memproses setiap elemen array dan mengembalikan array baru dengan ukuran yang sama persis berisi hasil transformasi data.
\`\`\`javascript
const hargaDalamDolar = [10, 20, 30];
const hargaDalamRupiah = hargaDalamDolar.map(usd => usd * 15000);
console.log(hargaDalamRupiah); // [150000, 300000, 450000]
\`\`\`

### B. \`filter()\`
Menyaring data array dan mengembalikan array baru yang hanya berisi elemen-elemen yang lolos uji kondisi kebenaran (*boolean truth test*).
\`\`\`javascript
const nilaiUjian = [55, 80, 45, 90, 75];
const nilaiLulus = nilaiUjian.filter(skor => skor >= 70);
console.log(nilaiLulus); // [80, 90, 75]
\`\`\`
`,
    questions: [
      {
        id: "js-q1",
        question_type: "mcq",
        question_text: "Kata kunci mana yang digunakan di ES6 untuk mendeklarasikan variabel yang nilainya bisa diubah?",
        options: ["let", "const", "var", "static"],
        correct_answer: "let",
        code_snippet: null,
        syntax_chips: null,
        explanation: "let memiliki block scope dan nilainya dapat ditimpa kembali secara dinamis.",
        skill_category: "logic"
      },
      {
        id: "js-q2",
        question_type: "mcq",
        question_text: "Kata kunci mana yang mendeklarasikan variabel konstanta dengan nilai tetap yang tidak dapat diubah?",
        options: ["const", "let", "var", "immutable"],
        correct_answer: "const",
        code_snippet: null,
        syntax_chips: null,
        explanation: "const mendefinisikan nilai konstan yang hanya bisa dibaca (read-only) setelah inisialisasi pertama.",
        skill_category: "logic"
      },
      {
        id: "js-q3",
        question_type: "mcq",
        question_text: "Sintaksis panah (=>) di ES6 digunakan untuk membuat apa?",
        options: ["Arrow Function", "Pointer Variable", "Conditional Operator", "Array Indexing"],
        correct_answer: "Arrow Function",
        code_snippet: null,
        syntax_chips: null,
        explanation: "Arrow function menyediakan cara ringkas menulis fungsi anonim menggunakan operator panah =>.",
        skill_category: "logic"
      },
      {
        id: "js-q4",
        question_type: "mcq",
        question_text: "Karakter pembatas (delimiter) manakah yang digunakan untuk menulis Template Literals?",
        options: ["Backtick ( ` )", "Kutip ganda ( \" )", "Kutip tunggal ( ' )", "Garis miring ( / )"],
        correct_answer: "Backtick ( ` )",
        code_snippet: null,
        syntax_chips: null,
        explanation: "Template literals menggunakan karakter backtick ( ` ) di sisi kiri dan kanan string.",
        skill_category: "logic"
      },
      {
        id: "js-q5",
        question_type: "mcq",
        question_text: "Manakah cara menyisipkan variabel di dalam Template Literals?",
        options: ["${variabel}", "{{variabel}}", "#variabel", "+variabel+"],
        correct_answer: "${variabel}",
        code_snippet: null,
        syntax_chips: null,
        explanation: "Ekspresi variabel disisipkan ke dalam string template menggunakan penulisan ${namaVariabel}.",
        skill_category: "logic"
      },
      {
        id: "js-q6",
        question_type: "mcq",
        question_text: "Apa output dari kode berikut? const arr = [1,2]; const [x,y] = arr; console.log(x);",
        options: ["1", "2", "undefined", "[1,2]"],
        correct_answer: "1",
        code_snippet: null,
        syntax_chips: null,
        explanation: "Menggunakan destructuring array, variabel x dipetakan ke elemen indeks ke-0, yaitu 1.",
        skill_category: "logic"
      },
      {
        id: "js-q7",
        question_type: "mcq",
        question_text: "Metode array ES6 manakah yang membuat array baru dengan menyaring elemen berdasarkan kondisi kebenaran?",
        options: ["filter", "map", "forEach", "find"],
        correct_answer: "filter",
        code_snippet: null,
        syntax_chips: null,
        explanation: "array.filter() membuat array baru dengan menyertakan elemen yang memenuhi kriteria pengujian.",
        skill_category: "logic"
      },
      {
        id: "js-q8",
        question_type: "mcq",
        question_text: "Metode array ES6 manakah yang membuat array baru dengan memproses transformasi untuk setiap elemen?",
        options: ["map", "filter", "reduce", "some"],
        correct_answer: "map",
        code_snippet: null,
        syntax_chips: null,
        explanation: "array.map() mengeksekusi fungsi callback pada tiap elemen dan menampung hasilnya di array baru.",
        skill_category: "logic"
      },
      {
        id: "js-q9",
        question_type: "mcq",
        question_text: "Manakah cara membuat object baru dengan menggabungkan properti object lama memakai Spread Operator?",
        options: ["{...obj}", "[...obj]", "Spread(obj)", "merge(obj)"],
        correct_answer: "{...obj}",
        code_snippet: null,
        syntax_chips: null,
        explanation: "Spread operator (...) menyalin isi properti object lama ke dalam kurung kurawal object baru.",
        skill_category: "logic"
      },
      {
        id: "js-q10",
        question_type: "mcq",
        question_text: "Apakah singkatan dari ES6 dalam penamaan standar JavaScript?",
        options: ["ECMAScript 6", "ElasticScript 6", "EngineScript 6", "ElementStyle 6"],
        correct_answer: "ECMAScript 6",
        code_snippet: null,
        syntax_chips: null,
        explanation: "ES6 singkatan resmi dari ECMAScript 2015 / edisi ke-6.",
        skill_category: "logic"
      },
      {
        id: "js-q11",
        question_type: "mcq",
        question_text: "Tipe data baru ES6 yang merepresentasikan objek asynchronous yang akan selesai di masa depan adalah:",
        options: ["Promise", "Observable", "Thread", "Callback"],
        correct_answer: "Promise",
        code_snippet: null,
        syntax_chips: null,
        explanation: "Promise digunakan untuk menangani operasi asinkron (misal fetch data dari server) di JavaScript.",
        skill_category: "logic"
      },
      {
        id: "js-q12",
        question_type: "mcq",
        question_text: "Metode impor modul di ES6 menggunakan perintah apa?",
        options: ["import", "require", "include", "load"],
        correct_answer: "import",
        code_snippet: null,
        syntax_chips: null,
        explanation: "ES6 menggunakan kata kunci 'import' untuk mengambil modul luar, sementara require dipakai di CommonJS.",
        skill_category: "logic"
      },
      {
        id: "js-q13",
        question_type: "mcq",
        question_text: "Bagaimana cara menentukan parameter default pada fungsi di ES6?",
        options: ["function myFunc(x = 10) { ... }", "function myFunc(x) { x || 10 }", "function myFunc(x == 10) { ... }", "myFunc(x ? 10)"],
        correct_answer: "function myFunc(x = 10) { ... }",
        code_snippet: null,
        syntax_chips: null,
        explanation: "ES6 mengizinkan inisialisasi langsung parameter fungsi jika tidak diisi saat pemanggilan.",
        skill_category: "logic"
      },
      {
        id: "true_false",
        question_text: "Variabel yang dibuat menggunakan const sama sekali tidak bisa diubah isinya, meskipun ia bertipe Array atau Objek.",
        options: ["True", "False"],
        correct_answer: false,
        code_snippet: null,
        syntax_chips: null,
        explanation: "False. Referensi memorinya tetap konstan, tetapi konten internal properti objek atau elemen array const masih bisa diubah (di-mutate).",
        skill_category: "logic"
      },
      {
        id: "true_false",
        question_text: "Arrow function tidak memiliki binding mandiri terhadap kata kunci 'this'.",
        options: ["True", "False"],
        correct_answer: true,
        code_snippet: null,
        syntax_chips: null,
        explanation: "True. Arrow function mewarisi context 'this' dari luar cakupannya secara leksikal.",
        skill_category: "logic"
      },
      {
        id: "true_false",
        question_text: "let dan const tunduk pada aturan Block Scope (dibedakan berdasarkan kurung kurawal pembungkus).",
        options: ["True", "False"],
        correct_answer: true,
        code_snippet: null,
        syntax_chips: null,
        explanation: "True. Variabel let dan const hanya hidup di dalam blok {...} tempat ia dideklarasikan.",
        skill_category: "logic"
      },
      {
        id: "js-blank1",
        question_type: "blank_space",
        question_text: "Lengkapi sintaks arrow function berikut:",
        options: null,
        correct_answer: ["=>"],
        code_snippet: "const tambah = (a, b) ___ a + b;",
        syntax_chips: ["=>", "->", ">>", "~>"],
        explanation: "Arrow function menggunakan simbol panah ganda =>.",
        skill_category: "logic"
      },
      {
        id: "js-blank2",
        question_type: "blank_space",
        question_text: "Lengkapi metode impor di bawah ini:",
        options: null,
        correct_answer: ["import"],
        code_snippet: "___ { useState } from 'react';",
        syntax_chips: ["import", "require", "fetch", "load"],
        explanation: "Perintah 'import' dipakai untuk mendatangkan fungsi/komponen dari package lain di ES6.",
        skill_category: "logic"
      },
      {
        id: "js-sc1",
        question_type: "short_coding",
        question_text: "Tuliskan inisialisasi variabel konstan 'pi' bernilai 3.14:",
        options: null,
        correct_answer: "const pi = 3.14;",
        code_snippet: null,
        syntax_chips: null,
        explanation: "Variabel dengan nilai tetap wajib menggunakan const.",
        skill_category: "logic"
      },
      {
        id: "js-sc2",
        question_type: "short_coding",
        question_text: "Tuliskan literal string lengkap 'Halo Budi' menggunakan template literal dengan menyisipkan variabel 'nama':",
        options: null,
        correct_answer: "`Halo ${nama}`",
        code_snippet: null,
        syntax_chips: null,
        explanation: "Template literal menggunakan tanda petik terbalik ` dan sintaks ${} untuk evaluasi variabel.",
        skill_category: "logic"
      }
    ]
  }
};

// Fallsback question generator for lessons that don't have pre-authored questions
export const generateQuestionsForLesson = (lessonTitle: string): LocalQuestion[] => {
  const normalizedTitle = lessonTitle.trim();
  if (lessonMaterials[normalizedTitle]) {
    return lessonMaterials[normalizedTitle].questions;
  }

  // Smart fallback dynamic generator
  const generated: LocalQuestion[] = [];
  const categories: Record<string, string> = {
    "CSS": "visual",
    "Tailwind": "visual",
    "Design": "visual",
    "UI": "visual",
    "Responsive": "visual",
    "Database": "database",
    "SQL": "database",
    "Security": "security",
    "OWASP": "security",
    "Auth": "security"
  };

  let category = "logic";
  for (const key in categories) {
    if (normalizedTitle.includes(key)) {
      category = categories[key];
      break;
    }
  }

  // Generate 20 questions based on lesson name
  for (let i = 1; i <= 20; i++) {
    const qNum = i;
    if (qNum % 4 === 1) {
      generated.push({
        id: `${normalizedTitle}-fallback-q${qNum}`,
        question_type: "mcq",
        question_text: `[Pertanyaan MCQ ${qNum}] Manakah pernyataan yang paling tepat terkait topik "${normalizedTitle}"?`,
        options: [
          `Pernyataan A - Ini adalah jawaban yang paling tepat dan benar untuk materi "${normalizedTitle}".`,
          `Pernyataan B - Alternatif jawaban kurang tepat yang sering mengecoh.`,
          `Pernyataan C - Jawaban salah yang tidak relevan dengan konsep ini.`,
          `Pernyataan D - Pilihan pengisi yang bertentangan dengan standar baku.`
        ],
        correct_answer: `Pernyataan A - Ini adalah jawaban yang paling tepat dan benar untuk materi "${normalizedTitle}".`,
        code_snippet: null,
        syntax_chips: null,
        explanation: `Penjelasan untuk pertanyaan ke-${qNum}. Konsep utama "${normalizedTitle}" menekankan pada pentingnya pemahaman dasar yang kokoh.`,
        skill_category: category
      });
    } else if (qNum % 4 === 2) {
      generated.push({
        id: `${normalizedTitle}-fallback-q${qNum}`,
        question_type: "true_false",
        question_text: `[Benar/Salah ${qNum}] Apakah konsep dasar dari "${normalizedTitle}" bersifat wajib diimplementasikan pada proyek modern?`,
        options: ["True", "False"],
        correct_answer: true,
        code_snippet: null,
        syntax_chips: null,
        explanation: `Benar. Hampir seluruh best practice modern menuntut penerapan standar "${normalizedTitle}" demi optimalisasi performa.`,
        skill_category: category
      });
    } else if (qNum % 4 === 3) {
      generated.push({
        id: `${normalizedTitle}-fallback-q${qNum}`,
        question_type: "blank_space",
        question_text: `[Isi Rumpang ${qNum}] Lengkapi bagian kode rumpang untuk menyelesaikan prosedur "${normalizedTitle}":`,
        options: null,
        correct_answer: ["resolve"],
        code_snippet: `function handleTarget() {\n  return ___(true);\n}`,
        syntax_chips: ["resolve", "reject", "break", "cancel"],
        explanation: "Fungsi callback memerlukan penanganan resolusi status agar operasi selesai dengan baik.",
        skill_category: category
      });
    } else {
      generated.push({
        id: `${normalizedTitle}-fallback-q${qNum}`,
        question_type: "short_coding",
        question_text: `[Tulis Kode ${qNum}] Tuliskan instruksi JavaScript/CSS untuk menaruh nilai kembalian true:`,
        options: null,
        correct_answer: "return true;",
        code_snippet: null,
        syntax_chips: null,
        explanation: "return true; mengembalikan nilai boolean benar kepada pemanggil fungsi.",
        skill_category: category
      });
    }
  }

  return generated;
};

// Fallsback Indonesian lesson material content generator based on title
export const getRichMaterialForLesson = (lessonTitle: string, defaultContent: string): string => {
  const normalizedTitle = lessonTitle.trim();
  if (lessonMaterials[normalizedTitle]) {
    return lessonMaterials[normalizedTitle].markdownContent;
  }

  // Elegant fallback material generator in Indonesian
  return `
# Panduan Lengkap: ${normalizedTitle}

Belajar secara mendalam dan terstruktur mengenai **${normalizedTitle}** dengan standar kurikulum kelas industri global.

---

## 1. Pengenalan ${normalizedTitle}
Topik **${normalizedTitle}** adalah bagian integral dalam dunia teknologi perangkat lunak saat ini. Memahami konsep dasar ini akan sangat meningkatkan pemahaman Anda tentang alur kerja secara keseluruhan serta membekali Anda dengan kesiapan karir yang unggul.

### Mengapa ini penting?
*   **Efisiensi Tinggi**: Membantu memangkas waktu pengerjaan tugas secara drastis.
*   **Standardisasi Global**: Digunakan oleh ribuan developer profesional di seluruh penjuru dunia.
*   **Keamanan & Skalabilitas**: Fondasi yang kokoh menjamin integritas kode Anda di masa depan.

---

## 2. Poin-Poin Pembahasan Utama

### A. Konsep Dasar & Paradigma
Setiap bagian dalam **${normalizedTitle}** berputar pada efisiensi proses komputasi serta penyederhanaan arsitektur data.

### B. Langkah Kerja Praktis (Praktik Terbaik)
*   **Perencanaan**: Selalu buat mockup atau pseudocode terlebih dahulu.
*   **Refactoring**: Buat kode bekerja terlebih dahulu, baru kemudian buat kodenya bersih dan indah.
*   **Validasi**: Uji performa dan uji unit fungsionalitas secara berkala.

---

## 3. Contoh Kasus Penerapan Praktis
\`\`\`javascript
// Contoh implementasi skenario nyata
const processTopic = (topicName) => {
  console.log("Memulai proses belajar: " + topicName);
  return { status: "success", progress: 100 };
};

processTopic("${normalizedTitle}");
\`\`\`

---

## 4. Kesimpulan & Penutup
Kunci utama menguasai **${normalizedTitle}** adalah konsistensi dan latihan langsung. Bacalah kembali dokumentasi resmi dan kerjakan quiz evaluasi di bawah ini untuk menguji sejauh mana pemahaman Anda saat ini!
`;
};
