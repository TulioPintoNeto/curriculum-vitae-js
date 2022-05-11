import { NodeElement } from "../../../core/renders/elements/node_element";
import { NewElementRender } from "../../../core/renders/element_render";
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

export class IconRender extends NewElementRender<IconRenderParams> {
  build(params: IconRenderParams): NodeElement {
    const classList = params.icon.split(" ");

    return new NodeElement(
      UniversalRender.createI({
        classes: classList,
      })
    );
  }
}
