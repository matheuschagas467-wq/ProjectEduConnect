import { useEffect, useMemo, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";

interface Msg { id: string; author: string; text: string; ts: number; }

const STORAGE_KEY = "educonnect_chat_messages";

export default function ChatPage() {
  const { user } = useAuth();
  const [messages, setMessages] = useState<Msg[]>([
    { id: "m1", author: "Sistema", text: "Bem-vindo ao canal de comunicação!", ts: Date.now() - 10000 },
  ]);
  const [text, setText] = useState("");

  const isParent = useMemo(() => user?.role === "parent", [user]);

  useEffect(() => {
    document.title = "Chat e Comunicados";
    // Load persisted messages
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setMessages(JSON.parse(raw));
    } catch {}
    // Ask for notification permission (for school/teacher)
    if (Notification && Notification.permission === "default") {
      Notification.requestPermission().catch(() => {});
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    } catch {}
  }, [messages]);

  function triggerPush(body: string) {
    if (typeof Notification !== "undefined" && Notification.permission === "granted") {
      try { new Notification("EduConnect", { body }); } catch {}
    }
  }

  function send() {
    if (!text.trim() || !user) return;
    const author = user.role === "teacher" ? "Escola" : "Responsável";
    setMessages((prev) => [
      ...prev,
      { id: Math.random().toString(36).slice(2), author, text, ts: Date.now() },
    ]);
    if (user.role === "teacher") triggerPush(text);
    setText("");
  }

  const templates = [
    { label: "Aviso de Reunião", text: "Convocamos reunião de pais na próxima terça às 18h." },
    { label: "Evento Escolar", text: "Lembramos do evento cultural na sexta às 10h." },
    { label: "Atraso na Entrada", text: "Informamos que o aluno registrou atraso na entrada hoje." },
    { label: "Aviso Urgente", text: "O aluno não está se sentindo bem. Solicitamos busca imediata na escola." },
  ];

  return (
    <main>
      <h1 className="text-2xl font-semibold mb-6">Comunicação</h1>
      <Card>
        <CardHeader>
          <CardTitle>Mensagens</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Templates for the school */}
          {user?.role === "teacher" && (
            <div className="flex flex-wrap gap-2 mb-3">
              {templates.map((t) => (
                <Button key={t.label} variant="secondary" onClick={() => setText(t.text)}>
                  {t.label}
                </Button>
              ))}
            </div>
          )}

          <div className="h-72 overflow-y-auto border rounded p-3 space-y-3 bg-background">
            {messages.map((m) => (
              <div key={m.id} className="text-sm">
                <div className="font-medium">
                  {m.author} <span className="text-muted-foreground">— {new Date(m.ts).toLocaleTimeString()}</span>
                </div>
                <div>{m.text}</div>
              </div>
            ))}
          </div>

          <div className="mt-3 flex gap-2">
            <Input
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder={isParent ? "Somente a escola envia mensagens" : "Digite sua mensagem..."}
              disabled={isParent}
            />
            <Button onClick={send} disabled={isParent}>Enviar</Button>
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            Pais/responsáveis não iniciam conversas. Notificações push simuladas no navegador.
          </p>
        </CardContent>
      </Card>
    </main>
  );
}
