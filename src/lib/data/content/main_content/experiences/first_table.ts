import { Experience } from "../../../../domain/entities/experience";
import { MobileDevPosition } from "../../positions/mobile_dev_position";

export abstract class FirstTable extends Experience<MobileDevPosition> {
  endDate: Date = new Date(2021, 11);
  initialDate: Date = new Date(2021, 4);
  company: string = "Primeira Mesa";

  typeOfExperience() {
    return "Freelance";
  }
}

export class FirstTablePT extends FirstTable {
  responsabilities: string[] = [
    "Manutenção no aplicativo da empresa e adição de novas funcionalidades",
    "Responsável por ensinar e orientar o novo time de desenvolvedores",
  ];
}

export class FirstTableEN extends FirstTable {
  responsabilities: string[] = [
    "Maintenance of the company application and development of new functionalities;",
    "Responsible for teaching and orienting the new developers team.",
  ];
}
