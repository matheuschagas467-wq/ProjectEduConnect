import { ArrowLeft, Home, Settings, Calendar, MessageSquare, Users, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
export default function PageNavigation() {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    user
  } = useAuth();
  const handleBack = () => {
    navigate(-1);
  };
  const getQuickNavItems = () => {
    if (!user) return [];
    const baseItems = [{
      label: "Dashboard",
      icon: Home,
      path: user.role === "teacher" ? "/app/teacher/dashboard" : "/app/parent/dashboard"
    }, {
      label: "Calendário",
      icon: Calendar,
      path: "/app/calendar"
    }, {
      label: "Configurações",
      icon: Settings,
      path: "/app/settings"
    }];
    if (user.role === "teacher") {
      return [...baseItems.slice(0, 1),
      // Dashboard
      {
        label: "Turmas",
        icon: Users,
        path: "/app/teacher/classes"
      }, {
        label: "Comunicação",
        icon: MessageSquare,
        path: "/app/teacher/communication"
      }, ...baseItems.slice(1) // Calendar, Settings
      ];
    } else {
      return [...baseItems.slice(0, 1),
      // Dashboard
      {
        label: "Desempenho",
        icon: BarChart3,
        path: "/app/performance"
      }, {
        label: "Chat",
        icon: MessageSquare,
        path: "/app/chat"
      }, ...baseItems.slice(1) // Calendar, Settings
      ];
    }
  };
  const quickNavItems = getQuickNavItems();
  const currentPath = location.pathname;
  return <div className="mb-6 space-y-4">
      {/* Back Button */}
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="sm" onClick={handleBack} className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" />
          Voltar
        </Button>
      </div>

      {/* Quick Navigation */}
      <div className="flex flex-wrap gap-2">
      {quickNavItems.map(item => {
        const isActive = currentPath === item.path;
        const Icon = item.icon;
        return (
          <Button
            key={item.path}
            variant={isActive ? "default" : "outline"}
            size="sm"
            onClick={() => navigate(item.path)}
            className="flex items-center gap-2"
          >
            <Icon className="h-4 w-4" />
            {item.label}
          </Button>
        );
      })}
      </div>
    </div>;
}