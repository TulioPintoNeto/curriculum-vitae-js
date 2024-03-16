import { Language } from "../../core/languages/language";

export const startaideia = {
  company: "Startaideia",
  endDate: new Date(2022, 2),
  initialDate: new Date(2021, 6),
  responsabilities: {
    [Language.EN_US]: [
      "Development of multiplataform applications (Web, Android and iOS)",
      "Team reference in Flutter development",
      "Definition of project patterns and creation of unit tests using TDD and Clean Architecture",
      "Implementation of changes in habits, CI/CD culture and automation",
    ],
    [Language.PT_BR]: [
      "Desenvolvimento de novos aplicativos multiplataforma (Web, Android e iOS)",
      "Referência do time em desenvolvimento com Flutter",
      "Definir padrões de projeto e testes automatizados (unitários) utilizando TDD e Clean Architecture",
      "Implementar mudanças de hábitos, cultura CI/CD e automatização",
    ],
  },
  title: {
    [Language.EN_US]: "Mobile engineer with Flutter",
    [Language.PT_BR]: "Desenvolvedor mobile com Flutter",
  },
  type: {
    [Language.EN_US]: "Permanent Position",
    [Language.PT_BR]: "Tempo Integral",
  },
};
