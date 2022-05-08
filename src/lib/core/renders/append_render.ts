import { Render } from "./render";

export abstract class AppendRender<Params> extends Render<Params, void> {
  abstract fatherId: string;

  protected _getFatherElement(): HTMLElement {
    const element = document.getElementById(this.fatherId);

    if (element === null) {
      throw Error("Could not find father element.");
    }

    return element;
  }
}
