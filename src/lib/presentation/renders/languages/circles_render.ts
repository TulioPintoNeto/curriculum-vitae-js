import { Render } from "../../../core/renders/render";
import { IconRender, Icons } from "../common/icon_render";

export class CirclesRender implements Render<number, HTMLElement[]> {
  iconRender: IconRender;

  constructor(iconRender: IconRender) {
    this.iconRender = iconRender;
  }

  build(levelOfUser: number): HTMLElement[] {
    let levels: HTMLElement[] = [];

    for (let i = 0; i < 5; i++) {
      levels[i] = this._buildLevel(i, levelOfUser);
    }

    return levels;
  }

  private _buildLevel(level: number, levelOfUser: number) {
    const icon: Icons =
      level < levelOfUser ? Icons.FILLED_CIRCLE : Icons.EMPTY_CIRCLE;

    return this.iconRender.build(icon);
  }
}
