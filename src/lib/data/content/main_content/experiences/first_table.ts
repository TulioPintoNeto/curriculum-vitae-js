import { Brazil } from "../../../../domain/entities/brazil";
import {
  Experience,
  ExperienceParams,
} from "../../../../domain/entities/experience";
import { LocationDetails } from "../../../../domain/entities/location_details";
import { MobileDevPosition } from "../../positions/mobile_dev_position";

export abstract class FirstTable extends Experience<MobileDevPosition> {
  endDate: Date = new Date(2021, 12);
  initialDate: Date = new Date(2021, 4);
  company: string = "Primeira Mesa";
}

export class FirstTablePT extends FirstTable {
  responsabilities: string[] = [
    "Manutenção no aplicativo da empresa e adição de novas funcionalidades",
    "Responsável por ensinar e orientar o novo time de desenvolvedores",
  ];
}

export class FirstTableEN extends FirstTable {
  responsabilities: string[] = [
    "SPA development to integrate commercial distributor, installer and final client using JavaScript, JS Linter with the Airbnb style guide, React JS using function components, Styled-Components, React Testing Library and React Router",
  ];
}
