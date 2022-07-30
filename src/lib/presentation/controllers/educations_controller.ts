import { RendersController } from "../../core/controllers/controller";
import { MainSection } from "../../domain/data_structure/main_section";
import { Education } from "../../domain/entities/education";
import { EducationType } from "../../domain/entities/education_type";
import { GetEducations } from "../../domain/usecases/get_educations";
import { EducationsAppender } from "../renders/educations/educations_appender";
import { TitleAppender } from "../renders/titles/title_appender";

export class EducationsController implements RendersController {
  educationsTitleFatherId: string = "education-title";

  educationsMainSection: MainSection<Education<EducationType>>;

  constructor(getEducations: GetEducations) {
    this.educationsMainSection = getEducations.call();
  }

  update(): void {
    const { content, title } = this.educationsMainSection;

    new EducationsAppender({ educations: content });

    new TitleAppender({
      text: title.locale,
      fatherId: this.educationsTitleFatherId,
    });
  }
}
