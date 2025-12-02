import { Target, ArrowRight } from "lucide-react";

const MissionSection = () => {
  return (
    <section id="missao" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-eco-green/10 text-eco-green text-sm font-medium mb-4">
              Nossa Missão
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading mb-6">
              O propósito que nos{" "}
              <span className="text-eco-green">move todos os dias</span>
            </h2>
            <p className="text-lg text-body leading-relaxed mb-8">
              Nossa missão é oferecer às empresas soluções econômicas e sustentáveis, 
              por meio do reaproveitamento de componentes eletrônicos, transformando 
              resíduos em recursos valiosos para a fabricação de novos produtos.
            </p>
            <div className="space-y-4">
              {[
                "Reduzir o impacto ambiental do descarte eletrônico",
                "Criar valor a partir de materiais antes descartados",
                "Estabelecer parcerias duradouras com empresas",
                "Promover a economia circular na região",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-eco-green/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <ArrowRight className="w-3.5 h-3.5 text-eco-green" />
                  </div>
                  <p className="text-body">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="aspect-square max-w-md mx-auto relative">
              {/* Background circles */}
              <div className="absolute inset-0 rounded-full bg-eco-green/5 animate-pulse" />
              <div className="absolute inset-8 rounded-full bg-eco-green/10" />
              <div className="absolute inset-16 rounded-full bg-eco-green/15" />
              
              {/* Center icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-eco-green flex items-center justify-center shadow-glow">
                  <Target className="w-16 h-16 text-primary-foreground" />
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute top-12 right-12 w-16 h-16 rounded-xl bg-card shadow-lg flex items-center justify-center animate-float border border-border/50">
                <span className="text-2xl">♻️</span>
              </div>
              <div className="absolute bottom-12 left-12 w-16 h-16 rounded-xl bg-card shadow-lg flex items-center justify-center animate-float border border-border/50" style={{ animationDelay: "1s" }}>
                <span className="text-2xl">🌱</span>
              </div>
              <div className="absolute bottom-24 right-8 w-16 h-16 rounded-xl bg-card shadow-lg flex items-center justify-center animate-float border border-border/50" style={{ animationDelay: "2s" }}>
                <span className="text-2xl">💡</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
