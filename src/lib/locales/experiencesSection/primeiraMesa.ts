import { Language } from "../../core/languages/language";

export const primeiraMesa = {
  company: "Primeira Mesa",
  endDate: new Date(2021, 11),
  initialDate: new Date(2021, 4),
  responsabilities: {
    [Language.EN_US]: [
      "Manutenção no aplicativo da empresa e adição de novas funcionalidades",
      "Responsável por ensinar e orientar o novo time de desenvolvedores",
    ],
    [Language.PT_BR]: [
      "Maintenance of the company application and development of new functionalities;",
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
