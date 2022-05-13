import { Brazil } from "../../../../domain/entities/brazil";
import {
  Experience,
  ExperienceParams,
} from "../../../../domain/entities/experience";
import { LocationDetails } from "../../../../domain/entities/location_details";
import { MobileDevPosition } from "../../positions/mobile_dev_position";

export abstract class Startaideia extends Experience<MobileDevPosition> {
  endDate: Date | null = null;
  initialDate: Date = new Date(2021, 7);

  constructor(params: ExperienceParams<MobileDevPosition>) {
    super(params);
  }

  _experienceLocationFromCountry(country: Brazil): LocationDetails {
    const company: string = "Startaideia";

    return new LocationDetails({
      company: company,
    });
  }
}

export class StartaideiaPT extends Startaideia {
  responsabilities: string[] = [
    "Desenvolvimento de novos aplicativos multiplataforma (Web, Android e iOS)",
    "Definir padrões de projeto e testes automatizados (unitários) utilizando TDD e Clean Architecture",
    "Implementar mudanças de hábitos, cultura CI/CD e automatização",
  ];
}

export class StartaideiaEN extends Startaideia {
  responsabilities: string[] = [
    "Development of multiplataform applications (Web, Android and iOS)",
    "Definition of project patterns and creation of unit tests using TDD and Clean Architecture",
    "Implementation of changes in habits, CI/CD culture and automation",
  ];
}
