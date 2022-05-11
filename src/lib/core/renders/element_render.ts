import { NodeElement } from "./elements/node_element";
import { Render } from "./render";

export abstract class ElementRender<Params>
  extends Render<Params, NodeElement>
  implements NodeElement
{
  content: Node;

  constructor(params: Params) {
    super();
    const nodeElement = this.build(params);
    this.content = nodeElement.content;
  }

  protected classes(): string[] {
    return [];
  }

  protected _getClassesWith(additionalClasses?: string[]): string[] {
    const classes = this.classes();

    if (additionalClasses !== undefined) {
      classes.push(...additionalClasses);
    }

    return classes;
  }
}
