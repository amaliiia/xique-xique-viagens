import { Heart, Users, Leaf } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import CounterAnimation from "./CounterAnimation";
import aboutBusTrip from "@/assets/about-bus-trip.jpg";

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
  },
];

const AboutSection = () => {
  return (
    <section id="sobre" className="relative py-24 overflow-hidden bg-gradient-to-br from-accent/40 via-background to-secondary/10">
      {/* Decorative blobs */}
      <div className="absolute top-20 -left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl -z-0" aria-hidden="true" />
      <div className="absolute bottom-20 -right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -z-0" aria-hidden="true" />
      <div
        className="absolute inset-0 opacity-[0.03] -z-0"
        aria-hidden="true"
        style={{
          backgroundImage: `radial-gradient(hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />
      <div className="container relative mx-auto px-4">
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

        {/* Image + cards layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mb-20">
          <AnimatedSection>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/20 rounded-2xl -z-10" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-secondary/20 rounded-full -z-10" />
              <img
                src={aboutBusTrip}
                alt="Famílias de baixa renda sorrindo durante uma viagem de ônibus pelo Nordeste"
                width={1280}
                height={896}
                loading="lazy"
                className="relative rounded-3xl shadow-2xl w-full h-auto object-cover aspect-[4/3]"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-background/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl">
                <p className="font-heading font-bold text-foreground text-sm sm:text-base">
                  "Viajar transforma vidas — e nós tornamos isso possível."
                </p>
              </div>
            </div>
          </AnimatedSection>

          <div className="space-y-5">
            {cards.map((card, i) => (
              <AnimatedSection key={i} delay={i * 0.15}>
                <div className="group relative flex items-start gap-5 p-5 rounded-2xl hover:bg-accent/40 transition-all duration-500">
                  <div className="shrink-0 relative">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      <card.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    {i < cards.length - 1 && (
                      <div className="absolute left-1/2 top-12 w-0.5 h-12 bg-gradient-to-b from-primary/40 to-transparent -translate-x-1/2" />
                    )}
                  </div>
                  <div className="pt-1">
                    <h3 className="font-heading font-bold text-lg text-foreground mb-1.5">
                      {card.title}
                    </h3>
                    <p className="font-body text-muted-foreground leading-relaxed text-sm sm:text-base">
                      {card.text}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
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
