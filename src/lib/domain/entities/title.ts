export enum Titles {
  CONTACT,
  EDUCATION,
  EXPERIENCE,
  INTERESTS,
  LANGUAGES,
  OTHERS,
}

export abstract class Title {
  abstract locale: string;
  abstract type: Titles;
}
