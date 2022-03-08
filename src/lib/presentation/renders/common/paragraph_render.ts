import { UniversalRender } from "../universal_render";

export class ParagraphRender {
  withoutMarginBottomClass: string = "mb-0";

  render: UniversalRender;

  constructor(render: UniversalRender) {
    this.render = render;
  }

  build(params: { text: string; withoutMarginBottom?: boolean }) {
    return this.render.createParagraph({
      classes: [
        params.withoutMarginBottom ? this.withoutMarginBottomClass : "",
      ],
      children: [this.render.createText(params.text)],
    });
  }
}
