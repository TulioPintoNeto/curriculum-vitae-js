import { Position } from "../../../domain/entities/position";

export abstract class MobileDevPosition extends Position {}

export class MobileDevPositionPT extends MobileDevPosition {
  locale(): string {
    return "Desenvolvedor mobile com Flutter";
  }
}

export class MobileDevPositionEN extends MobileDevPosition {
  locale(): string {
    return "Mobile developer with Flutter";
  }
}
