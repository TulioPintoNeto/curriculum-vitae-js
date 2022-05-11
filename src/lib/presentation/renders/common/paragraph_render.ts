import { NodeElement } from "../../../core/renders/elements/node_element";
import { ElementRender } from "../../../core/renders/element_render";
import { Classes } from "../../../core/utils/classes";
import { UniversalRender } from "../universals/universal_render";

interface ParagraphRenderParams {
  text: string;
  withoutMarginBottom?: boolean;
}

export class ParagraphRender extends ElementRender<
  ParagraphRenderParams,
  HTMLParagraphElement
> {
  build(params: ParagraphRenderParams): HTMLParagraphElement {
    return UniversalRender.createParagraph({
      classes: [params.withoutMarginBottom ? Classes.noMarginBottom : ""],
      children: [new NodeElement(UniversalRender.createText(params.text))],
    });
  }
}
