import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";
import destination1 from "@/assets/destination-1.jpg";
import destination2 from "@/assets/destination-2.jpg";
import destination3 from "@/assets/destination-3.jpg";

const testimonials = [
  {
    name: "Maria das Graças",
    location: "Fortaleza, CE",
    photo: testimonial1,
    destination: destination1,
    text: "Foi a primeira vez que eu vi o mar com meus filhos. A Xique Xique me deu esse presente. Nunca vou esquecer o sorriso deles!",
  },
  {
    name: "José Carlos",
    location: "Juazeiro do Norte, CE",
    photo: testimonial2,
    destination: destination2,
    text: "Eu achava que viajar era coisa de rico. A Xique Xique mostrou que qualquer pessoa pode viver momentos incríveis. Mudou minha vida!",
  },
  {
    name: "Dona Francisca e Seu Antônio",
    location: "Sobral, CE",
    photo: testimonial3,
    destination: destination3,
    text: "Na nossa idade, pensávamos que nunca íamos sair da cidade. Conhecemos lugares lindos e fizemos amigos para toda a vida.",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="depoimentos" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-heading font-bold text-sm mb-4">
              Depoimentos reais
            </span>
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-foreground mb-4">
              Histórias que nos movem
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              Veja o que nossos viajantes dizem sobre suas experiências.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <AnimatedSection key={i} delay={i * 0.15}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-card rounded-3xl overflow-hidden shadow-md border border-border hover:shadow-2xl transition-shadow h-full flex flex-col"
              >
                <div className="h-48 overflow-hidden relative">
                  <img src={t.destination} alt="Destino de viagem" loading="lazy" width={800} height={600} className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-primary/90 flex items-center justify-center">
                    <Quote className="w-5 h-5 text-primary-foreground" />
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="w-4 h-4 fill-award-gold text-award-gold" />
                    ))}
                  </div>
                  <p className="font-body text-foreground italic mb-4 leading-relaxed flex-1">"{t.text}"</p>
                  <div className="flex items-center gap-3 pt-4 border-t border-border">
                    <img src={t.photo} alt={t.name} loading="lazy" width={48} height={48} className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20" />
                    <div>
                      <p className="font-heading font-bold text-foreground text-sm">{t.name}</p>
                      <p className="font-body text-muted-foreground text-xs">{t.location}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
