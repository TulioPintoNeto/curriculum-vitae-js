import { Render } from "../../../core/renders/render";
import { IconRender, Icons } from "../common/icon_render";

interface CirclesRenderParams {
  levelOfUser: number;
}

export class CirclesRender
  implements Render<CirclesRenderParams, HTMLElement[]>
{
  content: HTMLElement[];

  constructor(params: CirclesRenderParams) {
    this.content = this.build(params);
  }

  build(params: CirclesRenderParams): HTMLElement[] {
    let levels: HTMLElement[] = [];

    for (let i = 0; i < 5; i++) {
      levels[i] = this._buildLevel(i, params.levelOfUser);
    }

    return levels;
  }

  private _buildLevel(level: number, levelOfUser: number) {
    const icon: Icons =
      level < levelOfUser ? Icons.FILLED_CIRCLE : Icons.EMPTY_CIRCLE;

    const builded = new IconRender({ icon });

    return builded.content;
  }
}
