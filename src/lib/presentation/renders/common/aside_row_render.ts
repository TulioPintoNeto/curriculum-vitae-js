import { UniversalRender } from "../universal_render";

export class AsideRowRender {
  rowClass: string = "row";
  asideColorClass: string = "gray";

  render: UniversalRender;

  constructor(render: UniversalRender) {
    this.render = render;
  }

  build(params: { children?: Node[] }): HTMLDivElement {
    return this.render.createDiv({
      classes: [this.rowClass, this.asideColorClass],
      children: params.children,
    });
  }
}
