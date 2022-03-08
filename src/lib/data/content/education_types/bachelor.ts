import { EducationType } from "../../../domain/entities/education_type";

export abstract class Bachelor extends EducationType {}

export class BachelorPT extends Bachelor {
  locale: string = "Bacharelado";
}

export class BachelorEN extends Bachelor {
  locale: string = "Bachelor's Degree";
}
