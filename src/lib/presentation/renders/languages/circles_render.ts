import { UserLanguage } from "../../../domain/entities/user_language";
import { UniversalRender } from "../universal_render";

export class CirclesRender {
  emptyCircleClass: string = "far";
  filledCircleClass: string = "fas";
  circleClass: string = "fa-circle";

  render: UniversalRender;

  constructor(render: UniversalRender) {
    this.render = render;
  }

  build(levelOfUser: number): HTMLElement[] {
    let levels: HTMLElement[] = [];

    for (let i = 0; i < 5; i++) {
      levels[i] = this._buildLevel(i, levelOfUser);
    }

    return levels;
  }

  private _buildLevel(level: number, levelOfUser: number) {
    const levelElement: HTMLElement = this.render.createI();
    const typeOfCircle: string =
      level < levelOfUser ? this.filledCircleClass : this.emptyCircleClass;

    levelElement.classList.add(this.circleClass, typeOfCircle);

    return levelElement;
  }
}
