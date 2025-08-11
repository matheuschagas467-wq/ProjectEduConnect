import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Aluno { id: string; nome: string; nota?: number }

export default function GradesPage() {
  const [alunos, setAlunos] = useState<Aluno[]>([
    { id: "a1", nome: "Ana" },
    { id: "a2", nome: "Bruno" },
    { id: "a3", nome: "Carla" },
  ]);

  useEffect(() => {
    document.title = "Lançar Notas";
  }, []);

  return (
    <main>
      <h1 className="text-2xl font-semibold mb-6">Lançar Notas</h1>
      <Card>
        <CardHeader>
          <CardTitle>Turma — Exemplo</CardTitle>
        </CardHeader>
        <CardContent>
          <form
            className="space-y-3"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Notas salvas (exemplo)");
            }}
          >
            {alunos.map((aluno, idx) => (
              <div key={aluno.id} className="flex items-center gap-3">
                <div className="w-40">{aluno.nome}</div>
                <Input
                  type="number"
                  min={0}
                  max={10}
                  step={0.1}
                  value={aluno.nota ?? ""}
                  onChange={(e) => {
                    const v = parseFloat(e.target.value);
                    setAlunos((prev) => prev.map((a, i) => (i === idx ? { ...a, nota: isNaN(v) ? undefined : v } : a)));
                  }}
                />
              </div>
            ))}
            <Button type="submit">Salvar</Button>
          </form>
        </CardContent>
      </Card>
    </main>
  );
}
