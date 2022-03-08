import { Language } from "../../../core/languages/language";
import { BrazilEN, BrazilPT } from "../../../data/content/countries/brazil";
import { Brazil } from "../../../domain/entities/brazil";

export const brazilFactory = (language: Language): Brazil => {
  switch (language) {
    case Language.EN_US:
      return new BrazilEN();
    case Language.PT_BR:
      return new BrazilPT();
  }
};
