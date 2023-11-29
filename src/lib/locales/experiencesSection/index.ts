import { Language } from "../../core/languages/language";
import { ciandt } from "./ciandt";
import { d3Energia } from "./d3Energia";
import { eagle } from "./eagle";
import { emotus } from "./emotus";
import { pataki } from "./pataki";
import { primeiraMesa } from "./primeiraMesa";
import { startaideia } from "./startaideia";
import { Locales } from "./type";

type Experience = {
  company: string;
  endDate: Date;
  initialDate: Date;
  responsabilities: {
    [K in Language]: string[];
  };
  title: Locales;
  type: Locales;
};

type ExperiencesSection = {
  title: Locales;
  experiences: Experience[];
};

export const experiencesSection: ExperiencesSection = {
  title: {
    [Language.EN_US]: "Experience",
    [Language.PT_BR]: "Experiência",
  },
  experiences: [
    ciandt,
    startaideia,
    primeiraMesa,
    eagle,
    emotus,
    pataki,
    d3Energia,
  ],
};
