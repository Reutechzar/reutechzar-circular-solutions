import { Recycle, Linkedin, Instagram, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        {/* Main Footer */}
        <div className="py-12 md:py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-eco-green flex items-center justify-center">
                <Recycle className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">Reutechzar</span>
            </a>
            <p className="text-primary-foreground/70 leading-relaxed mb-6 max-w-md">
              Transformando resíduos eletrônicos em recursos valiosos. 
              Juntos, construímos um futuro mais sustentável para Itapevi e região.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-eco-green transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-eco-green transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="mailto:contato@reutechzar.com.br"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-eco-green transition-colors duration-300"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Links Rápidos</h4>
            <ul className="space-y-3">
              {[
                { href: "#sobre", label: "Sobre Nós" },
                { href: "#missao", label: "Missão" },
                { href: "#valores", label: "Valores" },
                { href: "#visao", label: "Visão" },
              ].map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-primary-foreground/70 hover:text-eco-green transition-colors duration-300"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contato</h4>
            <ul className="space-y-3 text-primary-foreground/70">
              <li>contato@reutechzar.com.br</li>
              <li>(11) 99999-9999</li>
              <li>Itapevi, São Paulo</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/60">
              © {currentYear} Reutechzar. Todos os direitos reservados.
            </p>
            <p className="text-sm text-primary-foreground/60">
              Reciclagem e recuperação de materiais eletrônicos
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
