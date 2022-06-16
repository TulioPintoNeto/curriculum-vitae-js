import { MainContent, MainContentParams } from "./main_content";
import { Position } from "./position";

export interface ExperienceParams<TypeDevPosition extends Position> {
  position: TypeDevPosition;
  mainContentParams: MainContentParams;
}

export abstract class Experience<
  TypeDevPosition extends Position
> extends MainContent {
  abstract responsabilities: string[];

  title: string;

  constructor(params: ExperienceParams<TypeDevPosition>) {
    super(params.mainContentParams);
    this.title = `(${this.typeOfExperience()}) ${params.position.locale()}`;
  }

  abstract typeOfExperience(): string;
}
