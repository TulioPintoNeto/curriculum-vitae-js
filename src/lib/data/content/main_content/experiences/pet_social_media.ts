import { Experience } from "../../../../domain/entities/experience";
import { MobileDevPosition } from "../../positions/mobile_dev_position";

export abstract class PetSocialMedia extends Experience<MobileDevPosition> {
  endDate: Date = new Date(2021, 3);
  initialDate: Date = new Date(2020, 11);

  typeOfExperience() {
    return "Freelance";
  }
}

export class PetSocialMediaPT extends PetSocialMedia {
  company: string = "Independente";
  responsabilities: string[] = [
    "Desenvolvimento do front-end de uma rede social para mobile, utilizando Flutter e Android Studio. Dentre as habilidades utilizadas, estão: formulários controlados, video player, timeline e chat",
  ];
}

export class PetSocialMediaEN extends PetSocialMedia {
  company: string = "Self Employed";
  responsabilities: string[] = [
    "Front-end development of a social media for mobile devices, using Flutter and Android Studio. The abilities that was used: control forms, video player, timeline and chat",
  ];
}
