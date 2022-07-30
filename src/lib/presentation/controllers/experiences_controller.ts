import { RendersController } from "../../core/controllers/controller";
import { Experience } from "../../domain/entities/experience";
import { MainSection } from "../../domain/data_structure/main_section";
import { Position } from "../../domain/entities/position";
import { Title } from "../../domain/entities/title";
import { GetExperiences } from "../../domain/usecases/get_experiences";
import { ExperiencesAppender } from "../renders/experiences/experiences_appender";
import { TitleAppender } from "../renders/titles/title_appender";

export class ExperiencesController implements RendersController {
  experiencesTitleFatherId: string = "experiences-title";

  experiencesMainSection: MainSection<Experience<Position>>;

  constructor(getExperiences: GetExperiences) {
    this.experiencesMainSection = getExperiences.call();
  }

  update(): void {
    const { content, title } = this.experiencesMainSection;

    new ExperiencesAppender({ experiences: content });

    new TitleAppender({
      text: title.locale,
      fatherId: this.experiencesTitleFatherId,
    });
  }
}
