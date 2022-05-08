import { Language } from "../../../core/languages/language";
import {
  InterestsData,
  InterestsEN,
  InterestsPT,
} from "../../../data/content/side_menu/interests";

export const interestsFactory = (language: Language): InterestsData => {
  switch (language) {
    case Language.EN_US:
      return new InterestsEN();
    case Language.PT_BR:
      return new InterestsPT();
  }
};
