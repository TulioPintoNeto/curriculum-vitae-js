export class UserLanguage {
  language: string;
  level: number;

  constructor(params: { language: string; level: number }) {
    this.language = params.language;
    this.level = params.level;
  }
}
