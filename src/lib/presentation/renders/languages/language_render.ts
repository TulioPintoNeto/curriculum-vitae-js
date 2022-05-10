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
      children: [buildedParagraph.content, ...buildedLevels],
    });

    return builded.content;
  }

  private _buildedLevels(levelOfUser: number): HTMLElement[] {
    let levels: HTMLElement[] = [];

    for (let i = 0; i < 5; i++) {
      const builded = new CircleRender({ level: i, levelOfUser });
      levels[i] = builded.content;
    }

    return levels;
  }
}
