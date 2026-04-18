import { Heart, Wallet, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import plansFamily from "@/assets/plans-family.jpg";
import plansTravel from "@/assets/plans-travel.jpg";
import plansItinerary from "@/assets/plans-itinerary.jpg";

const highlights = [
  {
    icon: Heart,
    image: plansFamily,
    title: "Planos para todos os bolsos",
    text: "Temos três planos de viagem: o Plano C, o Plano D e o Plano E. Cada um foi pensado para caber na realidade de diferentes famílias. Não importa quanto você ganha — existe um plano que é a sua cara.",
  },
  {
    icon: Wallet,
    image: plansTravel,
    title: "Pagamento fácil e sem aperto",
    text: "Nossos preços são acessíveis e o pagamento é facilitado no carnê, dividido em parcelas pequenas que cabem na sua rotina. Você paga aos poucos, sem sufoco, e realiza o sonho de viajar com tranquilidade.",
  },
  {
    icon: MapPin,
    image: plansItinerary,
    title: "Roteiro completo, sem surpresas",
    text: "A gente organiza tudo para você: o roteiro da viagem, os passeios, a hospedagem e a alimentação. Você recebe um planejamento com todas as experiências e custos, para saber exatamente o que vai viver — sem susto no bolso.",
  },
];

const PlansSection = () => {
  return (
    <section id="planos" className="relative py-24 overflow-hidden bg-gradient-to-br from-primary/10 via-accent to-secondary/10">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/15 rounded-full blur-3xl -z-0" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-secondary/15 rounded-full blur-3xl -z-0" aria-hidden="true" />
      <div
        className="absolute inset-0 opacity-[0.04] -z-0"
        aria-hidden="true"
        style={{
          backgroundImage: `radial-gradient(hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />
      <div className="container relative mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-6">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-heading font-bold text-sm mb-4">
              Nossos planos de viagem
            </span>
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-foreground mb-4">
              Como funciona?
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A Xique Xique existe para tornar a viagem possível para todo mundo. A gente cuida de tudo — do planejamento ao pagamento — para que você só precise se preocupar em aproveitar cada momento.
            </p>
          </div>
        </AnimatedSection>

        <div className="max-w-5xl mx-auto mt-14 space-y-20">
          {highlights.map((item, i) => {
            const Icon = item.icon;
            const isReversed = i % 2 !== 0;

            return (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div
                  className={`flex flex-col ${isReversed ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-10`}
                >
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="w-full md:w-1/2 rounded-3xl overflow-hidden shadow-lg"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      width={800}
                      height={600}
                      className="w-full h-64 sm:h-72 object-cover"
                    />
                  </motion.div>

                  <div className="w-full md:w-1/2 space-y-4">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10">
                      <Icon className="w-5 h-5 text-primary" />
                      <span className="font-heading font-bold text-primary text-sm">
                        {item.title}
                      </span>
                    </div>
                    <p className="font-body text-foreground text-lg leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        <AnimatedSection delay={0.3}>
          <div className="text-center mt-16">
            <motion.a
              href="https://wa.me/5585999999999?text=Olá! Quero saber mais sobre os planos de viagem!"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-block px-10 py-4 rounded-full bg-primary text-primary-foreground font-heading font-bold text-lg shadow-lg shadow-primary/30 hover:brightness-110 transition-all"
            >
              Fale conosco e escolha seu plano
            </motion.a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default PlansSection;
