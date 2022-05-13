export abstract class Present {
  abstract locale: string;
}

export class PresentEN extends Present {
  locale: string = "Present";
}

export class PresentPT extends Present {
  locale: string = "Presente";
}
