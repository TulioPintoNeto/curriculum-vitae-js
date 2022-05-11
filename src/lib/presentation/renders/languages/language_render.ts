import { NodeElement } from "../../../core/renders/elements/node_element";
import {
  ElementRender,
  NewElementRender,
} from "../../../core/renders/element_render";
import { UserLanguage } from "../../../domain/entities/user_language";
import { ColumnRender } from "../common/column_render";
import { ParagraphRender } from "../common/paragraph_render";
import { CircleRender } from "./circle_render";

interface LanguageRenderParams {
  userLanguage: UserLanguage;
}

export class LanguageRender extends NewElementRender<LanguageRenderParams> {
  build(params: LanguageRenderParams): NodeElement {
    return new ColumnRender({
      size: 6,
      children: [
        new ParagraphRender({
          text: params.userLanguage.language,
          withoutMarginBottom: true,
        }),
        ...this._buildedLevels(params),
      ],
    });
  }

  private _buildedLevels(params: LanguageRenderParams): NodeElement[] {
    let levels: NodeElement[] = [];

    for (let i = 0; i < 5; i++) {
      levels[i] = new CircleRender({
        level: i,
        levelOfUser: params.userLanguage.level,
      });
    }

    return levels;
  }
}
