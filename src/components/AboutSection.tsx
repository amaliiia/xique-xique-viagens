import { Heart, Users, Leaf } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-foreground mb-6">
            Quem somos nós?
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A <strong className="text-primary">Xique Xique Viagens</strong> é uma ONG do Ceará que nasceu com um propósito claro: 
            levar pessoas de baixa renda para viver experiências de viagem inesquecíveis. Acreditamos que cada pessoa 
            merece criar memórias que durem para sempre.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-card rounded-2xl p-8 shadow-md border border-border text-center">
            <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-heading font-bold text-xl text-foreground mb-3">Experiência em primeiro lugar</h3>
            <p className="font-body text-muted-foreground leading-relaxed">
              Cada viagem é planejada pensando em você. Queremos que você sinta alegria, descubra lugares novos e volte para casa com o coração cheio.
            </p>
          </div>

          <div className="bg-card rounded-2xl p-8 shadow-md border border-border text-center">
            <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-heading font-bold text-xl text-foreground mb-3">Pessoas que importam</h3>
            <p className="font-body text-muted-foreground leading-relaxed">
              Trabalhamos com famílias e comunidades que nunca tiveram a chance de viajar. Cada sorriso é nossa maior recompensa.
            </p>
          </div>

          <div className="bg-card rounded-2xl p-8 shadow-md border border-border text-center">
            <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-6">
              <Leaf className="w-8 h-8 text-secondary" />
            </div>
            <h3 className="font-heading font-bold text-xl text-foreground mb-3">Impacto socioambiental</h3>
            <p className="font-body text-muted-foreground leading-relaxed">
              Nossas viagens promovem o turismo sustentável, valorizando comunidades locais e preservando o meio ambiente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
