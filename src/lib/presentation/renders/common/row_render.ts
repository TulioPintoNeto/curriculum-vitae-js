import { ElementRender } from "../../../core/renders/element_render";
import { Classes } from "../../../core/utils/classes";
import { UniversalRender } from "../universal_render";

export class RowRender extends ElementRender {
  build(params: { children?: Node[]; classes?: string[] }): HTMLDivElement {
    return UniversalRender.createDiv({
      classes: this._getClassesWith(params.classes),
      children: params.children,
    });
  }

  protected classes(): string[] {
    return [Classes.row];
  }
}
