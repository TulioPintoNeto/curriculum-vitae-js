import { Classes } from "../../../core/utils/classes";
import { UniversalRender } from "../universal_render";
import { RowRender } from "./row_render";

export class AsideRowRender extends RowRender {
  constructor(render: UniversalRender) {
    super(render);
  }

  protected classes(): string[] {
    const classes = super.classes();

    classes.push(Classes.asideColor);

    return classes;
  }
}
