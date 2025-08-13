import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export default function LoginParents() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [registration, setRegistration] = useState("");
  const [cpf, setCpf] = useState("");

  useEffect(() => {
    document.title = "Login — Responsáveis | EduConnect";
  }, []);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await Promise.resolve(login(registration, cpf, "parent"));
      navigate("/app/parent/dashboard");
    } catch (err: any) {
      toast.error(err?.message || "Não foi possível entrar. Verifique os dados.");
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-background">
      <section className="w-full max-w-md bg-card border rounded-lg p-6 shadow-sm">
        <div className="mb-4 text-center">
          <div className="text-2xl font-bold tracking-tight">
            <span className="text-primary">Edu</span>Connect
          </div>
        </div>
        <h1 className="text-xl font-semibold mb-1">Acesso — Responsáveis</h1>
        <p className="text-sm text-muted-foreground mb-6">
          Entre com a matrícula do aluno e o CPF do responsável (somente números).
        </p>
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <Label htmlFor="registration">Número de Matrícula</Label>
            <Input
              id="registration"
              type="text"
              value={registration}
              onChange={(e) => setRegistration(e.target.value)}
              required
              placeholder="Ex.: 2025A001"
            />
          </div>
          <div>
            <Label htmlFor="cpf">CPF do Responsável</Label>
            <Input
              id="cpf"
              type="password"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
              required
              placeholder="Somente números"
            />
          </div>
          <Button type="submit" className="w-full">Entrar</Button>
        </form>
      </section>
    </main>
  );
}
