import { educationSection } from "./educationSection";
import { experiencesSection } from "./experiencesSection";
import { Language } from "../core/languages/language";
import { skills } from "./skills/index";

export const locales = {
  duration: {
    year: {
      singular: {
        [Language.EN_US]: "year",
        [Language.PT_BR]: "ano",
      },
      plural: {
        [Language.EN_US]: "years",
        [Language.PT_BR]: "anos",
      },
    },
    month: {
      singular: {
        [Language.EN_US]: "month",
        [Language.PT_BR]: "mês",
      },
      plural: {
        [Language.EN_US]: "months",
        [Language.PT_BR]: "meses",
      },
    },
  },
  educationSection,
  experiencesSection,
  skills,
};
