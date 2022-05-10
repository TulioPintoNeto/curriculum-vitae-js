import { Render } from "../../../core/renders/render";
import { UserLanguage } from "../../../domain/entities/user_language";
import { ColumnRender } from "../common/column_render";
import { ParagraphRender } from "../common/paragraph_render";
import { CirclesRender } from "./circles_render";

interface LanguageRenderParams {
  userLanguage: UserLanguage;
}

export class LanguageRender extends Render<
  LanguageRenderParams,
  HTMLDivElement
> {
  content: HTMLDivElement;

  constructor(params: LanguageRenderParams) {
    super();
    this.content = this.build(params);
  }

  build(params: LanguageRenderParams): HTMLDivElement {
    const buildedParagraph = new ParagraphRender({
      text: params.userLanguage.language,
      withoutMarginBottom: true,
    });
    const buildedLevels = new CirclesRender({
      levelOfUser: params.userLanguage.level,
    });
    const builded = new ColumnRender({
      size: 6,
      children: [buildedParagraph.content, ...buildedLevels.content],
    });

    return builded.content;
  }
}
