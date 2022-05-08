import { Interests } from "../../../domain/entities/interests";

export abstract class InterestsData {
  abstract PHYSICAL_ACTIVITY: string;
  abstract MUSIC: string;

  getInterests(): Map<string, string> {
    return new Map<string, string>([
      [Interests.PHYSICAL_ACTIVITY, this.PHYSICAL_ACTIVITY],
      [Interests.MUSIC, this.MUSIC],
    ]);
  }
}

export class InterestsEN extends InterestsData {
  PHYSICAL_ACTIVITY: string = "Physical Activity";
  MUSIC: string = "Music";
}

export class InterestsPT extends InterestsData {
  PHYSICAL_ACTIVITY: string = "Atividade Física";
  MUSIC: string = "Música";
}
