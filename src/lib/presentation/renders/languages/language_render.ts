import { UserLanguage } from "../../../domain/entities/user_language";
import { ColumnRender } from "../common/column_render";
import { ParagraphRender } from "../common/paragraph_render";
import { CirclesRender } from "./circles_render";

export class LanguageRender {
  circlesRender: CirclesRender;
  columnRender: ColumnRender;
  paragraphRender: ParagraphRender;

  constructor(params: {
    circlesRender: CirclesRender;
    columnRender: ColumnRender;
    paragraphRender: ParagraphRender;
  }) {
    this.circlesRender = params.circlesRender;
    this.columnRender = params.columnRender;
    this.paragraphRender = params.paragraphRender;
  }

  build(userLanguage: UserLanguage): HTMLDivElement {
    return this.columnRender.build({
      size: 6,
      children: [
        this.paragraphRender.build({
          text: userLanguage.language,
          withoutMarginBottom: true,
        }),
        ...this.circlesRender.build(userLanguage.level),
      ],
    });
  }
}
