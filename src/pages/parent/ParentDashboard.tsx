import { useEffect } from "react";
import { Calendar as DayPicker } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart, MessageSquare, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";
import PageNavigation from "@/components/common/PageNavigation";

export default function ParentDashboard() {
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Dashboard — Pais";
  }, []);
  return <main>
      <PageNavigation />
      <h1 className="text-2xl font-semibold mb-6">Visão Geral</h1>
      <section className="grid gap-6 md:grid-cols-3">
        
        <Card>
          <CardHeader>
            <CardTitle>Comunicações</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="text-sm space-y-2">
              <li>• Reunião de pais — 12/09 às 18h</li>
              <li>• Prova de Matemática — 20/09</li>
              <li>• Feira de Ciências — 05/10</li>
            </ul>
            
          </CardContent>
        </Card>
        <Card className="md:col-span-3">
          
          
        </Card>
      </section>
    </main>;
}