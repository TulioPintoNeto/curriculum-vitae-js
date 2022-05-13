import { NodeElement } from "../../../core/renders/elements/node_element";
import { ElementRender } from "../../../core/renders/element_render";
import { Classes } from "../../../core/utils/classes";
import { UniversalRender } from "../universals/universal_render";

interface ParagraphRenderParams {
  text: string;
  withMarginBottom?: boolean;
}

export class ParagraphRender extends ElementRender<ParagraphRenderParams> {
  build(params: ParagraphRenderParams): NodeElement {
    return new NodeElement(
      UniversalRender.createParagraph({
        classes: [params.withMarginBottom ? "" : Classes.noMarginBottom],
        children: [new NodeElement(UniversalRender.createText(params.text))],
      })
    );
  }
}
