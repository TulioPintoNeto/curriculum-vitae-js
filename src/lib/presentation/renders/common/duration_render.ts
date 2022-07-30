import { NodeElement } from "../../../core/renders/elements/node_element";
import { ElementRender } from "../../../core/renders/element_render";
import { Classes } from "../../../core/utils/classes";
import { MainContent } from "../../../domain/entities/main_content";
import { ColumnRender } from "./column_render";
import { ParagraphRender } from "./paragraph_render";
import { SpanRender } from "./span_render";

interface DurationRenderParams {
  content: MainContent;
}

export class DurationRender extends ElementRender<DurationRenderParams> {
  build(params: DurationRenderParams): NodeElement {
    return new ColumnRender({
      classes: [Classes.paddingStart2, Classes.noPaddingEnd],
      size: 3,
      children: [
        new ParagraphRender({
          classes: [Classes.year, Classes.textBold],
          text: params.content.getYearsInterval(),
        }),
        new SpanRender({
          text: params.content.getDuration(),
        }),
      ],
    });
  }
}
