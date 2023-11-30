import { Language } from "../../core/languages/language";
import { languageSection } from "./languageSection";

export const sideMenu = {
  contactSection: {
    title: {
      [Language.EN_US]: "Contact",
      [Language.PT_BR]: "Contato",
    },
  },
  languageSection,
  expertiseSection: {
    title: {
      [Language.EN_US]: "Programming",
      [Language.PT_BR]: "Programação",
    },
  },
  othersSection: {
    title: {
      [Language.EN_US]: "Others",
      [Language.PT_BR]: "Outros",
    },
  },
  interestsSection: {
    title: {
      [Language.EN_US]: "Interests",
      [Language.PT_BR]: "Interesses",
    },
    physicalActivity: {
      title: {
        [Language.EN_US]: 'Physical Activity',
        [Language.PT_BR]: 'Atividade Física',
      }
    },
    music: {
      title: {
        [Language.EN_US]: 'Music',
        [Language.PT_BR]: 'Música',
      }
    }
  },
};
