import { Star, Quote, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
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
    destinationName: "Lençóis Maranhenses",
    text: "Foi a primeira vez que eu vi o mar com meus filhos. A Xique Xique me deu esse presente. Nunca vou esquecer o sorriso deles!",
  },
  {
    name: "José Carlos",
    location: "Juazeiro do Norte, CE",
    photo: testimonial2,
    destination: destination2,
    destinationName: "Canoa Quebrada",
    text: "Eu achava que viajar era coisa de rico. A Xique Xique mostrou que qualquer pessoa pode viver momentos incríveis. Mudou minha vida!",
  },
  {
    name: "Dona Francisca e Seu Antônio",
    location: "Sobral, CE",
    photo: testimonial3,
    destination: destination3,
    destinationName: "Juazeiro do Norte",
    text: "Na nossa idade, pensávamos que nunca íamos sair da cidade. Conhecemos lugares lindos e fizemos amigos para toda a vida.",
  },
];

const TestimonialsSection = () => {
  const [active, setActive] = useState(0);
  const current = testimonials[active];

  return (
    <section id="depoimentos" className="py-24 bg-muted/30 overflow-hidden relative">
      {/* Decorative blobs */}
      <div className="absolute top-20 -left-20 w-72 h-72 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 -right-20 w-96 h-96 rounded-full bg-award-gold/5 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative">
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

        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid lg:grid-cols-2 gap-0 bg-card rounded-3xl overflow-hidden shadow-2xl border border-border"
            >
              {/* Left: Destination image */}
              <div className="relative h-72 lg:h-auto min-h-[400px] overflow-hidden">
                <img
                  src={current.destination}
                  alt={current.destinationName}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 flex items-center gap-2 text-primary-foreground">
                  <MapPin className="w-5 h-5" />
                  <span className="font-heading font-bold text-lg">{current.destinationName}</span>
                </div>
                <div className="absolute top-6 right-6 w-14 h-14 rounded-2xl bg-primary flex items-center justify-center shadow-lg rotate-6">
                  <Quote className="w-7 h-7 text-primary-foreground" />
                </div>
              </div>

              {/* Right: Testimonial content */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex gap-1 mb-5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-5 h-5 fill-award-gold text-award-gold" />
                  ))}
                </div>
                <p className="font-body text-foreground text-lg lg:text-xl italic mb-8 leading-relaxed">
                  "{current.text}"
                </p>
                <div className="flex items-center gap-4 pt-6 border-t border-border">
                  <img
                    src={current.photo}
                    alt={current.name}
                    className="w-16 h-16 rounded-full object-cover ring-4 ring-primary/20"
                  />
                  <div>
                    <p className="font-heading font-bold text-foreground text-lg">{current.name}</p>
                    <p className="font-body text-muted-foreground text-sm">{current.location}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatedSection>

          {/* Selector thumbnails */}
          <div className="grid grid-cols-3 gap-3 sm:gap-6 mt-8">
            {testimonials.map((t, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`group relative rounded-2xl overflow-hidden border-2 transition-all ${
                  active === i
                    ? "border-primary shadow-lg scale-[1.02]"
                    : "border-transparent opacity-60 hover:opacity-100"
                }`}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={t.destination}
                    alt={t.destinationName}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
                <div className="absolute bottom-2 left-2 right-2 flex items-center gap-2">
                  <img
                    src={t.photo}
                    alt={t.name}
                    className="w-8 h-8 rounded-full object-cover ring-2 ring-background flex-shrink-0"
                  />
                  <p className="font-heading font-bold text-primary-foreground text-xs sm:text-sm truncate">
                    {t.name}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
