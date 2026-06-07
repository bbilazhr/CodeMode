const stats = [
  { value: "50K+", label: "Pelajar Aktif" },
  { value: "200+", label: "Kursus" },
  { value: "95%", label: "Tingkat Selesai" },
  { value: "4.9", label: "Rata-rata Nilai" },
];

const Stats = () => (
  <section className="py-16 border-y border-border">
    <div className="container">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-gradient font-heading">{s.value}</div>
            <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Stats;
