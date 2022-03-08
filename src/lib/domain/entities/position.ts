export abstract class Position {
  abstract locale(): string;
}

export abstract class DevPosition extends Position {
  abstract position: string;
  abstract typeOfTech: string;
  abstract with: string;
  abstract tech: string;

  locale(): string {
    return `${this.position} ${this.typeOfTech} ${this.with} ${this.tech}`;
  }
}
