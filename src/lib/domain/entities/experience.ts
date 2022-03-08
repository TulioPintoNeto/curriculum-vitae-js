import { Brazil } from "./brazil";
import { MainContent } from "./main_content";
import { Position } from "./position";

export interface ExperienceParams<TypeDevPosition extends Position> {
  position: TypeDevPosition;
  country: Brazil;
}

export abstract class Experience<
  TypeDevPosition extends Position
> extends MainContent {
  abstract responsabilities: string[];

  title: string;

  constructor(params: ExperienceParams<TypeDevPosition>) {
    super(params.country);
    this.title = params.position.locale();
  }
}
