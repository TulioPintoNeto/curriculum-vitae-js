import { Language } from "../../../core/languages/language";
import {
  ContactTitle,
  ContactTitleEN,
  ContactTitlePT,
} from "../../../data/content/titles/contact_title";

export const contactTitleFactory = (language: Language): ContactTitle => {
  switch (language) {
    case Language.EN_US:
      return new ContactTitleEN();
    case Language.PT_BR:
      return new ContactTitlePT();
  }
};
