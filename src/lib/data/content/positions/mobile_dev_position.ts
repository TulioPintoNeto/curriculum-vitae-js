import { DevPosition } from "../../../domain/entities/position";
import { PositionLocalesEN, PositionLocalesPT } from "./positions";

export abstract class MobileDevPosition extends DevPosition {
  typeOfTech: string = "mobile";
  tech: string = "Flutter";
  static typeOfTech: string = "mobile";
  static tech: string = "Flutter";
}

export class MobileDevPositionPT extends PositionLocalesPT {
  typeOfTech: string = MobileDevPosition.typeOfTech;
  tech: string = MobileDevPosition.tech;
}

export class MobileDevPositionEN extends PositionLocalesEN {
  typeOfTech: string = MobileDevPosition.typeOfTech;
  tech: string = MobileDevPosition.tech;
}
