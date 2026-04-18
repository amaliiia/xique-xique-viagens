import { Handshake, Eye, Star, ShieldCheck, Sparkles } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const values = [
  { icon: Handshake, title: "Solidariedade", text: "Acreditamos que ajudar o próximo é o caminho para um mundo melhor." },
  { icon: Eye, title: "Transparência", text: "Você sabe exatamente para onde vai cada centavo investido." },
  { icon: Star, title: "Excelência", text: "Mesmo com preços acessíveis, entregamos viagens de alta qualidade." },
  { icon: ShieldCheck, title: "Confiança", text: "Milhares de famílias já viajaram com a gente com total segurança." },
  { icon: Sparkles, title: "Inovação social", text: "Criamos formas novas de tornar o turismo acessível para todos." },
];

const ValuesSection = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-tl from-secondary/15 via-accent/30 to-background">
      {/* Decorative shapes */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -z-0" aria-hidden="true" />
      <div className="absolute top-10 right-10 w-40 h-40 bg-secondary/15 rounded-3xl rotate-12 blur-2xl -z-0" aria-hidden="true" />
      <div className="absolute bottom-10 left-10 w-56 h-56 bg-primary/10 rounded-full blur-2xl -z-0" aria-hidden="true" />
      <div
        className="absolute inset-0 opacity-[0.04] -z-0"
        aria-hidden="true"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />
      <div className="container relative mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary font-heading font-bold text-sm mb-4">
              O que nos guia
            </span>
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-foreground">
              Nossos valores
            </h2>
          </div>
        </AnimatedSection>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {values.map((v, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="group bg-card rounded-2xl p-6 border border-border text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 h-full">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-500">
                  <v.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-500" />
                </div>
                <h3 className="font-heading font-bold text-foreground mb-2">{v.title}</h3>
                <p className="font-body text-sm text-muted-foreground">{v.text}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
