import { NodeElement } from "../../../core/renders/elements/node_element";
import { ElementRender } from "../../../core/renders/element_render";
import { UniversalRender } from "../universals/universal_render";

interface SpanRenderParams {
  classes?: string[];
  text: string;
}

export class SpanRender extends ElementRender<SpanRenderParams> {
  build(params: SpanRenderParams): NodeElement {
    return new NodeElement(
      UniversalRender.createSpan({
        classes: params.classes,
        children: [new NodeElement(UniversalRender.createText(params.text))],
      })
    );
  }
}
