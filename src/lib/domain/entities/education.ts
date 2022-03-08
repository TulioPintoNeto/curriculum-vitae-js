import { Brazil } from "./brazil";
import { EducationType } from "./education_type";
import { MainContent } from "./main_content";

export interface EducationParams<Type extends EducationType> {
  educationType: Type;
  country: Brazil;
}

export abstract class Education<
  Type extends EducationType
> extends MainContent {
  educationType: string;
  abstract title: string;

  constructor(params: EducationParams<Type>) {
    super(params.country);
    this.educationType = params.educationType.locale;
  }
}
