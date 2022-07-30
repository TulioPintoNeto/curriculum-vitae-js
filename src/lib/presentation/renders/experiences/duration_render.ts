import { NodeElement } from "../../../core/renders/elements/node_element";
import { ElementRender } from "../../../core/renders/element_render";
import { Classes } from "../../../core/utils/classes";
import { Experience } from "../../../domain/entities/experience";
import { Position } from "../../../domain/entities/position";
import { ColumnRender } from "../common/column_render";
import { ParagraphRender } from "../common/paragraph_render";
import { SpanRender } from "../common/span_render";

interface DurationRenderParams {
  experience: Experience<Position>;
}

export class DurationRender extends ElementRender<DurationRenderParams> {
  build(params: DurationRenderParams): NodeElement {
    return new ColumnRender({
      classes: [Classes.paddingStart2, Classes.noPaddingEnd],
      size: 3,
      children: [
        new ParagraphRender({
          classes: [Classes.year, Classes.textBold],
          text: params.experience.getYearsInterval(),
        }),
        new SpanRender({
          text: params.experience.getDuration(),
        }),
      ],
    });
  }
}
