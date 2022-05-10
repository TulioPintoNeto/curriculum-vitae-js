export abstract class Conversions {
  static milisecondsToYears(miliseconds: number): number {
    const years = miliseconds / (1000 * 60 * 60 * 24 * 365);

    return Math.round(years);
  }
}
