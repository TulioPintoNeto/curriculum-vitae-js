import { Classes } from "../../../core/utils/classes";
import { RowRender, RowRenderParams } from "./row_render";

export class AsideRowRender extends RowRender {
  constructor(params: RowRenderParams) {
    super(params);
  }

  protected classes(): string[] {
    const classes = super.classes();

    classes.push(Classes.asideColor);

    return classes;
  }
}
