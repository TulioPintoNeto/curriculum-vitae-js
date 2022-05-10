import { Classes } from "../../../core/utils/classes";
import { UniversalRender } from "../universal_render";

interface ParagraphRenderParams {
  text: string;
  withoutMarginBottom?: boolean;
}

export class ParagraphRender {
  content: HTMLParagraphElement;

  constructor(params: ParagraphRenderParams) {
    this.content = this.build(params);
  }

  build(params: ParagraphRenderParams) {
    return UniversalRender.createParagraph({
      classes: [params.withoutMarginBottom ? Classes.noMarginBottom : ""],
      children: [UniversalRender.createText(params.text)],
    });
  }
}
