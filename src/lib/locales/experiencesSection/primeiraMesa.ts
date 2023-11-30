import { Language } from "../../core/languages/language";

export const primeiraMesa = {
  company: "Primeira Mesa",
  endDate: new Date(2021, 11),
  initialDate: new Date(2021, 4),
  responsabilities: {
    [Language.EN_US]: [
      "Trabalhei em um APP que dá descontos em reservas de restaurantes. Eles estavam insatisfeitos com a antiga fábrica de software e eu fui responsável por finalizar a funcionalidade de delivery",
      "Desenvolvimento de novas funcionalidades e arrumar bugs na base de código mobile. Trabalhei em funcionalidades que envolviam sistemas de pagamento e de geolocalização",
      "Responsável por ensinar e orientar o novo time de desenvolvedores",
    ],
    [Language.PT_BR]: [
      "I worked with an APP that give discounts in restaurants reservations. They were unsatisfied with their old software house and I was responsible to finish a delivery system feature",
      "Development of new features and fix bugs into their mobile codebase. Worked in features that involves payments and geolocation",
      "Responsible for teaching and orienting the new developers team.",
    ],
  },
  title: {
    [Language.EN_US]: "Mobile developer with Flutter",
    [Language.PT_BR]: "Desenvolvedor mobile com Flutter",
  },
  type: {
    [Language.EN_US]: "Contract",
    [Language.PT_BR]: "Contrato",
  },
};
