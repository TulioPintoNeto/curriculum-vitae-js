import { Language } from "../../core/languages/language";

export const pataki = {
  company: "Pataki",
  endDate: new Date(2021, 2),
  initialDate: new Date(2020, 10),
  responsabilities: {
    [Language.EN_US]: [
      "Front-end development of a social media for mobile devices, using Flutter and Android Studio. The abilities that was used: control forms, video player, timeline and chat",
    ],
    [Language.PT_BR]: [
      "Desenvolvimento do front-end de uma rede social para mobile, utilizando Flutter e Android Studio. Dentre as habilidades utilizadas, estão: formulários controlados, video player, timeline e chat",
    ],
  },
  title: {
    [Language.EN_US]: "Mobile developer with Flutter",
    [Language.PT_BR]: "Desenvolvedor mobile com Flutter",
  },
  type: {
    [Language.EN_US]: "Contract",
    [Language.PT_BR]: "Contrato",
  },
};
