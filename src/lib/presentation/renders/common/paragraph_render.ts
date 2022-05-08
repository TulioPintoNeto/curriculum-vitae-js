import { Classes } from "../../../core/utils/classes";
import { UniversalRender } from "../universal_render";

export class ParagraphRender {
  render: UniversalRender;

  constructor(render: UniversalRender) {
    this.render = render;
  }

  build(params: { text: string; withoutMarginBottom?: boolean }) {
    return this.render.createParagraph({
      classes: [params.withoutMarginBottom ? Classes.noMarginBottom : ""],
      children: [this.render.createText(params.text)],
    });
  }
}
