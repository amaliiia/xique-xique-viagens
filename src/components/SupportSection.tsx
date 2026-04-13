import { Building2, HeartHandshake } from "lucide-react";

const SupportSection = () => {
  return (
    <section id="apoie" className="py-20 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="w-20 h-20 rounded-full bg-secondary-foreground/10 flex items-center justify-center mx-auto mb-8">
            <HeartHandshake className="w-10 h-10" />
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl mb-6">
            Sua empresa pode mudar vidas
          </h2>
          <p className="font-body text-lg opacity-90 mb-4 leading-relaxed">
            Empresas anjo podem apoiar a Xique Xique Viagens e ajudar milhares de famílias a realizarem o sonho de viajar. 
            Juntos, criamos um impacto social que transforma comunidades inteiras.
          </p>
          <p className="font-body text-lg opacity-90 mb-8 leading-relaxed">
            Ao apoiar nossa ONG, sua empresa ganha visibilidade social, fortalece sua marca e faz parte de algo que realmente importa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5585999999999?text=Olá! Sou representante de uma empresa e gostaria de apoiar a Xique Xique Viagens."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary-foreground text-secondary font-heading font-bold text-lg hover:opacity-90 transition-opacity shadow-lg"
            >
              <Building2 className="w-5 h-5" />
              Quero ser uma empresa anjo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
