import { Position } from "../../../domain/entities/position";

export abstract class FrontEndDevPosition extends Position {}

export class FrontEndDevPositionPT extends FrontEndDevPosition {
  locale(): string {
    return "Desenvolvedor front-end com React JS";
  }
}

export class FrontEndDevPositionEN extends FrontEndDevPosition {
  locale(): string {
    return "Front-end developer with React JS";
  }
}
