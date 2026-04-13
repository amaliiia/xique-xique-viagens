import { Building2, HeartHandshake, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const SupportSection = () => {
  return (
    <section id="apoie" className="py-24 bg-secondary text-secondary-foreground overflow-hidden relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary-foreground/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="container mx-auto px-4 text-center relative z-10">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto">
            <motion.div
              whileInView={{ scale: [0.8, 1.1, 1] }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-20 h-20 rounded-full bg-secondary-foreground/10 flex items-center justify-center mx-auto mb-8"
            >
              <HeartHandshake className="w-10 h-10" />
            </motion.div>
            <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl mb-6">
              Sua empresa pode mudar vidas
            </h2>
            <p className="font-body text-lg opacity-90 mb-4 leading-relaxed">
              Empresas anjo podem apoiar a Xique Xique Viagens e ajudar milhares de famílias a realizarem o sonho de viajar. 
              Juntos, criamos um impacto social que transforma comunidades inteiras.
            </p>
            <p className="font-body text-lg opacity-90 mb-10 leading-relaxed">
              Ao apoiar nossa ONG, sua empresa ganha visibilidade social, fortalece sua marca e faz parte de algo que realmente importa.
            </p>
            <motion.a
              href="https://wa.me/5585999999999?text=Olá! Sou representante de uma empresa e gostaria de apoiar a Xique Xique Viagens."
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-primary-foreground text-secondary font-heading font-bold text-lg shadow-2xl"
            >
              <Building2 className="w-5 h-5" />
              Quero ser uma empresa anjo
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default SupportSection;
