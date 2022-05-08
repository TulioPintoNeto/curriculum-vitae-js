import { Language } from "../../../core/languages/language";
import {
  InterestsTitle,
  InterestsTitleEN,
  InterestsTitlePT,
} from "../../../data/content/titles/interests_title";

export const interestsTitleFactory = (language: Language): InterestsTitle => {
  switch (language) {
    case Language.EN_US:
      return new InterestsTitleEN();
    case Language.PT_BR:
      return new InterestsTitlePT();
  }
};
