import { Classes } from "../../../core/utils/classes";
import { UniversalRender } from "../universal_render";

export class ParagraphRender {
  build(params: { text: string; withoutMarginBottom?: boolean }) {
    return UniversalRender.createParagraph({
      classes: [params.withoutMarginBottom ? Classes.noMarginBottom : ""],
      children: [UniversalRender.createText(params.text)],
    });
  }
}
