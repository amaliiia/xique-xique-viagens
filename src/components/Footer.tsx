import AnimatedSection from "./AnimatedSection";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="py-16 bg-foreground text-primary-foreground/80 overflow-hidden">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Xique Xique Viagens" width={48} height={48} className="rounded-full" />
              <div>
                <p className="font-heading font-bold text-primary-foreground text-lg">Xique Xique Viagens e Turismo</p>
                <p className="text-sm opacity-70">Transformando vidas através de viagens</p>
              </div>
            </div>
            <div className="flex gap-8 text-sm font-body">
              {["Sobre", "Planos", "Depoimentos", "Apoie"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-primary transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </AnimatedSection>
        <div className="mt-10 pt-6 border-t border-primary-foreground/10 text-center text-sm opacity-60">
          <p>© 2026 Xique Xique Viagens e Turismo. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
