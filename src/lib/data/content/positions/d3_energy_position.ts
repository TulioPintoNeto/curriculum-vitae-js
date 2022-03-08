import { Position } from "../../../domain/entities/position";

export abstract class D3EnergyPosition extends Position {}

export class D3EnergyPositionEN extends D3EnergyPosition {
  locale(): string {
    return "Web developer and engineer intern";
  }
}

export class D3EnergyPositionPT extends D3EnergyPosition {
  locale(): string {
    return "Web developer e estágio em engenharia";
  }
}
