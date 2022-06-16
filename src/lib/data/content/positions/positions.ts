import { DevPosition } from "../../../domain/entities/position";

export abstract class PositionLocalesPT implements DevPosition {
  static position: string = "Desenvolvedor";
  static with: string = "com";

  position: string = "Desenvolvedor";
  with: string = "com";
  abstract typeOfTech: string;
  abstract tech: string;

  locale(): string {
    return `Desenvolvedor ${this.typeOfTech} com ${this.tech}`;
  }
}

export abstract class PositionLocalesEN implements DevPosition {
  static position: string = "Developer";
  static with: string = "with";

  position: string = "Developer";
  with: string = "with";
  abstract typeOfTech: string;
  abstract tech: string;

  locale(): string {
    return `${this.typeOfTech} developer with ${this.tech}`;
  }
}
