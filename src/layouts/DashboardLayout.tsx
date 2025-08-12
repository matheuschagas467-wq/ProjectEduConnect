import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/site/AppSidebar";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <SidebarProvider>
      <header className="h-14 flex items-center border-b bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-card/60">
        <div className="container flex items-center gap-3">
          <SidebarTrigger />
          <h1 className="text-lg font-semibold">Portal da Redessssssss</h1>
        </div>
      </header>
      <div className="flex min-h-[calc(100vh-3.5rem)] w-full">
        <AppSidebar />
        <main className="flex-1">
          <div className="container py-6">
            <Outlet />
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
