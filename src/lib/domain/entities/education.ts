import { EducationType } from "./education_type";
import { MainContent, MainContentParams } from "./main_content";

export interface EducationParams<Type extends EducationType> {
  educationType: Type;
  mainContentParams: MainContentParams;
}

export abstract class Education<
  Type extends EducationType
> extends MainContent {
  educationType: string;
  abstract title: string;

  constructor(params: EducationParams<Type>) {
    super(params.mainContentParams);
    this.educationType = params.educationType.locale;
  }
}
