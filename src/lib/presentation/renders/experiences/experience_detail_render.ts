import { ElementRender } from "../../../core/renders/element_render";
import { Classes } from "../../../core/utils/classes";
import { Experience } from "../../../domain/entities/experience";
import { Position } from "../../../domain/entities/position";
import { ColumnRender } from "../common/column_render";
import { ParagraphRender } from "../common/paragraph_render";

interface ExperienceDetailRenderParams {
  experience: Experience<Position>;
}

export class ExperienceDetailRender extends ElementRender<ExperienceDetailRenderParams> {
  build(params: ExperienceDetailRenderParams) {
    return new ColumnRender({
      classes: [Classes.noPaddingStart, Classes.paddingEnd2],
      size: 9,
      children: [
        new ParagraphRender({
          classes: [Classes.activity, Classes.textBold],
          text: params.experience.title,
        }),
        new ParagraphRender({
          classes: [Classes.local],
          text: params.experience.company,
        }),
        ...params.experience.responsabilities.map(this.responsabilityRender),
      ],
    });
  }

  responsabilityRender(responsability: string): ParagraphRender {
    return new ParagraphRender({
      classes: [Classes.description],
      text: `🞄 ${responsability}`,
    });
  }
}
