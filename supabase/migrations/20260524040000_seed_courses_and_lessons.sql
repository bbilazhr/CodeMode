-- ============================================================
-- Seed: Courses, Lessons, and Quizzes
-- ============================================================

-- ============================================================
-- COURSES
-- ============================================================
INSERT INTO public.courses (id, title, description, icon, color, level, duration, is_published) VALUES
  ('a1b2c3d4-0001-0001-0001-000000000001', 'Front-End Development', 'Kuasai HTML, CSS, JavaScript, dan React untuk membangun antarmuka web yang modern dan responsif.', '🌐', '#3B82F6', 'Beginner', '8 jam', true),
  ('a1b2c3d4-0002-0002-0002-000000000002', 'Back-End Development', 'Pelajari PHP, Laravel, Node.js, dan cara membangun REST API yang handal.', '⚙️', '#8B5CF6', 'Intermediate', '10 jam', true),
  ('a1b2c3d4-0003-0003-0003-000000000003', 'Database & SQL', 'Pahami SQL, PostgreSQL, dan cara merancang database yang efisien.', '🗄️', '#10B981', 'Beginner', '6 jam', true),
  ('a1b2c3d4-0004-0004-0004-000000000004', 'UI/UX Design', 'Pelajari prinsip desain, Figma, wireframing, dan cara membuat pengalaman pengguna yang luar biasa.', '🎨', '#F59E0B', 'Beginner', '7 jam', true),
  ('a1b2c3d4-0005-0005-0005-000000000005', 'Cyber Security', 'Pahami keamanan jaringan, kriptografi, OWASP, dan teknik ethical hacking.', '🔒', '#EF4444', 'Intermediate', '9 jam', true),
  ('a1b2c3d4-0006-0006-0006-000000000006', 'Mobile Development', 'Bangun aplikasi mobile dengan Flutter, Dart, dan React Native.', '📱', '#06B6D4', 'Intermediate', '8 jam', true)
ON CONFLICT (id) DO NOTHING;

-- ============================================================
-- LESSONS for Front-End Development
-- ============================================================
INSERT INTO public.lessons (id, course_id, title, content, order_index, duration_minutes, resource_type) VALUES
  ('b1000001-0001-0001-0001-000000000001', 'a1b2c3d4-0001-0001-0001-000000000001', 'HTML Dasar', 'Pelajari struktur dasar HTML, tag-tag penting, dan cara membuat halaman web pertama Anda.', 0, 20, 'video'),
  ('b1000001-0001-0001-0001-000000000002', 'a1b2c3d4-0001-0001-0001-000000000001', 'CSS & Styling', 'Kuasai CSS untuk menata tampilan halaman web, termasuk flexbox dan grid.', 1, 25, 'video'),
  ('b1000001-0001-0001-0001-000000000003', 'a1b2c3d4-0001-0001-0001-000000000001', 'Responsive Design', 'Buat website yang tampil sempurna di semua ukuran layar menggunakan media queries.', 2, 20, 'video'),
  ('b1000001-0001-0001-0001-000000000004', 'a1b2c3d4-0001-0001-0001-000000000001', 'JavaScript ES6+', 'Pelajari JavaScript modern: arrow functions, destructuring, dan template literals.', 3, 30, 'video'),
  ('b1000001-0001-0001-0001-000000000005', 'a1b2c3d4-0001-0001-0001-000000000001', 'DOM Manipulation', 'Manipulasi elemen HTML secara dinamis menggunakan JavaScript.', 4, 25, 'video'),
  ('b1000001-0001-0001-0001-000000000006', 'a1b2c3d4-0001-0001-0001-000000000001', 'React Fundamentals', 'Pengenalan React: komponen, JSX, props, dan state management dasar.', 5, 35, 'video'),
  ('b1000001-0001-0001-0001-000000000007', 'a1b2c3d4-0001-0001-0001-000000000001', 'React Hooks', 'Kuasai useState, useEffect, dan custom hooks untuk state management yang efektif.', 6, 30, 'video'),
  ('b1000001-0001-0001-0001-000000000008', 'a1b2c3d4-0001-0001-0001-000000000001', 'Tailwind CSS', 'Utility-first CSS framework untuk membangun UI yang cepat dan konsisten.', 7, 20, 'video'),
  ('b1000001-0001-0001-0001-000000000009', 'a1b2c3d4-0001-0001-0001-000000000001', 'Fetch API & Async', 'Ambil data dari API menggunakan fetch, async/await, dan handle loading states.', 8, 25, 'video'),
  ('b1000001-0001-0001-0001-000000000010', 'a1b2c3d4-0001-0001-0001-000000000001', 'Build Tools & Vite', 'Pelajari cara menggunakan Vite dan npm untuk workflow pengembangan modern.', 9, 20, 'video')
ON CONFLICT (id) DO NOTHING;

-- ============================================================
-- LESSONS for Back-End Development
-- ============================================================
INSERT INTO public.lessons (id, course_id, title, content, order_index, duration_minutes, resource_type) VALUES
  ('b2000002-0002-0002-0002-000000000001', 'a1b2c3d4-0002-0002-0002-000000000002', 'HTTP & Web Fundamentals', 'Pahami cara kerja HTTP, request/response, dan protokol web.', 0, 20, 'video'),
  ('b2000002-0002-0002-0002-000000000002', 'a1b2c3d4-0002-0002-0002-000000000002', 'PHP Dasar', 'Pelajari sintaks PHP, variabel, dan cara membuat skrip server-side pertama Anda.', 1, 25, 'video'),
  ('b2000002-0002-0002-0002-000000000003', 'a1b2c3d4-0002-0002-0002-000000000002', 'Laravel Framework', 'Kuasai routing, Eloquent ORM, dan arsitektur MVC di Laravel.', 2, 35, 'video'),
  ('b2000002-0002-0002-0002-000000000004', 'a1b2c3d4-0002-0002-0002-000000000002', 'Node.js Essentials', 'Jalankan JavaScript di server dengan Node.js dan module system.', 3, 25, 'video'),
  ('b2000002-0002-0002-0002-000000000005', 'a1b2c3d4-0002-0002-0002-000000000002', 'REST API Design', 'Rancang dan bangun REST API yang bersih, terstruktur, dan mudah digunakan.', 4, 30, 'video'),
  ('b2000002-0002-0002-0002-000000000006', 'a1b2c3d4-0002-0002-0002-000000000002', 'API Testing', 'Uji API menggunakan Postman dan pahami status code HTTP.', 5, 20, 'video'),
  ('b2000002-0002-0002-0002-000000000007', 'a1b2c3d4-0002-0002-0002-000000000002', 'Backend Auth & Security', 'Implementasikan autentikasi JWT dan keamanan dasar pada API.', 6, 30, 'video'),
  ('b2000002-0002-0002-0002-000000000008', 'a1b2c3d4-0002-0002-0002-000000000002', 'Docker & CI/CD', 'Kontainerisasi aplikasi dengan Docker dan otomasi deployment.', 7, 25, 'video')
ON CONFLICT (id) DO NOTHING;

-- ============================================================
-- LESSONS for Database & SQL
-- ============================================================
INSERT INTO public.lessons (id, course_id, title, content, order_index, duration_minutes, resource_type) VALUES
  ('b3000003-0003-0003-0003-000000000001', 'a1b2c3d4-0003-0003-0003-000000000003', 'SQL Fundamentals', 'Pelajari perintah SELECT, WHERE, ORDER BY, dan dasar-dasar query SQL.', 0, 25, 'video'),
  ('b3000003-0003-0003-0003-000000000002', 'a1b2c3d4-0003-0003-0003-000000000003', 'PostgreSQL Deep Dive', 'Eksplorasi fitur canggih PostgreSQL: tipe data, constraints, dan indexes.', 1, 30, 'video')
ON CONFLICT (id) DO NOTHING;

-- ============================================================
-- LESSONS for UI/UX Design
-- ============================================================
INSERT INTO public.lessons (id, course_id, title, content, order_index, duration_minutes, resource_type) VALUES
  ('b4000004-0004-0004-0004-000000000001', 'a1b2c3d4-0004-0004-0004-000000000004', 'Design Thinking', 'Pendekatan human-centered untuk memecahkan masalah melalui empati dan iterasi.', 0, 20, 'video'),
  ('b4000004-0004-0004-0004-000000000002', 'a1b2c3d4-0004-0004-0004-000000000004', 'Usability Testing', 'Cara menguji dan mengevaluasi desain dengan pengguna nyata.', 1, 20, 'video'),
  ('b4000004-0004-0004-0004-000000000003', 'a1b2c3d4-0004-0004-0004-000000000004', 'Information Architecture', 'Cara mengorganisasi konten dan navigasi agar mudah dipahami pengguna.', 2, 20, 'video'),
  ('b4000004-0004-0004-0004-000000000004', 'a1b2c3d4-0004-0004-0004-000000000004', 'Wireframing', 'Buat sketsa layout halaman sebelum desain final dengan Balsamiq atau Figma.', 3, 20, 'video'),
  ('b4000004-0004-0004-0004-000000000005', 'a1b2c3d4-0004-0004-0004-000000000004', 'Figma Mastery', 'Kuasai Figma: komponen, auto layout, prototyping, dan kolaborasi tim.', 4, 30, 'video'),
  ('b4000004-0004-0004-0004-000000000006', 'a1b2c3d4-0004-0004-0004-000000000004', 'Color & Typography', 'Prinsip warna, tipografi, dan cara memilih palet yang tepat untuk produk.', 5, 20, 'video'),
  ('b4000004-0004-0004-0004-000000000007', 'a1b2c3d4-0004-0004-0004-000000000004', 'Design Systems', 'Bangun sistem desain yang konsisten dengan komponen dan token yang dapat digunakan ulang.', 6, 25, 'video'),
  ('b4000004-0004-0004-0004-000000000008', 'a1b2c3d4-0004-0004-0004-000000000004', 'Prototyping', 'Buat prototipe interaktif yang terasa seperti produk nyata.', 7, 25, 'video'),
  ('b4000004-0004-0004-0004-000000000009', 'a1b2c3d4-0004-0004-0004-000000000004', 'Usability Test', 'Jalankan sesi pengujian usability dan analisis hasilnya.', 8, 20, 'video'),
  ('b4000004-0004-0004-0004-000000000010', 'a1b2c3d4-0004-0004-0004-000000000004', 'UX Portfolio', 'Bangun portofolio UX yang kuat dengan case study yang menarik.', 9, 20, 'video')
ON CONFLICT (id) DO NOTHING;

-- ============================================================
-- LESSONS for Cyber Security
-- ============================================================
INSERT INTO public.lessons (id, course_id, title, content, order_index, duration_minutes, resource_type) VALUES
  ('b5000005-0005-0005-0005-000000000001', 'a1b2c3d4-0005-0005-0005-000000000005', 'Security Basics', 'Pahami CIA Triad, malware, dan ancaman siber yang umum.', 0, 20, 'video'),
  ('b5000005-0005-0005-0005-000000000002', 'a1b2c3d4-0005-0005-0005-000000000005', 'Network Security', 'Firewall, VPN, dan cara melindungi jaringan dari serangan.', 1, 25, 'video'),
  ('b5000005-0005-0005-0005-000000000003', 'a1b2c3d4-0005-0005-0005-000000000005', 'Security Protocols', 'HTTPS, TLS/SSL, SSH, dan protokol keamanan modern.', 2, 20, 'video'),
  ('b5000005-0005-0005-0005-000000000004', 'a1b2c3d4-0005-0005-0005-000000000005', 'Cryptography', 'Enkripsi simetris, AES, dan fungsi hash untuk keamanan data.', 3, 25, 'video'),
  ('b5000005-0005-0005-0005-000000000005', 'a1b2c3d4-0005-0005-0005-000000000005', 'OWASP Top 10 - Part 1', 'SQL Injection, XSS, dan cara mencegah kerentanan web yang umum.', 4, 25, 'video'),
  ('b5000005-0005-0005-0005-000000000006', 'a1b2c3d4-0005-0005-0005-000000000005', 'OWASP Top 10 - Part 2', 'CSRF, broken authentication, dan kerentanan web lanjutan.', 5, 25, 'video'),
  ('b5000005-0005-0005-0005-000000000007', 'a1b2c3d4-0005-0005-0005-000000000005', 'Web App Security', 'Input validation, CSP, dan rate limiting untuk keamanan aplikasi web.', 6, 20, 'video'),
  ('b5000005-0005-0005-0005-000000000008', 'a1b2c3d4-0005-0005-0005-000000000005', 'Reconnaissance', 'Teknik pengumpulan informasi dan footprinting dalam ethical hacking.', 7, 20, 'video'),
  ('b5000005-0005-0005-0005-000000000009', 'a1b2c3d4-0005-0005-0005-000000000005', 'Penetration Testing', 'Simulasi serangan untuk menemukan kerentanan sistem secara etis.', 8, 30, 'video'),
  ('b5000005-0005-0005-0005-000000000010', 'a1b2c3d4-0005-0005-0005-000000000005', 'Incident Response', 'Cara mengidentifikasi, menangani, dan memulihkan insiden keamanan.', 9, 20, 'video')
ON CONFLICT (id) DO NOTHING;

-- ============================================================
-- LESSONS for Mobile Development
-- ============================================================
INSERT INTO public.lessons (id, course_id, title, content, order_index, duration_minutes, resource_type) VALUES
  ('b6000006-0006-0006-0006-000000000001', 'a1b2c3d4-0006-0006-0006-000000000006', 'Mobile Dev Introduction', 'Pengenalan pengembangan mobile: platform, framework, dan ekosistem.', 0, 15, 'video'),
  ('b6000006-0006-0006-0006-000000000002', 'a1b2c3d4-0006-0006-0006-000000000006', 'Dart Programming', 'Pelajari sintaks Dart: variabel, fungsi, dan paradigma OOP.', 1, 25, 'video'),
  ('b6000006-0006-0006-0006-000000000003', 'a1b2c3d4-0006-0006-0006-000000000006', 'Flutter Widgets', 'Pahami widget tree Flutter: Stateless, Stateful, Scaffold, dan layout widgets.', 2, 30, 'video'),
  ('b6000006-0006-0006-0006-000000000004', 'a1b2c3d4-0006-0006-0006-000000000006', 'React Native Basics', 'Bangun UI mobile dengan React Native: View, Text, StyleSheet, dan komponen.', 3, 25, 'video'),
  ('b6000006-0006-0006-0006-000000000005', 'a1b2c3d4-0006-0006-0006-000000000006', 'Mobile UI Design', 'Prinsip desain UI mobile: navigasi, touch targets, dan aksesibilitas.', 4, 20, 'video'),
  ('b6000006-0006-0006-0006-000000000006', 'a1b2c3d4-0006-0006-0006-000000000006', 'State Management', 'Kelola state aplikasi mobile menggunakan Provider (Flutter) atau Context (RN).', 5, 25, 'video'),
  ('b6000006-0006-0006-0006-000000000007', 'a1b2c3d4-0006-0006-0006-000000000006', 'Networking & APIs', 'Integrasikan REST API ke aplikasi mobile menggunakan http/fetch.', 6, 25, 'video'),
  ('b6000006-0006-0006-0006-000000000008', 'a1b2c3d4-0006-0006-0006-000000000006', 'Local Storage', 'Simpan data lokal menggunakan SharedPreferences, SQLite, atau AsyncStorage.', 7, 20, 'video'),
  ('b6000006-0006-0006-0006-000000000009', 'a1b2c3d4-0006-0006-0006-000000000006', 'Testing & Debugging', 'Uji dan debug aplikasi mobile dengan Flutter DevTools.', 8, 20, 'video'),
  ('b6000006-0006-0006-0006-000000000010', 'a1b2c3d4-0006-0006-0006-000000000006', 'App Publishing', 'Publish aplikasi ke Google Play Store dan App Store.', 9, 20, 'video')
ON CONFLICT (id) DO NOTHING;

-- ============================================================
-- QUIZZES - link to lessons using the quiz IDs from existing quiz_questions
-- Note: quiz IDs must match the quiz_id values already inserted in quiz_questions
-- ============================================================

-- Front-End quizzes
INSERT INTO public.quizzes (id, lesson_id, title, quiz_type, difficulty, xp_reward) VALUES
  ('4ac471ff-04f8-4a86-a3d3-2ed3db1f6e50', 'b1000001-0001-0001-0001-000000000001', 'HTML Dasar Quiz', 'mcq', 'easy', 10),
  ('b23de411-f676-40d9-aeaa-b0e7394332dd', 'b1000001-0001-0001-0001-000000000002', 'CSS & Styling Quiz', 'mixed', 'easy', 10),
  ('165111bf-c7c4-4c21-b9b3-856fdb55906e', 'b1000001-0001-0001-0001-000000000003', 'Responsive Design Quiz', 'mixed', 'easy', 10),
  ('76267112-29f8-4d74-91d0-4e1fd9bc2521', 'b1000001-0001-0001-0001-000000000004', 'JavaScript ES6+ Quiz', 'mixed', 'medium', 10),
  ('b887c619-4144-4680-ae42-39ebe5a11748', 'b1000001-0001-0001-0001-000000000005', 'DOM Manipulation Quiz', 'mixed', 'medium', 10),
  ('def3ab96-d3c9-4dc4-ba15-a11a2f1c9583', 'b1000001-0001-0001-0001-000000000006', 'React Fundamentals Quiz', 'mixed', 'medium', 10),
  ('7b2ae47c-8578-4a84-947b-e08435fdccd0', 'b1000001-0001-0001-0001-000000000007', 'React Hooks Quiz', 'mixed', 'medium', 15),
  ('245f9ed7-4996-4719-ba56-99e6fb8fdcb8', 'b1000001-0001-0001-0001-000000000008', 'Tailwind CSS Quiz', 'mixed', 'easy', 10),
  ('46930158-53c8-4b7f-9955-8f88b8628f6d', 'b1000001-0001-0001-0001-000000000009', 'Fetch API & Async Quiz', 'mixed', 'medium', 10),
  ('f06d73e4-fae6-4bc0-9773-a5aca21f19eb', 'b1000001-0001-0001-0001-000000000010', 'Build Tools Quiz', 'mixed', 'easy', 10)
ON CONFLICT (id) DO NOTHING;

-- Back-End quizzes
INSERT INTO public.quizzes (id, lesson_id, title, quiz_type, difficulty, xp_reward) VALUES
  ('66ebced2-8c4c-4d38-be33-ead60880313a', 'b2000002-0002-0002-0002-000000000001', 'HTTP Fundamentals Quiz', 'mcq', 'easy', 10),
  ('2e4e6d9c-91ea-4f13-8774-9049a7cecf8b', 'b2000002-0002-0002-0002-000000000002', 'PHP Dasar Quiz', 'mixed', 'easy', 10),
  ('553f8407-4660-467d-910a-c5b7572e64b4', 'b2000002-0002-0002-0002-000000000003', 'Laravel Framework Quiz', 'mixed', 'medium', 15),
  ('e3059e9c-f7af-4aab-bd1a-5d71f92f4625', 'b2000002-0002-0002-0002-000000000004', 'Node.js Quiz', 'mixed', 'medium', 15),
  ('f39329d0-903d-4796-b444-3a0b9c1a24d6', 'b2000002-0002-0002-0002-000000000005', 'REST API Quiz', 'mcq', 'medium', 10),
  ('655ef872-e847-4a34-a9d6-13cdc2f7aea8', 'b2000002-0002-0002-0002-000000000006', 'API Testing Quiz', 'mcq', 'easy', 10),
  ('49f15f1f-157f-4463-9090-fbb7dd53f610', 'b2000002-0002-0002-0002-000000000007', 'Backend Auth & Security Quiz', 'mcq', 'medium', 15),
  ('097d0048-bd48-4ab2-a3e6-d43c8a0e33c2', 'b2000002-0002-0002-0002-000000000008', 'Docker & CI/CD Quiz', 'mixed', 'hard', 20)
ON CONFLICT (id) DO NOTHING;

-- Database quizzes
INSERT INTO public.quizzes (id, lesson_id, title, quiz_type, difficulty, xp_reward) VALUES
  ('67c4d2ab-ffae-4172-a9ae-da66f4b8da74', 'b3000003-0003-0003-0003-000000000001', 'SQL Fundamentals Quiz', 'mixed', 'easy', 10),
  ('c3fd7cc2-26b3-48b1-90c7-d94b71dce0a8', 'b3000003-0003-0003-0003-000000000002', 'PostgreSQL Quiz', 'mixed', 'medium', 15)
ON CONFLICT (id) DO NOTHING;

-- UI/UX quizzes
INSERT INTO public.quizzes (id, lesson_id, title, quiz_type, difficulty, xp_reward) VALUES
  ('00a22914-aa0e-47a6-af63-e0e5e6a0f162', 'b4000004-0004-0004-0004-000000000001', 'Design Thinking Quiz', 'mcq', 'easy', 10),
  ('52766262-95b4-4f59-b57f-a696ea5e02ba', 'b4000004-0004-0004-0004-000000000002', 'Usability Testing Quiz', 'mcq', 'easy', 10),
  ('6bf67494-1449-4904-bdf5-28914bb6adb2', 'b4000004-0004-0004-0004-000000000003', 'Information Architecture Quiz', 'mcq', 'easy', 10),
  ('7fdc4004-f080-4482-ac63-b0ae4edf5f6e', 'b4000004-0004-0004-0004-000000000004', 'Wireframing Quiz', 'mcq', 'easy', 10),
  ('4c459104-8b58-4d1a-9dc0-847609ff23c9', 'b4000004-0004-0004-0004-000000000005', 'Figma Mastery Quiz', 'mcq', 'medium', 15),
  ('71402f2a-439b-467b-971e-0c63518000c2', 'b4000004-0004-0004-0004-000000000006', 'Color & Typography Quiz', 'mcq', 'easy', 10),
  ('89ce6f9d-8adf-4e83-af4a-698b698e353f', 'b4000004-0004-0004-0004-000000000007', 'Design Systems Quiz', 'mcq', 'medium', 15),
  ('037bec63-36fa-4378-bca3-da4d2730be4d', 'b4000004-0004-0004-0004-000000000008', 'Prototyping Quiz', 'mcq', 'medium', 15),
  ('93ce0830-d12e-4799-a1e3-263ecfcb4c9d', 'b4000004-0004-0004-0004-000000000009', 'Usability Test Quiz', 'mcq', 'medium', 15),
  ('b85dc695-acc7-443b-80d7-ba0efca15dac', 'b4000004-0004-0004-0004-000000000010', 'UX Portfolio Quiz', 'mcq', 'easy', 10)
ON CONFLICT (id) DO NOTHING;

-- Cyber Security quizzes
INSERT INTO public.quizzes (id, lesson_id, title, quiz_type, difficulty, xp_reward) VALUES
  ('cc9dc15d-2e30-4fd3-9a8c-28454876adf7', 'b5000005-0005-0005-0005-000000000001', 'Security Basics Quiz', 'mcq', 'easy', 10),
  ('5ecc9929-4b39-412e-ae7a-8e3d03f204cc', 'b5000005-0005-0005-0005-000000000002', 'Network Security Quiz', 'mcq', 'medium', 15),
  ('16a61196-c5da-4016-a7f5-47da51d1ec09', 'b5000005-0005-0005-0005-000000000003', 'Security Protocols Quiz', 'mcq', 'medium', 15),
  ('baa8d749-e156-4bf1-9348-6fc8ee66749a', 'b5000005-0005-0005-0005-000000000004', 'Cryptography Quiz', 'mcq', 'medium', 15),
  ('be789b17-96d0-401d-9f81-f5a9abe366cc', 'b5000005-0005-0005-0005-000000000005', 'OWASP Top 10 Part 1 Quiz', 'mcq', 'hard', 20),
  ('94b89ca7-3858-4ba0-b78a-1a166f2f94fa', 'b5000005-0005-0005-0005-000000000006', 'OWASP Top 10 Part 2 Quiz', 'mcq', 'hard', 20),
  ('625bfd58-6bbb-469a-a43b-17cd78030084', 'b5000005-0005-0005-0005-000000000007', 'Web App Security Quiz', 'mcq', 'hard', 20),
  ('c5cdfd15-d3f9-41c6-83b8-5ac5720df547', 'b5000005-0005-0005-0005-000000000008', 'Reconnaissance Quiz', 'mcq', 'medium', 15),
  ('7a258951-95d6-40c8-8ea5-0f04953b8821', 'b5000005-0005-0005-0005-000000000009', 'Penetration Testing Quiz', 'mcq', 'hard', 20),
  ('94f8f4e3-e7c1-4825-84ee-af2043a78f48', 'b5000005-0005-0005-0005-000000000010', 'Incident Response Quiz', 'mcq', 'hard', 20)
ON CONFLICT (id) DO NOTHING;

-- Mobile Development quizzes
INSERT INTO public.quizzes (id, lesson_id, title, quiz_type, difficulty, xp_reward) VALUES
  ('482b1802-1ef3-4cb5-b490-e596e5cc17e8', 'b6000006-0006-0006-0006-000000000001', 'Mobile Dev Intro Quiz', 'mcq', 'easy', 10),
  ('1017d705-754c-4475-b46e-deedc3ceb1b6', 'b6000006-0006-0006-0006-000000000002', 'Dart Programming Quiz', 'mixed', 'easy', 10),
  ('5f08d8ff-cb88-4f11-ac8d-c1c2b2d8758f', 'b6000006-0006-0006-0006-000000000003', 'Flutter Widgets Quiz', 'mixed', 'medium', 15),
  ('47a10b8b-ee91-45ba-999f-e010f4249e66', 'b6000006-0006-0006-0006-000000000004', 'React Native Quiz', 'mixed', 'medium', 15),
  ('3a6541c6-3a2e-45e7-9491-f53855a2d51a', 'b6000006-0006-0006-0006-000000000005', 'Mobile UI Design Quiz', 'mcq', 'easy', 10),
  ('5cd73ee7-5825-450b-8018-df469b5f1168', 'b6000006-0006-0006-0006-000000000006', 'State Management Quiz', 'mixed', 'medium', 15),
  ('5864d1f4-0cdd-4191-86b9-eedb1f7319b7', 'b6000006-0006-0006-0006-000000000007', 'Networking & APIs Quiz', 'mixed', 'medium', 15),
  ('d73cf8bd-dde0-4ada-84a8-1e1c9c7c90b4', 'b6000006-0006-0006-0006-000000000008', 'Local Storage Quiz', 'mcq', 'easy', 10),
  ('d418ee09-22ff-4251-a716-49c47c811053', 'b6000006-0006-0006-0006-000000000009', 'Testing & Debugging Quiz', 'mcq', 'medium', 15),
  ('e10176cb-3b56-4550-b1d4-433a23efb420', 'b6000006-0006-0006-0006-000000000010', 'App Publishing Quiz', 'mixed', 'medium', 15)
ON CONFLICT (id) DO NOTHING;
