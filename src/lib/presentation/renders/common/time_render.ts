import { NodeElement } from "../../../core/renders/elements/node_element";
import { ElementRender } from "../../../core/renders/element_render";
import { Classes } from "../../../core/utils/classes";
import { MainContent } from "../../../domain/entities/main_content";
import { ColumnRender } from "./column_render";
import { ParagraphRender } from "./paragraph_render";
import { SpanRender } from "./span_render";

interface TimeRenderParams {
  content: MainContent;
  hasDuration?: boolean;
}

export class TimeRender extends ElementRender<TimeRenderParams> {
  build(params: TimeRenderParams): NodeElement {
    return new ColumnRender({
      classes: [Classes.paddingStart2, Classes.noPaddingEnd],
      size: 3,
      children: this.getChildren(params),
    });
  }

  private getChildren(params: TimeRenderParams): NodeElement[] {
    const { hasDuration = true } = params;
    const children: NodeElement[] = [
      new ParagraphRender({
        classes: [Classes.year, Classes.textBold],
        text: params.content.getYearsInterval(),
      }),
    ];

    if (hasDuration) {
      children.push(
        new SpanRender({
          text: params.content.getDuration(),
        })
      );
    }

    return children;
  }
}
