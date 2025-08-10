import { useEffect } from "react";

export default function AboutPage() {
  useEffect(() => {
    document.title = "Sobre e Contato";
  }, []);

  return (
    <main>
      <h1 className="text-2xl font-semibold mb-4">Sobre a Rede de Ensino</h1>
      <section className="prose max-w-none">
        <p>
          Nossa rede de ensino fundamental tem compromisso com a excelência acadêmica e o desenvolvimento socioemocional dos alunos. 
          Este portal oferece comunicação ágil entre escola e famílias, além de recursos para professores.
        </p>
        <h2>Contato</h2>
        <p>E-mail: contato@redeescolar.com.br</p>
        <p>Telefone: (11) 0000-0000</p>
      </section>
    </main>
  );
}
