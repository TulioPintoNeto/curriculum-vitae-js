import { NodeElement } from "../../../core/renders/elements/node_element";
import { ElementRender } from "../../../core/renders/element_render";
import { Classes } from "../../../core/utils/classes";
import { MainContent } from "../../../domain/entities/main_content";
import { ColumnRender } from "./column_render";
import { ParagraphRender } from "./paragraph_render";

interface MainContentDetailRenderParams {
  content: MainContent;
  extraContentRenders?: NodeElement[];
}

export class MainContentDetailRender extends ElementRender<MainContentDetailRenderParams> {
  build(params: MainContentDetailRenderParams) {
    return new ColumnRender({
      classes: [Classes.noPaddingStart, Classes.paddingEnd2],
      size: 9,
      children: [
        new ParagraphRender({
          classes: [Classes.activity, Classes.textBold],
          text: params.content.title,
        }),
        new ParagraphRender({
          classes: [Classes.local],
          text: params.content.company,
        }),
        ...(params.extraContentRenders ?? []),
      ],
    });
  }
}
