import { AppendRender } from "../../../core/renders/append_render";
import { Experience } from "../../../domain/entities/experience";
import { Position } from "../../../domain/entities/position";
import { MainSectionColumnRender } from "../common/main_section_column_render";
import { MainSectionRowRender } from "../common/main_section_row_render";
import { UniversalRender } from "../universal_render";

export class ExperiencesRender extends AppendRender<Experience<Position>[]> {
  fatherId: string = "experiences";

  mainSectionColumnRender: MainSectionColumnRender;
  mainSectionRowRender: MainSectionRowRender;

  constructor(params: {
    mainSectionColumnRender: MainSectionColumnRender;
    mainSectionRowRender: MainSectionRowRender;
    render: UniversalRender;
  }) {
    super(params.render);
    this.mainSectionColumnRender = params.mainSectionColumnRender;
    this.mainSectionRowRender = params.mainSectionRowRender;
  }

  build(experiences: Experience<Position>[]): void {
    this.append(
      this.mainSectionRowRender.build({
        children: [
          this.mainSectionColumnRender.build({
            size: 3,

            children: [],
          }),
        ],
      })
    );
  }
}
