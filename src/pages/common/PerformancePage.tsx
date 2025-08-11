import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { useAuth } from "@/contexts/AuthContext";

const data = [
  { mes: "Jan", nota: 7.2 },
  { mes: "Fev", nota: 7.8 },
  { mes: "Mar", nota: 8.1 },
  { mes: "Abr", nota: 7.6 },
  { mes: "Mai", nota: 8.4 },
  { mes: "Jun", nota: 8.7 },
];

export default function PerformancePage() {
  const { user } = useAuth();
  useEffect(() => {
    document.title = "Desempenho";
  }, []);

  return (
    <main>
      <h1 className="text-2xl font-semibold mb-6">{user?.role === "parent" ? "Desempenho do Aluno" : "Desempenho da Turma"}</h1>
      <Card>
        <CardHeader>
          <CardTitle>Resumo por Mês</CardTitle>
        </CardHeader>
        <CardContent className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 16, right: 16, left: -10, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="mes" />
              <YAxis domain={[0, 10]} />
              <Tooltip />
              <Line type="monotone" dataKey="nota" stroke="hsl(var(--primary))" strokeWidth={3} dot={{ r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </main>
  );
}
