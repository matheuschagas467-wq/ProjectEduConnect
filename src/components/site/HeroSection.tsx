export const HeroSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto text-center max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Bem-vindo ao <span className="text-primary">EduConnect</span>
        </h1>
        <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
          Plataforma completa de gestão escolar que conecta pais, alunos e educadores em um ambiente seguro e intuitivo.
        </p>
        <h2 className="text-2xl font-semibold mb-10 text-foreground">
          Escolha como deseja se cadastrar
        </h2>
      </div>
    </section>
  );
};