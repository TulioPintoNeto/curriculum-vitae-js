import { Experience } from "../../../../domain/entities/experience";
import { MobileDevPosition } from "../../positions/mobile_dev_position";

export abstract class Startaideia extends Experience<MobileDevPosition> {
  endDate: Date | null = new Date(2022, 2);
  initialDate: Date = new Date(2021, 6);
  company: string = "Startaideia";
}

export class StartaideiaPT extends Startaideia {
  responsabilities: string[] = [
    "Desenvolvimento de novos aplicativos multiplataforma (Web, Android e iOS)",
    "Referência do time em desenvolvimento com Flutter",
    "Definir padrões de projeto e testes automatizados (unitários) utilizando TDD e Clean Architecture",
    "Implementar mudanças de hábitos, cultura CI/CD e automatização",
  ];

  typeOfExperience() {
    return "Tempo integral";
  }
}

export class StartaideiaEN extends Startaideia {
  responsabilities: string[] = [
    "Development of multiplataform applications (Web, Android and iOS)",
    "Team reference in Flutter development",
    "Definition of project patterns and creation of unit tests using TDD and Clean Architecture",
    "Implementation of changes in habits, CI/CD culture and automation",
  ];

  typeOfExperience() {
    return "Full-time";
  }
}
