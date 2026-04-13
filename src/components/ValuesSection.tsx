import { Handshake, Eye, Star, ShieldCheck, Sparkles } from "lucide-react";

const values = [
  { icon: Handshake, title: "Solidariedade", text: "Acreditamos que ajudar o próximo é o caminho para um mundo melhor." },
  { icon: Eye, title: "Transparência", text: "Você sabe exatamente para onde vai cada centavo investido." },
  { icon: Star, title: "Excelência", text: "Mesmo com preços acessíveis, entregamos viagens de alta qualidade." },
  { icon: ShieldCheck, title: "Confiança", text: "Milhares de famílias já viajaram com a gente com total segurança." },
  { icon: Sparkles, title: "Inovação social", text: "Criamos formas novas de tornar o turismo acessível para todos." },
];

const ValuesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-heading font-black text-3xl sm:text-4xl text-foreground text-center mb-12">
          Nossos valores
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {values.map((v, i) => (
            <div key={i} className="bg-card rounded-2xl p-6 border border-border text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <v.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-foreground mb-2">{v.title}</h3>
              <p className="font-body text-sm text-muted-foreground">{v.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
