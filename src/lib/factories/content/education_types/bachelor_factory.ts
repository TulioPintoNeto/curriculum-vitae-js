import { Language } from "../../../core/languages/language";
import {
  Bachelor,
  BachelorEN,
  BachelorPT,
} from "../../../data/content/education_types/bachelor";

export const bachelorFactory = (language: Language): Bachelor => {
  switch (language) {
    case Language.EN_US:
      return new BachelorEN();
    case Language.PT_BR:
      return new BachelorPT();
  }
};
