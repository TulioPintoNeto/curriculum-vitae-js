import { Brazil } from "../../../domain/entities/brazil";
import {
  Experience,
  ExperienceParams,
} from "../../../domain/entities/experience";
import { LocationDetails } from "../../../domain/entities/location_details";
import { Cities } from "../cities/cities";
import { MobileDevPosition } from "../positions/mobile_dev_position";

export abstract class PetSocialMedia extends Experience<MobileDevPosition> {
  abstract company: string;

  endDate: Date = new Date(2021, 3);
  initialDate: Date = new Date(2020, 11);

  constructor(params: ExperienceParams<MobileDevPosition>) {
    super(params);
  }

  _experienceLocationFromCountry(country: Brazil): LocationDetails {
    const company: string = this.company;
    const city: string = Cities.PELOTAS;

    return new LocationDetails({
      city: city,
      company: company,
      country: country,
    });
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
