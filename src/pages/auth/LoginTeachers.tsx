import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "sonner";
import { GraduationCap, ArrowLeft, BookOpen, Eye, EyeOff } from "lucide-react";

export default function LoginTeachers() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    document.title = "Login — Professores | EduConnect";
  }, []);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      await Promise.resolve(login(email, password, "teacher"));
      toast.success("Login realizado com sucesso!");
      navigate("/app/teacher/dashboard");
    } catch (err: any) {
      toast.error(err?.message || "Não foi possível entrar. Verifique os dados.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-primary/5 p-4">
      <div className="w-full max-w-md">
        {/* Back Button */}
        <div className="mb-6">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate("/")}
            className="hover:bg-primary/10 transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar ao início
          </Button>
        </div>

        {/* Login Card */}
        <section className="bg-card border rounded-2xl p-8 shadow-xl backdrop-blur-sm">
          {/* Header */}
          <div className="mb-8 text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center shadow-lg">
              <GraduationCap className="w-8 h-8 text-primary-foreground" />
            </div>
            <div className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent mb-2">
              EduConnect
            </div>
          </div>

          {/* Title */}
          <div className="mb-6 text-center">
            <div className="w-12 h-12 mx-auto mb-3 bg-primary/10 rounded-xl flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-primary" />
            </div>
            <h1 className="text-2xl font-bold mb-2">Acesso Docente</h1>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Entre com seu e-mail institucional e senha para acessar o portal.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={onSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium">
                E-mail Institucional
              </Label>
              <Input 
                id="email" 
                type="email" 
                value={email} 
                onChange={e => setEmail(e.target.value)} 
                required 
                placeholder="professor@escola.edu.br"
                className="h-12 border-2 focus:border-primary transition-colors duration-200"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-medium">
                Senha
              </Label>
              <div className="relative">
                <Input 
                  id="password" 
                  type={showPassword ? "text" : "password"}
                  value={password} 
                  onChange={e => setPassword(e.target.value)} 
                  required 
                  placeholder="Digite sua senha"
                  className="h-12 border-2 focus:border-primary transition-colors duration-200 pr-12"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-1 top-1 h-10 w-10 hover:bg-primary/10"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
              </div>
            </div>

            <Button 
              type="submit" 
              className="w-full h-12 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-lg hover:shadow-xl transition-all duration-300 text-base font-medium"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex items-center">
                  <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin mr-2"></div>
                  Entrando...
                </div>
              ) : (
                "Entrar no Portal"
              )}
            </Button>
          </form>

          {/* Footer */}
          <div className="mt-8 text-center">
            <p className="text-xs text-muted-foreground mb-3">
              Esqueceu sua senha?
            </p>
            <Button variant="link" size="sm" className="text-primary hover:text-primary/80">
              Recuperar senha
            </Button>
          </div>
        </section>
      </div>
    </main>
  );
}

