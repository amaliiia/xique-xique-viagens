import { Trophy } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const AwardSection = () => {
  return (
    <section className="py-16 overflow-hidden relative bg-gradient-to-br from-award-orange/40 via-award-orange/25 to-award-orange/15">
      {/* Spotlight radial glow - laranja vibrante */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, hsl(25 100% 65% / 0.45) 0%, transparent 65%)",
        }}
      />
      {/* Laranja decorative blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-award-orange/35 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-award-orange/30 rounded-full blur-3xl pointer-events-none" />

      {/* Subtle diagonal shine pattern - laranja */}
      <div
        className="absolute inset-0 opacity-[0.12] pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, hsl(25 100% 65%) 0px, hsl(25 100% 65%) 1px, transparent 1px, transparent 22px)`,
        }}
      />

      {/* Sparkle dots - laranja */}
      <div
        className="absolute inset-0 opacity-[0.15] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, hsl(25 100% 70%) 1.5px, transparent 1.5px)`,
          backgroundSize: "48px 48px",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection>
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 bg-card/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-border relative overflow-hidden">
            {/* Decorative gradient */}
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-secondary/5 rounded-full blur-3xl" />

            <div className="flex-shrink-0 relative z-10">
              <motion.div
                whileInView={{ rotate: [0, -10, 10, -5, 5, 0] }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                className="w-28 h-28 rounded-full bg-award-gold flex items-center justify-center shadow-lg shadow-primary/20"
              >
                <Trophy className="w-14 h-14 text-primary-foreground" />
              </motion.div>
            </div>
            <div className="text-center md:text-left relative z-10">
              <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-heading font-bold text-sm mb-3">
                🏆 Reconhecimento Internacional
              </div>
              <h2 className="font-heading font-black text-2xl sm:text-3xl text-foreground mb-3">
                2° lugar em negócios de impacto do Ceará
              </h2>
              <p className="font-body text-muted-foreground text-lg leading-relaxed">
                Fomos reconhecidos internacionalmente como o segundo melhor negócio de impacto social do estado do Ceará.
                Esse prêmio mostra que nosso trabalho faz diferença de verdade na vida das pessoas.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default AwardSection;
