import { Classes } from "../../../core/utils/classes";
import { RowRender } from "./row_render";

export class AsideRowRender extends RowRender {
  protected classes(): string[] {
    const classes = super.classes();

    classes.push(Classes.asideColor);

    return classes;
  }
}
