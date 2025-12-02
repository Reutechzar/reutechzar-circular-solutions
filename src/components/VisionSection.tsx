import { Eye, TrendingUp, Globe, Sparkles } from "lucide-react";

const VisionSection = () => {
  return (
    <section id="visao" className="py-20 md:py-28 bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-steel blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-silver blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-foreground/10 text-primary-foreground text-sm font-medium mb-4">
              Nossa Visão
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              O futuro que queremos construir
            </h2>
          </div>

          {/* Vision Statement */}
          <div className="bg-primary-foreground/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-primary-foreground/10 mb-12">
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 rounded-2xl bg-steel flex items-center justify-center shadow-glow">
                <Eye className="w-10 h-10 text-primary-foreground" />
              </div>
            </div>
            <blockquote className="text-xl md:text-2xl text-primary-foreground/90 text-center leading-relaxed font-medium">
              "A Reutechzar ambiciona ser a base da economia circular de componentes eletrônicos 
              em Itapevi e na região, estabelecendo um novo paradigma de produção e consumo responsável."
            </blockquote>
          </div>

          {/* Vision Pillars */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: TrendingUp,
                title: "Liderança Regional",
                description: "Ser referência em reciclagem eletrônica na região de Itapevi.",
              },
              {
                icon: Globe,
                title: "Impacto Ambiental",
                description: "Reduzir significativamente o descarte inadequado de eletrônicos.",
              },
              {
                icon: Sparkles,
                title: "Novo Paradigma",
                description: "Estabelecer novos padrões de produção e consumo responsável.",
              },
            ].map((pillar) => (
              <div
                key={pillar.title}
                className="bg-primary-foreground/5 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/10 text-center hover:bg-primary-foreground/10 transition-colors duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-steel/30 flex items-center justify-center mx-auto mb-4">
                  <pillar.icon className="w-6 h-6 text-steel-light" />
                </div>
                <h3 className="text-lg font-semibold text-primary-foreground mb-2">
                  {pillar.title}
                </h3>
                <p className="text-primary-foreground/70 text-sm">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
