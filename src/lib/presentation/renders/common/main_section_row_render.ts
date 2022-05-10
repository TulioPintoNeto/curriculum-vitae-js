import { Classes } from "../../../core/utils/classes";
import { RowRender } from "./row_render";

export class MainSectionRowRender extends RowRender {
  additionalClasses: string[] = [
    Classes.mainSectionTextColor,
    Classes.mainSectionContent,
  ];

  protected classes(): string[] {
    const classes = super.classes();

    classes.push(...this.additionalClasses);

    return classes;
  }
}
