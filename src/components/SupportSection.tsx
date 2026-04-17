import { Building2, ArrowRight, TrendingUp, Heart, Megaphone, Award } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import empresaAnjo from "@/assets/empresa-anjo.jpg";

const benefits = [
  {
    icon: Heart,
    title: "Impacto social real",
    description: "Ajude famílias a realizarem o sonho de viajar pela primeira vez.",
  },
  {
    icon: Megaphone,
    title: "Visibilidade da marca",
    description: "Sua empresa aparece em nossas campanhas, redes sociais e materiais.",
  },
  {
    icon: Award,
    title: "Selo Empresa Anjo",
    description: "Receba um certificado oficial de responsabilidade social.",
  },
  {
    icon: TrendingUp,
    title: "Engajamento da equipe",
    description: "Inspire seus colaboradores com propósito e ações transformadoras.",
  },
];

const SupportSection = () => {
  return (
    <section id="apoie" className="py-24 bg-secondary text-secondary-foreground overflow-hidden relative">
      {/* Decorative grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--secondary-foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--secondary-foreground)) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Image with floating badge */}
          <AnimatedSection direction="left">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-32 h-32 border-4 border-primary/40 rounded-3xl -z-10" />
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-primary/20 rounded-3xl -z-10" />

              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={empresaAnjo}
                  alt="Empresas apoiando a Xique Xique Viagens"
                  width={1024}
                  height={1280}
                  loading="lazy"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent" />
              </div>

              {/* Floating impact card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="absolute -bottom-8 left-4 right-4 sm:left-8 sm:right-8 bg-background text-foreground rounded-2xl p-6 shadow-2xl"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/15 flex items-center justify-center shrink-0">
                    <TrendingUp className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <p className="font-heading font-black text-2xl text-primary leading-none">+1.200</p>
                    <p className="font-body text-sm text-muted-foreground mt-1">
                      vidas transformadas com apoio de empresas anjo
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </AnimatedSection>

          {/* Right: Content */}
          <AnimatedSection direction="right" delay={0.15}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/20 border border-primary/30 font-body font-semibold text-sm tracking-wide mb-6">
              <Building2 className="w-4 h-4" />
              Para empresas
            </span>

            <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl mb-6 leading-tight">
              Sua empresa pode{" "}
              <span className="text-primary">mudar vidas</span>
            </h2>

            <p className="font-body text-lg opacity-90 mb-8 leading-relaxed">
              Empresas anjo apoiam a Xique Xique Viagens e ajudam milhares de famílias a realizarem
              o sonho de viajar. Junte-se a nós e faça parte de algo que realmente importa.
            </p>

            {/* Benefits list */}
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {benefits.map((benefit, idx) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + idx * 0.1, duration: 0.5 }}
                  className="flex gap-3 p-4 rounded-xl bg-secondary-foreground/5 border border-secondary-foreground/10 hover:bg-secondary-foreground/10 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                    <benefit.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-base mb-1">{benefit.title}</h3>
                    <p className="font-body text-sm opacity-80 leading-snug">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="https://wa.me/5585999999999?text=Olá! Sou representante de uma empresa e gostaria de apoiar a Xique Xique Viagens."
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-primary text-primary-foreground font-heading font-bold text-lg shadow-xl shadow-primary/30"
            >
              Quero ser uma empresa anjo
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
