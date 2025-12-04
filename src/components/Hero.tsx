import { Button } from "@/components/ui/button";
import { ArrowDown, Cpu, Cog } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contato");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToAbout = () => {
    const element = document.querySelector("#sobre");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Reciclagem de componentes eletrônicos transformados em recursos sustentáveis"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-metal-light border border-metal/20 mb-6 animate-fade-up">
            <Cog className="w-4 h-4 text-metal" />
            <span className="text-sm font-medium text-metal">
              Economia Circular de Eletrônicos
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-heading leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Transformamos{" "}
            <span className="text-steel">resíduos eletrônicos</span>{" "}
            em recursos valiosos
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-body mb-8 leading-relaxed animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Soluções econômicas e sustentáveis para sua empresa através do reaproveitamento de componentes eletrônicos. Juntos, construímos um futuro mais responsável.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 mb-10 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-metal/10 flex items-center justify-center">
                <Cpu className="w-6 h-6 text-metal" />
              </div>
              <div>
                <p className="text-2xl font-bold text-heading">100%</p>
                <p className="text-sm text-muted-foreground">Sustentável</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-steel/10 flex items-center justify-center">
                <Cog className="w-6 h-6 text-steel" />
              </div>
              <div>
                <p className="text-2xl font-bold text-heading">Itapevi</p>
                <p className="text-sm text-muted-foreground">e Região</p>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <Button variant="eco" size="xl" onClick={scrollToContact}>
              Entre em Contato
            </Button>
            <Button variant="hero-outline" size="xl" onClick={scrollToAbout}>
              Saiba Mais
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-float">
        <button
          onClick={scrollToAbout}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-metal transition-colors"
        >
          <span className="text-sm font-medium">Descubra mais</span>
          <ArrowDown className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
