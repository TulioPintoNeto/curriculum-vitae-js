import { Language } from "../../../core/languages/language";
import {
  OthersTitle,
  OthersTitleEN,
  OthersTitlePT,
} from "../../../data/content/titles/others_title";

export const othersTitleFactory = (language: Language): OthersTitle => {
  switch (language) {
    case Language.EN_US:
      return new OthersTitleEN();
    case Language.PT_BR:
      return new OthersTitlePT();
  }
};
