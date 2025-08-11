import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import DashboardLayout from "./layouts/DashboardLayout";
import LoginParents from "./pages/auth/LoginParents";
import LoginTeachers from "./pages/auth/LoginTeachers";
import ParentDashboard from "./pages/parent/ParentDashboard";
import TeacherDashboard from "./pages/teacher/TeacherDashboard";
import CalendarPage from "./pages/common/CalendarPage";
import ChatPage from "./pages/common/ChatPage";
import PerformancePage from "./pages/common/PerformancePage";
import SettingsPage from "./pages/common/SettingsPage";
import AboutPage from "./pages/common/AboutPage";
import ClassesPage from "./pages/teacher/ClassesPage";
import GradesPage from "./pages/teacher/GradesPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />

            {/* Public auth routes */}
            <Route path="/login/parents" element={<LoginParents />} />
            <Route path="/login/teachers" element={<LoginTeachers />} />

            {/* App routes (protected) */}
            <Route element={<ProtectedRoute role="parent" />}> 
              <Route path="/app/parent" element={<DashboardLayout />}>
                <Route path="dashboard" element={<ParentDashboard />} />
                <Route path="calendar" element={<CalendarPage />} />
                <Route path="chat" element={<ChatPage />} />
                <Route path="performance" element={<PerformancePage />} />
                <Route path="settings" element={<SettingsPage />} />
              </Route>
            </Route>

            <Route element={<ProtectedRoute role="teacher" />}> 
              <Route path="/app/teacher" element={<DashboardLayout />}>
                <Route path="dashboard" element={<TeacherDashboard />} />
                <Route path="classes" element={<ClassesPage />} />
                <Route path="grades" element={<GradesPage />} />
                <Route path="calendar" element={<CalendarPage />} />
                <Route path="chat" element={<ChatPage />} />
                <Route path="settings" element={<SettingsPage />} />
              </Route>
            </Route>

            {/* Shared about page under app */}
            <Route element={<ProtectedRoute />}> 
              <Route path="/app/about" element={<AboutPage />} />
            </Route>

            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
