import { Appender } from "../../../core/renders/appender";
import { Classes } from "../../../core/utils/classes";
import { Experience } from "../../../domain/entities/experience";
import { Position } from "../../../domain/entities/position";
import { RowRender } from "../common/row_render";
import { DurationRender } from "../common/duration_render";
import { ExperienceDetailRender } from "./experience_detail_render";

interface ExperiencesAppenderParams {
  experiences: Experience<Position>[];
}

export class ExperiencesAppender extends Appender<ExperiencesAppenderParams> {
  get fatherId(): string {
    return "experiences";
  }

  build(params: ExperiencesAppenderParams): void {
    this.append(
      ...params.experiences.map((experience) => {
        return new RowRender({
          classes: [Classes.mainSectionTextColor, Classes.mainSectionContent],
          children: [
            new DurationRender({ content: experience }),
            new ExperienceDetailRender({ experience }),
          ],
        });
      })
    );
  }
}
