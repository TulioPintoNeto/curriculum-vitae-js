import { NodeElement } from "../../../core/renders/elements/node_element";
import { ElementRender } from "../../../core/renders/element_render";
import { UniversalRender } from "../universals/universal_render";

interface ColumnReaderParams {
  children?: NodeElement[];
  classes?: string[];
  size: number;
}

export class ColumnRender extends ElementRender<
  ColumnReaderParams,
  HTMLDivElement
> {
  build(params: ColumnReaderParams): HTMLDivElement {
    return UniversalRender.createDiv({
      classes: this._getClasses({ classes: params.classes, size: params.size }),
      children: params.children,
    });
  }

  protected _getClasses(params: {
    classes?: string[];
    size: number;
  }): string[] {
    const classes = this._getClassesWith(params.classes);
    const columnClass = this._columnSize(params.size);

    classes.push(columnClass);

    return classes;
  }

  private _columnSize(size: number): string {
    return `col-${size}`;
  }
}
