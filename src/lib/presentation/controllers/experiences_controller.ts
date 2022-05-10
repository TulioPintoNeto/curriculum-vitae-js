import { RendersController } from "../../core/controllers/controller";
import { Experience } from "../../domain/entities/experience";
import { MainSection } from "../../domain/entities/main_section";
import { Position } from "../../domain/entities/position";
import { Title } from "../../domain/entities/title";
import { GetExperiencesMainSection } from "../../domain/usecases/get_experiences";
import { ExperiencesAppender } from "../renders/experiences/experiences_appender";
import { TitleAppender } from "../renders/titles/title_appender";

export class ExperiencesController implements RendersController {
  experiencesTitleFatherId: string = "experiences-title";

  experiencesMainSection: MainSection<Experience<Position>>;

  constructor(params: { getExperiences: GetExperiencesMainSection }) {
    this.experiencesMainSection = params.getExperiences.call();
  }

  update(): void {
    const experiences: Experience<Position>[] =
      this.experiencesMainSection.content;
    const experiencesTitle: Title = this.experiencesMainSection.title;

    new ExperiencesAppender({ experiences });

    new TitleAppender({
      text: experiencesTitle.locale,
      fatherId: this.experiencesTitleFatherId,
    });
  }
}
