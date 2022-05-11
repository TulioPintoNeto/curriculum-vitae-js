import { UniversalRender } from "../../presentation/renders/universals/universal_render";
import { CustomElement } from "./elements/custom_element";
import { Render } from "./render";

export abstract class Appender<Params> extends Render<Params, void> {
  constructor(params: Params) {
    super();
    this.build(params);
  }

  abstract getFatherId(): string;

  protected append(...elements: CustomElement[]): void {
    const fatherElement: HTMLElement = this._getFatherElement();

    UniversalRender.removeAllChildren(fatherElement);

    elements.forEach((element) => {
      fatherElement.append(element.content);
    });
  }

  private _getFatherElement(): HTMLElement {
    const element = document.getElementById(this.getFatherId());

    if (element === null) {
      throw Error("Could not find father element.");
    }

    return element;
  }
}
