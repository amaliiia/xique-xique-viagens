import { motion } from "framer-motion";
import heroImage from "@/assets/hero-travel.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with parallax-like effect */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <img src={heroImage} alt="Família feliz em viagem" width={1920} height={1080} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
      </motion.div>

      <div className="relative z-10 container mx-auto px-4 sm:px-8 py-20 flex justify-center text-center">
        <div className="max-w-2xl flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 mb-6"
          >
            <span className="font-body font-semibold text-primary-foreground text-sm tracking-wide">
              🌍 ONG reconhecida internacionalmente
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-primary-foreground leading-[1.1] mb-6"
          >
            Viagens que{" "}
            <span className="text-primary relative">
              transformam
              <motion.span
                className="absolute -bottom-2 left-0 h-1 bg-primary rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 1.2 }}
              />
            </span>{" "}
            vidas
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="font-body text-lg sm:text-xl text-primary-foreground/85 max-w-xl mb-10 leading-relaxed"
          >
            Experiências únicas e marcantes para quem merece conhecer o mundo. Porque viajar não é luxo — é direito.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.a
              href="#planos"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-heading font-bold text-lg shadow-lg shadow-primary/30 text-center"
            >
              Conheça nossos planos
            </motion.a>
            <motion.a
              href="#sobre"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-4 rounded-full border-2 border-primary-foreground/40 text-primary-foreground font-heading font-bold text-lg hover:bg-primary-foreground/10 transition-colors text-center backdrop-blur-sm"
            >
              Saiba mais
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/40 flex justify-center pt-2">
          <div className="w-1.5 h-3 rounded-full bg-primary-foreground/60" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
