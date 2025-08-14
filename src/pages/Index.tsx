import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/site/Header";
import { HeroSection } from "@/components/site/HeroSection";
import { UserTypeCard } from "@/components/site/UserTypeCard";
import { Footer } from "@/components/site/Footer";
import { Icons } from "@/components/ui/icons";

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "EduConnect — Bem-vindo";
  }, []);

  const parentBenefits = [
    "Acompanhar notas e frequência",
    "Receber comunicados da escola", 
    "Agendar reuniões com professores",
    "Visualizar calendário escolar"
  ];

  const teacherBenefits = [
    "Gerenciar turmas e disciplinas",
    "Lançar notas e frequência",
    "Compartilhar material didático", 
    "Comunicar-se com responsáveis"
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-1">
        <HeroSection />
        
        <section className="pb-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <UserTypeCard
                title="Sou Responsável"
                description="Acompanhe o desempenho escolar do seu filho, receba notificações importantes e mantenha-se conectado com a escola."
                icon={Icons.users}
                benefits={parentBenefits}
                buttonText="Entrar como Responsável"
                onSelect={() => navigate("/login/parents")}
              />
              
              <UserTypeCard
                title="Sou Docente"
                description="Gerencie suas turmas, registre avaliações, compartilhe conteúdos e acompanhe o progresso dos seus alunos."
                icon={Icons.teacher}
                benefits={teacherBenefits}
                buttonText="Entrar como Docente"
                onSelect={() => navigate("/login/teachers")}
              />
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
