import logo from "@/assets/logo_codemode.png";

const Footer = () => (
  <footer className="border-t border-border py-12 bg-muted/30">
    <div className="container">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <a href="/" className="flex items-center gap-2 font-heading font-bold text-lg text-foreground mb-3">
            <img src={logo} alt="CodeMode" className="h-7" />
          </a>
          <p className="text-sm text-muted-foreground">Belajar coding lewat kursus interaktif berbasis proyek.</p>
        </div>
          {[
          { title: "Platform", links: ["Kursus", "Untuk Tim"] },
          { title: "Sumber", links: ["Blog", "Dokumentasi", "Komunitas"] },
          { title: "Perusahaan", links: ["Tentang", "Karier", "Kontak"] },
        ].map((col) => (
          <div key={col.title}>
            <h4 className="font-heading font-semibold text-sm text-foreground mb-3">{col.title}</h4>
            <ul className="space-y-2">
              {col.links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-10 pt-6 border-t border-border text-center text-xs text-muted-foreground">
        © 2026 CodeMode. Seluruh hak cipta dilindungi.
      </div>
    </div>
  </footer>
);

export default Footer;
