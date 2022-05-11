import { NodeElement } from "../../../core/renders/elements/node_element";
import { ElementRender } from "../../../core/renders/element_render";
import { Classes } from "../../../core/utils/classes";
import { UniversalRender } from "../universals/universal_render";

interface RowRenderParams {
  children?: NodeElement[];
  classes?: string[];
}

export class RowRender extends ElementRender<RowRenderParams, HTMLDivElement> {
  build(params: RowRenderParams): HTMLDivElement {
    return UniversalRender.createDiv({
      classes: this._getClassesWith(params.classes),
      children: params.children,
    });
  }

  protected classes(): string[] {
    return [Classes.row];
  }
}
