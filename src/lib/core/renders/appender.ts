import { UniversalRender } from "../../presentation/renders/universals/universal_render";
import { Render } from "./render";

export abstract class Appender<Params> extends Render<Params, void> {
  constructor(params: Params) {
    super();
    this.build(params);
  }

  abstract getFatherId(): string;

  protected append(...nodes: (string | Node)[]): void {
    const fatherElement: HTMLElement = this._getFatherElement();

    UniversalRender.removeAllChildren(fatherElement);

    fatherElement.append(...nodes);
  }

  private _getFatherElement(): HTMLElement {
    const element = document.getElementById(this.getFatherId());

    if (element === null) {
      throw Error("Could not find father element.");
    }

    return element;
  }
}
