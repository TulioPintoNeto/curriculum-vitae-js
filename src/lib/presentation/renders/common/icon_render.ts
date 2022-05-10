import { Render } from "../../../core/renders/render";
import { UniversalRender } from "../universal_render";

export enum Icons {
  EMPTY_CIRCLE = "far fa-circle",
  FILLED_CIRCLE = "fas fa-circle",
  BIKING = "fas fa-biking gray",
  MUSIC = "fas fa-music gray",
}

export class IconRender implements Render<Icons, HTMLElement> {
  render: UniversalRender;

  constructor(render: UniversalRender) {
    this.render = render;
  }

  build(icon: Icons): HTMLElement {
    const element: HTMLElement = UniversalRender.createI();
    const classList = icon.split(" ");

    element.classList.add(...classList);

    return element;
  }
}
