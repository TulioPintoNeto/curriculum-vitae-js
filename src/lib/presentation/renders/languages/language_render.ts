import { NodeElement } from "../../../core/renders/elements/node_element";
import { ElementRender } from "../../../core/renders/element_render";
import { UserLanguage } from "../../../domain/entities/user_language";
import { ColumnRender } from "../common/column_render";
import { ParagraphRender } from "../common/paragraph_render";
import { CircleRender } from "./circle_render";

interface LanguageRenderParams {
  userLanguage: UserLanguage;
}

export class LanguageRender extends ElementRender<
  LanguageRenderParams,
  HTMLDivElement
> {
  build(params: LanguageRenderParams): HTMLDivElement {
    const buildedParagraph = new ParagraphRender({
      text: params.userLanguage.language,
      withoutMarginBottom: true,
    });
    const buildedLevels = this._buildedLevels(params.userLanguage.level);
    const builded = new ColumnRender({
      size: 6,
      children: [buildedParagraph, ...buildedLevels],
    });

    return builded.content;
  }

  private _buildedLevels(levelOfUser: number): NodeElement[] {
    let levels: NodeElement[] = [];

    for (let i = 0; i < 5; i++) {
      levels[i] = new CircleRender({ level: i, levelOfUser });
    }

    return levels;
  }
}
