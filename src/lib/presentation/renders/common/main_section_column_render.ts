import { Classes } from "../../../core/utils/classes";
import { ColumnRender } from "./column_render";

export class MainSectionColumnRender extends ColumnRender {
  protected _getClasses(params: {
    classes?: string[];
    size: number;
  }): string[] {
    const additionalClasses = [Classes.paddingStart2, Classes.noPaddingEnd];

    if (params.classes !== null) {
      params.classes?.push(...additionalClasses);
    } else {
      params.classes = additionalClasses;
    }

    return super._getClasses(params);
  }
}
