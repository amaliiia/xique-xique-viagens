import { Star } from "lucide-react";
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
    <section id="depoimentos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-heading font-black text-3xl sm:text-4xl text-foreground text-center mb-4">
          Histórias que nos movem
        </h2>
        <p className="font-body text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          Veja o que nossos viajantes dizem sobre suas experiências.
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-card rounded-3xl overflow-hidden shadow-md border border-border hover:shadow-xl transition-shadow">
              <div className="h-48 overflow-hidden">
                <img src={t.destination} alt="Destino de viagem" loading="lazy" width={800} height={600} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <div className="flex gap-1 mb-3">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-4 h-4 fill-award-gold text-award-gold" />
                  ))}
                </div>
                <p className="font-body text-foreground italic mb-4 leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <img src={t.photo} alt={t.name} loading="lazy" width={48} height={48} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <p className="font-heading font-bold text-foreground text-sm">{t.name}</p>
                    <p className="font-body text-muted-foreground text-xs">{t.location}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
