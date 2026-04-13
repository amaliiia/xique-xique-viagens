import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="py-12 bg-foreground text-primary-foreground/80">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Xique Xique Viagens" width={40} height={40} className="rounded-full" />
            <div>
              <p className="font-heading font-bold text-primary-foreground">Xique Xique Viagens e Turismo</p>
              <p className="text-sm">Transformando vidas através de viagens</p>
            </div>
          </div>
          <div className="flex gap-6 text-sm font-body">
            <a href="#sobre" className="hover:text-primary transition-colors">Sobre</a>
            <a href="#planos" className="hover:text-primary transition-colors">Planos</a>
            <a href="#depoimentos" className="hover:text-primary transition-colors">Depoimentos</a>
            <a href="#apoie" className="hover:text-primary transition-colors">Apoie</a>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-primary-foreground/10 text-center text-sm">
          <p>© 2026 Xique Xique Viagens e Turismo. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
