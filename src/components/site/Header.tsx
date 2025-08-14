import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { GraduationCap, Menu, X } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center shadow-lg">
            <GraduationCap className="w-6 h-6 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
            EduConnect
          </span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a 
            href="#recursos" 
            className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium"
          >
            Recursos
          </a>
          <a 
            href="#sobre" 
            className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium"
          >
            Sobre
          </a>
          <a 
            href="#contato" 
            className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium"
          >
            Contato
          </a>
          <Button 
            variant="outline" 
            size="sm"
            className="hover:bg-primary hover:text-primary-foreground transition-all duration-200"
          >
            Suporte
          </Button>
        </nav>
        
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="hover:bg-primary/10"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background/95 backdrop-blur">
          <nav className="container mx-auto px-4 py-4 space-y-3">
            <a 
              href="#recursos" 
              className="block text-muted-foreground hover:text-primary transition-colors duration-200 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Recursos
            </a>
            <a 
              href="#sobre" 
              className="block text-muted-foreground hover:text-primary transition-colors duration-200 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre
            </a>
            <a 
              href="#contato" 
              className="block text-muted-foreground hover:text-primary transition-colors duration-200 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contato
            </a>
            <Button 
              variant="outline" 
              size="sm"
              className="w-full mt-3 hover:bg-primary hover:text-primary-foreground transition-all duration-200"
            >
              Suporte
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

