import { ElementRender } from "../../../core/renders/element_render";
import { UniversalRender } from "../universal_render";

export class ColumnRender extends ElementRender {
  render: UniversalRender;

  constructor(render: UniversalRender) {
    super();
    this.render = render;
  }

  build(params: {
    children?: Node[];
    classes?: string[];
    size: number;
  }): HTMLDivElement {
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
