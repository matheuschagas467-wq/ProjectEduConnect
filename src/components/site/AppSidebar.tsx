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
import { Calendar, MessageSquare, BarChart3, Settings, Info, Users, ClipboardList } from "lucide-react";

export function AppSidebar() {
  const { user } = useAuth();
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => currentPath === path;

  const baseParent = "/app/parent";
  const baseTeacher = "/app/teacher";

  const parentItems = [
    { title: "Dashboard", url: `${baseParent}/dashboard`, icon: BarChart3 },
    { title: "Cronograma", url: `${baseParent}/calendar`, icon: Calendar },
    { title: "Comunicação", url: `${baseParent}/chat`, icon: MessageSquare },
    { title: "Desempenho", url: `${baseParent}/performance`, icon: ClipboardList },
    { title: "Configurações", url: `${baseParent}/settings`, icon: Settings },
    { title: "Sobre/Contato", url: `/app/about`, icon: Info },
  ];

  const teacherItems = [
    { title: "Dashboard", url: `${baseTeacher}/dashboard`, icon: BarChart3 },
    { title: "Turmas", url: `${baseTeacher}/classes`, icon: Users },
    { title: "Notas", url: `${baseTeacher}/grades`, icon: ClipboardList },
    { title: "Cronograma", url: `${baseTeacher}/calendar`, icon: Calendar },
    { title: "Comunicação", url: `${baseTeacher}/chat`, icon: MessageSquare },
    { title: "Configurações", url: `${baseTeacher}/settings`, icon: Settings },
    { title: "Sobre/Contato", url: `/app/about`, icon: Info },
  ];

  const items = user?.role === "teacher" ? teacherItems : parentItems;
  const isExpanded = items.some((i) => isActive(i.url));

  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navegação</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={isActive(item.url)}>
                    <NavLink to={item.url} end>
                      <item.icon className="mr-2 h-4 w-4" />
                      <span>{item.title}</span>
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
