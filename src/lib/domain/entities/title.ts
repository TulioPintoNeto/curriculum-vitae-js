export enum Titles {
  CONTACT,
  EDUCATION,
  EXPERIENCE,
  INTERESTS,
  OTHERS,
}

export abstract class Title {
  abstract locale: string;
  abstract type: Titles;
}
