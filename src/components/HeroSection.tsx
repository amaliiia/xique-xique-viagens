import heroImage from "@/assets/hero-travel.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImage} alt="Família feliz em viagem" width={1920} height={1080} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/50" />
      </div>
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-primary-foreground leading-tight mb-6">
          Viagens que <span className="text-primary">transformam</span> vidas
        </h1>
        <p className="font-body text-lg sm:text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto mb-8 leading-relaxed">
          Experiências únicas e marcantes para quem merece conhecer o mundo. Porque viajar não é luxo — é direito.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#planos" className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-heading font-bold text-lg hover:opacity-90 transition-opacity shadow-lg">
            Conheça nossos planos
          </a>
          <a href="#sobre" className="px-8 py-4 rounded-full border-2 border-primary-foreground text-primary-foreground font-heading font-bold text-lg hover:bg-primary-foreground/10 transition-colors">
            Saiba mais
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
