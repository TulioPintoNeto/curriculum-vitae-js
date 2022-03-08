import { Language } from "../../../core/languages/language";
import {
  Interests,
  InterestsEN,
  InterestsPT,
} from "../../../data/content/side_menu/interests";

export const interestsFactory = (language: Language): Interests => {
  switch (language) {
    case Language.EN_US:
      return new InterestsEN();
    case Language.PT_BR:
      return new InterestsPT();
  }
};
