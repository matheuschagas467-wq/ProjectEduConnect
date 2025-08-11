import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function LoginParents() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    document.title = "Login — Pais/Responsáveis";
  }, []);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(email, password, "parent");
    navigate("/app/parent/dashboard");
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-background">
      <section className="w-full max-w-md bg-card border rounded-lg p-6 shadow-sm">
        <h1 className="text-2xl font-semibold mb-1">Acesso — Pais/Responsáveis</h1>
        <p className="text-sm text-muted-foreground mb-6">Entre com seu e-mail e senha.</p>
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <Label htmlFor="email">E-mail</Label>
            <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div>
            <Label htmlFor="password">Senha</Label>
            <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <Button type="submit" className="w-full">Entrar</Button>
        </form>
      </section>
    </main>
  );
}
