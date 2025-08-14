import { useEffect, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { students } from "@/data/students";
import { ArrowLeft } from "lucide-react";

export default function ClassDetailsPage() {
  const params = useParams();
  const navigate = useNavigate();
  const className = useMemo(() => decodeURIComponent(params.name || ""), [params.name]);
  const list = useMemo(() => students.filter((s) => s.className === className), [className]);

  useEffect(() => {
    document.title = `Turma ${className} — Alunos`;
  }, [className]);

  return (
    <main>
      <div className="flex items-center gap-4 mb-6">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => navigate("/app/teacher/classes")}
          className="flex items-center gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          Voltar
        </Button>
        <h1 className="text-2xl font-semibold">Turma {className}</h1>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Alunos matriculados ({list.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {list.map((s) => (
              <div key={s.registration} className="border rounded p-3">
                <div className="font-medium">{s.studentName}</div>
                <div className="text-sm text-muted-foreground">Matrícula: {s.registration}</div>
                <div className="text-sm text-muted-foreground">Nascimento: {new Date(s.birthDate).toLocaleDateString()}</div>
                <div className="text-sm text-muted-foreground">Responsável: {s.responsibleName}</div>
                <div className="text-sm text-muted-foreground">CPF (hash): ••••••••••</div>
                <div className="text-sm text-muted-foreground">Contato: {s.phone}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
