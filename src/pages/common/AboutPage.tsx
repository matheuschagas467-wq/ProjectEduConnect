import { useEffect } from "react";

export default function AboutPage() {
  useEffect(() => {
    document.title = "Sobre e Contato";
  }, []);

  return (
    <main className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">EduConnect - Rede de Ensino</h1>
      
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-[#2563EB]">Nossa Missão</h2>
          <p className="text-[#374151] leading-relaxed">
            Proporcionar uma educação de excelência que forme cidadãos críticos, criativos e responsáveis, 
            preparando-os para os desafios do futuro através de uma abordagem pedagógica inovadora e humanizada.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-[#2563EB]">Nossa Visão</h2>
          <p className="text-[#374151] leading-relaxed">
            Ser reconhecida como referência em educação fundamental, promovendo o desenvolvimento integral 
            dos alunos e fortalecendo os vínculos entre escola, família e comunidade.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-[#2563EB]">Nossos Valores</h2>
          <ul className="list-disc list-inside space-y-2 text-[#374151]">
            <li>Excelência acadêmica e pedagógica</li>
            <li>Respeito à diversidade e inclusão</li>
            <li>Transparência e comunicação eficaz</li>
            <li>Desenvolvimento socioemocional</li>
            <li>Inovação educacional</li>
            <li>Parceria família-escola</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-[#2563EB]">Abordagem Pedagógica</h2>
          <p className="text-[#374151] leading-relaxed mb-4">
            Nossa metodologia combina práticas pedagógicas tradicionais com inovações tecnológicas, 
            priorizando o aprendizado significativo e o desenvolvimento de competências essenciais para o século XXI.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#F3F4F6] p-4 rounded-lg">
              <h3 className="font-semibold text-[#111827] mb-2">Diferenciais</h3>
              <ul className="text-sm text-[#374151] space-y-1">
                <li>• Turmas reduzidas para atenção personalizada</li>
                <li>• Projeto de vida e orientação profissional</li>
                <li>• Educação socioemocional</li>
                <li>• Tecnologia educacional integrada</li>
              </ul>
            </div>
            <div className="bg-[#F3F4F6] p-4 rounded-lg">
              <h3 className="font-semibold text-[#111827] mb-2">Benefícios</h3>
              <ul className="text-sm text-[#374151] space-y-1">
                <li>• Comunicação direta com professores</li>
                <li>• Acompanhamento em tempo real</li>
                <li>• Ambiente seguro e acolhedor</li>
                <li>• Preparação para o ensino médio</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-[#2563EB]">Níveis de Ensino</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="border border-[#2563EB] rounded-lg p-4 text-center">
              <h3 className="font-semibold text-[#111827] mb-2">Educação Infantil</h3>
              <p className="text-sm text-[#374151]">3 a 5 anos</p>
              <p className="text-xs text-[#374151] mt-1">Desenvolvimento integral através do lúdico</p>
            </div>
            <div className="border border-[#2563EB] rounded-lg p-4 text-center">
              <h3 className="font-semibold text-[#111827] mb-2">Ensino Fundamental I</h3>
              <p className="text-sm text-[#374151]">1º ao 5º ano</p>
              <p className="text-xs text-[#374151] mt-1">Base sólida para a alfabetização</p>
            </div>
            <div className="border border-[#2563EB] rounded-lg p-4 text-center">
              <h3 className="font-semibold text-[#111827] mb-2">Ensino Fundamental II</h3>
              <p className="text-sm text-[#374151]">6º ao 9º ano</p>
              <p className="text-xs text-[#374151] mt-1">Preparação para o ensino médio</p>
            </div>
          </div>
        </section>

        <section className="bg-[#F3F4F6] p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-[#2563EB]">Contato</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-[#111827] mb-2">Informações Gerais</h3>
              <p className="text-[#374151]">
                <strong>E-mail:</strong> contato@redeescolar.com.br
              </p>
              <p className="text-[#374151]">
                <strong>Telefone:</strong> (79) 98847-8495
              </p>
              <p className="text-[#374151]">
                <strong>Horário de Atendimento:</strong> Segunda a Sexta, 7h às 17h
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-[#111827] mb-2">Suporte Técnico</h3>
              <p className="text-[#374151]">
                Para dúvidas sobre o portal EduConnect, entre em contato com nossa equipe de suporte.
              </p>
              <p className="text-sm text-[#22C55E] mt-2">
                Resposta garantida em até 24 horas
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
