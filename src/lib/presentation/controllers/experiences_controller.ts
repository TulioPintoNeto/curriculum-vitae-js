import { RendersController } from "../../core/controllers/controller";
import { Experience } from "../../domain/entities/experience";
import { MainSection } from "../../domain/entities/main_section";
import { Position } from "../../domain/entities/position";
import { Title } from "../../domain/entities/title";
import { GetExperiencesMainSection } from "../../domain/usecases/get_experiences";
import { ExperiencesRender } from "../renders/experiences/experiences_render";
import { TitleRender } from "../renders/titles/title_render";

export class ExperiencesController implements RendersController {
  experiencesTitleFatherId: string = "experiences-title";

  experiencesMainSection: MainSection<Experience<Position>>;

  experiencesRender: ExperiencesRender;
  titleRender: TitleRender;

  constructor(params: {
    experiencesRender: ExperiencesRender;
    getExperiences: GetExperiencesMainSection;
    titleRender: TitleRender;
  }) {
    this.experiencesMainSection = params.getExperiences.call();

    this.experiencesRender = params.experiencesRender;
    this.titleRender = params.titleRender;
  }

  update(): void {
    const experiences: Experience<Position>[] =
      this.experiencesMainSection.content;
    const experiencesTitle: Title = this.experiencesMainSection.title;

    this.experiencesRender.build(experiences);
    this.titleRender.build({
      text: experiencesTitle.locale,
      fatherId: this.experiencesTitleFatherId,
    });
  }
}
