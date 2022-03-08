import { UniversalRender } from "../universal_render";

export class ColumnRender {
  render: UniversalRender;

  constructor(render: UniversalRender) {
    this.render = render;
  }

  build(params: { children?: Node[]; size: number }): HTMLDivElement {
    return this.render.createDiv({
      classes: [this._columnSize(params.size)],
      children: params.children,
    });
  }

  private _columnSize(size: number): string {
    return `col-${size}`;
  }
}
