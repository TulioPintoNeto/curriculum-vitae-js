import { AppendRender } from "../../../core/renders/append_render";
import { Experience } from "../../../domain/entities/experience";
import { Position } from "../../../domain/entities/position";
import { MainSectionColumnRender } from "../common/main_section_column_render";
import { MainSectionRowRender } from "../common/main_section_row_render";

export class ExperiencesRender extends AppendRender<Experience<Position>[]> {
  fatherId: string = "experiences";

  mainSectionColumnRender: MainSectionColumnRender;

  constructor(params: { mainSectionColumnRender: MainSectionColumnRender }) {
    super();
    this.mainSectionColumnRender = params.mainSectionColumnRender;
  }

  build(experiences: Experience<Position>[]): void {
    const builded = new MainSectionRowRender({
      children: [
        this.mainSectionColumnRender.build({
          size: 3,

          children: [],
        }),
      ],
    });

    this.append(builded.content);
  }
}
