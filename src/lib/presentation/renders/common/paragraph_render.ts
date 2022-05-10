import { ElementRender } from "../../../core/renders/element_render";
import { Classes } from "../../../core/utils/classes";
import { UniversalRender } from "../universal_render";

interface ParagraphRenderParams {
  text: string;
  withoutMarginBottom?: boolean;
}

export class ParagraphRender extends ElementRender<
  ParagraphRenderParams,
  HTMLParagraphElement
> {
  content: HTMLParagraphElement;

  constructor(params: ParagraphRenderParams) {
    super();
    this.content = this.build(params);
  }

  build(params: ParagraphRenderParams): HTMLParagraphElement {
    return UniversalRender.createParagraph({
      classes: [params.withoutMarginBottom ? Classes.noMarginBottom : ""],
      children: [UniversalRender.createText(params.text)],
    });
  }
}
