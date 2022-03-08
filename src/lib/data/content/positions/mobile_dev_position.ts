import { DevPosition } from "../../../domain/entities/position";
import { PositionLocalesEN, PositionLocalesPT } from "./positions";

export abstract class MobileDevPosition extends DevPosition {
  typeOfTech: string = "mobile";
  tech: string = "Flutter";
}

export class MobileDevPositionPT extends MobileDevPosition {
  position: string = PositionLocalesPT.position;
  with: string = PositionLocalesPT.with;
}

export class MobileDevPositionEN extends MobileDevPosition {
  position: string = PositionLocalesEN.position;
  with: string = PositionLocalesEN.with;
}
