import { Recycle, Factory, Users, ShieldCheck } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Recycle,
      title: "Reciclagem Especializada",
      description: "Processamento avançado de componentes eletrônicos para máximo reaproveitamento.",
    },
    {
      icon: Factory,
      title: "Economia Circular",
      description: "Transformamos resíduos em matéria-prima de qualidade para novas produções.",
    },
    {
      icon: Users,
      title: "Parcerias Empresariais",
      description: "Soluções customizadas para empresas de todos os portes da região.",
    },
    {
      icon: ShieldCheck,
      title: "Certificação Ambiental",
      description: "Processos alinhados com as melhores práticas de sustentabilidade.",
    },
  ];

  return (
    <section id="sobre" className="py-20 md:py-28 gradient-section">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-metal/10 text-metal text-sm font-medium mb-4">
            Sobre Nós
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading mb-6">
            Pioneiros na{" "}
            <span className="text-steel">reciclagem eletrônica</span>{" "}
            em Itapevi
          </h2>
          <p className="text-lg text-body leading-relaxed">
            A Reutechzar atua no setor de reciclagem e recuperação de materiais eletrônicos, 
            oferecendo às empresas soluções econômicas e sustentáveis. Nosso trabalho transforma 
            resíduos em recursos valiosos para a fabricação de novos produtos, contribuindo para 
            um futuro mais consciente e responsável.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group bg-card rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-metal/10 flex items-center justify-center mb-4 group-hover:bg-metal group-hover:shadow-glow transition-all duration-300">
                <feature.icon className="w-7 h-7 text-metal group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-heading mb-2">
                {feature.title}
              </h3>
              <p className="text-body leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
