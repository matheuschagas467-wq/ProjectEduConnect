import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";

export default function SettingsPage() {
  useEffect(() => {
    document.title = "Configurações";
  }, []);

  return (
    <main>
      <h1 className="text-2xl font-semibold mb-6">Configurações</h1>
      <section className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Alterar Senha</CardTitle>
          </CardHeader>
          <CardContent>
            <form
              className="space-y-3"
              onSubmit={(e) => {
                e.preventDefault();
                toast({ title: "Senha atualizada", description: "Sua senha foi alterada (exemplo)." });
              }}
            >
              <div>
                <Label>Senha atual</Label>
                <Input type="password" required />
              </div>
              <div>
                <Label>Nova senha</Label>
                <Input type="password" required />
              </div>
              <Button type="submit">Salvar</Button>
            </form>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Notificações</CardTitle>
          </CardHeader>
          <CardContent>
            <form
              className="space-y-3"
              onSubmit={(e) => {
                e.preventDefault();
                toast({ title: "Preferências salvas", description: "Notificações atualizadas (exemplo)." });
              }}
            >
              <div>
                <Label>E-mail</Label>
                <Input type="email" placeholder="email@exemplo.com" required />
              </div>
              <div>
                <Label>Telefone</Label>
                <Input type="tel" placeholder="(00) 00000-0000" />
              </div>
              <Button type="submit" variant="secondary">Salvar</Button>
            </form>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
