import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Users, ClipboardList, Calendar, MessageSquare } from "lucide-react";

export default function TeacherDashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Dashboard — Professores";
  }, []);

  return (
    <main>
      <h1 className="text-2xl font-semibold mb-6">Visão Geral</h1>
      <section className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Turmas</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Gerencie turmas e alunos.</p>
            <Button className="mt-4" onClick={() => navigate("/app/teacher/classes")}>
              <Users className="mr-2 h-4 w-4" /> Ir para Turmas
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Notas</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Lance notas e observações.</p>
            <Button className="mt-4" onClick={() => navigate("/app/teacher/grades")}>
              <ClipboardList className="mr-2 h-4 w-4" /> Lançar Notas
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Cronograma</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Crie e edite eventos.</p>
            <Button className="mt-4" onClick={() => navigate("/app/teacher/calendar")}>
              <Calendar className="mr-2 h-4 w-4" /> Abrir Calendário
            </Button>
          </CardContent>
        </Card>
        <Card className="md:col-span-3">
          <CardHeader>
            <CardTitle>Comunicações</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Envie comunicados e mensagens aos pais.</p>
            <Button variant="secondary" className="mt-4" onClick={() => navigate("/app/teacher/chat")}>
              <MessageSquare className="mr-2 h-4 w-4" /> Abrir Mensagens
            </Button>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
