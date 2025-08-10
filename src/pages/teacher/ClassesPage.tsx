import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Classe { id: string; nome: string; alunos: number }

export default function ClassesPage() {
  const [classes, setClasses] = useState<Classe[]>([
    { id: "c1", nome: "5º A", alunos: 28 },
    { id: "c2", nome: "5º B", alunos: 26 },
  ]);
  const [nome, setNome] = useState("");

  useEffect(() => {
    document.title = "Turmas";
  }, []);

  return (
    <main>
      <h1 className="text-2xl font-semibold mb-6">Gerenciar Turmas</h1>
      <Card>
        <CardHeader>
          <CardTitle>Turmas</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm">
            {classes.map((c) => (
              <li key={c.id} className="flex items-center justify-between border rounded px-3 py-2">
                <div className="font-medium">{c.nome}</div>
                <div className="text-muted-foreground">{c.alunos} alunos</div>
              </li>
            ))}
          </ul>
          <form
            className="mt-4 flex gap-2"
            onSubmit={(e) => {
              e.preventDefault();
              setClasses((prev) => [...prev, { id: Math.random().toString(36).slice(2), nome, alunos: 0 }]);
              setNome("");
            }}
          >
            <Input value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Nova turma (ex.: 6º A)" required />
            <Button type="submit">Adicionar</Button>
          </form>
        </CardContent>
      </Card>
    </main>
  );
}
