import { Appender } from "../../../core/renders/appender";
import { Classes } from "../../../core/utils/classes";
import { Experience } from "../../../domain/entities/experience";
import { Position } from "../../../domain/entities/position";
import { ColumnRender } from "../common/column_render";
import { ParagraphRender } from "../common/paragraph_render";
import { RowRender } from "../common/row_render";
import { SpanRender } from "../common/span_render";

interface ExperiencesAppenderParams {
  experiences: Experience<Position>[];
}

export class ExperiencesAppender extends Appender<ExperiencesAppenderParams> {
  getFatherId(): string {
    return "experiences";
  }

  build(params: ExperiencesAppenderParams): void {
    this.append(
      ...params.experiences.map((experience) => {
        return new RowRender({
          classes: [Classes.mainSectionTextColor, Classes.mainSectionContent],
          children: [
            new ColumnRender({
              classes: [Classes.paddingStart2, Classes.noPaddingEnd],
              size: 3,
              children: [
                new ParagraphRender({
                  classes: [Classes.year, Classes.textBold],
                  text: experience.getYearsInterval(),
                }),
                new SpanRender({
                  text: `${experience.getDuration()}`,
                }),
              ],
            }),
            new ColumnRender({
              classes: [Classes.noPaddingStart, Classes.paddingEnd2],
              size: 9,
              children: [
                new ParagraphRender({
                  classes: [Classes.activity, Classes.textBold],
                  text: experience.title,
                }),
              ],
            }),
          ],
        });
      })
    );
  }
}
