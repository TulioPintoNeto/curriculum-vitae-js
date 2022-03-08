import { DevPosition } from "../../../domain/entities/position";
import { PositionLocalesEN, PositionLocalesPT } from "./positions";

export abstract class FrontEndDevPosition extends DevPosition {
  typeOfTech: string = "front-end";
  tech: string = "React JS";
}

export class FrontEndDevPositionPT extends FrontEndDevPosition {
  position: string = PositionLocalesPT.position;
  with: string = PositionLocalesPT.with;
}

export class FrontEndDevPositionEN extends FrontEndDevPosition {
  position: string = PositionLocalesEN.position;
  with: string = PositionLocalesEN.with;
}
