import { Appender } from "../../../core/renders/appender";
import { Classes } from "../../../core/utils/classes";
import { Experience } from "../../../domain/entities/experience";
import { Position } from "../../../domain/entities/position";
import { RowRender } from "../common/row_render";
import { TimeRender } from "../common/time_render";
import { MainContentDetailRender } from "../common/main_content_detail_render";
import { ParagraphRender } from "../common/paragraph_render";

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
            new TimeRender({ content: experience }),
            new MainContentDetailRender({
              content: experience,
              extraContentRenders: experience.responsabilities.map(
                this.responsabilityRender
              ),
            }),
          ],
        });
      })
    );
  }

  responsabilityRender(responsability: string): ParagraphRender {
    return new ParagraphRender({
      classes: [Classes.description],
      text: `🞄 ${responsability}`,
    });
  }
}
