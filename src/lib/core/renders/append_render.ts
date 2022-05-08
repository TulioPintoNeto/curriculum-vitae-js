import { UniversalRender } from "../../presentation/renders/universal_render";
import { Render } from "./render";

export abstract class AppendRender<Params> extends Render<Params, void> {
  abstract fatherId: string;

  render: UniversalRender;

  constructor(render: UniversalRender) {
    super();
    this.render = render;
  }

  protected append(...nodes: (string | Node)[]): void {
    const fatherElement: HTMLElement = this._getFatherElement();

    this.render.removeAllChildren(fatherElement);

    fatherElement.append(...nodes);
  }

  private _getFatherElement(): HTMLElement {
    const element = document.getElementById(this.fatherId);

    if (element === null) {
      throw Error("Could not find father element.");
    }

    return element;
  }
}
