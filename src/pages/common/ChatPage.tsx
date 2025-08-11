import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";

interface Msg { id: string; author: string; text: string; ts: number; }

export default function ChatPage() {
  const { user } = useAuth();
  const [messages, setMessages] = useState<Msg[]>([
    { id: "m1", author: "Sistema", text: "Bem-vindo ao canal de comunicação!", ts: Date.now() - 10000 },
  ]);
  const [text, setText] = useState("");

  useEffect(() => {
    document.title = "Chat e Comunicados";
  }, []);

  function send() {
    if (!text.trim() || !user) return;
    setMessages((prev) => [
      ...prev,
      { id: Math.random().toString(36).slice(2), author: user.role === "teacher" ? "Professor" : "Responsável", text, ts: Date.now() },
    ]);
    setText("");
  }

  return (
    <main>
      <h1 className="text-2xl font-semibold mb-6">Comunicação</h1>
      <Card>
        <CardHeader>
          <CardTitle>Mensagens</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-72 overflow-y-auto border rounded p-3 space-y-3 bg-background">
            {messages.map((m) => (
              <div key={m.id} className="text-sm">
                <div className="font-medium">{m.author} <span className="text-muted-foreground">— {new Date(m.ts).toLocaleTimeString()}</span></div>
                <div>{m.text}</div>
              </div>
            ))}
          </div>
          <div className="mt-3 flex gap-2">
            <Input value={text} onChange={(e) => setText(e.target.value)} placeholder="Digite sua mensagem..." />
            <Button onClick={send}>Enviar</Button>
          </div>
          <p className="text-xs text-muted-foreground mt-2">Notificações automáticas e e-mails serão habilitados com integração segura.</p>
        </CardContent>
      </Card>
    </main>
  );
}
