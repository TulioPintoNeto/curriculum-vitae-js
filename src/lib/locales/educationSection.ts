import { Language } from "../core/languages/language";

export const educationSection = {
  title: {
    [Language.EN_US]: "Education",
    [Language.PT_BR]: "Educação ",
  },
  educations: [
    {
      endDate: new Date(2021, 1),
      initialDate: new Date(2021, 1),
      company: "Alura Online Courses - Brazil",
      title: {
        [Language.EN_US]: "Flutter Certificate",
        [Language.PT_BR]: "Flutter Certificate",
      },
    },
    {
      endDate: new Date(2021, 1),
      initialDate: new Date(2020, 1),
      company: "Alura Online Courses - Brazil",
      title: {
        [Language.EN_US]: "React JS Certificate",
        [Language.PT_BR]: "React JS Certificate",
      },
    },
    {
      endDate: new Date(2020, 1),
      initialDate: new Date(2013, 1),
      company: "Federal University of Rio Grande do Sul - Brazil",
      title: {
        [Language.EN_US]: "Bachelor in Energy Engineering",
        [Language.PT_BR]: "Engenharia de Energia",
      },
    },
  ],
};
