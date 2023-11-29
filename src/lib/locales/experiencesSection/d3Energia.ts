import { Language } from "../../core/languages/language";

export const d3Energia = {
  company: "D3 Energia",
  endDate: new Date(2020, 10),
  initialDate: new Date(2019, 5),
  responsabilities: {
    [Language.EN_US]: [
      "Development of new functionalities for the company software. That was a concern in changing the software from procedural to object oriented",
      "Doing the back-up of emails, files and database",
      "Creation and maintenance of the company website",
      "Sizing, checking viability, projecting, coordinating the installation and maintenance of solar systems",
    ],
    [Language.PT_BR]: [
      "Adição de novas funcionalidades do software da empresa.Houve ainda foco em transformar o software de proceduralpara orientação em objetos",
      "Realizar o back-up de e-mails, arquivos do sistema e bancode dados",
      "Criação e manutenção no website da empresa",
      "Dimensionar, analisar a viabilidade, projetar, coordenar ainstalação e manutenção de sistemas solares",
    ],
  },
  title: {
    [Language.EN_US]: "Web developer and engineer intern",
    [Language.PT_BR]: "Desenvolvedor web e estagiário de engenharia",
  },
  type: {
    [Language.EN_US]: "Intern",
    [Language.PT_BR]: "Estágio",
  },
};
