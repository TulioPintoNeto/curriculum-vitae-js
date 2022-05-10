import { ElementRender } from "../../../core/renders/element_render";
import { UniversalRender } from "../universal_render";

export enum Icons {
  EMPTY_CIRCLE = "far fa-circle",
  FILLED_CIRCLE = "fas fa-circle",
  BIKING = "fas fa-biking gray",
  MUSIC = "fas fa-music gray",
}

interface IconRenderParams {
  icon: Icons;
}

export class IconRender extends ElementRender<IconRenderParams, HTMLElement> {
  content: HTMLElement;

  constructor(params: IconRenderParams) {
    super();
    this.content = this.build(params);
  }

  build(params: IconRenderParams): HTMLElement {
    const element: HTMLElement = UniversalRender.createI();
    const classList = params.icon.split(" ");

    element.classList.add(...classList);

    return element;
  }
}
