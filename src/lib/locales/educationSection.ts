import { Language } from "../core/languages/language";

export const educationSection = {
  title: {
    [Language.EN_US]: "Education",
    [Language.PT_BR]: "Educação ",
  },
  educations: [
    {
      endDate: new Date(2022, 9),
      initialDate: new Date(2021, 1),
      company: "UCPel",
      title: {
        [Language.EN_US]:
          "Systems Analysis and Development (until 3º semester)",
        [Language.PT_BR]:
          "Análise e Desenvolvimento de Sistemas (até 3º Semestre)",
      },
    },
    {
      endDate: new Date(2021, 1),
      initialDate: new Date(2021, 1),
      company: "Alura",
      title: {
        [Language.EN_US]: "Flutter",
        [Language.PT_BR]: "Flutter",
      },
    },
    {
      endDate: new Date(2021, 1),
      initialDate: new Date(2020, 1),
      company: "Alura",
      title: {
        [Language.EN_US]: "React JS",
        [Language.PT_BR]: "React JS",
      },
    },
    {
      endDate: new Date(2020, 1),
      initialDate: new Date(2013, 1),
      company: "UFRGS",
      title: {
        [Language.EN_US]: "Energy Engineer",
        [Language.PT_BR]: "Engenharia de Energia",
      },
    },
  ],
};
