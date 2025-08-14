import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { LucideIcon } from "lucide-react";

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
    <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-2 hover:border-primary/20">
      <CardHeader className="text-center pb-6">
        <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
          <Icon className="w-8 h-8 text-primary" />
        </div>
        <CardTitle className="text-2xl font-bold">{title}</CardTitle>
        <CardDescription className="text-muted-foreground">
          {description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <ul className="space-y-3">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start space-x-3">
              <Icons.check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <span className="text-sm text-muted-foreground">{benefit}</span>
            </li>
          ))}
        </ul>
        
        <Button 
          className="w-full" 
          size="lg"
          onClick={onSelect}
        >
          {buttonText}
        </Button>
      </CardContent>
    </Card>
  );
};