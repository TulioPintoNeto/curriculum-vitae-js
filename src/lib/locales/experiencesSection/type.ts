import { Language } from "../../core/languages/language";

export type Locales = {
  [K in Language]: string;
};
