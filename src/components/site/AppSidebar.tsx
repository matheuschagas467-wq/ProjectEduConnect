import { useLocation, NavLink } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Calendar, MessageSquare, BarChart3, Settings, Info, Users, ClipboardList, Home, GraduationCap } from "lucide-react";

export function AppSidebar() {
  const { user } = useAuth();
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => currentPath === path;

  const baseParent = "/app/parent";
  const baseTeacher = "/app/teacher";

  const parentItems = [
    { title: "Dashboard", url: `${baseParent}/dashboard`, icon: Home },
    { title: "Cronograma", url: `${baseParent}/calendar`, icon: Calendar },
    { title: "Configurações", url: `${baseParent}/settings`, icon: Settings },
    { title: "Sobre/Contato", url: `/app/about`, icon: Info },
  ];

  const teacherItems = [
    { title: "Dashboard", url: `${baseTeacher}/dashboard`, icon: Home },
    { title: "Turmas", url: `${baseTeacher}/classes`, icon: Users },
    { title: "Cronograma", url: `${baseTeacher}/calendar`, icon: Calendar },
    { title: "Comunicação", url: `${baseTeacher}/communication`, icon: MessageSquare },
    { title: "Configurações", url: `${baseTeacher}/settings`, icon: Settings },
    { title: "Sobre/Contato", url: `/app/about`, icon: Info },
  ];

  const items = user?.role === "teacher" ? teacherItems : parentItems;

  return (
    <Sidebar collapsible="icon" className="border-r bg-card/50 backdrop-blur">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="flex items-center gap-2 text-primary font-semibold">
            <GraduationCap className="w-4 h-4" />
            Navegação
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild 
                    isActive={isActive(item.url)}
                    className="hover:bg-primary/10 transition-all duration-200 data-[active=true]:bg-primary/20 data-[active=true]:text-primary data-[active=true]:border-r-2 data-[active=true]:border-primary"
                  >
                    <NavLink to={item.url} end className="flex items-center gap-3 px-3 py-2 rounded-lg">
                      <item.icon className="w-4 h-4 flex-shrink-0" />
                      <span className="font-medium">{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

