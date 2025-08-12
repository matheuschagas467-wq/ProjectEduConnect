import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
const Index = () => {
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Portal da Rede — Escolha de Perfil";
  }, []);
  return <main className="min-h-screen flex items-center justify-center bg-slate-50">
      <section className="container text-center py-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Acesse o Portal da Rede</h1>
        <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">Selecione seu perfil para continuar. Interface responsiva para Responsáveis e Docentes.</p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <Button size="lg" onClick={() => navigate("/login/parents")} className="bg-cyan-700 hover:bg-cyan-600 text-slate-950">Sou Responsável</Button>
          <Button size="lg" variant="secondary" onClick={() => navigate("/login/teachers")} className="text-[t40E0D0] text-black bg-cyan-800 hover:bg-cyan-700">Sou Docente</Button>
        </div>
      </section>
    </main>;
};
export default Index;