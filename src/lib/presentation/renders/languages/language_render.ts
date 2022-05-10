import { UserLanguage } from "../../../domain/entities/user_language";
import { ColumnRender } from "../common/column_render";
import { ParagraphRender } from "../common/paragraph_render";
import { CirclesRender } from "./circles_render";

export class LanguageRender {
  circlesRender: CirclesRender;
  paragraphRender: ParagraphRender;

  constructor(params: {
    circlesRender: CirclesRender;
    paragraphRender: ParagraphRender;
  }) {
    this.circlesRender = params.circlesRender;
    this.paragraphRender = params.paragraphRender;
  }

  build(userLanguage: UserLanguage): HTMLDivElement {
    const builded = new ColumnRender({
      size: 6,
      children: [
        this.paragraphRender.build({
          text: userLanguage.language,
          withoutMarginBottom: true,
        }),
        ...this.circlesRender.build(userLanguage.level),
      ],
    });

    return builded.content;
  }
}
