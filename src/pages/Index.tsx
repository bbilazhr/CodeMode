import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CourseCard from "@/components/CourseCard";
import Stats from "@/components/Stats";
import Features from "@/components/Features";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const courses = [
  { id: "a1111111-1111-1111-1111-111111111111", title: "Data Science", description: "Dasar Python, pembersihan data, visualisasi, dan pengenalan machine learning.", level: "Beginner", duration: "12j", students: "18K", icon: "📊", color: "#3572A5" },
  { id: "a2222222-2222-2222-2222-222222222222", title: "Backend Development", description: "PHP (Laravel), Node.js, RESTful API, dan manajemen database.", level: "Intermediate", duration: "20j", students: "24K", icon: "⚙️", color: "#F7DF1E" },
  { id: "a3333333-3333-3333-3333-333333333333", title: "Front-End Development", description: "Kuasai HTML, CSS, JavaScript, dan framework modern untuk membangun antarmuka yang menarik.", level: "Intermediate", duration: "16j", students: "15K", icon: "🎨", color: "#61DAFB" },
  { id: "a4444444-4444-4444-4444-444444444444", title: "Mobile Development", description: "Flutter, React Native, pola UI mobile, dan deployment ke app store.", level: "Advanced", duration: "24j", students: "9K", icon: "📱", color: "#339933" },
  { id: "a5555555-5555-5555-5555-555555555555", title: "UI/UX Design", description: "Riset pengguna, wireframe, design system, dan prototyping.", level: "Intermediate", duration: "18j", students: "12K", icon: "✏️", color: "#E85D3A" },
  { id: "a6666666-6666-6666-6666-666666666666", title: "Cyber Security", description: "Keamanan jaringan, kriptografi, OWASP Top 10, dan ethical hacking.", level: "Beginner", duration: "8j", students: "11K", icon: "🔒", color: "#6B7280" },
];

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <Hero />
    <Stats />

    <section id="courses" className="py-20">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Kursus populer
          </h2>
          <p className="text-muted-foreground">
            Jalur belajar terkurasi dari pemula hingga lanjutan, dengan proyek nyata di setiap tahap.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <CourseCard key={course.title} {...course} />
          ))}
        </div>
      </div>
    </section>

    <Features />
    <CTA />
    <Footer />
  </div>
);

export default Index;
