import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/site/AppSidebar";
import { Outlet } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { LogOut, Bell, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function DashboardLayout() {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <SidebarProvider>
      <header className="h-16 flex items-center border-b bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-card/60 sticky top-0 z-40">
        <div className="container flex items-center justify-between gap-4 px-4">
          <div className="flex items-center gap-3">
            <SidebarTrigger className="hover:bg-primary/10 transition-colors duration-200" />
            <div className="flex flex-col">
              <h1 className="text-lg font-semibold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Portal EduConnect
              </h1>
              <p className="text-xs text-muted-foreground">
                {user?.role === "teacher" ? "Área do Professor" : "Área do Responsável"}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Search Bar - Hidden on mobile */}
            <div className="hidden md:flex relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input 
                placeholder="Buscar..." 
                className="pl-10 w-64 h-9 border-2 focus:border-primary transition-colors duration-200"
              />
            </div>

            {/* Notifications */}
            <Button 
              variant="ghost" 
              size="icon"
              className="relative hover:bg-primary/10 transition-colors duration-200"
            >
              <Bell className="h-4 w-4" />
              <span className="absolute -top-1 -right-1 h-3 w-3 bg-destructive rounded-full text-xs flex items-center justify-center">
                <span className="w-1.5 h-1.5 bg-destructive-foreground rounded-full"></span>
              </span>
            </Button>

            {/* User Info & Logout */}
            <div className="flex items-center gap-2">
              <div className="hidden sm:flex flex-col text-right">
                <span className="text-sm font-medium">
                  {user?.name || (user?.role === "teacher" ? "Professor" : "Responsável")}
                </span>
                <span className="text-xs text-muted-foreground">
                  {user?.email || "Usuário"}
                </span>
              </div>
              <Button 
                variant="ghost" 
                size="icon"
                onClick={handleLogout}
                className="hover:bg-destructive/10 hover:text-destructive transition-all duration-200"
                title="Sair"
              >
                <LogOut className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex min-h-[calc(100vh-4rem)] w-full">
        <AppSidebar />
        <main className="flex-1 bg-gradient-to-br from-background to-background/50">
          <div className="container py-6 px-4">
            <Outlet />
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}

