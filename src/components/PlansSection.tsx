import { Check, Utensils, BedDouble, MapPin } from "lucide-react";

const plans = [
  {
    name: "Plano C",
    subtitle: "Essencial",
    price: "R$ 89",
    period: "/mês no carnê",
    color: "border-secondary",
    bg: "bg-secondary/5",
    badge: null,
    features: [
      "Viagem de 3 dias",
      "Hospedagem compartilhada",
      "1 refeição por dia inclusa",
      "1 experiência cultural",
      "Transporte incluso",
    ],
    costs: {
      hospedagem: "Inclusa",
      alimentacao: "1 refeição/dia",
      experiencias: "1 passeio",
    },
    payment: "Até 12x no carnê",
  },
  {
    name: "Plano D",
    subtitle: "Conforto",
    price: "R$ 149",
    period: "/mês no carnê",
    color: "border-primary",
    bg: "bg-primary/5",
    badge: "Mais escolhido",
    features: [
      "Viagem de 5 dias",
      "Hospedagem em pousada",
      "Todas as refeições inclusas",
      "3 experiências culturais",
      "Transporte + seguro viagem",
      "Guia acompanhante",
    ],
    costs: {
      hospedagem: "Inclusa",
      alimentacao: "Todas inclusas",
      experiencias: "3 passeios",
    },
    payment: "Até 18x no carnê",
  },
  {
    name: "Plano E",
    subtitle: "Completo",
    price: "R$ 219",
    period: "/mês no carnê",
    color: "border-award-gold",
    bg: "bg-primary/5",
    badge: "Premium",
    features: [
      "Viagem de 7 dias",
      "Hospedagem em hotel",
      "Todas as refeições + lanches",
      "5 experiências exclusivas",
      "Transporte + seguro completo",
      "Guia + kit de viagem",
      "Fotos profissionais",
    ],
    costs: {
      hospedagem: "Inclusa",
      alimentacao: "Completa",
      experiencias: "5 passeios",
    },
    payment: "Até 24x no carnê",
  },
];

const PlansSection = () => {
  return (
    <section id="planos" className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-foreground mb-4">
            Planos de viagem
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Escolha o plano que cabe no seu bolso. Todos incluem o orçamento detalhado dos custos. Pagamento facilitado em carnê!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative bg-card rounded-3xl p-8 border-2 ${plan.color} shadow-md hover:shadow-xl transition-shadow flex flex-col`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground font-heading font-bold text-sm">
                  {plan.badge}
                </div>
              )}
              <div className="text-center mb-6">
                <h3 className="font-heading font-black text-2xl text-foreground">{plan.name}</h3>
                <p className="text-muted-foreground font-body">{plan.subtitle}</p>
                <div className="mt-4">
                  <span className="font-heading font-black text-4xl text-primary">{plan.price}</span>
                  <span className="text-muted-foreground font-body text-sm">{plan.period}</span>
                </div>
                <p className="text-sm text-secondary font-bold mt-1">{plan.payment}</p>
              </div>

              <ul className="space-y-3 mb-6 flex-1">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2 text-foreground font-body">
                    <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <div className={`rounded-xl p-4 ${plan.bg} mb-6`}>
                <p className="font-heading font-bold text-sm text-foreground mb-2">Orçamento incluso:</p>
                <div className="space-y-1 text-sm font-body text-muted-foreground">
                  <div className="flex items-center gap-2"><BedDouble className="w-4 h-4" /> Hospedagem: {plan.costs.hospedagem}</div>
                  <div className="flex items-center gap-2"><Utensils className="w-4 h-4" /> Alimentação: {plan.costs.alimentacao}</div>
                  <div className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Experiências: {plan.costs.experiencias}</div>
                </div>
              </div>

              <a
                href="https://wa.me/5585999999999?text=Olá! Tenho interesse no " 
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-3 rounded-full bg-primary text-primary-foreground font-heading font-bold hover:opacity-90 transition-opacity"
              >
                Quero esse plano!
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlansSection;
