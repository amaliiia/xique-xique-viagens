import { Heart, Users, Leaf } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import CounterAnimation from "./CounterAnimation";

const cards = [
  {
    icon: Heart,
    title: "Experiência em primeiro lugar",
    text: "Cada viagem é planejada pensando em você. Queremos que você sinta alegria, descubra lugares novos e volte para casa com o coração cheio.",
  },
  {
    icon: Users,
    title: "Pessoas que importam",
    text: "Trabalhamos com famílias e comunidades que nunca tiveram a chance de viajar. Cada sorriso é nossa maior recompensa.",
  },
  {
    icon: Leaf,
    title: "Impacto socioambiental",
    text: "Nossas viagens promovem o turismo sustentável, valorizando comunidades locais e preservando o meio ambiente.",
    secondary: true,
  },
];

const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-heading font-bold text-sm mb-4">
              Quem somos
            </span>
            <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-foreground mb-6">
              Quem somos nós?
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A <strong className="text-primary">Xique Xique Viagens</strong> é uma ONG do Ceará que nasceu com um propósito claro: 
              levar pessoas de baixa renda para viver experiências de viagem inesquecíveis. Acreditamos que cada pessoa 
              merece criar memórias que durem para sempre.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20">
          {cards.map((card, i) => (
            <AnimatedSection key={i} delay={i * 0.15}>
              <div className="group bg-card rounded-2xl p-8 border border-border text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 h-full">
                <div className={`w-16 h-16 rounded-2xl ${card.secondary ? "bg-secondary/10" : "bg-accent"} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  <card.icon className={`w-8 h-8 ${card.secondary ? "text-secondary" : "text-primary"}`} />
                </div>
                <h3 className="font-heading font-bold text-xl text-foreground mb-3">{card.title}</h3>
                <p className="font-body text-muted-foreground leading-relaxed">{card.text}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Counters */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <CounterAnimation target={2500} suffix="+" label="Famílias beneficiadas" />
          <CounterAnimation target={150} suffix="+" label="Viagens realizadas" />
          <CounterAnimation target={12} label="Destinos" />
          <CounterAnimation target={98} suffix="%" label="Satisfação dos viajantes" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
