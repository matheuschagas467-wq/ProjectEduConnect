import { useEffect } from "react";
import { Calendar as DayPicker } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart, MessageSquare, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ParentDashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Dashboard — Pais";
  }, []);

  return (
    <main>
      <h1 className="text-2xl font-semibold mb-6">Visão Geral</h1>
      <section className="grid gap-6 md:grid-cols-3">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Cronograma Próximo</CardTitle>
          </CardHeader>
          <CardContent>
            <DayPicker mode="single" />
            <p className="text-sm text-muted-foreground mt-3">Visualize eventos da turma do aluno.</p>
            <Button variant="secondary" className="mt-4" onClick={() => navigate("/app/parent/calendar")}>
              <Calendar className="mr-2 h-4 w-4" /> Abrir Calendário
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Comunicações</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="text-sm space-y-2">
              <li>• Reunião de pais — 12/09 às 18h</li>
              <li>• Prova de Matemática — 20/09</li>
              <li>• Feira de Ciências — 05/10</li>
            </ul>
            <Button className="mt-4" onClick={() => navigate("/app/parent/chat")}>
              <MessageSquare className="mr-2 h-4 w-4" /> Abrir Mensagens
            </Button>
          </CardContent>
        </Card>
        <Card className="md:col-span-3">
          <CardHeader>
            <CardTitle>Desempenho do Aluno</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-sm text-muted-foreground mb-2">Resumo mensal (exemplo)</div>
            <div className="h-56 grid place-items-center border rounded-md">Gráfico simples aqui</div>
            <Button variant="secondary" className="mt-4" onClick={() => navigate("/app/parent/performance")}>
              <BarChart className="mr-2 h-4 w-4" /> Ver Detalhes
            </Button>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
