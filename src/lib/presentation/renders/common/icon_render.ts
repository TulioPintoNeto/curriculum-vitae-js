import { ElementRender } from "../../../core/renders/element_render";
import { UniversalRender } from "../universals/universal_render";

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
  build(params: IconRenderParams): HTMLElement {
    const classList = params.icon.split(" ");
    const element: HTMLElement = UniversalRender.createI({
      classes: classList,
    });

    return element;
  }
}
