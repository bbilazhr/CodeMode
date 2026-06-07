export interface MockLesson {
  id: string;
  course_id: string;
  title: string;
  content: string;
  order_index: number;
  duration_minutes: number;
  resource_type: string;
}

export interface MockQuestion {
  id: string;
  question_type: string;
  question_text: string;
  options: string[] | null;
  correct_answer: any;
  code_snippet: string | null;
  syntax_chips: string[] | null;
  explanation: string;
  skill_category: string;
  order_index: number;
}

export interface MockQuiz {
  id: string;
  lesson_id: string;
  title: string;
  quiz_type: string;
  difficulty: string;
  xp_reward: number;
  quiz_questions: MockQuestion[];
}

export const frontEndLessons: MockLesson[] = [
  {
    id: "b1000001-0001-0001-0001-000000000001",
    course_id: "a1b2c3d4-0001-0001-0001-000000000001",
    title: "HTML Dasar",
    content: `# Pengenalan HTML Dasar

HTML (**HyperText Markup Language**) adalah bahasa standar yang digunakan untuk membuat dan menyusun struktur halaman web. HTML bukanlah bahasa pemrograman, melainkan bahasa markup yang menentukan bagaimana konten ditampilkan di browser menggunakan berbagai "tag".

## Struktur Dokumen HTML
Setiap dokumen HTML harus memiliki struktur dasar minimum sebagai berikut:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Halaman Pertama Saya</title>
</head>
<body>
    <h1>Selamat Datang di CodeMode!</h1>
    <p>Ini adalah langkah pertama Anda belajar membuat website.</p>
</body>
</html>
\`\`\`

### Penjelasan Elemen Dasar:
1. \`<!DOCTYPE html>\`: Mendeklarasikan bahwa dokumen ini menggunakan standar HTML5 terbaru.
2. \`<html>\`: Tag utama (root) yang membungkus semua elemen halaman web.
3. \`<head>\`: Tempat menaruh metadata (informasi halaman) seperti judul tab (\`<title>\`), karakter encoding, stylesheet, atau skrip eksternal.
4. \`<body>\`: Bagian utama halaman tempat semua konten visual (teks, gambar, tombol, dll) diletakkan dan akan terlihat oleh pengguna.

## Elemen & Tag Penting HTML
- **Heading (\`<h1>\` sampai \`<h6>\`)**: Digunakan untuk membuat judul dan subjudul secara hierarki. \`<h1>\` adalah ukuran terbesar (biasanya judul utama) dan \`<h6>\` adalah terkecil.
- **Paragraf (\`<p>\`)**: Digunakan untuk menulis paragraf teks biasa.
- **Anchor/Link (\`<a>\`)**: Digunakan untuk membuat tautan ke halaman lain dengan atribut \`href\`. Contoh: \`<a href="https://codemode.id">Kunjungi CodeMode</a>\`.
- **Image (\`<img>\`)**: Digunakan untuk menampilkan gambar. Tag ini tidak memiliki tag penutup dan memerlukan atribut \`src\` (lokasi gambar) dan \`alt\` (teks alternatif jika gambar gagal dimuat).
- **List/Daftar**:
  - \`<ul>\`: Unordered List (daftar bullet/poin).
  - \`<ol>\`: Ordered List (daftar angka/berurutan).
  - \`<li>\`: List Item (elemen daftar di dalam \`<ul>\` atau \`<ol>\`).

Lanjutkan ke bagian kuis di bawah setelah Anda memahami materi dasar HTML ini untuk menguji pengetahuan Anda!`,
    order_index: 0,
    duration_minutes: 20,
    resource_type: "text"
  },
  {
    id: "b1000001-0001-0001-0001-000000000002",
    course_id: "a1b2c3d4-0001-0001-0001-000000000001",
    title: "CSS & Styling",
    content: `# Pengenalan CSS & Styling

CSS (**Cascading Style Sheets**) digunakan untuk mendesain dan menata tampilan halaman web yang dibuat dengan HTML. Dengan CSS, Anda bisa mengatur warna, font, layout, animasi, dan merancang tampilan web yang modern dan indah.

## Cara Menghubungkan CSS
Ada tiga cara menulis CSS:
1. **External CSS**: Menulis kode CSS di file terpisah (contoh: \`style.css\`) lalu menghubungkannya di tag \`<head>\` HTML:
   \`\`\`html
   <link rel="stylesheet" href="style.css">
   \`\`\`
2. **Internal CSS**: Menulis kode CSS di dalam tag \`<style>\` di dalam tag \`<head>\` HTML.
3. **Inline CSS**: Menulis properti CSS langsung pada atribut \`style\` elemen HTML. Contoh: \`<p style="color: red;">Teks Merah</p>\`.

## Struktur Kode CSS
Kode CSS terdiri dari **Selector** dan **Declaration Block**:

\`\`\`css
selector {
  property: value;
}
\`\`\`

Contoh:
\`\`\`css
h1 {
  color: #3b82f6;
  font-size: 24px;
}
\`\`\`

## Selektor CSS (Selectors)
- **Element Selector**: Memilih elemen berdasarkan nama tag. Contoh: \`p { color: blue; }\`.
- **Class Selector**: Memilih elemen berdasarkan atribut \`class\`. Diawali tanda titik (\`.\`). Contoh: \`.text-highlight { background-color: yellow; }\`.
- **ID Selector**: Memilih satu elemen spesifik berdasarkan atribut \`id\`. Diawali tanda pagar (\`#\`). Contoh: \`#header-utama { border: 1px solid black; }\`.

## CSS Flexbox
Flexbox adalah modul layout satu dimensi yang mempermudah perataan elemen di dalam wadah (container).
- **display: flex;**: Mengubah elemen container menjadi wadah flex.
- **justify-content**: Mengatur perataan secara horizontal (sumbu utama). Nilainya antara lain: \`center\`, \`flex-start\`, \`flex-end\`, \`space-between\`, \`space-around\`.
- **align-items**: Mengatur perataan secara vertikal (sumbu silang). Nilainya antara lain: \`center\`, \`stretch\`, \`flex-start\`, \`flex-end\`.

Pelajari aturan CSS ini dengan cermat, lalu selesaikan kuis di bawah!`,
    order_index: 1,
    duration_minutes: 25,
    resource_type: "text"
  },
  {
    id: "b1000001-0001-0001-0001-000000000003",
    course_id: "a1b2c3d4-0001-0001-0001-000000000001",
    title: "Responsive Design",
    content: `# Desain Web Responsif (Responsive Design)

Desain Web Responsif adalah pendekatan pembuatan website agar tampilannya dapat menyesuaikan diri secara otomatis dengan berbagai ukuran layar perangkat—mulai dari smartphone, tablet, laptop, hingga monitor desktop berukuran besar.

## Viewport Meta Tag
Agar browser mobile merender halaman web secara proporsional sesuai lebar perangkat, Anda wajib menambahkan tag berikut di bagian \`<head>\` HTML Anda:

\`\`\`html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
\`\`\`

Atribut \`width=device-width\` menginstruksikan halaman untuk mengikuti lebar layar perangkat, sedangkan \`initial-scale=1.0\` mengatur tingkat zoom awal saat halaman pertama kali dimuat.

## Media Queries
Media Queries adalah fitur CSS yang memungkinkan Anda menerapkan aturan styling tertentu hanya jika kondisi layar terpenuhi (misalnya, lebar minimum atau maksimum tertentu).

\`\`\`css
/* Aturan standar untuk desktop */
.sidebar {
  display: block;
  width: 250px;
}

/* Aturan untuk perangkat dengan layar maksimal 768px (Mobile/Tablet) */
@media (max-width: 768px) {
  .sidebar {
    display: none; /* Sembunyikan sidebar di layar kecil */
  }
}
\`\`\`

## Unit Relatif vs Absolut
Hindari menggunakan unit absolut seperti \`px\` untuk dimensi layout utama jika ingin responsif. Gunakan unit relatif berikut:
- \`%\`: Persentase dari ukuran container induk.
- \`em\`: Relatif terhadap ukuran font elemen itu sendiri atau induknya.
- \`rem\`: Relatif terhadap ukuran font root dokumen (\`<html>\`—biasanya 16px).
- \`vw\` & \`vh\`: Viewport Width (lebar layar) dan Viewport Height (tinggi layar). \`100vw\` berarti 100% lebar layar.

Pahami konsep responsif ini dan uji kemampuan Anda pada kuis di bawah!`,
    order_index: 2,
    duration_minutes: 20,
    resource_type: "text"
  },
  {
    id: "b1000001-0001-0001-0001-000000000004",
    course_id: "a1b2c3d4-0001-0001-0001-000000000001",
    title: "JavaScript ES6+",
    content: `# JavaScript ES6+ Modern

ES6 (ECMAScript 2015) dan pembaruan setelahnya membawa banyak fitur baru yang membuat penulisan kode JavaScript menjadi lebih ringkas, efisien, dan modern.

## 1. Variabel Modern: let & const
Gantikan penggunaan \`var\` dengan:
- \`let\`: Mendeklarasikan variabel yang nilainya dapat diubah.
- \`const\`: Mendeklarasikan variabel konstan (tetap) yang nilainya tidak dapat diubah (re-assigned).
Kedua variabel ini memiliki sifat *block scope* (hanya berlaku di dalam blok \`{}\` tempat dideklarasikan).

## 2. Arrow Functions
Cara penulisan fungsi yang lebih ringkas menggunakan simbol \`=>\`.

\`\`\`javascript
// ES5 Function
function tambah(a, b) {
  return a + b;
}

// ES6 Arrow Function
const tambah = (a, b) => a + b;
\`\`\`

## 3. Template Literals
Mempermudah penggabungan teks dan variabel menggunakan *backticks* (\` \` \`) dan ekspresi \`\${}\`.

\`\`\`javascript
const nama = "CodeMode";
console.log(\`Halo, selamat belajar di \${nama}!\`);
\`\`\`

## 4. Destructuring Assignment
Memudahkan ekstraksi nilai dari array atau properti dari objek ke dalam variabel terpisah.

\`\`\`javascript
const user = { nama: "Farel", level: 10 };
const { nama, level } = user; // ekstraksi properti langsung
\`\`\`

## 5. Array Methods (map, filter, reduce)
- \`map()\`: Membuat array baru dengan memodifikasi setiap elemen.
- \`filter()\`: Menyaring elemen array berdasarkan kondisi tertentu.

Cobalah menyelesaikan soal-soal kuis di bawah berdasarkan materi JavaScript ES6+ ini!`,
    order_index: 3,
    duration_minutes: 30,
    resource_type: "text"
  },
  {
    id: "b1000001-0001-0001-0001-000000000005",
    course_id: "a1b2c3d4-0001-0001-0001-000000000001",
    title: "DOM Manipulation",
    content: `# Manipulasi DOM (Document Object Model)

DOM adalah representasi objek dari halaman HTML Anda yang memungkinkan JavaScript untuk mengakses, membaca, mengubah struktur, gaya, maupun isi halaman web secara dinamis saat diakses oleh pengguna.

## Memilih Elemen DOM
Beberapa metode utama untuk memilih elemen HTML:
- \`document.getElementById("id")\`: Memilih elemen berdasarkan ID-nya.
- \`document.querySelector(".class-name")\`: Memilih elemen pertama yang cocok dengan selektor CSS.
- \`document.querySelectorAll("p")\`: Memilih seluruh elemen yang cocok dengan selektor, mengembalikan daftar elemen (NodeList).

## Mengubah Konten & Gaya Elemen
Setelah elemen dipilih, kita dapat mengubah propertinya:

\`\`\`javascript
const judul = document.getElementById("judul-utama");

// Mengubah teks di dalam elemen
judul.textContent = "Judul Baru yang Keren!";

// Mengubah properti style CSS secara langsung
judul.style.color = "blue";
judul.style.fontSize = "32px";
\`\`\`

## Menangani Event (Event Listeners)
Event listener memungkinkan JavaScript merespon aksi pengguna seperti klik mouse, input keyboard, pengiriman form, dll.

\`\`\`javascript
const tombol = document.querySelector("#tombol-klik");

tombol.addEventListener("click", () => {
  alert("Tombol berhasil diklik!");
});
\`\`\`

Kuasai manipulasi interaksi halaman ini dan uji pemahaman Anda di bagian kuis bawah!`,
    order_index: 4,
    duration_minutes: 25,
    resource_type: "text"
  },
  {
    id: "b1000001-0001-0001-0001-000000000006",
    course_id: "a1b2c3d4-0001-0001-0001-000000000001",
    title: "React Fundamentals",
    content: `# Dasar-Dasar React (React Fundamentals)

React adalah pustaka (library) JavaScript yang sangat populer untuk membangun antarmuka pengguna (UI) yang deklaratif, efisien, dan berbasis komponen. React dikembangkan dan dikelola oleh Meta (Facebook) serta komunitas developer dunia.

## 1. Konsep Komponen (Components)
Aplikasi React dibangun dengan menyusun komponen-komponen kecil yang saling independen. Komponen di React modern ditulis menggunakan fungsi JavaScript biasa yang mengembalikan kode tampilan (JSX).

\`\`\`jsx
function TombolKeren() {
  return <button className="btn">Klik Saya!</button>;
}
\`\`\`

## 2. JSX (JavaScript XML)
JSX adalah ekstensi sintaksis untuk JavaScript yang memungkinkan penulisan kode mirip HTML di dalam file JavaScript. React mengubah sintaks JSX menjadi kode JavaScript standar.
*Aturan JSX:*
- Harus mengembalikan satu elemen root pembungkus (atau menggunakan fragment \`<>\` \`</>\`).
- Atribut \`class\` diubah menjadi \`className\`.

## 3. Props (Properties)
Props adalah data yang dikirim dari komponen induk (parent) ke komponen anak (child) agar komponen bersifat dinamis dan dapat digunakan kembali dengan data yang berbeda. Props bersifat *read-only*.

\`\`\`jsx
function KartuNama(props) {
  return <h2>Halo, nama saya {props.nama}</h2>;
}
\`\`\`

Pahami konsep deklaratif ini dan ujilah diri Anda di kuis bawah!`,
    order_index: 5,
    duration_minutes: 35,
    resource_type: "text"
  },
  {
    id: "b1000001-0001-0001-0001-000000000007",
    course_id: "a1b2c3d4-0001-0001-0001-000000000001",
    title: "React Hooks",
    content: `# React Hooks Modern

React Hooks adalah fitur yang diperkenalkan di React 16.8 yang memungkinkan Anda menggunakan *state* dan fitur React lainnya di dalam komponen fungsional tanpa perlu menulis komponen berbasis kelas (*class components*).

## 1. useState
Hook ini digunakan untuk menambahkan state lokal di dalam komponen fungsional.

\`\`\`jsx
import { useState } from "react";

function Penghitung() {
  const [angka, setAngka] = useState(0);

  return (
    <div>
      <p>Anda mengklik {angka} kali</p>
      <button onClick={() => setAngka(angka + 1)}>Tambah</button>
    </div>
  );
}
\`\`\`

## 2. useEffect
Hook ini digunakan untuk menangani efek samping (*side effects*) dalam komponen, seperti pengambilan data dari API, berlangganan event, atau manipulasi manual pada DOM.

\`\`\`jsx
import { useEffect } from "react";

useEffect(() => {
  console.log("Komponen dipasang!");
  
  // Dependency array kosong [] berarti efek ini hanya dijalankan SEKALI saat komponen pertama kali muncul (mount)
}, []);
\`\`\`

## 3. Aturan Penggunaan Hooks
- Hanya panggil Hooks di tingkat teratas (*top level*). Jangan panggil di dalam perulangan (*loops*), percabangan (*conditions*), atau fungsi bersarang (*nested functions*).
- Hanya panggil Hooks dari fungsi komponen React atau Custom Hooks Anda sendiri.

Selesaikan 20 soal kuis di bawah untuk memantapkan pemahaman React Hooks Anda!`,
    order_index: 6,
    duration_minutes: 30,
    resource_type: "text"
  },
  {
    id: "b1000001-0001-0001-0001-000000000008",
    course_id: "a1b2c3d4-0001-0001-0001-000000000001",
    title: "Tailwind CSS",
    content: `# Mengenal Tailwind CSS

Tailwind CSS adalah framework CSS yang mengusung konsep **Utility-First**. Berbeda dengan Bootstrap yang menyediakan komponen siap pakai seperti \`.card\` atau \`.btn\`, Tailwind menyediakan kelas-kelas utilitas kecil (seperti \`flex\`, \`pt-4\`, \`text-center\`, \`bg-blue-500\`) yang digabungkan langsung pada tag HTML untuk membuat desain kustom.

## Keuntungan Menggunakan Tailwind
- **Pengembangan Cepat**: Anda tidak perlu menulis file CSS eksternal terpisah dan bolak-balik memikirkan nama kelas baru.
- **Ukuran Bundle Kecil**: Tailwind menggunakan proses *Purging* untuk menghapus semua kelas CSS yang tidak digunakan dalam kode Anda sebelum aplikasi dideploy untuk produksi.
- **Kemudahan Kustomisasi**: Sangat fleksibel untuk membuat desain unik yang berbeda dari template standar.

## Contoh Penggunaan
Berikut adalah cara membuat kartu profil sederhana yang elegan menggunakan kelas-kelas utilitas Tailwind:

\`\`\`html
<div className="max-w-sm mx-auto p-6 bg-white dark:bg-zinc-900 rounded-2xl shadow-lg border border-gray-100 flex items-center gap-4">
  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
    CM
  </div>
  <div>
    <h4 className="text-lg font-bold text-gray-900 dark:text-white">CodeMode</h4>
    <p className="text-sm text-gray-500">Belajar Coding Interaktif</p>
  </div>
</div>
\`\`\`

Cobalah kuis di bawah ini untuk melihat seberapa jauh pemahaman Anda tentang kelas utilitas Tailwind!`,
    order_index: 7,
    duration_minutes: 20,
    resource_type: "text"
  },
  {
    id: "b1000001-0001-0001-0001-000000000009",
    course_id: "a1b2c3d4-0001-0001-0001-000000000001",
    title: "Fetch API & Async",
    content: `# Pengambilan Data dengan Fetch API & Async/Await

Pada aplikasi web modern, mengambil data secara asinkron dari server jarak jauh (API) sangat penting untuk menampilkan konten dinamis tanpa me-reload halaman web secara keseluruhan.

## 1. Menggunakan Fetch API dasar
Metode \`fetch()\` bawaan browser mengembalikan sebuah *Promise*.

\`\`\`javascript
fetch("https://api.github.com/users/farel")
  .then((response) => response.json()) // ubah response ke format JSON
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));
\`\`\`

## 2. Menggunakan Async/Await yang Lebih Bersih
Untuk menghindari "Callback Hell" atau penulisan rantai \`.then()\` yang terlalu panjang, kita dapat menggunakan deklarasi fungsi \`async\` dan instruksi \`await\` yang membuat kode asinkron terlihat seperti kode sinkron berurutan.

\`\`\`javascript
async function ambilDataUser() {
  try {
    const response = await fetch("https://api.github.com/users/farel");
    if (!response.ok) {
      throw new Error("Gagal mengambil data");
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Terjadi Kesalahan:", error.message);
  }
}
\`\`\`

Selesaikan kuis di akhir materi ini untuk menguji kemampuan manipulasi request API asinkron Anda!`,
    order_index: 8,
    duration_minutes: 25,
    resource_type: "text"
  },
  {
    id: "b1000001-0001-0001-0001-000000000010",
    course_id: "a1b2c3d4-0001-0001-0001-000000000001",
    title: "Build Tools & Vite",
    content: `# Build Tools & Alur Kerja Vite Modern

Ketika proyek frontend bertambah besar dengan ribuan baris kode, pustaka eksternal, dan stylesheet, browser tidak dapat lagi memproses file pengembangan secara mentah secara efisien. Kita memerlukan **Build Tools**.

## Apa itu Build Tools?
Build tools bertugas untuk:
- Mengonversi kode modern agar kompatibel dengan browser lama.
- Meminimalisasi (*minify*) ukuran file CSS dan JS agar loading web cepat.
- Menggabungkan (*bundle*) modul-modul file terpisah menjadi satu.

## Mengapa Menggunakan Vite?
Vite adalah alat pengembangan (*build tool*) baru yang sangat cepat karena memanfaatkan fitur **ES Modules (ESM)** bawaan browser modern, sehingga proses *Hot Module Replacement* (HMR/refresh otomatis saat edit file) terjadi secara instan tanpa memandang ukuran proyek.

## Perintah Dasar npm & Vite:
- \`npm install\`: Mengunduh semua dependencies yang tertera di \`package.json\`.
- \`npm run dev\`: Menjalankan server lokal pengembangan (development server) yang cepat.
- \`npm run build\`: Mengompilasi dan mengoptimalkan kode proyek menjadi sekumpulan file HTML, CSS, dan JS statis di dalam folder \`dist\` untuk siap diupload ke hosting produksi.

Jawab kuis terakhir dari kursus Front-End ini di bagian bawah! Semoga sukses!`,
    order_index: 9,
    duration_minutes: 20,
    resource_type: "text"
  }
];

// Helper to generate 20 questions in Indonesian for each lesson
export const frontEndQuizzes: MockQuiz[] = [
  {
    id: "4ac471ff-04f8-4a86-a3d3-2ed3db1f6e50",
    lesson_id: "b1000001-0001-0001-0001-000000000001",
    title: "HTML Dasar Quiz",
    quiz_type: "mixed",
    difficulty: "easy",
    xp_reward: 20,
    quiz_questions: [
      {
        id: "html-q1",
        question_type: "mcq",
        question_text: "Apakah kepanjangan dari HTML?",
        options: ["HyperText Markup Language", "HyperText Modern Layout", "High Tech Modern Language", "Hyperlink Text Markup Language"],
        correct_answer: "HyperText Markup Language",
        code_snippet: null,
        syntax_chips: null,
        explanation: "HTML adalah singkatan dari HyperText Markup Language, standar bahasa markup untuk halaman web.",
        skill_category: "markup",
        order_index: 0
      },
      {
        id: "html-q2",
        question_type: "true_false",
        question_text: "Tag <img> memerlukan tag penutup seperti </img>.",
        options: null,
        correct_answer: false,
        code_snippet: null,
        syntax_chips: null,
        explanation: "Tag <img> adalah elemen kosong (self-closing) yang tidak memerlukan tag penutup.",
        skill_category: "markup",
        order_index: 1
      },
      {
        id: "html-q3",
        question_type: "blank_space",
        question_text: "Lengkapi elemen heading 1 berikut:",
        options: null,
        correct_answer: ["<h1>"],
        code_snippet: "___ Selamat Datang </h1>",
        syntax_chips: ["<h1>", "<h2>", "<head>", "<header>"],
        explanation: "Tag pembuka untuk heading 1 adalah <h1>.",
        skill_category: "markup",
        order_index: 2
      },
      {
        id: "html-q4",
        question_type: "short_coding",
        question_text: "Tulis elemen anchor (link) lengkap menuju 'https://google.com' dengan teks 'Google'.",
        options: null,
        correct_answer: "<a href=\"https://google.com\">Google</a>",
        code_snippet: null,
        syntax_chips: null,
        explanation: "Struktur link HTML adalah <a href=\"URL\">Teks</a>.",
        skill_category: "markup",
        order_index: 3
      },
      {
        id: "html-q5",
        question_type: "mcq",
        question_text: "Manakah tag yang digunakan untuk membuat baris baru (line break)?",
        options: ["<br>", "<lb>", "<break>", "<paragraph>"],
        correct_answer: "<br>",
        code_snippet: null,
        syntax_chips: null,
        explanation: "Tag <br> menyisipkan baris baru (line break) di dalam dokumen.",
        skill_category: "markup",
        order_index: 4
      },
      {
        id: "html-q6",
        question_type: "true_false",
        question_text: "Tag <strong> digunakan untuk memberikan penekanan penting secara semantik (tebal).",
        options: null,
        correct_answer: true,
        code_snippet: null,
        syntax_chips: null,
        explanation: "Tag <strong> secara semantik berarti teks penting dan biasanya dirender tebal oleh browser.",
        skill_category: "markup",
        order_index: 5
      },
      {
        id: "html-q7",
        question_type: "blank_space",
        question_text: "Lengkapi kode untuk mendefinisikan item daftar tidak terurut berikut:",
        options: null,
        correct_answer: ["<ul>", "</ul>"],
        code_snippet: "___ \n  <li>Apel</li> \n  <li>Jeruk</li> \n___",
        syntax_chips: ["<ul>", "</ul>", "<ol>", "</ol>", "<li>", "</li>"],
        explanation: "Daftar tidak terurut dibungkus oleh tag pembuka <ul> dan penutup </ul>.",
        skill_category: "markup",
        order_index: 6
      },
      {
        id: "html-q8",
        question_type: "mcq",
        question_text: "Atribut mana yang menentukan lokasi sumber file gambar pada tag <img>?",
        options: ["src", "href", "link", "alt"],
        correct_answer: "src",
        code_snippet: null,
        syntax_chips: null,
        explanation: "Atribut 'src' (source) digunakan untuk menentukan URL dari gambar yang akan dimuat.",
        skill_category: "markup",
        order_index: 7
      },
      {
        id: "html-q9",
        question_type: "true_false",
        question_text: "Tag <title> yang menentukan judul tab browser diletakkan di dalam elemen <body>.",
        options: null,
        correct_answer: false,
        code_snippet: null,
        syntax_chips: null,
        explanation: "Tag <title> harus diletakkan di dalam tag <head>.",
        skill_category: "markup",
        order_index: 8
      },
      {
        id: "html-q10",
        question_type: "mcq",
        question_text: "Elemen HTML manakah yang membungkus semua konten visual yang tampil di browser?",
        options: ["<body>", "<html>", "<head>", "<main>"],
        correct_answer: "<body>",
        code_snippet: null,
        syntax_chips: null,
        explanation: "Seluruh konten visual halaman diletakkan di dalam tag pembuka dan penutup <body>.",
        skill_category: "markup",
        order_index: 9
      },
      {
        id: "html-q11",
        question_type: "mcq",
        question_text: "Tag manakah yang digunakan untuk membuat daftar berurutan (ordered list)?",
        options: ["<ol>", "<ul>", "<list>", "<dl>"],
        correct_answer: "<ol>",
        code_snippet: null,
        syntax_chips: null,
        explanation: "Tag <ol> (Ordered List) digunakan untuk membuat daftar dengan angka atau huruf yang berurutan.",
        skill_category: "markup",
        order_index: 10
      },
      {
        id: "html-q12",
        question_type: "true_false",
        question_text: "HTML dikategorikan sebagai bahasa pemrograman turing-complete.",
        options: null,
        correct_answer: false,
        code_snippet: null,
        syntax_chips: null,
        explanation: "HTML adalah bahasa markup untuk struktur konten, bukan bahasa pemrograman logic turing-complete.",
        skill_category: "markup",
        order_index: 11
      },
      {
        id: "html-q13",
        question_type: "blank_space",
        question_text: "Lengkapi atribut tag tautan berikut:",
        options: null,
        correct_answer: ["href"],
        code_snippet: "<a ___=\"https://codemode.id\">Beranda</a>",
        syntax_chips: ["href", "src", "link", "target"],
        explanation: "Atribut 'href' menentukan tujuan tautan pada tag <a>.",
        skill_category: "markup",
        order_index: 12
      },
      {
        id: "html-q14",
        question_type: "short_coding",
        question_text: "Tulis tag paragraf dengan teks berisi 'Halo'.",
        options: null,
        correct_answer: "<p>Halo</p>",
        code_snippet: null,
        syntax_chips: null,
        explanation: "Format tag paragraf adalah <p>Teks</p>.",
        skill_category: "markup",
        order_index: 13
      },
      {
        id: "html-q15",
        question_type: "mcq",
        question_text: "Karakter manakah yang menunjukkan sebuah tag penutup dalam sintaks HTML?",
        options: ["/", "\\", "*", "!"],
        correct_answer: "/",
        code_snippet: null,
        syntax_chips: null,
        explanation: "Karakter garis miring (/) di dalam kurung sudut, seperti </p>, menandakan tag penutup.",
        skill_category: "markup",
        order_index: 14
      },
      {
        id: "html-q16",
        question_type: "true_false",
        question_text: "Tag <em> digunakan untuk merender teks miring dan menegaskan maksud secara semantik.",
        options: null,
        correct_answer: true,
        code_snippet: null,
        syntax_chips: null,
        explanation: "Tag <em> (emphasis) digunakan untuk penekanan teks dan dirender miring oleh browser secara visual.",
        skill_category: "markup",
        order_index: 15
      },
      {
        id: "html-q17",
        question_type: "mcq",
        question_text: "Atribut tag <img> manakah yang wajib ditulis untuk aksesibilitas pembaca layar (screen readers)?",
        options: ["alt", "title", "name", "id"],
        correct_answer: "alt",
        code_snippet: null,
        syntax_chips: null,
        explanation: "Atribut 'alt' (alternate text) menjelaskan isi gambar untuk aksesibilitas pembaca layar bagi tunanetra.",
        skill_category: "markup",
        order_index: 16
      },
      {
        id: "html-q18",
        question_type: "blank_space",
        question_text: "Lengkapi baris awal dokumen HTML5:",
        options: null,
        correct_answer: ["html"],
        code_snippet: "<!DOCTYPE ___>",
        syntax_chips: ["html", "xhtml", "html5", "xml"],
        explanation: "Deklarasi tipe dokumen HTML5 ditulis <!DOCTYPE html>.",
        skill_category: "markup",
        order_index: 17
      },
      {
        id: "html-q19",
        question_type: "true_false",
        question_text: "Elemen <div> adalah elemen inline yang tidak memulai baris baru saat dirender.",
        options: null,
        correct_answer: false,
        code_snippet: null,
        syntax_chips: null,
        explanation: "Elemen <div> adalah elemen blok (block-level) yang otomatis memulai baris baru secara default.",
        skill_category: "markup",
        order_index: 18
      },
      {
        id: "html-q20",
        question_type: "mcq",
        question_text: "Tag HTML manakah yang mewakili sel data di dalam baris tabel?",
        options: ["<td>", "<th>", "<tr>", "<table>"],
        correct_answer: "<td>",
        code_snippet: null,
        syntax_chips: null,
        explanation: "Tag <td> (table data) digunakan untuk membuat sel data di dalam baris tabel <tr>.",
        skill_category: "markup",
        order_index: 19
      }
    ]
  },
  {
    id: "b23de411-f676-40d9-aeaa-b0e7394332dd",
    lesson_id: "b1000001-0001-0001-0001-000000000002",
    title: "CSS & Styling Quiz",
    quiz_type: "mixed",
    difficulty: "easy",
    xp_reward: 20,
    quiz_questions: [
      {
        id: "css-q1",
        question_type: "mcq",
        question_text: "Properti CSS manakah yang digunakan untuk mengatur warna teks?",
        options: ["color", "font-color", "text-color", "fgcolor"],
        correct_answer: "color",
        code_snippet: null,
        syntax_chips: null,
        explanation: "Properti 'color' digunakan untuk menentukan warna teks dari suatu elemen HTML.",
        skill_category: "visual",
        order_index: 0
      },
      {
        id: "css-q2",
        question_type: "true_false",
        question_text: "Class selector pada CSS dideklarasikan dengan simbol '#' di awal.",
        options: null,
        correct_answer: false,
        code_snippet: null,
        syntax_chips: null,
        explanation: "Class selector diawali dengan tanda titik (.), sedangkan tanda pagar (#) digunakan untuk ID selector.",
        skill_category: "visual",
        order_index: 1
      },
      {
        id: "css-q3",
        question_type: "blank_space",
        question_text: "Lengkapi properti untuk mengaktifkan layout flexbox di container:",
        options: null,
        correct_answer: ["flex"],
        code_snippet: ".container {\n  display: ___\n}",
        syntax_chips: ["flex", "grid", "block", "inline-block"],
        explanation: "display: flex mengaktifkan model tata letak Flexbox.",
        skill_category: "visual",
        order_index: 2
      },
      {
        id: "css-q4",
        question_type: "short_coding",
        question_text: "Tulis properti CSS lengkap untuk mengubah warna latar belakang menjadi merah.",
        options: null,
        correct_answer: "background-color: red;",
        code_snippet: null,
        syntax_chips: null,
        explanation: "Properti background-color digunakan untuk mewarnai latar belakang elemen.",
        skill_category: "visual",
        order_index: 3
      },
      {
        id: "css-q5",
        question_type: "mcq",
        question_text: "Properti mana yang digunakan untuk mengatur margin luar elemen?",
        options: ["margin", "padding", "border", "spacing"],
        correct_answer: "margin",
        code_snippet: null,
        syntax_chips: null,
        explanation: "margin mengatur jarak eksternal di luar batas (border) elemen.",
        skill_category: "visual",
        order_index: 4
      },
      {
        id: "css-q6",
        question_type: "true_false",
        question_text: "Padding adalah ruang transparan di dalam border yang mengelilingi konten elemen.",
        options: null,
        correct_answer: true,
        code_snippet: null,
        syntax_chips: null,
        explanation: "Padding mengatur jarak internal antara konten elemen dan batas (border)-nya.",
        skill_category: "visual",
        order_index: 5
      },
      {
        id: "css-q7",
        question_type: "blank_space",
        question_text: "Lengkapi selektor ID berikut untuk memilih elemen dengan id='nav-bar':",
        options: null,
        correct_answer: ["#nav-bar"],
        code_snippet: "___ {\n  background: #333;\n}",
        syntax_chips: ["#nav-bar", ".nav-bar", "nav-bar", "*nav-bar"],
        explanation: "ID selector diawali tanda pagar (#).",
        skill_category: "visual",
        order_index: 6
      },
      {
        id: "css-q8",
        question_type: "mcq",
        question_text: "Properti mana yang digunakan untuk mengubah tebal tipisnya teks?",
        options: ["font-weight", "font-style", "text-thickness", "font-width"],
        correct_answer: "font-weight",
        code_snippet: null,
        syntax_chips: null,
        explanation: "font-weight menentukan ketebalan visual dari karakter teks (seperti bold, normal).",
        skill_category: "visual",
        order_index: 7
      },
      {
        id: "css-q9",
        question_type: "true_false",
        question_text: "Nilai default dari properti position untuk semua elemen HTML adalah static.",
        options: null,
        correct_answer: true,
        code_snippet: null,
        syntax_chips: null,
        explanation: "Posisi elemen secara default adalah static, artinya mengikuti alur aliran dokumen normal.",
        skill_category: "visual",
        order_index: 8
      },
      {
        id: "css-q10",
        question_type: "mcq",
        question_text: "Metode mana yang paling direkomendasikan untuk menautkan stylesheet eksternal?",
        options: ["Tag <link> di dalam <head>", "Tag <style> di dalam <body>", "Atribut style di dalam elemen", "Metode @import di dalam HTML"],
        correct_answer: "Tag <link> di dalam <head>",
        code_snippet: null,
        syntax_chips: null,
        explanation: "Tag <link rel='stylesheet' href='...'> di dalam <head> memisahkan konten dari presentasi visual secara bersih.",
        skill_category: "visual",
        order_index: 9
      },
      {
        id: "css-q11",
        question_type: "mcq",
        question_text: "Format penulisan komentar yang benar di dalam kode CSS adalah:",
        options: ["/* komentar */", "// komentar", "<!-- komentar -->", "# komentar"],
        correct_answer: "/* komentar */",
        code_snippet: null,
        syntax_chips: null,
        explanation: "Komentar CSS ditulis menggunakan pembuka /* dan penutup */.",
        skill_category: "visual",
        order_index: 10
      },
      {
        id: "css-q12",
        question_type: "true_false",
        question_text: "Penerapan display: none menyembunyikan elemen, tetapi ruang yang ditempatinya tetap dipertahankan secara visual.",
        options: null,
        correct_answer: false,
        code_snippet: null,
        syntax_chips: null,
        explanation: "display: none menghapus elemen sepenuhnya dari tata letak visual, sedangkan visibility: hidden menyembunyikan elemen tapi tetap mempertahankan ruangnya.",
        skill_category: "visual",
        order_index: 11
      },
      {
        id: "css-q13",
        question_type: "blank_space",
        question_text: "Lengkapi properti perataan horizontal (main axis) di flexbox:",
        options: null,
        correct_answer: ["justify-content"],
        code_snippet: ".container {\n  display: flex;\n  ___: center;\n}",
        syntax_chips: ["justify-content", "align-items", "flex-direction", "align-content"],
        explanation: "justify-content mengatur penataan elemen di sepanjang sumbu utama (main axis).",
        skill_category: "visual",
        order_index: 12
      },
      {
        id: "css-q14",
        question_type: "short_coding",
        question_text: "Tulis CSS untuk mengubah ukuran font menjadi 18 piksel.",
        options: null,
        correct_answer: "font-size: 18px;",
        code_snippet: null,
        syntax_chips: null,
        explanation: "Properti font-size mengontrol ukuran tampilan teks.",
        skill_category: "visual",
        order_index: 13
      },
      {
        id: "css-q15",
        question_type: "mcq",
        question_text: "Properti CSS mana yang digunakan untuk mengontrol urutan tumpukan elemen di sumbu 3D?",
        options: ["z-index", "index", "layer", "stack"],
        correct_answer: "z-index",
        code_snippet: null,
        syntax_chips: null,
        explanation: "z-index mengatur kedalaman tumpukan elemen di sepanjang sumbu Z.",
        skill_category: "visual",
        order_index: 14
      },
      {
        id: "css-q16",
        question_type: "true_false",
        question_text: "Properti border-radius dapat menerima persentase (%) sebagai nilainya untuk membuat lingkaran.",
        options: null,
        correct_answer: true,
        code_snippet: null,
        syntax_chips: null,
        explanation: "Mengatur border-radius ke 50% pada elemen berbentuk persegi sempurna akan menghasilkan lingkaran.",
        skill_category: "visual",
        order_index: 15
      },
      {
        id: "css-q17",
        question_type: "mcq",
        question_text: "Bagaimana cara menulis properti margin untuk memberikan atas-bawah 10px dan kiri-kanan 20px secara ringkas?",
        options: ["margin: 10px 20px;", "margin: 10px 20px 10px 20px;", "margin: 10px / 20px;", "margin: 10px 20px 0 0;"],
        correct_answer: "margin: 10px 20px;",
        code_snippet: null,
        syntax_chips: null,
        explanation: "Notasi ringkas dua nilai berarti nilai pertama untuk atas-bawah, nilai kedua untuk kiri-kanan.",
        skill_category: "visual",
        order_index: 16
      },
      {
        id: "css-q18",
        question_type: "blank_space",
        question_text: "Lengkapi properti pemosisian agar elemen bergeser relatif terhadap posisi normalnya:",
        options: null,
        correct_answer: ["relative"],
        code_snippet: ".box {\n  position: ___;\n  top: 20px;\n}",
        syntax_chips: ["relative", "absolute", "static", "fixed"],
        explanation: "position: relative memposisikan elemen relatif terhadap posisi aslinya di alur dokumen.",
        skill_category: "visual",
        order_index: 17
      },
      {
        id: "css-q19",
        question_type: "true_false",
        question_text: "Setiap halaman HTML hanya boleh memiliki maksimal satu tag <style>.",
        options: null,
        correct_answer: false,
        code_snippet: null,
        syntax_chips: null,
        explanation: "Anda dapat memiliki beberapa tag <style> di dalam satu halaman HTML, meskipun disarankan menyatukannya agar rapi.",
        skill_category: "visual",
        order_index: 18
      },
      {
        id: "css-q20",
        question_type: "mcq",
        question_text: "Berapa pixel hasil total lebar elemen jika lebar konten=100px, padding kiri-kanan=10px, border=5px, menggunakan box-sizing: content-box?",
        options: ["130px", "100px", "115px", "120px"],
        correct_answer: "130px",
        code_snippet: null,
        syntax_chips: null,
        explanation: "Lebar total = konten (100) + padding (10x2) + border (5x2) = 130px.",
        skill_category: "visual",
        order_index: 19
      }
    ]
  },
  {
    id: "165111bf-c7c4-4c21-b9b3-856fdb55906e",
    lesson_id: "b1000001-0001-0001-0001-000000000003",
    title: "Responsive Design Quiz",
    quiz_type: "mixed",
    difficulty: "easy",
    xp_reward: 20,
    quiz_questions: [
      {
        id: "resp-q1",
        question_type: "mcq",
        question_text: "Metode utama di CSS apa yang membuat layout web responsif?",
        options: ["Media queries", "JavaScript", "Flexbox saja", "Bootstrap"],
        correct_answer: "Media queries",
        code_snippet: null,
        syntax_chips: null,
        explanation: "Media queries memungkinkan penerapan gaya CSS secara kondisional berdasarkan resolusi layar.",
        skill_category: "visual",
        order_index: 0
      },
      {
        id: "resp-q2",
        question_type: "true_false",
        question_text: "Viewport meta tag sangat krusial dipasang agar tampilan di ponsel tidak ter-zoom out (mengecil).",
        options: null,
        correct_answer: true,
        code_snippet: null,
        syntax_chips: null,
        explanation: "Tanpa viewport meta tag, browser ponsel akan merender halaman seperti versi desktop lalu mengecilkannya secara visual.",
        skill_category: "visual",
        order_index: 1
      },
      {
        id: "resp-q3",
        question_type: "blank_space",
        question_text: "Lengkapi deklarasi media query di CSS berikut:",
        options: null,
        correct_answer: ["@media"],
        code_snippet: "___ (max-width: 600px) {\n  body { font-size: 14px; }\n}",
        syntax_chips: ["@media", "@screen", "@device", "@viewport"],
        explanation: "Deklarasi media query diawali dengan kata kunci @media.",
        skill_category: "visual",
        order_index: 2
      },
      {
        id: "resp-q4",
        question_type: "short_coding",
        question_text: "Tulis tag meta viewport standar HTML5 lengkap.",
        options: null,
        correct_answer: "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">",
        code_snippet: null,
        syntax_chips: null,
        explanation: "Tag meta viewport mengatur tata letak lebar agar sesuai dengan ukuran lebar layar perangkat fisik.",
        skill_category: "visual",
        order_index: 3
      },
      {
        id: "resp-q5",
        question_type: "mcq",
        question_text: "Manakah unit berikut yang merupakan unit absolut (tidak responsif)?",
        options: ["px", "rem", "em", "vw"],
        correct_answer: "px",
        code_snippet: null,
        syntax_chips: null,
        explanation: "Pixel (px) adalah unit absolut yang nilainya tetap, berbeda dengan rem/em/vw yang nilainya fleksibel berdasarkan referensi tertentu.",
        skill_category: "visual",
        order_index: 4
      },
      {
        id: "resp-q6",
        question_type: "true_false",
        question_text: "Notasi mobile-first berarti kita mendesain layout untuk desktop dahulu, baru merapikannya untuk HP.",
        options: null,
        correct_answer: false,
        code_snippet: null,
        syntax_chips: null,
        explanation: "Mobile-first berarti mendesain versi layar terkecil (ponsel) terlebih dahulu, baru memperluasnya untuk layar besar menggunakan min-width media queries.",
        skill_category: "visual",
        order_index: 5
      },
      {
        id: "resp-q7",
        question_type: "blank_space",
        question_text: "Lengkapi unit responsif yang bernilai relatif terhadap ukuran font root dokumen HTML:",
        options: null,
        correct_answer: ["rem"],
        code_snippet: "h1 {\n  font-size: 2.5___;\n}",
        syntax_chips: ["rem", "em", "px", "%"],
        explanation: "rem (root em) mengacu langsung pada ukuran font pada elemen root <html>.",
        skill_category: "visual",
        order_index: 6
      },
      {
        id: "resp-q8",
        question_type: "mcq",
        question_text: "Apa arti dari unit CSS '50vw'?",
        options: ["50% dari lebar layar browser", "50% dari tinggi layar browser", "50 pixel lebar", "50% lebar kontainer induk"],
        correct_answer: "50% dari lebar layar browser",
        code_snippet: null,
        syntax_chips: null,
        explanation: "vw (viewport width) mengacu pada persentase lebar layar. 50vw artinya setengah lebar layar browser.",
        skill_category: "visual",
        order_index: 7
      },
      {
        id: "resp-q9",
        question_type: "true_false",
        question_text: "Gaya CSS di dalam @media (max-width: 480px) akan diterapkan pada layar dengan lebar 600px.",
        options: null,
        correct_answer: false,
        code_snippet: null,
        syntax_chips: null,
        explanation: "max-width: 480px berarti gaya hanya diterapkan untuk layar selebar 480px ke bawah. Layar 600px tidak akan terpengaruh.",
        skill_category: "visual",
        order_index: 8
      },
      {
        id: "resp-q10",
        question_type: "mcq",
        question_text: "Manakah cara terbaik membuat gambar tetap fleksibel dan tidak melebihi kontainer induknya?",
        options: ["max-width: 100%; height: auto;", "width: 100px; height: 100px;", "width: auto; height: 100%;", "display: block; width: 100vw;"],
        correct_answer: "max-width: 100%; height: auto;",
        code_snippet: null,
        syntax_chips: null,
        explanation: "max-width: 100% mencegah gambar melebar melebihi lebar wadah induknya, sementara height: auto menjaga proporsi aspek rasionya.",
        skill_category: "visual",
        order_index: 9
      },
      {
        id: "resp-q11",
        question_type: "mcq",
        question_text: "Nilai breakpoint di media query biasanya merujuk pada:",
        options: ["Lebar layar perangkat", "Waktu muat halaman", "Ukuran file stylesheet", "Koneksi internet pengguna"],
        correct_answer: "Lebar layar perangkat",
        code_snippet: null,
        syntax_chips: null,
        explanation: "Breakpoint adalah titik dimensi di mana tata letak web akan berganti penampilan, biasanya berdasarkan lebar layar.",
        skill_category: "visual",
        order_index: 10
      },
      {
        id: "resp-q12",
        question_type: "true_false",
        question_text: "Flexbox dan Grid dapat mempermudah pembuatan tata letak responsif tanpa memerlukan terlalu banyak media query.",
        options: null,
        correct_answer: true,
        code_snippet: null,
        syntax_chips: null,
        explanation: "Sistem tata letak CSS modern seperti flex-wrap atau grid auto-fit/auto-fill sangat adaptif terhadap perubahan lebar secara mandiri.",
        skill_category: "visual",
        order_index: 11
      },
      {
        id: "resp-q13",
        question_type: "blank_space",
        question_text: "Lengkapi deklarasi untuk media query yang membatasi layar LEBIH BESAR dari 1024px (desktop):",
        options: null,
        correct_answer: ["min-width"],
        code_snippet: "@media (___: 1024px) {\n  .container { max-width: 960px; }\n}",
        syntax_chips: ["min-width", "max-width", "width", "device-width"],
        explanation: "min-width digunakan untuk menerapkan gaya mulai dari batas minimum lebar layar ke atas.",
        skill_category: "visual",
        order_index: 12
      },
      {
        id: "resp-q14",
        question_type: "short_coding",
        question_text: "Tulis deklarasi CSS kosong untuk media query max-width 768px.",
        options: null,
        correct_answer: "@media (max-width: 768px) { }",
        code_snippet: null,
        syntax_chips: null,
        explanation: "Format penulisan @media (kondisi) { }.",
        skill_category: "visual",
        order_index: 13
      },
      {
        id: "resp-q15",
        question_type: "mcq",
        question_text: "Apa keunggulan dari unit responsif 'rem' dibandingkan dengan 'em'?",
        options: ["rem selalu konsisten mengacu pada font html root", "rem mengacu pada ukuran kontainer induk terdekat", "rem tidak didukung di browser seluler", "rem bernilai absolut"],
        correct_answer: "rem selalu konsisten mengacu pada font html root",
        code_snippet: null,
        syntax_chips: null,
        explanation: "Karena rem selalu mengacu pada <html>, ukurannya terprediksi dan tidak bertumpuk membesar seperti em.",
        skill_category: "visual",
        order_index: 16
      },
      {
        id: "resp-q16",
        question_type: "true_false",
        question_text: "Framework CSS modern seperti Bootstrap atau Tailwind tidak memerlukan tag meta viewport untuk bekerja dengan baik di HP.",
        options: null,
        correct_answer: false,
        code_snippet: null,
        syntax_chips: null,
        explanation: "Semua framework responsif tetap bergantung pada keberadaan tag meta viewport agar perenderan di browser HP proporsional.",
        skill_category: "visual",
        order_index: 15
      },
      {
        id: "resp-q17",
        question_type: "mcq",
        question_text: "Apakah arti dari unit '100vh'?",
        options: ["100% dari tinggi area pandang browser", "100% dari lebar layar browser", "100 pixel tinggi", "Tinggi maksimum konten"],
        correct_answer: "100% dari tinggi area pandang browser",
        code_snippet: null,
        syntax_chips: null,
        explanation: "vh (viewport height) mengukur tinggi layar. 100vh mewakili tinggi penuh jendela browser.",
        skill_category: "visual",
        order_index: 14
      },
      {
        id: "resp-q18",
        question_type: "blank_space",
        question_text: "Lengkapi deklarasi media query gabungan (layar antara 768px dan 1024px):",
        options: null,
        correct_answer: ["and"],
        code_snippet: "@media (min-width: 768px) ___ (max-width: 1024px) {\n  .sidebar { width: 200px; }\n}",
        syntax_chips: ["and", "or", "not", "only"],
        explanation: "Operator 'and' digunakan untuk menggabungkan beberapa kondisi dalam media query.",
        skill_category: "visual",
        order_index: 17
      },
      {
        id: "resp-q19",
        question_type: "true_false",
        question_text: "Metode fluid typography memungkinkan ukuran teks membesar atau mengecil secara halus mengikuti lebar browser tanpa melompat.",
        options: null,
        correct_answer: true,
        code_snippet: null,
        syntax_chips: null,
        explanation: "Menggunakan gabungan unit rem dan vw (seperti font-size: calc(1rem + 1vw)) membuat teks berubah ukuran secara kontinu.",
        skill_category: "visual",
        order_index: 18
      },
      {
        id: "resp-q20",
        question_type: "mcq",
        question_text: "Di era mobile-first, struktur breakpoint media query CSS ditulis secara berurutan mulai dari:",
        options: ["Layar terkecil ke layar terbesar", "Layar terbesar ke layar terkecil", "Breakpoint ganjil saja", "Sesuai urutan abjad"],
        correct_answer: "Layar terkecil ke layar terbesar",
        code_snippet: null,
        syntax_chips: null,
        explanation: "Dengan mobile-first, Anda menulis kode dasar untuk HP, lalu menambahkan min-width dari layar sedang (tablet) ke layar besar (desktop).",
        skill_category: "visual",
        order_index: 19
      }
    ]
  },
  {
    id: "76267112-29f8-4d74-91d0-4e1fd9bc2521",
    lesson_id: "b1000001-0001-0001-0001-000000000004",
    title: "JavaScript ES6+ Quiz",
    quiz_type: "mixed",
    difficulty: "medium",
    xp_reward: 20,
    quiz_questions: [
      {
        id: "js-q1",
        question_type: "mcq",
        question_text: "Kata kunci manakah yang digunakan untuk mendeklarasikan variabel yang nilainya tidak dapat diubah (konstan) di ES6?",
        options: ["const", "let", "var", "immutable"],
        correct_answer: "const",
        code_snippet: null,
        syntax_chips: null,
        explanation: "const digunakan untuk mendeklarasikan variabel read-only yang tidak bisa di-reassign nilai barunya.",
        skill_category: "logic",
        order_index: 0
      },
      {
        id: "js-q2",
        question_type: "true_false",
        question_text: "Variabel let dan const memiliki cakupan block scope (hanya dapat diakses di dalam kurung kurawal tempat dideklarasikan).",
        options: null,
        correct_answer: true,
        code_snippet: null,
        syntax_chips: null,
        explanation: "Berbeda dengan var yang bertipe function scope, let dan const bersifat block scope.",
        skill_category: "logic",
        order_index: 1
      },
      {
        id: "js-q3",
        question_type: "blank_space",
        question_text: "Lengkapi sintaks arrow function penambahan berikut:",
        options: null,
        correct_answer: ["=>"],
        code_snippet: "const tambah = (a, b) ___ a + b;",
        syntax_chips: ["=>", "->", "=>", "~>"],
        explanation: "Arrow function menggunakan simbol => untuk mendefinisikan fungsinya secara ringkas.",
        skill_category: "logic",
        order_index: 2
      },
      {
        id: "js-q4",
        question_type: "short_coding",
        question_text: "Tulis template literal lengkap untuk menghasilkan teks 'Nama saya Budi' dengan memasukkan variabel 'nama'.",
        options: null,
        correct_answer: "`Nama saya ${nama}`",
        code_snippet: null,
        syntax_chips: null,
        explanation: "Template literal menggunakan backticks (``) dan ekspresi interpolasi ${variabel}.",
        skill_category: "logic",
        order_index: 3
      },
      {
        id: "js-q5",
        question_type: "mcq",
        question_text: "Manakah cara destructuring objek user { nama: 'Farel', umur: 20 } ke dalam variabel terpisah?",
        options: ["const { nama, umur } = user;", "const [ nama, umur ] = user;", "const nama, umur = user;", "const { user.nama, user.umur };"],
        correct_answer: "const { nama, umur } = user;",
        code_snippet: null,
        syntax_chips: null,
        explanation: "Destructuring objek menggunakan kurung kurawal {} yang mencocokkan kunci properti objek tersebut.",
        skill_category: "logic",
        order_index: 4
      },
      {
        id: "js-q6",
        question_type: "true_false",
        question_text: "Method array map() merubah elemen array asli secara langsung tanpa membuat array baru.",
        options: null,
        correct_answer: false,
        code_snippet: null,
        syntax_chips: null,
        explanation: "map() selalu mengembalikan array baru yang telah dimodifikasi, tanpa merubah nilai dari array asli.",
        skill_category: "logic",
        order_index: 5
      },
      {
        id: "js-q7",
        question_type: "blank_space",
        question_text: "Lengkapi method array untuk menyaring angka genap saja:",
        options: null,
        correct_answer: ["filter"],
        code_snippet: "const genap = angka.___((n) => n % 2 === 0);",
        syntax_chips: ["filter", "map", "reduce", "find"],
        explanation: "method filter() menyaring elemen berdasarkan fungsi kondisi pengujian yang menghasilkan boolean.",
        skill_category: "logic",
        order_index: 6
      },
      {
        id: "js-q8",
        question_type: "mcq",
        question_text: "Fitur ES6 manakah yang menyebarkan isi elemen array ke dalam wadah baru?",
        options: ["Spread operator (...)", "Rest parameter", "Destructuring", "Interpolasi"],
        correct_answer: "Spread operator (...)",
        code_snippet: null,
        syntax_chips: null,
        explanation: "Spread operator (...) menyebarkan (unpack) elemen array atau properti objek ke objek/array baru.",
        skill_category: "logic",
        order_index: 7
      },
      {
        id: "js-q9",
        question_type: "true_false",
        question_text: "Deklarasi const dapat digunakan untuk mendefinisikan objek, dan kita tetap bisa mengubah nilai di dalam objek tersebut.",
        options: null,
        correct_answer: true,
        code_snippet: null,
        syntax_chips: null,
        explanation: "const mengunci referensi variabel, bukan isinya. Kita tetap bisa mengedit properti internal dari objek atau array.",
        skill_category: "logic",
        order_index: 8
      },
      {
        id: "js-q10",
        question_type: "mcq",
        question_text: "Fungsi yang diawali dengan kata kunci async akan selalu mengembalikan objek:",
        options: ["Promise", "String", "Undefined", "Array"],
        correct_answer: "Promise",
        code_snippet: null,
        syntax_chips: null,
        explanation: "Fungsi async dibungkus secara otomatis untuk mengembalikan objek Promise dalam penanganannya.",
        skill_category: "logic",
        order_index: 9
      },
      {
        id: "js-q11",
        question_type: "mcq",
        question_text: "Bagaimana cara menangani kesalahan (error handling) saat menggunakan async/await?",
        options: ["Menggunakan blok try/catch", "Menggunakan method .catch()", "Menggunakan percabangan if/else", "Menggunakan callback error"],
        correct_answer: "Menggunakan blok try/catch",
        code_snippet: null,
        syntax_chips: null,
        explanation: "Blok try/catch adalah standar penanganan kesalahan pada kode sinkron dan asinkron modern.",
        skill_category: "logic",
        order_index: 10
      },
      {
        id: "js-q12",
        question_type: "true_false",
        question_text: "Perintah await hanya dapat ditulis di dalam fungsi yang dideklarasikan dengan kata kunci async.",
        options: null,
        correct_answer: true,
        code_snippet: null,
        syntax_chips: null,
        explanation: "Secara sintaksis dasar, await hanya valid digunakan langsung di dalam cakupan fungsi async.",
        skill_category: "logic",
        order_index: 11
      },
      {
        id: "js-q13",
        question_type: "blank_space",
        question_text: "Lengkapi sintaks import modul di ES6 berikut:",
        options: null,
        correct_answer: ["import", "from"],
        code_snippet: "___ React ___ 'react';",
        syntax_chips: ["import", "from", "require", "export", "as", "source"],
        explanation: "Sintaks impor di ES6 menggunakan import NamaModul from 'lokasi'.",
        skill_category: "logic",
        order_index: 12
      },
      {
        id: "js-q14",
        question_type: "short_coding",
        question_text: "Tulis arrow function bernama 'double' yang menerima satu parameter 'x' dan mengembalikan nilai x dikalikan 2.",
        options: null,
        correct_answer: "const double = x => x * 2;",
        code_snippet: null,
        syntax_chips: null,
        explanation: "Penulisan parameter tunggal tidak wajib menggunakan tanda kurung pada arrow function.",
        skill_category: "logic",
        order_index: 13
      },
      {
        id: "js-q15",
        question_type: "mcq",
        question_text: "Apa output dari kode: console.log(typeof (() => {})); ?",
        options: ["function", "object", "arrow", "undefined"],
        correct_answer: "function",
        code_snippet: null,
        syntax_chips: null,
        explanation: "Arrow function bertipe dasar 'function'.",
        skill_category: "logic",
        order_index: 14
      },
      {
        id: "js-q16",
        question_type: "true_false",
        question_text: "Dengan parameter opsional baru (Default Parameters) di ES6, kita dapat menetapkan nilai default pada parameter fungsi jika tidak dikirimkan.",
        options: null,
        correct_answer: true,
        code_snippet: null,
        syntax_chips: null,
        explanation: "Contoh: const greet = (name = 'Guest') => ... akan menggunakan 'Guest' jika argumen kosong.",
        skill_category: "logic",
        order_index: 15
      },
      {
        id: "js-q17",
        question_type: "mcq",
        question_text: "Manakah method array ES6 yang mencari elemen pertama yang lolos kondisi tertentu?",
        options: ["find()", "filter()", "some()", "map()"],
        correct_answer: "find()",
        code_snippet: null,
        syntax_chips: null,
        explanation: "find() mengembalikan nilai elemen pertama yang lolos uji kondisi, atau undefined jika tidak ditemukan.",
        skill_category: "logic",
        order_index: 16
      },
      {
        id: "js-q18",
        question_type: "blank_space",
        question_text: "Lengkapi parameter fungsi rest untuk menampung argumen tak terbatas ke array 'args':",
        options: null,
        correct_answer: ["...args"],
        code_snippet: "function gabung(___) {\n  return args.join(' ');\n}",
        syntax_chips: ["...args", "args", "rest args", "...rest"],
        explanation: "Rest parameter diawali titik tiga (...) diikuti nama penampung array.",
        skill_category: "logic",
        order_index: 17
      },
      {
        id: "js-q19",
        question_type: "true_false",
        question_text: "Objek Promise di JavaScript memiliki 3 keadaan (states): Pending, Fulfilled, dan Rejected.",
        options: null,
        correct_answer: true,
        code_snippet: null,
        syntax_chips: null,
        explanation: "Promise diawali dengan status pending, kemudian bisa berhasil (fulfilled) atau gagal (rejected).",
        skill_category: "logic",
        order_index: 18
      },
      {
        id: "js-q20",
        question_type: "mcq",
        question_text: "Manakah cara menyalin properti objek b ke objek a tanpa merusak referensi aslinya menggunakan ES6?",
        options: ["const newObj = { ...a, ...b };", "const newObj = a + b;", "const newObj = { a, b };", "const newObj = copy(a, b);"],
        correct_answer: "const newObj = { ...a, ...b };",
        code_snippet: null,
        syntax_chips: null,
        explanation: "Spread operator pada objek menyalin pasangan properti kunci-nilai secara shallow copy ke objek baru.",
        skill_category: "logic",
        order_index: 19
      }
    ]
  },
  {
    id: "b887c619-4144-4680-ae42-39ebe5a11748",
    lesson_id: "b1000001-0001-0001-0001-000000000005",
    title: "DOM Manipulation Quiz",
    quiz_type: "mixed",
    difficulty: "medium",
    xp_reward: 20,
    quiz_questions: [
      {
        id: "dom-q1",
        question_type: "mcq",
        question_text: "Apakah singkatan dari DOM?",
        options: ["Document Object Model", "Document Oriented Method", "Digital Object Management", "Data Object Manager"],
        correct_answer: "Document Object Model",
        code_snippet: null,
        syntax_chips: null,
        explanation: "DOM singkatan dari Document Object Model, standar struktur objek halaman HTML.",
        skill_category: "logic",
        order_index: 0
      },
      {
        id: "dom-q2",
        question_type: "true_false",
        question_text: "Metode querySelectorAll() mengembalikan satu objek elemen tunggal saja.",
        options: null,
        correct_answer: false,
        code_snippet: null,
        syntax_chips: null,
        explanation: "querySelectorAll mengembalikan kumpulan elemen (NodeList), sedangkan querySelector mengembalikan elemen tunggal pertama.",
        skill_category: "logic",
        order_index: 1
      },
      {
        id: "dom-q3",
        question_type: "blank_space",
        question_text: "Lengkapi metode seleksi elemen berdasarkan atribut ID:",
        options: null,
        correct_answer: ["document.getElementById"],
        code_snippet: "const element = ___(\"main-btn\");",
        syntax_chips: ["document.getElementById", "document.querySelector", "document.getElement", "dom.findById"],
        explanation: "Metode getElementById digunakan untuk menargetkan elemen berdasar nilai ID unik.",
        skill_category: "logic",
        order_index: 2
      },
      {
        id: "dom-q4",
        question_type: "short_coding",
        question_text: "Tulis JavaScript lengkap untuk merubah teks elemen 'el' menjadi 'Sukses'.",
        options: null,
        correct_answer: "el.textContent = \"Sukses\";",
        code_snippet: null,
        syntax_chips: null,
        explanation: "Properti textContent digunakan untuk membaca atau mengubah teks murni elemen.",
        skill_category: "logic",
        order_index: 3
      },
      {
        id: "dom-q5",
        question_type: "mcq",
        question_text: "Metode mana yang digunakan untuk menempelkan pendengar aktivitas interaksi pengguna di JavaScript?",
        options: ["addEventListener", "onEvent", "attachEvent", "listenTo"],
        correct_answer: "addEventListener",
        code_snippet: null,
        syntax_chips: null,
        explanation: "addEventListener digunakan untuk menempelkan fungsi callback aktivitas event seperti klik, submit, dll.",
        skill_category: "logic",
        order_index: 4
      },
      {
        id: "dom-q6",
        question_type: "true_false",
        question_text: "Mengubah warna border melalui style CSS di JavaScript ditulis sebagai element.style.borderColor = 'red'.",
        options: null,
        correct_answer: true,
        code_snippet: null,
        syntax_chips: null,
        explanation: "Properti gaya CSS multi-kata ditulis dalam format camelCase di JavaScript (border-color menjadi borderColor).",
        skill_category: "logic",
        order_index: 5
      },
      {
        id: "dom-q7",
        question_type: "blank_space",
        question_text: "Lengkapi kode untuk menambahkan class baru ke elemen:",
        options: null,
        correct_answer: ["classList.add"],
        code_snippet: "element.___(\"active\");",
        syntax_chips: ["classList.add", "className.add", "addClass", "classes.push"],
        explanation: "classList.add() digunakan untuk menambahkan sebuah class baru ke elemen tanpa menimpa class yang lama.",
        skill_category: "logic",
        order_index: 6
      },
      {
        id: "dom-q8",
        question_type: "mcq",
        question_text: "Properti mana yang digunakan untuk menuliskan kode HTML baru (termasuk tag) di dalam suatu elemen?",
        options: ["innerHTML", "textContent", "innerText", "htmlContent"],
        correct_answer: "innerHTML",
        code_snippet: null,
        syntax_chips: null,
        explanation: "innerHTML merender teks sebagai struktur tag HTML, sedangkan textContent merendernya sebagai teks murni.",
        skill_category: "logic",
        order_index: 7
      },
      {
        id: "dom-q9",
        question_type: "true_false",
        question_text: "Event target 'click' mewakili aksi ketukan papan ketik (keyboard) oleh pengguna.",
        options: null,
        correct_answer: false,
        code_snippet: null,
        syntax_chips: null,
        explanation: "'click' mendeteksi penekanan mouse atau klik jari di ponsel. Untuk tombol keyboard digunakan event seperti keydown atau keyup.",
        skill_category: "logic",
        order_index: 8
      },
      {
        id: "dom-q10",
        question_type: "mcq",
        question_text: "Metode mana yang digunakan untuk menghapus elemen anak dari elemen induknya di DOM?",
        options: ["removeChild()", "delete()", "remove()", "clearElement()"],
        correct_answer: "removeChild()",
        code_snippet: null,
        syntax_chips: null,
        explanation: "removeChild() digunakan untuk menghapus simpul anak (child node) dari struktur induknya.",
        skill_category: "logic",
        order_index: 9
      },
      {
        id: "dom-q11",
        question_type: "mcq",
        question_text: "Bagaimana cara membuat elemen HTML baru (misal tag <div>) secara dinamis menggunakan JS?",
        options: ["document.createElement('div')", "document.newElement('div')", "new Element('div')", "document.make('div')"],
        correct_answer: "document.createElement('div')",
        code_snippet: null,
        syntax_chips: null,
        explanation: "createElement() membuat node elemen baru sesuai tipe tag yang dimasukkan dalam argumen teks.",
        skill_category: "logic",
        order_index: 10
      },
      {
        id: "dom-q12",
        question_type: "true_false",
        question_text: "Metode preventDefault() di event handler menghentikan aksi perilaku bawaan browser (seperti memuat ulang halaman saat form disubmit).",
        options: null,
        correct_answer: true,
        code_snippet: null,
        syntax_chips: null,
        explanation: "preventDefault() membatalkan perilaku bawaan (default action) agar kita bisa memprosesnya secara khusus lewat JS.",
        skill_category: "logic",
        order_index: 11
      },
      {
        id: "dom-q13",
        question_type: "blank_space",
        question_text: "Lengkapi metode seleksi elemen pertama yang memiliki class 'card':",
        options: null,
        correct_answer: ["document.querySelector"],
        code_snippet: "const card = ___(\".card\");",
        syntax_chips: ["document.querySelector", "document.querySelectorAll", "document.getElementByClass", "document.find"],
        explanation: "querySelector memilih elemen pertama yang cocok dengan selektor CSS lengkap.",
        skill_category: "logic",
        order_index: 12
      },
      {
        id: "dom-q14",
        question_type: "short_coding",
        question_text: "Tulis JavaScript untuk menghentikan default submit form pada parameter event 'e'.",
        options: null,
        correct_answer: "e.preventDefault();",
        code_snippet: null,
        syntax_chips: null,
        explanation: "preventDefault dipanggil pada instansi event e.",
        skill_category: "logic",
        order_index: 13
      },
      {
        id: "dom-q15",
        question_type: "mcq",
        question_text: "Untuk menyisipkan elemen yang baru dibuat ke akhir dari sebuah container induk, digunakan metode:",
        options: ["appendChild()", "insert()", "prepend()", "push()"],
        correct_answer: "appendChild()",
        code_snippet: null,
        syntax_chips: null,
        explanation: "appendChild() menambahkan node ke akhir daftar anak dari node induk.",
        skill_category: "logic",
        order_index: 14
      },
      {
        id: "dom-q16",
        question_type: "true_false",
        question_text: "Properti classList.toggle('active') akan menghapus class 'active' jika class tersebut belum ada pada elemen.",
        options: null,
        correct_answer: false,
        code_snippet: null,
        syntax_chips: null,
        explanation: "toggle() akan menambahkan class jika belum ada, dan menghapusnya jika class tersebut sudah ada.",
        skill_category: "logic",
        order_index: 15
      },
      {
        id: "dom-q17",
        question_type: "mcq",
        question_text: "Event mana yang mendeteksi perubahan nilai pada kolom input teks?",
        options: ["input", "click", "hover", "submit"],
        correct_answer: "input",
        code_snippet: null,
        syntax_chips: null,
        explanation: "Event 'input' mendeteksi setiap perubahan karakter nilai di dalam kotak input teks.",
        skill_category: "logic",
        order_index: 16
      },
      {
        id: "dom-q18",
        question_type: "blank_space",
        question_text: "Lengkapi properti untuk mengubah alamat gambar secara dinamis:",
        options: null,
        correct_answer: ["src"],
        code_snippet: "imageElement.___ = \"baru.jpg\";",
        syntax_chips: ["src", "href", "source", "url"],
        explanation: "Elemen gambar memetakan atribut src HTML ke properti .src di JavaScript.",
        skill_category: "logic",
        order_index: 17
      },
      {
        id: "dom-q19",
        question_type: "true_false",
        question_text: "Objek global window mewakili jendela browser itu sendiri.",
        options: null,
        correct_answer: true,
        code_snippet: null,
        syntax_chips: null,
        explanation: "window adalah objek tingkat teratas di ekosistem browser yang menampung objek document, screen, dll.",
        skill_category: "logic",
        order_index: 18
      },
      {
        id: "dom-q20",
        question_type: "mcq",
        question_text: "Atribut kustom pada elemen HTML5 yang diawali kata kunci 'data-' dapat dibaca di JS menggunakan properti:",
        options: ["dataset", "data", "attributes", "customData"],
        correct_answer: "dataset",
        code_snippet: null,
        syntax_chips: null,
        explanation: "Properti dataset memetakan semua atribut berawalan 'data-' menjadi objek kunci-nilai.",
        skill_category: "logic",
        order_index: 19
      }
    ]
  },
  {
    id: "def3ab96-d3c9-4dc4-ba15-a11a2f1c9583",
    lesson_id: "b1000001-0001-0001-0001-000000000006",
    title: "React Fundamentals Quiz",
    quiz_type: "mixed",
    difficulty: "medium",
    xp_reward: 20,
    quiz_questions: [
      {
        id: "react-q1",
        question_type: "mcq",
        question_text: "Siapakah pencipta dan pengelola utama dari pustaka React?",
        options: ["Facebook/Meta", "Google", "Microsoft", "Twitter"],
        correct_answer: "Facebook/Meta",
        code_snippet: null,
        syntax_chips: null,
        explanation: "React awalnya dikembangkan oleh Facebook (kini Meta) dan dirilis sebagai open-source.",
        skill_category: "logic",
        order_index: 0
      },
      {
        id: "react-q2",
        question_type: "true_false",
        question_text: "JSX adalah kode HTML murni yang berjalan langsung di browser tanpa kompilasi.",
        options: null,
        correct_answer: false,
        code_snippet: null,
        syntax_chips: null,
        explanation: "JSX mirip HTML tetapi merupakan sintaks JavaScript. JSX harus dikompilasi oleh compiler seperti Babel agar bisa dipahami browser.",
        skill_category: "markup",
        order_index: 1
      },
      {
        id: "react-q3",
        question_type: "blank_space",
        question_text: "Lengkapi pernyataan return untuk merender tampilan komponen React fungsional:",
        options: null,
        correct_answer: ["return"],
        code_snippet: "function App() {\n  ___ (\n    <div>Halo</div>\n  );\n}",
        syntax_chips: ["return", "render", "output", "display"],
        explanation: "Komponen fungsional React mengembalikan (return) elemen JSX untuk dirender.",
        skill_category: "logic",
        order_index: 2
      },
      {
        id: "react-q4",
        question_type: "short_coding",
        question_text: "Tulis komponen fungsional kosong bernama 'MyComponent'.",
        options: null,
        correct_answer: "const MyComponent = () => { return null; };",
        code_snippet: null,
        syntax_chips: null,
        explanation: "Komponen fungsional dapat berupa fungsi panah (arrow function) yang mengembalikan JSX (atau null).",
        skill_category: "logic",
        order_index: 3
      },
      {
        id: "react-q5",
        question_type: "mcq",
        question_text: "Atribut apa di JSX yang digunakan sebagai ganti dari atribut 'class' pada HTML?",
        options: ["className", "class", "styleClass", "classList"],
        correct_answer: "className",
        code_snippet: null,
        syntax_chips: null,
        explanation: "Karena 'class' adalah kata kunci reserved di JavaScript, React menggunakan 'className'.",
        skill_category: "markup",
        order_index: 4
      },
      {
        id: "react-q6",
        question_type: "true_false",
        question_text: "Props dikirimkan ke suatu komponen secara searah dari induk ke anak dan nilainya bersifat read-only (tidak dapat diubah oleh komponen anak).",
        options: null,
        correct_answer: true,
        code_snippet: null,
        syntax_chips: null,
        explanation: "Props adalah parameter input yang bersifat imutabel bagi komponen anak yang menerimanya.",
        skill_category: "logic",
        order_index: 5
      },
      {
        id: "react-q7",
        question_type: "blank_space",
        question_text: "Lengkapi sintaks penulisan props pada komponen fungsional:",
        options: null,
        correct_answer: ["props"],
        code_snippet: "function Welcome(___) {\n  return <h1>Halo, {props.name}</h1>;\n}",
        syntax_chips: ["props", "state", "params", "data"],
        explanation: "Parameter utama komponen React menerima satu objek yang disebut props.",
        skill_category: "logic",
        order_index: 6
      },
      {
        id: "react-q8",
        question_type: "mcq",
        question_text: "Wadah kosong tanpa tag bernama '<> </> (Fragments)' di React digunakan untuk:",
        options: ["Membungkus elemen tanpa menambahkan node DOM baru", "Membuat container grid", "Meningkatkan kecepatan render CSS", "Mengaktifkan mode offline"],
        correct_answer: "Membungkus elemen tanpa menambahkan node DOM baru",
        code_snippet: null,
        syntax_chips: null,
        explanation: "Fragment membungkus kumpulan elemen JSX tanpa membuat elemen HTML pembungkus baru (seperti extra div) di DOM.",
        skill_category: "markup",
        order_index: 7
      },
      {
        id: "react-q9",
        question_type: "true_false",
        question_text: "Nama komponen React (baik fungsional maupun kelas) harus selalu diawali dengan huruf kapital (besar).",
        options: null,
        correct_answer: true,
        code_snippet: null,
        syntax_chips: null,
        explanation: "React membedakan tag bawaan HTML (huruf kecil seperti div, h1) dengan komponen buatan kita (Capitalized) berdasarkan huruf pertamanya.",
        skill_category: "logic",
        order_index: 8
      },
      {
        id: "react-q10",
        question_type: "mcq",
        question_text: "Sintaks ekspresi JavaScript dinamis ditulis di dalam JSX menggunakan pembungkus berupa:",
        options: ["Kurung kurawal { }", "Kurung siku [ ]", "Tanda kutip \" \"", "Kurung biasa ( )"],
        correct_answer: "Kurung kurawal { }",
        code_snippet: null,
        syntax_chips: null,
        explanation: "Semua ekspresi JavaScript (seperti variabel, operasi matematika, fungsi map) ditulis di dalam { } di JSX.",
        skill_category: "markup",
        order_index: 9
      },
      {
        id: "react-q11",
        question_type: "mcq",
        question_text: "Bagaimana cara menulis penangan event klik (click handler) pada elemen tombol di React?",
        options: ["onClick={handleClick}", "onclick=\"handleClick()\"", "onClick(handleClick)", "onEventClick={handleClick}"],
        correct_answer: "onClick={handleClick}",
        code_snippet: null,
        syntax_chips: null,
        explanation: "React menggunakan penamaan camelCase (onClick) dan mengoper referensi fungsi, bukan string.",
        skill_category: "logic",
        order_index: 10
      },
      {
        id: "react-q12",
        question_type: "true_false",
        question_text: "Virtual DOM di React mempercepat pembaruan UI dengan mendeteksi perubahan lalu memutakhirkan seluruh halaman secara utuh.",
        options: null,
        correct_answer: false,
        code_snippet: null,
        syntax_chips: null,
        explanation: "Virtual DOM mendeteksi perubahan (diffing) lalu hanya memutakhirkan elemen spesifik yang berubah, bukan merender ulang seluruh halaman.",
        skill_category: "logic",
        order_index: 11
      },
      {
        id: "react-q13",
        question_type: "blank_space",
        question_text: "Lengkapi pengiriman prop 'username' bernilai 'farel' ke komponen Profile:",
        options: null,
        correct_answer: ["username"],
        code_snippet: "<Profile ___=\"farel\" />",
        syntax_chips: ["username", "props.username", "name", "value"],
        explanation: "Prop dilewatkan ke komponen anak seperti atribut HTML standar.",
        skill_category: "markup",
        order_index: 12
      },
      {
        id: "react-q14",
        question_type: "short_coding",
        question_text: "Tulis elemen JSX paragraf dengan class bernama 'text-red'.",
        options: null,
        correct_answer: "<p className=\"text-red\"></p>",
        code_snippet: null,
        syntax_chips: null,
        explanation: "Ingat, di JSX gunakan className untuk menentukan kelas CSS.",
        skill_category: "markup",
        order_index: 13
      },
      {
        id: "react-q15",
        question_type: "mcq",
        question_text: "Atribut khusus apa yang wajib disertakan pada elemen di dalam daftar (list rendering) agar React dapat melacak perubahannya?",
        options: ["key", "id", "index", "ref"],
        correct_answer: "key",
        code_snippet: null,
        syntax_chips: null,
        explanation: "Prop 'key' membantu React mengidentifikasi item mana yang telah berubah, ditambahkan, atau dihapus secara efisien.",
        skill_category: "logic",
        order_index: 14
      },
      {
        id: "react-q16",
        question_type: "true_false",
        question_text: "Atribut style di dalam JSX menerima objek berisi properti CSS yang ditulis dalam format camelCase.",
        options: null,
        correct_answer: true,
        code_snippet: null,
        syntax_chips: null,
        explanation: "Contoh: style={{ backgroundColor: 'red' }} adalah cara penulisan gaya inline di JSX.",
        skill_category: "markup",
        order_index: 15
      },
      {
        id: "react-q17",
        question_type: "mcq",
        question_text: "Manakah cara kondisional rendering yang paling populer untuk merender elemen jika kondisi bernilai benar di React?",
        options: ["{kondisi && <Elemen />}", "{if (kondisi) <Elemen />}", "{kondisi ? <Elemen />}", "{kondisi || <Elemen />}"],
        correct_answer: "{kondisi && <Elemen />}",
        code_snippet: null,
        syntax_chips: null,
        explanation: "Sintaks operator logika AND (&&) sangat umum digunakan untuk perenderan kondisional pendek.",
        skill_category: "logic",
        order_index: 16
      },
      {
        id: "react-q18",
        question_type: "blank_space",
        question_text: "Lengkapi import React pada awal file:",
        options: null,
        correct_answer: ["import"],
        code_snippet: "___ React from 'react';",
        syntax_chips: ["import", "require", "using", "load"],
        explanation: "Sintaks import ES6 digunakan untuk memuat library React.",
        skill_category: "logic",
        order_index: 17
      },
      {
        id: "react-q19",
        question_type: "true_false",
        question_text: "Kita tidak diperbolehkan menulis kode JavaScript biasa seperti definisi variabel di luar fungsi komponen di file yang sama.",
        options: null,
        correct_answer: false,
        code_snippet: null,
        syntax_chips: null,
        explanation: "File komponen React adalah file JavaScript biasa, Anda bebas mendeklarasikan variabel, konstanta, atau fungsi helper lainnya di luar badan komponen.",
        skill_category: "logic",
        order_index: 18
      },
      {
        id: "react-q20",
        question_type: "mcq",
        question_text: "Manakah cara yang benar untuk mendefinisikan array daftar nama di React menggunakan map()?",
        options: ["{users.map(u => <li key={u.id}>{u.name}</li>)}", "{users.forEach(u => <li>{u.name}</li>)}", "{for u in users: <li>{u}</li>}", "{map(users, u => <li>{u}</li>)}"],
        correct_answer: "{users.map(u => <li key={u.id}>{u.name}</li>)}",
        code_snippet: null,
        syntax_chips: null,
        explanation: "Metode map() mengembalikan array baru berisi elemen JSX, sangat cocok untuk perulangan di React.",
        skill_category: "logic",
        order_index: 19
      }
    ]
  },
  {
    id: "7b2ae47c-8578-4a84-947b-e08435fdccd0",
    lesson_id: "b1000001-0001-0001-0001-000000000007",
    title: "React Hooks Quiz",
    quiz_type: "mixed",
    difficulty: "medium",
    xp_reward: 20,
    quiz_questions: [
      {
        id: "hooks-q1",
        question_type: "mcq",
        question_text: "Hook dasar React manakah yang digunakan untuk mengelola data state lokal di komponen?",
        options: ["useState", "useEffect", "useContext", "useRef"],
        correct_answer: "useState",
        code_snippet: null,
        syntax_chips: null,
        explanation: "useState mengembalikan variabel state dan fungsi setter untuk memperbaruinya.",
        skill_category: "logic",
        order_index: 0
      },
      {
        id: "hooks-q2",
        question_type: "true_false",
        question_text: "Kita diperbolehkan memanggil Hooks di dalam percabangan if agar lebih fleksibel.",
        options: null,
        correct_answer: false,
        code_snippet: null,
        syntax_chips: null,
        explanation: "Aturan utama Hooks melarang pemanggilan di dalam blok percabangan (if) agar urutan eksekusi Hooks tetap konsisten.",
        skill_category: "logic",
        order_index: 1
      },
      {
        id: "hooks-q3",
        question_type: "blank_space",
        question_text: "Lengkapi deklarasi hook useState berikut:",
        options: null,
        correct_answer: ["useState"],
        code_snippet: "const [active, setActive] = ___(false);",
        syntax_chips: ["useState", "useEffect", "useRef", "useActive"],
        explanation: "useState digunakan untuk menginisialisasi state 'active' dengan nilai awal false.",
        skill_category: "logic",
        order_index: 2
      },
      {
        id: "hooks-q4",
        question_type: "short_coding",
        question_text: "Tulis pemanggilan useEffect kosong dengan array dependensi kosong.",
        options: null,
        correct_answer: "useEffect(() => { }, []);",
        code_snippet: null,
        syntax_chips: null,
        explanation: "Array kosong [] memastikan efek hanya dieksekusi sekali saat pemasangan komponen (mount).",
        skill_category: "logic",
        order_index: 3
      },
      {
        id: "hooks-q5",
        question_type: "mcq",
        question_text: "Jika kita tidak menyertakan array dependensi sama sekali pada useEffect, kapan efek tersebut akan berjalan?",
        options: ["Setiap kali komponen merender ulang (render)", "Hanya saat pertama kali dipasang (mount)", "Hanya saat komponen dilepas (unmount)", "Tidak pernah"],
        correct_answer: "Setiap kali komponen merender ulang (render)",
        code_snippet: null,
        syntax_chips: null,
        explanation: "Tanpa array dependensi, useEffect akan dieksekusi terus-menerus setiap kali komponen melakukan render.",
        skill_category: "logic",
        order_index: 4
      },
      {
        id: "hooks-q6",
        question_type: "true_false",
        question_text: "Fungsi pembersih (cleanup function) di dalam useEffect dikembalikan berupa fungsi di akhir blok callback-nya.",
        options: null,
        correct_answer: true,
        code_snippet: null,
        syntax_chips: null,
        explanation: "Mengembalikan sebuah fungsi di dalam useEffect, e.g. return () => { }, bertindak sebagai fungsi pembersih saat unmount.",
        skill_category: "logic",
        order_index: 5
      },
      {
        id: "hooks-q7",
        question_type: "blank_space",
        question_text: "Lengkapi impor kedua hook utama dari library react:",
        options: null,
        correct_answer: ["useState, useEffect"],
        code_snippet: "import { ___ } from 'react';",
        syntax_chips: ["useState, useEffect", "useState && useEffect", "react-hooks", "hooks"],
        explanation: "Kedua hook tersebut diimpor dari modul 'react' dipisahkan koma.",
        skill_category: "logic",
        order_index: 6
      },
      {
        id: "hooks-q8",
        question_type: "mcq",
        question_text: "Hook mana yang memberikan referensi mutabel untuk menunjuk elemen DOM langsung tanpa memicu render ulang?",
        options: ["useRef", "useState", "useMemo", "useCallback"],
        correct_answer: "useRef",
        code_snippet: null,
        syntax_chips: null,
        explanation: "useRef menyimpan objek persisten dengan properti '.current' yang tidak memicu render saat nilainya berubah.",
        skill_category: "logic",
        order_index: 7
      },
      {
        id: "hooks-q9",
        question_type: "true_false",
        question_text: "Custom Hooks harus diawali dengan kata kunci 'use' agar diakui secara konvensi oleh linter React.",
        options: null,
        correct_answer: true,
        code_snippet: null,
        syntax_chips: null,
        explanation: "Awalan 'use' (contoh: useFetch) memberi sinyal bahwa fungsi tersebut berisi logika hooks internal.",
        skill_category: "logic",
        order_index: 8
      },
      {
        id: "hooks-q10",
        question_type: "mcq",
        question_text: "Bagaimana cara merujuk nilai dari hook useRef bernama 'inputRef'?",
        options: ["inputRef.current", "inputRef.value", "inputRef.val", "inputRef()"],
        correct_answer: "inputRef.current",
        code_snippet: null,
        syntax_chips: null,
        explanation: "Nilai referensi dari useRef selalu disimpan di dalam properti '.current'.",
        skill_category: "logic",
        order_index: 9
      },
      {
        id: "hooks-q11",
        question_type: "mcq",
        question_text: "Hook mana yang digunakan untuk mengoptimalkan performa dengan menyimpan memoized value hasil kalkulasi berat?",
        options: ["useMemo", "useCallback", "useEffect", "useReducer"],
        correct_answer: "useMemo",
        code_snippet: null,
        syntax_chips: null,
        explanation: "useMemo menyimpan hasil perhitungan berat dan hanya menghitung ulang jika dependensinya berubah.",
        skill_category: "logic",
        order_index: 10
      },
      {
        id: "hooks-q12",
        question_type: "true_false",
        question_text: "Setiap pemanggilan fungsi setter dari useState (misal setCount) akan memicu React untuk mengganti nilai state dan merender ulang komponen.",
        options: null,
        correct_answer: true,
        code_snippet: null,
        syntax_chips: null,
        explanation: "Memanggil setter state menginstruksikan React untuk memperbarui nilai dan menggambar ulang UI yang terpengaruh.",
        skill_category: "logic",
        order_index: 11
      },
      {
        id: "hooks-q13",
        question_type: "blank_space",
        question_text: "Lengkapi dependensi agar useEffect berjalan setiap kali variabel 'userId' berubah nilainya:",
        options: null,
        correct_answer: ["[userId]"],
        code_snippet: "useEffect(() => {\n  fetchUser(userId);\n}, ___);",
        syntax_chips: ["[userId]", "userId", "[:userId]", "[dependent]"],
        explanation: "Menyertakan userId di dalam array dependensi memicu pemanggilan ulang efek jika nilai variabel tersebut berubah.",
        skill_category: "logic",
        order_index: 12
      },
      {
        id: "hooks-q14",
        question_type: "short_coding",
        question_text: "Tulis inisialisasi state bernama 'count' dengan setter 'setCount' bernilai default 0.",
        options: null,
        correct_answer: "const [count, setCount] = useState(0);",
        code_snippet: null,
        syntax_chips: null,
        explanation: "Gunakan destructuring array untuk menangkap nilai state dan fungsi setternya.",
        skill_category: "logic",
        order_index: 13
      },
      {
        id: "hooks-q15",
        question_type: "mcq",
        question_text: "Hook mana yang digunakan sebagai alternatif useState untuk mengelola state kompleks dengan pola reducer (action/dispatch)?",
        options: ["useReducer", "useContext", "useStateComplex", "useAction"],
        correct_answer: "useReducer",
        code_snippet: null,
        syntax_chips: null,
        explanation: "useReducer cocok untuk state kompleks yang melibatkan banyak transisi aksi terstruktur.",
        skill_category: "logic",
        order_index: 14
      },
      {
        id: "hooks-q16",
        question_type: "true_false",
        question_text: "useCallback mengembalikan nilai hasil eksekusi fungsi, sedangkan useMemo mengembalikan referensi fungsi itu sendiri.",
        options: null,
        correct_answer: false,
        code_snippet: null,
        syntax_chips: null,
        explanation: "Terbalik. useCallback menyimpan memoized callback (fungsi), sedangkan useMemo menyimpan memoized value (hasil perhitungan).",
        skill_category: "logic",
        order_index: 15
      },
      {
        id: "hooks-q17",
        question_type: "mcq",
        question_text: "Di mana kita diperbolehkan memanggil Hooks?",
        options: ["Hanya di bagian paling atas dari fungsi komponen React", "Di dalam loop/for", "Di dalam fungsi JavaScript biasa", "Di dalam event handler langsung"],
        correct_answer: "Hanya di bagian paling atas dari fungsi komponen React",
        code_snippet: null,
        syntax_chips: null,
        explanation: "Hooks harus dipanggil di tingkat teratas fungsi komponen React, sebelum kode pengembalian return dijalankan.",
        skill_category: "logic",
        order_index: 16
      },
      {
        id: "hooks-q18",
        question_type: "blank_space",
        question_text: "Lengkapi pemanggilan hook ref untuk mengaitkannya ke elemen input di JSX:",
        options: null,
        correct_answer: ["ref"],
        code_snippet: "<input ___={inputRef} />",
        syntax_chips: ["ref", "id", "inputRef", "reference"],
        explanation: "Atribut 'ref' di JSX mengikat elemen HTML aktual ke instansi referensi useRef.",
        skill_category: "logic",
        order_index: 17
      },
      {
        id: "hooks-q19",
        question_type: "true_false",
        question_text: "State yang dibuat dengan useState di satu komponen secara otomatis tersinkronisasi ke seluruh komponen anak.",
        options: null,
        correct_answer: false,
        code_snippet: null,
        syntax_chips: null,
        explanation: "State bersifat lokal dan privat bagi komponen tersebut. Untuk membaginya ke anak, data harus dilewatkan melalui props.",
        skill_category: "logic",
        order_index: 18
      },
      {
        id: "hooks-q20",
        question_type: "mcq",
        question_text: "Bagaimana cara melakukan pembaruan state bertipe angka berdasarkan nilai state sebelumnya secara aman?",
        options: ["setCount(prev => prev + 1)", "setCount(count + 1)", "count = count + 1", "setCount(next)"],
        correct_answer: "setCount(prev => prev + 1)",
        code_snippet: null,
        syntax_chips: null,
        explanation: "Mengoper fungsi callback ke setter menjamin nilai prev adalah versi state paling mutakhir saat itu.",
        skill_category: "logic",
        order_index: 19
      }
    ]
  },
  {
    id: "245f9ed7-4996-4719-ba56-99e6fb8fdcb8",
    lesson_id: "b1000001-0001-0001-0001-000000000008",
    title: "Tailwind CSS Quiz",
    quiz_type: "mixed",
    difficulty: "easy",
    xp_reward: 20,
    quiz_questions: [
      {
        id: "tw-q1",
        question_type: "mcq",
        question_text: "Konsep utama apakah yang diusung oleh framework Tailwind CSS?",
        options: ["Utility-first", "Component-based", "Semantic-only", "Inline-styling"],
        correct_answer: "Utility-first",
        code_snippet: null,
        syntax_chips: null,
        explanation: "Tailwind CSS menyediakan kelas-kelas utilitas kecil yang dirancang untuk membangun desain khusus langsung pada markup.",
        skill_category: "visual",
        order_index: 0
      },
      {
        id: "tw-q2",
        question_type: "true_false",
        question_text: "Kelas 'text-center' di Tailwind menyelaraskan teks ke posisi tengah.",
        options: null,
        correct_answer: true,
        code_snippet: null,
        syntax_chips: null,
        explanation: "text-center memetakan gaya text-align: center ke CSS.",
        skill_category: "visual",
        order_index: 1
      },
      {
        id: "tw-q3",
        question_type: "blank_space",
        question_text: "Lengkapi kelas utilitas flexbox agar elemen sejajar horizontal di tengah di Tailwind:",
        options: null,
        correct_answer: ["justify-center"],
        code_snippet: "<div className=\"flex ___\">",
        syntax_chips: ["justify-center", "items-center", "flex-row", "content-center"],
        explanation: "justify-center menyejajarkan item di tengah sepanjang sumbu horizontal flexbox.",
        skill_category: "visual",
        order_index: 2
      },
      {
        id: "tw-q4",
        question_type: "short_coding",
        question_text: "Tulis elemen div HTML dengan class padding atas-bawah 4 (py-4) dan warna teks merah-500 (text-red-500).",
        options: null,
        correct_answer: "<div className=\"py-4 text-red-500\"></div>",
        code_snippet: null,
        syntax_chips: null,
        explanation: "Gunakan penggabungan kelas utilitas Tailwind dalam atribut className.",
        skill_category: "visual",
        order_index: 3
      },
      {
        id: "tw-q5",
        question_type: "mcq",
        question_text: "Kelas mana yang memberikan padding sebesar 1rem (16px) secara menyeluruh di semua sisi?",
        options: ["p-4", "p-1", "padding-4", "m-4"],
        correct_answer: "p-4",
        code_snippet: null,
        syntax_chips: null,
        explanation: "Skala Tailwind 1 unit setara 0.25rem. Maka p-4 adalah 4 * 0.25rem = 1rem.",
        skill_category: "visual",
        order_index: 4
      },
      {
        id: "tw-q6",
        question_type: "true_false",
        question_text: "Kelas 'font-bold' di Tailwind mengatur ketebalan teks (font-weight: 700).",
        options: null,
        correct_answer: true,
        code_snippet: null,
        syntax_chips: null,
        explanation: "font-bold memetakan visual teks tebal (font-weight: 700) secara bawaan.",
        skill_category: "visual",
        order_index: 5
      },
      {
        id: "tw-q7",
        question_type: "blank_space",
        question_text: "Lengkapi awalan breakpoint agar lebar elemen berubah menjadi penuh pada resolusi layar tablet/sedang (md) ke atas:",
        options: null,
        correct_answer: ["md:w-full"],
        code_snippet: "<div className=\"w-1/2 ___\">",
        syntax_chips: ["md:w-full", "sm:w-full", "lg:w-full", "w-full:md"],
        explanation: "Notasi breakpoint diawali dengan nama layar (seperti md) diikuti titik dua (:) dan kelas utilitas.",
        skill_category: "visual",
        order_index: 6
      },
      {
        id: "tw-q8",
        question_type: "mcq",
        question_text: "Bagaimana cara menentukan warna background biru dengan kecerahan sedang di Tailwind?",
        options: ["bg-blue-500", "color-blue-500", "background-blue", "bg-blue"],
        correct_answer: "bg-blue-500",
        code_snippet: null,
        syntax_chips: null,
        explanation: "bg-{warna}-{tingkat} menentukan warna latar belakang. 500 adalah nilai kecerahan sedang standar.",
        skill_category: "visual",
        order_index: 7
      },
      {
        id: "tw-q9",
        question_type: "true_false",
        question_text: "Kelas 'rounded-full' memotong sudut elemen menjadi berbentuk lingkaran.",
        options: null,
        correct_answer: true,
        code_snippet: null,
        syntax_chips: null,
        explanation: "rounded-full menerapkan border-radius: 9999px yang menghasilkan bentuk elips/lingkaran penuh.",
        skill_category: "visual",
        order_index: 8
      },
      {
        id: "tw-q10",
        question_type: "mcq",
        question_text: "Bagaimana cara mendefinisikan event hover agar warna latar belakang menjadi abu-abu terang di Tailwind?",
        options: ["hover:bg-gray-100", "bg-gray-100:hover", "onHover:bg-gray", "hover-bg-gray-100"],
        correct_answer: "hover:bg-gray-100",
        code_snippet: null,
        syntax_chips: null,
        explanation: "State modifier di Tailwind ditulis di awal dipisahkan titik dua, seperti hover:bg-gray-100.",
        skill_category: "visual",
        order_index: 9
      },
      {
        id: "tw-q11",
        question_type: "mcq",
        question_text: "Kelas utilitas mana yang digunakan untuk menyembunyikan elemen secara penuh (display: none)?",
        options: ["hidden", "invisible", "none", "block-none"],
        correct_answer: "hidden",
        code_snippet: null,
        syntax_chips: null,
        explanation: "Kelas 'hidden' menerapkan display: none pada CSS.",
        skill_category: "visual",
        order_index: 10
      },
      {
        id: "tw-q12",
        question_type: "true_false",
        question_text: "Proses 'Purge' pada Tailwind menghapus kelas CSS bawaan yang tidak terpakai dari bundel produksi akhir agar file menjadi sangat ringan.",
        options: null,
        correct_answer: true,
        code_snippet: null,
        syntax_chips: null,
        explanation: "Purging mendeteksi kelas-kelas terpakai di file proyek Anda lalu hanya merakit kelas-kelas tersebut.",
        skill_category: "visual",
        order_index: 11
      },
      {
        id: "tw-q13",
        question_type: "blank_space",
        question_text: "Lengkapi kelas agar teks berukuran sangat besar (2.25rem):",
        options: null,
        correct_answer: ["text-4xl"],
        code_snippet: "<h1 className=\"___\">Judul Utama</h1>",
        syntax_chips: ["text-4xl", "text-xl", "font-4xl", "size-4xl"],
        explanation: "text-4xl di Tailwind merender ukuran teks 2.25rem (36px).",
        skill_category: "visual",
        order_index: 12
      },
      {
        id: "tw-q14",
        question_type: "short_coding",
        question_text: "Tulis tag tombol dengan border tipis (border) dan warna border abu-abu-200 (border-gray-200).",
        options: null,
        correct_answer: "<button className=\"border border-gray-200\"></button>",
        code_snippet: null,
        syntax_chips: null,
        explanation: "Tulis kedua kelas tersebut secara berurutan.",
        skill_category: "visual",
        order_index: 13
      },
      {
        id: "tw-q15",
        question_type: "mcq",
        question_text: "Bagaimana cara mengatur margin atas sebesar 8px (0.5rem) di Tailwind?",
        options: ["mt-2", "m-2", "my-2", "mt-8"],
        correct_answer: "mt-2",
        code_snippet: null,
        syntax_chips: null,
        explanation: "mt (margin-top) bernilai 2 setara 0.5rem (8px).",
        skill_category: "visual",
        order_index: 14
      },
      {
        id: "tw-q16",
        question_type: "true_false",
        question_text: "Kelas 'shadow-md' menambahkan efek bayangan berukuran sedang pada elemen.",
        options: null,
        correct_answer: true,
        code_snippet: null,
        syntax_chips: null,
        explanation: "shadow-md menerapkan efek box-shadow tingkat menengah pada elemen.",
        skill_category: "visual",
        order_index: 15
      },
      {
        id: "tw-q17",
        question_type: "mcq",
        question_text: "Kelas utilitas untuk mengaktifkan tata letak CSS Grid di Tailwind adalah:",
        options: ["grid", "display-grid", "flex-grid", "grid-layout"],
        correct_answer: "grid",
        code_snippet: null,
        syntax_chips: null,
        explanation: "Sintaks 'grid' menerapkan display: grid secara langsung.",
        skill_category: "visual",
        order_index: 16
      },
      {
        id: "tw-q18",
        question_type: "blank_space",
        question_text: "Lengkapi agar item flex tersusun secara vertikal:",
        options: null,
        correct_answer: ["flex-col"],
        code_snippet: "<div className=\"flex ___\">",
        syntax_chips: ["flex-col", "flex-row", "flex-vertical", "col"],
        explanation: "flex-col menerapkan flex-direction: column di CSS.",
        skill_category: "visual",
        order_index: 17
      },
      {
        id: "tw-q19",
        question_type: "true_false",
        question_text: "Di Tailwind, kelas 'w-1/2' mewakili lebar elemen sebesar 12px.",
        options: null,
        correct_answer: false,
        code_snippet: null,
        syntax_chips: null,
        explanation: "w-1/2 merepresentasikan lebar relatif sebesar 50% dari kontainer induknya.",
        skill_category: "visual",
        order_index: 18
      },
      {
        id: "tw-q20",
        question_type: "mcq",
        question_text: "Kelas mana yang digunakan untuk mengatur jarak antarkolom atau baris secara otomatis dalam Flex/Grid?",
        options: ["gap-4", "space-4", "grid-gap", "padding-gap"],
        correct_answer: "gap-4",
        code_snippet: null,
        syntax_chips: null,
        explanation: "Properti gap menentukan ukuran spasi/jarak kosong antara baris dan kolom.",
        skill_category: "visual",
        order_index: 19
      }
    ]
  },
  {
    id: "46930158-53c8-4b7f-9955-8f88b8628f6d",
    lesson_id: "b1000001-0001-0001-0001-000000000009",
    title: "Fetch API & Async Quiz",
    quiz_type: "mixed",
    difficulty: "medium",
    xp_reward: 20,
    quiz_questions: [
      {
        id: "fetch-q1",
        question_type: "mcq",
        question_text: "Metode bawaan javascript modern manakah yang paling populer untuk melakukan request HTTP secara asinkron?",
        options: ["fetch", "XMLHttpRequest", "ajax", "axios"],
        correct_answer: "fetch",
        code_snippet: null,
        syntax_chips: null,
        explanation: "Fetch API menyediakan antarmuka modern terstandarisasi untuk mengirim dan menerima request HTTP.",
        skill_category: "logic",
        order_index: 0
      },
      {
        id: "fetch-q2",
        question_type: "true_false",
        question_text: "Metode fetch() mengembalikan sebuah objek Promise.",
        options: null,
        correct_answer: true,
        code_snippet: null,
        syntax_chips: null,
        explanation: "Karena fetch berjalan secara asinkron, ia langsung mengembalikan Promise yang nantinya diselesaikan.",
        skill_category: "logic",
        order_index: 1
      },
      {
        id: "fetch-q3",
        question_type: "blank_space",
        question_text: "Lengkapi pemanggilan fetch asinkron dengan async/await:",
        options: null,
        correct_answer: ["await fetch"],
        code_snippet: "const response = ___(\"/api/users\");",
        syntax_chips: ["await fetch", "fetch", "await get", "fetch.get"],
        explanation: "await fetch menanti proses pengiriman request selesai sebelum berlanjut ke baris berikutnya.",
        skill_category: "logic",
        order_index: 2
      },
      {
        id: "fetch-q4",
        question_type: "short_coding",
        question_text: "Tulis ekspresi konversi response mentah 'res' menjadi format objek JSON.",
        options: null,
        correct_answer: "res.json()",
        code_snippet: null,
        syntax_chips: null,
        explanation: "res.json() membaca isi response asinkron dan mengonversinya menjadi objek JS.",
        skill_category: "logic",
        order_index: 3
      },
      {
        id: "fetch-q5",
        question_type: "mcq",
        question_text: "Blok kode mana yang digunakan untuk menangkap kesalahan jika request fetch gagal?",
        options: ["catch", "try", "then", "finally"],
        correct_answer: "catch",
        code_snippet: null,
        syntax_chips: null,
        explanation: "Blok catch menangani kesalahan yang dilemparkan (thrown) selama eksekusi di blok try.",
        skill_category: "logic",
        order_index: 4
      },
      {
        id: "fetch-q6",
        question_type: "true_false",
        question_text: "Request HTTP POST digunakan hanya untuk meminta dan membaca data dari server.",
        options: null,
        correct_answer: false,
        code_snippet: null,
        syntax_chips: null,
        explanation: "POST digunakan untuk mengirimkan data baru ke server. Untuk meminta data digunakan metode GET.",
        skill_category: "logic",
        order_index: 5
      },
      {
        id: "fetch-q7",
        question_type: "blank_space",
        question_text: "Lengkapi properti body request fetch saat mengirimkan data JSON:",
        options: null,
        correct_answer: ["JSON.stringify"],
        code_snippet: "fetch(url, {\n  method: 'POST',\n  body: ___(data)\n});",
        syntax_chips: ["JSON.stringify", "JSON.parse", "stringify", "data.toJSON"],
        explanation: "Data objek harus dikonversi menjadi string JSON mentah menggunakan JSON.stringify sebelum dikirim.",
        skill_category: "logic",
        order_index: 6
      },
      {
        id: "fetch-q8",
        question_type: "mcq",
        question_text: "Header request mana yang digunakan untuk menyatakan bahwa konten yang kita kirim berbentuk JSON?",
        options: ["'Content-Type': 'application/json'", "'Accept': 'json'", "'Auth-Token': 'json'", "'Type': 'application/json'"],
        correct_answer: "'Content-Type': 'application/json'",
        code_snippet: null,
        syntax_chips: null,
        explanation: "Content-Type memberi tahu server tipe media dari data aktual yang dikirimkan.",
        skill_category: "logic",
        order_index: 7
      },
      {
        id: "fetch-q9",
        question_type: "true_false",
        question_text: "Properti response.ok akan bernilai true jika status kode HTTP bernilai 200 hingga 299.",
        options: null,
        correct_answer: true,
        code_snippet: null,
        syntax_chips: null,
        explanation: "response.ok memetakan status keberhasilan HTTP (kisaran 2xx).",
        skill_category: "logic",
        order_index: 8
      },
      {
        id: "fetch-q10",
        question_type: "mcq",
        question_text: "Method response mana yang dipanggil jika data yang dikirimkan server berformat teks mentah, bukan JSON?",
        options: ["text()", "json()", "blob()", "body()"],
        correct_answer: "text()",
        code_snippet: null,
        syntax_chips: null,
        explanation: "response.text() membaca isi response sebagai teks mentah biasa.",
        skill_category: "logic",
        order_index: 9
      },
      {
        id: "fetch-q11",
        question_type: "mcq",
        question_text: "Apa status code HTTP untuk 'Unauthorized' (Akses tidak sah)?",
        options: ["401", "403", "404", "500"],
        correct_answer: "401",
        code_snippet: null,
        syntax_chips: null,
        explanation: "401 Unauthorized menunjukkan bahwa request memerlukan autentikasi pengguna.",
        skill_category: "logic",
        order_index: 10
      },
      {
        id: "fetch-q12",
        question_type: "true_false",
        question_text: "Fungsi generator asinkron tidak dapat dikombinasikan dengan perulangan for-await-of.",
        options: null,
        correct_answer: false,
        code_snippet: null,
        syntax_chips: null,
        explanation: "for-await-of dirancang khusus untuk mengulangi iterabel asinkron (seperti streams atau generator asinkron).",
        skill_category: "logic",
        order_index: 11
      },
      {
        id: "fetch-q13",
        question_type: "blank_space",
        question_text: "Lengkapi parameter penentuan metode HTTP di fetch:",
        options: null,
        correct_answer: ["method"],
        code_snippet: "fetch(url, {\n  ___: 'DELETE'\n});",
        syntax_chips: ["method", "type", "http", "action"],
        explanation: "Properti 'method' menentukan metode HTTP yang dikirim (GET, POST, PUT, DELETE, dll).",
        skill_category: "logic",
        order_index: 12
      },
      {
        id: "fetch-q14",
        question_type: "short_coding",
        question_text: "Tulis baris penangkap error try/catch dasar.",
        options: null,
        correct_answer: "try { } catch (e) { }",
        code_snippet: null,
        syntax_chips: null,
        explanation: "Sintaks dasar error handling JavaScript.",
        skill_category: "logic",
        order_index: 13
      },
      {
        id: "fetch-q15",
        question_type: "mcq",
        question_text: "Status code HTTP kisaran 500 mewakili:",
        options: ["Kesalahan pada server (Server Error)", "Akses Berhasil", "Kesalahan pada klien (Client Error)", "Redireksi Halaman"],
        correct_answer: "Kesalahan pada server (Server Error)",
        code_snippet: null,
        syntax_chips: null,
        explanation: "Status 5xx seperti 500 Internal Server Error menandakan server gagal memproses request yang valid.",
        skill_category: "logic",
        order_index: 14
      },
      {
        id: "fetch-q16",
        question_type: "true_false",
        question_text: "Method fetch() akan melempar error (reject) jika server merespon dengan status code 404.",
        options: null,
        correct_answer: false,
        code_snippet: null,
        syntax_chips: null,
        explanation: "fetch() hanya melempar error (reject) jika terjadi kegagalan jaringan fisik. Status HTTP 404 tetap dianggap sukses secara koneksi (resolve).",
        skill_category: "logic",
        order_index: 15
      },
      {
        id: "fetch-q17",
        question_type: "mcq",
        question_text: "Manakah method HTTP yang digunakan untuk memperbarui sebagian (partial update) data di server?",
        options: ["PATCH", "PUT", "POST", "GET"],
        correct_answer: "PATCH",
        code_snippet: null,
        syntax_chips: null,
        explanation: "PATCH memperbarui sebagian field data, sedangkan PUT biasanya menggantikan data secara keseluruhan.",
        skill_category: "logic",
        order_index: 16
      },
      {
        id: "fetch-q18",
        question_type: "blank_space",
        question_text: "Lengkapi status pengecekan kode response sukses:",
        options: null,
        correct_answer: ["response.status === 200"],
        code_snippet: "if (___) {\n  console.log(\"Sukses!\");\n}",
        syntax_chips: ["response.status === 200", "response.ok === 200", "response.code === 200", "status.isOk"],
        explanation: "Status code 200 melambangkan keberhasilan request HTTP GET/POST standar.",
        skill_category: "logic",
        order_index: 17
      },
      {
        id: "fetch-q19",
        question_type: "true_false",
        question_text: "API Key rahasia sebaiknya disimpan langsung pada kode frontend browser klien agar aman.",
        options: null,
        correct_answer: false,
        code_snippet: null,
        syntax_chips: null,
        explanation: "API Key rahasia di frontend dapat dibaca dengan mudah oleh siapa saja. Simpanlah di server backend demi keamanan.",
        skill_category: "logic",
        order_index: 18
      },
      {
        id: "fetch-q20",
        question_type: "mcq",
        question_text: "Apa kegunaan utama dari metode Promise.all()?",
        options: ["Menjalankan banyak Promise secara paralel dan menunggu semuanya selesai", "Menjalankan Promise satu demi satu secara berurutan", "Membatalkan seluruh Promise yang gagal saja", "Membuat Promise baru dari awal"],
        correct_answer: "Menjalankan banyak Promise secara paralel dan menunggu semuanya selesai",
        code_snippet: null,
        syntax_chips: null,
        explanation: "Promise.all() menanti penyelesaian semua Promise dalam array, mempercepat pengambilan data massal.",
        skill_category: "logic",
        order_index: 19
      }
    ]
  },
  {
    id: "f06d73e4-fae6-4bc0-9773-a5aca21f19eb",
    lesson_id: "b1000001-0001-0001-0001-000000000010",
    title: "Build Tools & Vite Quiz",
    quiz_type: "mixed",
    difficulty: "easy",
    xp_reward: 20,
    quiz_questions: [
      {
        id: "vite-q1",
        question_type: "mcq",
        question_text: "Apakah kegunaan utama dari build tool seperti Vite?",
        options: ["Mengompilasi dan mengoptimalkan kode untuk produksi", "Menyimpan data di database", "Membuat desain mock-up UI", "Melakukan testing API"],
        correct_answer: "Mengompilasi dan mengoptimalkan kode untuk produksi",
        code_snippet: null,
        syntax_chips: null,
        explanation: "Build tools memproses kode pengerjaan kita menjadi file statis teroptimasi yang siap disajikan browser klien.",
        skill_category: "logic",
        order_index: 0
      },
      {
        id: "vite-q2",
        question_type: "true_false",
        question_text: "NPM singkatan dari Node Package Manager.",
        options: null,
        correct_answer: true,
        code_snippet: null,
        syntax_chips: null,
        explanation: "NPM adalah pengelola paket standar untuk runtime JavaScript Node.js.",
        skill_category: "logic",
        order_index: 1
      },
      {
        id: "vite-q3",
        question_type: "blank_space",
        question_text: "Lengkapi perintah untuk membuat folder build produksi:",
        options: null,
        correct_answer: ["npm run build"],
        code_snippet: "$ ___",
        syntax_chips: ["npm run build", "npm start", "npm install", "npm run dev"],
        explanation: "npm run build menjalankan skrip kompilasi aset untuk diunggah ke server hosting.",
        skill_category: "logic",
        order_index: 2
      },
      {
        id: "vite-q4",
        question_type: "short_coding",
        question_text: "Tulis perintah npm dasar untuk mengunduh modul/dependencies baru.",
        options: null,
        correct_answer: "npm install",
        code_snippet: null,
        syntax_chips: null,
        explanation: "npm install (atau npm i) mengunduh semua dependencies yang terdaftar di package.json.",
        skill_category: "logic",
        order_index: 3
      },
      {
        id: "vite-q5",
        question_type: "mcq",
        question_text: "File konfigurasi manakah yang menampung daftar seluruh dependencies proyek Node/Vite?",
        options: ["package.json", "vite.config.ts", "tsconfig.json", "index.html"],
        correct_answer: "package.json",
        code_snippet: null,
        syntax_chips: null,
        explanation: "package.json menampung metadata proyek termasuk daftar pustaka eksternal (dependencies) yang digunakan.",
        skill_category: "logic",
        order_index: 4
      },
      {
        id: "vite-q6",
        question_type: "true_false",
        question_text: "Vite sangat lambat dibanding webpack saat melakukan Hot Module Replacement (HMR).",
        options: null,
        correct_answer: false,
        code_snippet: null,
        syntax_chips: null,
        explanation: "Sebaliknya, Vite jauh lebih cepat dibanding webpack karena menggunakan ES Modules (ESM) bawaan browser.",
        skill_category: "logic",
        order_index: 5
      },
      {
        id: "vite-q7",
        question_type: "blank_space",
        question_text: "Lengkapi skrip pengerjaan lokal (dev server) di Vite:",
        options: null,
        correct_answer: ["npm run dev"],
        code_snippet: "$ ___",
        syntax_chips: ["npm run dev", "npm run build", "npm run serve", "vite start"],
        explanation: "npm run dev menjalankan server lokal pengembangan dengan dukungan HMR instan.",
        skill_category: "logic",
        order_index: 6
      },
      {
        id: "vite-q8",
        question_type: "mcq",
        question_text: "Folder manakah tempat npm menyimpan file-file dependencies yang diunduh secara fisik?",
        options: ["node_modules", "dist", "public", "src"],
        correct_answer: "node_modules",
        code_snippet: null,
        syntax_chips: null,
        explanation: "Semua library eksternal yang diunduh disimpan di dalam folder terisolasi node_modules.",
        skill_category: "logic",
        order_index: 7
      },
      {
        id: "vite-q9",
        question_type: "true_false",
        question_text: "Folder 'dist' (distribution) berisi aset-aset teroptimasi hasil dari perintah build produksi.",
        options: null,
        correct_answer: true,
        code_snippet: null,
        syntax_chips: null,
        explanation: "Isi folder dist siap dideploy langsung ke web server produksi statis.",
        skill_category: "logic",
        order_index: 8
      },
      {
        id: "vite-q10",
        question_type: "mcq",
        question_text: "Bagaimana cara memasang library baru (misal 'axios') ke proyek dan menyimpannya di package.json?",
        options: ["npm install axios", "npm add axios", "npm get axios", "npm download axios"],
        correct_answer: "npm install axios",
        code_snippet: null,
        syntax_chips: null,
        explanation: "npm install {nama} otomatis mengunduh dan mendaftarkannya ke dependencies package.json.",
        skill_category: "logic",
        order_index: 9
      },
      {
        id: "vite-q11",
        question_type: "mcq",
        question_text: "Apakah arti dari HMR (Hot Module Replacement)?",
        options: ["Memperbarui modul di halaman web secara instan tanpa me-reload penuh", "Mengganti komponen hardware server", "Mengganti database server", "Menginstal dependencies otomatis"],
        correct_answer: "Memperbarui modul di halaman web secara instan tanpa me-reload penuh",
        code_snippet: null,
        syntax_chips: null,
        explanation: "HMR menyisipkan perubahan kode secara langsung ke browser tanpa kehilangan state aplikasi saat edit kode.",
        skill_category: "logic",
        order_index: 10
      },
      {
        id: "vite-q12",
        question_type: "true_false",
        question_text: "File package-lock.json merekam versi eksak dari setiap library yang diunduh untuk menjaga konsistensi antar developer.",
        options: null,
        correct_answer: true,
        code_snippet: null,
        syntax_chips: null,
        explanation: "package-lock.json mengunci pohon dependensi secara akurat agar semua pengembang menginstal versi yang sama persis.",
        skill_category: "logic",
        order_index: 11
      },
      {
        id: "vite-q13",
        question_type: "blank_space",
        question_text: "Lengkapi penulisan skrip build di file package.json:",
        options: null,
        correct_answer: ["\"build\": \"vite build\""],
        code_snippet: "\"scripts\": {\n  \"dev\": \"vite\",\n  ___\n}",
        syntax_chips: ["\"build\": \"vite build\"", "\"build\": \"run build\"", "\"compile\": \"vite\"", "\"build\": \"vite compile\""],
        explanation: "Skrip build default memetakan perintah 'vite build'.",
        skill_category: "logic",
        order_index: 12
      },
      {
        id: "vite-q14",
        question_type: "short_coding",
        question_text: "Tulis perintah terminal npm untuk menghapus library 'axios'.",
        options: null,
        correct_answer: "npm uninstall axios",
        code_snippet: null,
        syntax_chips: null,
        explanation: "npm uninstall menghapus paket dari node_modules dan daftar di package.json.",
        skill_category: "logic",
        order_index: 13
      },
      {
        id: "vite-q15",
        question_type: "mcq",
        question_text: "Vite mendukung penulisan Javascript superset berupa TypeScript secara default:",
        options: ["Ya, didukung secara langsung out-of-the-box", "Tidak, harus menggunakan babel kustom", "Hanya versi lama saja", "Hanya jika diubah ke JS murni secara manual"],
        correct_answer: "Ya, didukung secara langsung out-of-the-box",
        code_snippet: null,
        syntax_chips: null,
        explanation: "Vite memiliki transpiler TypeScript bawaan yang sangat cepat.",
        skill_category: "logic",
        order_index: 14
      },
      {
        id: "vite-q16",
        question_type: "true_false",
        question_text: "Folder node_modules sebaiknya selalu ikut di-commit ke Git agar teman satu tim tidak perlu install lagi.",
        options: null,
        correct_answer: false,
        code_snippet: null,
        syntax_chips: null,
        explanation: "node_modules berukuran sangat besar dan berisi file biner. Teman satu tim cukup mengunduhnya dengan menjalankan npm install secara mandiri.",
        skill_category: "logic",
        order_index: 15
      },
      {
        id: "vite-q17",
        question_type: "mcq",
        question_text: "Atribut devDependencies pada package.json digunakan untuk menampung library yang:",
        options: ["Hanya dibutuhkan selama proses pengembangan (development)", "Dibutuhkan saat aplikasi berjalan di produksi", "Hanya berisi file stylesheet", "Wajib dijalankan secara offline"],
        correct_answer: "Hanya dibutuhkan selama proses pengembangan (development)",
        code_snippet: null,
        syntax_chips: null,
        explanation: "Pustaka seperti compiler, bundler, atau linter hanya diperlukan di tahap development, tidak dikirim ke klien produksi.",
        skill_category: "logic",
        order_index: 16
      },
      {
        id: "vite-q18",
        question_type: "blank_space",
        question_text: "Lengkapi penulisan file pengabaian git agar node_modules diabaikan saat commit:",
        options: null,
        correct_answer: ["node_modules"],
        code_snippet: "# .gitignore\n___/\ndist/",
        syntax_chips: ["node_modules", "modules", "libs", "dependencies"],
        explanation: "Menyertakan nama folder di .gitignore menginstruksikan Git untuk mengabaikannya.",
        skill_category: "logic",
        order_index: 17
      },
      {
        id: "vite-q19",
        question_type: "true_false",
        question_text: "Vite menggunakan ESBuild untuk prapemrosesan modul, yang ditulis dalam bahasa pemrograman Go untuk performa luar biasa.",
        options: null,
        correct_answer: true,
        code_snippet: null,
        syntax_chips: null,
        explanation: "ESBuild sangat cepat karena ditulis dalam bahasa Go yang dicompile ke native code.",
        skill_category: "logic",
        order_index: 18
      },
      {
        id: "vite-q20",
        question_type: "mcq",
        question_text: "Manakah perintah yang digunakan untuk menjalankan hasil build produksi secara lokal di browser guna pengujian?",
        options: ["npm run preview", "npm run dev", "npm run build", "npm start"],
        correct_answer: "npm run preview",
        code_snippet: null,
        syntax_chips: null,
        explanation: "preview menjalankan server lokal ringan dari file folder dist untuk mempratinjau hasil build asli.",
        skill_category: "logic",
        order_index: 19
      }
    ]
  }
];
