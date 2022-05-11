import { NodeElement } from "../../../core/renders/elements/node_element";
import { ElementRender } from "../../../core/renders/element_render";
import { IconRender, Icons } from "../common/icon_render";

interface CircleRenderParams {
  level: number;
  levelOfUser: number;
}

export class CircleRender extends ElementRender<CircleRenderParams> {
  build(params: CircleRenderParams): NodeElement {
    return new IconRender({ icon: this._getIcon(params) });
  }

  _getIcon(params: CircleRenderParams) {
    return params.level < params.levelOfUser
      ? Icons.FILLED_CIRCLE
      : Icons.EMPTY_CIRCLE;
  }
}
