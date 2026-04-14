import heroImage from "@/assets/hero-travel.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Família feliz em viagem"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/60" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-8 py-20 text-center flex flex-col items-center">
        <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 mb-6 font-body font-semibold text-primary-foreground text-sm tracking-wide">
          🌍 ONG reconhecida internacionalmente
        </span>

        <h1 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-primary-foreground leading-[1.1] mb-6 max-w-3xl">
          Viagens que{" "}
          <span className="text-primary">transformam</span> vidas
        </h1>

        <p className="font-body text-lg sm:text-xl text-primary-foreground/85 max-w-2xl mb-10 leading-relaxed">
          Acreditamos que todos merecem viver experiências únicas e marcantes. Proporcionamos viagens acessíveis com momentos inesquecíveis para quem mais precisa — porque viajar não é luxo, é direito.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#planos"
            className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-heading font-bold text-lg shadow-lg shadow-primary/30 text-center hover:brightness-110 transition-all"
          >
            Conheça nossos planos
          </a>
          <a
            href="#sobre"
            className="px-8 py-4 rounded-full border-2 border-primary-foreground/40 text-primary-foreground font-heading font-bold text-lg hover:bg-primary-foreground/10 transition-colors text-center backdrop-blur-sm"
          >
            Saiba mais
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/40 flex justify-center pt-2">
          <div className="w-1.5 h-3 rounded-full bg-primary-foreground/60" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
