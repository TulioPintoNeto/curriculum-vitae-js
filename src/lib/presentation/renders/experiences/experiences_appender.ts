import { Appender } from "../../../core/renders/appender";
import { Experience } from "../../../domain/entities/experience";
import { Position } from "../../../domain/entities/position";
import { MainSectionColumnRender } from "../common/main_section_column_render";
import { MainSectionRowRender } from "../common/main_section_row_render";

interface ExperiencesAppenderParams {
  experiences: Experience<Position>[];
}

export class ExperiencesAppender extends Appender<ExperiencesAppenderParams> {
  getFatherId(): string {
    return "experiences";
  }

  build(params: ExperiencesAppenderParams): void {
    const buildedMainSectionColumn = new MainSectionColumnRender({
      size: 3,
      children: [],
    });

    this.append(
      new MainSectionRowRender({
        children: [buildedMainSectionColumn.content],
      })
    );
  }
}
