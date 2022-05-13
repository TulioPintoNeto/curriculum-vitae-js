export abstract class Conversions {
  static milisecondsToMonths(miliseconds: number): number {
    const months = (miliseconds / (1000 * 60 * 60 * 24 * 365)) * 12;

    return Math.round(months);
  }
}
