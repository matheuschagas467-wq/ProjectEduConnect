import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useNavigate } from "react-router-dom";
import { students } from "@/data/students";
import { ArrowLeft, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function CommunicationPage() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [selectedStudent, setSelectedStudent] = useState("");
  const [selectedClass, setSelectedClass] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");

  useEffect(() => {
    document.title = "Comunicação — Professores";
  }, []);

  // Get unique classes from students data
  const classes = [...new Set(students.map(s => s.className))].sort();

  // Filter students based on selected class
  const filteredStudents = selectedClass 
    ? students.filter(s => s.className === selectedClass)
    : students;

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedStudent || !selectedClass || !subject.trim() || !message.trim()) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos antes de enviar.",
        variant: "destructive"
      });
      return;
    }

    const student = students.find(s => s.registration === selectedStudent);
    
    toast({
      title: "Comunicado enviado!",
      description: `Mensagem enviada para ${student?.responsibleName} (responsável por ${student?.studentName}).`,
    });

    // Reset form
    setSelectedStudent("");
    setSelectedClass("");
    setSubject("");
    setMessage("");
  };

  return (
    <main>
      <div className="flex items-center gap-4 mb-6">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => navigate("/app/teacher/dashboard")}
          className="flex items-center gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          Voltar
        </Button>
        <h1 className="text-2xl font-semibold">Sistema de Comunicação</h1>
      </div>

      <Card className="max-w-2xl">
        <CardHeader>
          <CardTitle>Enviar Comunicado aos Responsáveis</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSendMessage} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="class">Turma</Label>
                <Select value={selectedClass} onValueChange={setSelectedClass}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione uma turma" />
                  </SelectTrigger>
                  <SelectContent>
                    {classes.map((className) => (
                      <SelectItem key={className} value={className}>
                        {className}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="student">Aluno</Label>
                <Select 
                  value={selectedStudent} 
                  onValueChange={setSelectedStudent}
                  disabled={!selectedClass}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione um aluno" />
                  </SelectTrigger>
                  <SelectContent>
                    {filteredStudents.map((student) => (
                      <SelectItem key={student.registration} value={student.registration}>
                        {student.studentName} - {student.className}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject">Assunto</Label>
              <Input
                id="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Ex: Reunião de pais, Comunicado importante..."
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Mensagem</Label>
              <Textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Digite sua mensagem aqui..."
                className="min-h-[120px]"
                required
              />
            </div>

            {selectedStudent && (
              <div className="p-3 bg-muted rounded-md">
                <p className="text-sm text-muted-foreground">
                  <strong>Destinatário:</strong> {students.find(s => s.registration === selectedStudent)?.responsibleName}
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Responsável por:</strong> {students.find(s => s.registration === selectedStudent)?.studentName}
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Contato:</strong> {students.find(s => s.registration === selectedStudent)?.phone}
                </p>
              </div>
            )}

            <Button type="submit" className="w-full">
              <Send className="mr-2 h-4 w-4" />
              Enviar Comunicado
            </Button>
          </form>
        </CardContent>
      </Card>
    </main>
  );
}