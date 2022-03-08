export abstract class Interests {
  abstract PHYSICAL_ACTIVITY: string;
  abstract MUSIC: string;

  getInterests(): Map<string, string> {
    return new Map<string, string>([
      ["physicalActivity", this.PHYSICAL_ACTIVITY],
      ["music", this.MUSIC],
    ]);
  }
}

export class InterestsEN extends Interests {
  PHYSICAL_ACTIVITY: string = "Physical Activity";
  MUSIC: string = "Music";
}

export class InterestsPT extends Interests {
  PHYSICAL_ACTIVITY: string = "Atividade Física";
  MUSIC: string = "Música";
}
