import { Language } from "../../../core/languages/language";
import {
  ExperienceTitle,
  ExperienceTitleEN,
  ExperienceTitlePT,
} from "../../../data/content/titles/experience_title";

export const experienceTitleFactory = (language: Language): ExperienceTitle => {
  switch (language) {
    case Language.EN_US:
      return new ExperienceTitleEN();
    case Language.PT_BR:
      return new ExperienceTitlePT();
  }
};
