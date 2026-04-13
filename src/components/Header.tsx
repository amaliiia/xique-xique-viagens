import logo from "@/assets/logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <img src={logo} alt="Xique Xique Viagens e Turismo" width={48} height={48} className="rounded-full" />
          <span className="font-heading font-bold text-lg text-foreground hidden sm:inline">Xique Xique Viagens</span>
        </a>
        <nav className="flex items-center gap-1 sm:gap-4 text-sm font-body font-semibold">
          <a href="#sobre" className="px-3 py-2 rounded-lg text-muted-foreground hover:text-primary transition-colors">Sobre</a>
          <a href="#planos" className="px-3 py-2 rounded-lg text-muted-foreground hover:text-primary transition-colors">Planos</a>
          <a href="#depoimentos" className="px-3 py-2 rounded-lg text-muted-foreground hover:text-primary transition-colors">Depoimentos</a>
          <a href="#apoie" className="px-4 py-2 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-opacity">Apoie</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
