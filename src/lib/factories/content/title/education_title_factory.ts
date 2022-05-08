import { Language } from "../../../core/languages/language";
import {
  EducationTitle,
  EducationTitleEN,
  EducationTitlePT,
} from "../../../data/content/titles/education_title";

export const educationTitleFactory = (language: Language): EducationTitle => {
  switch (language) {
    case Language.EN_US:
      return new EducationTitleEN();
    case Language.PT_BR:
      return new EducationTitlePT();
  }
};
