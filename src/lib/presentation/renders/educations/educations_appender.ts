import { Appender } from "../../../core/renders/appender";
import { Classes } from "../../../core/utils/classes";
import { Education } from "../../../domain/entities/education";
import { EducationType } from "../../../domain/entities/education_type";
import { DurationRender } from "../common/duration_render";
import { MainContentDetailRender } from "../common/main_content_detail_render";
import { RowRender } from "../common/row_render";

interface EducationsAppenderParams {
  educations: Education<EducationType>[];
}

export class EducationsAppender extends Appender<EducationsAppenderParams> {
  get fatherId(): string {
    return "educations";
  }

  build(params: EducationsAppenderParams): void {
    this.append(
      ...params.educations.map((education) => {
        return new RowRender({
          classes: [Classes.mainSectionTextColor, Classes.mainSectionContent],
          children: [
            new DurationRender({ content: education }),
            new MainContentDetailRender({ content: education }),
          ],
        });
      })
    );
  }
}
