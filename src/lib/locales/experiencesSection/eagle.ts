import { Language } from "../../core/languages/language";

export const eagle = {
  company: "Eagle",
  endDate: new Date(2021, 11),
  initialDate: new Date(2021, 2),
  responsabilities: {
    [Language.EN_US]: [
      "Developed new SPA using ReactJS, Styled Components, Sass and consuming data from REST Api and Socket.IO",
      "Maintained and developed new functionalities for the company website source code",
      "Maintained the existent SPA and development of new functionalities",
    ],
    [Language.PT_BR]: [
      "Responsável pelo desenvolvimento de Single Page Application usando ReactJS, Styled Components, Sass e consumindo dados de REST Api e Socket.IO",
      "Manutenção e desenvolvimento de funcionalidades direto no código fonte do website da empresa",
      "Manutenção nos SPA que a empresa possui e adição de novas funcionalidades",
    ],
  },
  title: {
    [Language.EN_US]: "Front-end engineer with React JS",
    [Language.PT_BR]: "Desenvolvedor front-end com React JS",
  },
  type: {
    [Language.EN_US]: "Contract - Part time",
    [Language.PT_BR]: "Contrato",
  },
};
