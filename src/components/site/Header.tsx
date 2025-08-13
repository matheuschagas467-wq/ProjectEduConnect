import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
export const Header = () => {
  const navigate = useNavigate();
  return <header className="w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">E</span>
          </div>
          <span className="text-xl font-bold">
            <span className="text-primary">Edu</span>Connect
          </span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            Contato
          </a>
          
        </nav>
        
        <div className="md:hidden">
          
        </div>
      </div>
    </header>;
};