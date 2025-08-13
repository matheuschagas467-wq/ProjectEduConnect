import { useNavigate } from "react-router-dom";

export const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center space-y-6">
          <div className="space-y-2">
            <p className="text-muted-foreground">
              Já possui uma conta?{" "}
              <button 
                onClick={() => navigate("/login/parents")}
                className="text-primary hover:underline font-medium"
              >
                Faça login aqui
              </button>
            </p>
            <p className="text-sm text-muted-foreground">
              Precisa de ajuda? Entre em contato com o suporte da escola
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xs">E</span>
              </div>
              <span className="font-semibold">
                <span className="text-primary">Edu</span>Connect
              </span>
            </div>
            
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
          
          <div className="pt-6 border-t">
            <p className="text-sm text-muted-foreground">
              © 2025 EduConnect. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};