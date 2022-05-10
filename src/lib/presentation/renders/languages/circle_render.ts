import { ElementRender } from "../../../core/renders/element_render";
import { IconRender, Icons } from "../common/icon_render";

interface CircleRenderParams {
  level: number;
  levelOfUser: number;
}

export class CircleRender extends ElementRender<
  CircleRenderParams,
  HTMLElement
> {
  build(params: CircleRenderParams): HTMLElement {
    const icon: Icons =
      params.level < params.levelOfUser
        ? Icons.FILLED_CIRCLE
        : Icons.EMPTY_CIRCLE;

    const builded = new IconRender({ icon });

    return builded.content;
  }
}
