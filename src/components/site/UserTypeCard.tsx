import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { LucideIcon, ArrowRight } from "lucide-react";

interface UserTypeCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  benefits: string[];
  buttonText: string;
  onSelect: () => void;
}

export const UserTypeCard = ({ 
  title, 
  description, 
  icon: Icon, 
  benefits, 
  buttonText, 
  onSelect 
}: UserTypeCardProps) => {
  return (
    <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/30 hover:-translate-y-1 group bg-gradient-to-br from-card to-card/50">
      <CardHeader className="text-center pb-6">
        <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
          <Icon className="w-10 h-10 text-primary group-hover:text-primary/80 transition-colors duration-300" />
        </div>
        <CardTitle className="text-2xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
          {title}
        </CardTitle>
        <CardDescription className="text-muted-foreground text-base leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <ul className="space-y-4">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start space-x-3 group/item">
              <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0 group-hover/item:bg-primary/20 transition-colors duration-200">
                <Icons.check className="w-4 h-4 text-primary" />
              </div>
              <span className="text-sm text-muted-foreground leading-relaxed group-hover/item:text-foreground transition-colors duration-200">
                {benefit}
              </span>
            </li>
          ))}
        </ul>
        
        <Button 
          className="w-full group/button bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-lg hover:shadow-xl transition-all duration-300" 
          size="lg"
          onClick={onSelect}
        >
          <span className="mr-2">{buttonText}</span>
          <ArrowRight className="w-4 h-4 group-hover/button:translate-x-1 transition-transform duration-200" />
        </Button>
      </CardContent>
    </Card>
  );
};

