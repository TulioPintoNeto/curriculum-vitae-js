import { UserLanguage } from "../../../domain/entities/user_language";
import { ColumnRender } from "../common/column_render";
import { ParagraphRender } from "../common/paragraph_render";
import { CirclesRender } from "./circles_render";

export class LanguageRender {
  build(userLanguage: UserLanguage): HTMLDivElement {
    const buildedParagraph = new ParagraphRender({
      text: userLanguage.language,
      withoutMarginBottom: true,
    });
    const buildedLevels = new CirclesRender({
      levelOfUser: userLanguage.level,
    });
    const builded = new ColumnRender({
      size: 6,
      children: [buildedParagraph.content, ...buildedLevels.content],
    });

    return builded.content;
  }
}
