import React from 'react';
import PageNavigation from "@/components/common/PageNavigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function CommunicationPage() {
  return (
    <div className="space-y-6">
      <PageNavigation />
      
      <div className="text-center">
        <h1 className="text-3xl font-bold text-foreground mb-2">Comunicação</h1>
        <p className="text-muted-foreground">Sistema de comunicação escolar</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Sistema de Mensageria</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Para ativar o sistema completo de comunicação com responsáveis, conecte seu projeto ao Supabase.
            Isso permitirá o gerenciamento de alunos, envio de mensagens e muito mais.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
