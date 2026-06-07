import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from "recharts";

interface RadarSkillChartProps {
  analytics: {
    logic_score: number;
    visual_score: number;
    markup_score: number;
    security_score: number;
    database_score: number;
  } | null;
}

const RadarSkillChart = ({ analytics }: RadarSkillChartProps) => {
  const data = [
    { subject: "Logic", value: Number(analytics?.logic_score || 0), fullMark: 100 },
    { subject: "Visual", value: Number(analytics?.visual_score || 0), fullMark: 100 },
    { subject: "Markup", value: Number(analytics?.markup_score || 0), fullMark: 100 },
    { subject: "Security", value: Number(analytics?.security_score || 0), fullMark: 100 },
    { subject: "Database", value: Number(analytics?.database_score || 0), fullMark: 100 },
  ];

  return (
    <div className="p-4 rounded-xl bg-card/80 backdrop-blur-md border border-white/10">
      <h4 className="font-heading font-semibold text-sm text-foreground mb-2">Skill Radar</h4>
      <ResponsiveContainer width="100%" height={220}>
        <RadarChart data={data}>
          <PolarGrid stroke="hsl(var(--border))" />
          <PolarAngleAxis
            dataKey="subject"
            tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 11 }}
          />
          <PolarRadiusAxis angle={90} domain={[0, 100]} tick={false} axisLine={false} />
          <Radar
            name="Skills"
            dataKey="value"
            stroke="hsl(var(--primary))"
            fill="hsl(var(--primary))"
            fillOpacity={0.2}
            strokeWidth={2}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RadarSkillChart;
