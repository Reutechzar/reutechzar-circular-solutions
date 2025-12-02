import { Leaf, Scale, TreePine, Handshake, Heart } from "lucide-react";

const ValuesSection = () => {
  const values = [
    {
      icon: Leaf,
      title: "Sustentabilidade em Ação",
      description: "Praticamos o que pregamos, incorporando práticas sustentáveis em todas as nossas operações.",
      color: "bg-emerald-500",
    },
    {
      icon: Scale,
      title: "Ética e Transparência",
      description: "Conduzimos nossos negócios com integridade, mantendo relações claras e honestas com parceiros.",
      color: "bg-blue-500",
    },
    {
      icon: TreePine,
      title: "Consciência Ambiental",
      description: "Cada decisão considera o impacto ambiental, buscando sempre o menor footprint possível.",
      color: "bg-green-600",
    },
    {
      icon: Handshake,
      title: "Confiança e Colaboração",
      description: "Construímos parcerias sólidas baseadas em confiança mútua e objetivos compartilhados.",
      color: "bg-amber-500",
    },
    {
      icon: Heart,
      title: "Bem-estar Prioritário",
      description: "O bem-estar de colaboradores, parceiros e comunidade está no centro de nossas decisões.",
      color: "bg-rose-500",
    },
  ];

  return (
    <section id="valores" className="py-20 md:py-28 gradient-section">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-eco-green/10 text-eco-green text-sm font-medium mb-4">
            Nossos Valores
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading mb-6">
            Os fundamentos que{" "}
            <span className="text-eco-green">guiam nossas ações</span>
          </h2>
          <p className="text-lg text-body leading-relaxed">
            Nossos valores representam os fundamentos internos que devem transparecer para o externo, 
            direcionando todas as decisões da nossa organização.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {values.map((value, index) => (
            <div
              key={value.title}
              className={`group relative bg-card rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-border/50 overflow-hidden ${
                index === 4 ? "lg:col-start-2" : ""
              }`}
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-eco-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className={`w-16 h-16 rounded-2xl ${value.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-heading mb-3">
                  {value.title}
                </h3>
                <p className="text-body leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
