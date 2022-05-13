import { Brazil } from "../../../../domain/entities/brazil";
import {
  Experience,
  ExperienceParams,
} from "../../../../domain/entities/experience";
import { LocationDetails } from "../../../../domain/entities/location_details";
import { FrontEndDevPosition } from "../../positions/front_end_dev_position";

export abstract class Emotus extends Experience<FrontEndDevPosition> {
  endDate: Date = new Date(2021, 7);
  initialDate: Date = new Date(2020, 11);

  constructor(params: ExperienceParams<FrontEndDevPosition>) {
    super(params);
  }

  _experienceLocationFromCountry(country: Brazil): LocationDetails {
    const company: string = "Emotus";

    return new LocationDetails({
      company: company,
    });
  }
}

export class EmotusEN extends Emotus {
  responsabilities: string[] = [
    "SPA development to integrate commercial distributor, installer and final client using JavaScript, JS Linter with the Airbnb style guide, React JS using function components, Styled-Components, React Testing Library and React Router",
  ];
}

export class EmotusPT extends Emotus {
  responsabilities: string[] = [
    "Desenvolvimento de SPA para integração entre distribuidor, instalador e cliente final utilizando JavaScript, JS Linter com o guia de estilo do Airbnb, React JS com function components, Styled-Components, React Testing Library e React Router",
  ];
}
