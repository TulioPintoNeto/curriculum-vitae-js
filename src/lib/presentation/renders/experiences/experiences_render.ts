import { AppendRender } from "../../../core/renders/append_render";
import { Experience } from "../../../domain/entities/experience";
import { Position } from "../../../domain/entities/position";
import { MainSectionColumnRender } from "../common/main_section_column_render";
import { MainSectionRowRender } from "../common/main_section_row_render";

export class ExperiencesRender extends AppendRender<Experience<Position>[]> {
  fatherId: string = "experiences";

  build(experiences: Experience<Position>[]): void {
    const buildedMainSectionColumn = new MainSectionColumnRender({
      size: 3,
      children: [],
    });

    const builded = new MainSectionRowRender({
      children: [buildedMainSectionColumn.content],
    });

    this.append(builded.content);
  }
}
