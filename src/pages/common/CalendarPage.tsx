import { useEffect, useMemo, useState } from "react";
import { Calendar as DayPicker } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/contexts/AuthContext";

interface EventItem { id: string; date: Date; title: string; type: string; }

export default function CalendarPage() {
  const { user } = useAuth();
  const [selected, setSelected] = useState<Date | undefined>(new Date());
  const [events, setEvents] = useState<EventItem[]>([
    { id: "1", date: new Date(), title: "Reunião de Pais", type: "Reunião" },
    { id: "2", date: new Date(2025, 7, 21), title: "Apresentação EduConnect", type: "Apresentação" }
  { id: "2", date: new Date(2025, 7, 21), title: "Sábado Letivo", type: "Aula" }
  ]);


  const dayEvents = useMemo(() =>
    events.filter((e) => selected && e.date.toDateString() === selected.toDateString()),
    [events, selected]
  );

  useEffect(() => {
    document.title = "Cronograma Escolar";
  }, []);

  function addEvent(form: { title: string; type: string }) {
    if (!selected) return;
    setEvents((prev) => [
      ...prev,
      { id: Math.random().toString(36).slice(2), date: selected, title: form.title, type: form.type },
    ]);
  }

  function removeEvent(id: string) {
    setEvents((prev) => prev.filter((e) => e.id !== id));
  }

  return (
    <main>
      <h1 className="text-2xl font-semibold mb-6">Cronograma Escolar</h1>
      <section className="grid gap-6 md:grid-cols-3">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Calendário</CardTitle>
          </CardHeader>
          <CardContent>
            <DayPicker mode="single" selected={selected} onSelect={setSelected} />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Eventos do Dia</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              {dayEvents.length === 0 && <li className="text-muted-foreground">Sem eventos.</li>}
              {dayEvents.map((e) => (
                <li key={e.id} className="flex items-center justify-between border rounded px-3 py-2">
                  <div>
                    <div className="font-medium">{e.title}</div>
                    <div className="text-muted-foreground">{e.type}</div>
                  </div>
                  {user?.role === "teacher" && (
                    <Button size="sm" variant="destructive" onClick={() => removeEvent(e.id)}>Excluir</Button>
                  )}
                </li>
              ))}
            </ul>
            {user?.role === "teacher" && <EventForm onAdd={addEvent} />}
          </CardContent>
        </Card>
      </section>
    </main>
  );
}

function EventForm({ onAdd }: { onAdd: (v: { title: string; type: string }) => void }) {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  return (
    <form
      className="mt-4 space-y-3 border-t pt-4"
      onSubmit={(e) => {
        e.preventDefault();
        onAdd({ title, type });
        setTitle("");
        setType("");
      }}
    >
      <div>
        <Label htmlFor="title">Título</Label>
        <Input id="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
      </div>
      <div>
        <Label htmlFor="type">Tipo</Label>
        <Input id="type" value={type} onChange={(e) => setType(e.target.value)} placeholder="Prova, Reunião..." required />
      </div>
      <Button type="submit" className="w-full">Adicionar Evento</Button>
    </form>
  );
}
