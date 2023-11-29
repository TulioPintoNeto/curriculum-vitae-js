export enum Titles {
  INTERESTS,
  OTHERS,
}

export abstract class Title {
  abstract locale: string;
  abstract type: Titles;
}
