import { Language } from "../../core/languages/language";

export const eagle = {
  company: "Eagle",
  endDate: new Date(2021, 11),
  initialDate: new Date(2021, 2),
  responsabilities: {
    [Language.EN_US]: [
      "Maintenance and development of new functionalities for the company website source code",
      "Maintenance of the existent SPA and development of new functionalities",
      "Development of new SPA in partnership with the company's development team",
    ],
    [Language.PT_BR]: [
      "Manutenção e desenvolvimento de funcionalidades direto no código fonte do website da empresa",
      "Manutenção nos SPA que a empresa possui e adição de novas funcionalidades",
      "Desenvolvimento completo de Single Page Application",
    ],
  },
  title: {
    [Language.EN_US]: "Front-end developer with React JS",
    [Language.PT_BR]: "Desenvolvedor front-end com React JS",
  },
  type: {
    [Language.EN_US]: "Contract",
    [Language.PT_BR]: "Contrato",
  },
};
