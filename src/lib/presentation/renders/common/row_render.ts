import { ElementRender } from "../../../core/renders/element_render";
import { Classes } from "../../../core/utils/classes";
import { UniversalRender } from "../universal_render";

interface RowRenderParams {
  children?: Node[];
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
