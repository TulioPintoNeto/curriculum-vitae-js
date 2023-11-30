import { Language } from "../../core/languages/language";

export const pataki = {
  company: "Pataki",
  endDate: new Date(2021, 2),
  initialDate: new Date(2020, 10),
  responsabilities: {
    [Language.EN_US]: [
      "Mobile development of social media using Flutter and Android Studio. For some features, we consume web sockets. The following list includes some functionalities that were developed: controlled forms, video player, timeline and real-time chat",
    ],
    [Language.PT_BR]: [
      "Desenvolvimento mobile de uma rede social utilizando Flutter e Android Studio. Para algumas funcionalidades foi utilizado web sockets. Algumas funcionalidades que foram desenvolvidas: formulários controlados, video player, timeline e real-time chat",
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
