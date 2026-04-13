import { Trophy } from "lucide-react";

const AwardSection = () => {
  return (
    <section className="py-16 bg-accent">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 bg-card rounded-3xl p-8 md:p-12 shadow-lg border-2 border-primary/20">
          <div className="flex-shrink-0">
            <div className="w-28 h-28 rounded-full bg-award-gold flex items-center justify-center shadow-lg">
              <Trophy className="w-14 h-14 text-primary-foreground" />
            </div>
          </div>
          <div className="text-center md:text-left">
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
      </div>
    </section>
  );
};

export default AwardSection;
