import { Language } from "../../../core/languages/language";
import {
  Present,
  PresentEN,
  PresentPT,
} from "../../../data/content/interval/present";

export const presentFactory = (language: Language): string => {
  const present: Present = factory(language);

  return present.locale;
};

const factory = (language: Language): Present => {
  switch (language) {
    case Language.EN_US:
      return new PresentEN();
    case Language.PT_BR:
      return new PresentPT();
  }
};
