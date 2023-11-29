import { Language } from "../../core/languages/language";

export const emotus = {
  company: "Emotus",
  endDate: new Date(2021, 6),
  initialDate: new Date(2020, 10),
  responsabilities: {
    [Language.EN_US]: [
      "SPA development to integrate commercial distributor, installer and final client using JavaScript, JS Linter with the Airbnb style guide, React JS using function components, Styled-Components, React Testing Library and React Router",
    ],
    [Language.PT_BR]: [
      "Desenvolvimento de SPA para integração entre distribuidor, instalador e cliente final utilizando JavaScript, JS Linter com o guia de estilo do Airbnb, React JS com function components, Styled-Components, React Testing Library e React Router",
    ],
  },
  title: {
    [Language.EN_US]: "Front-end developer with React JS",
    [Language.PT_BR]: "Desenvolvedor front-end com React JS",
  },
  type: {
    [Language.EN_US]: "Self Employed",
    [Language.PT_BR]: "Empreendedor",
  },
};
