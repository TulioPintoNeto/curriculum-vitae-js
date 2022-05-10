import { AppendRender } from "../../../core/renders/append_render";
import { UserLanguage } from "../../../domain/entities/user_language";
import { AsideRowRender } from "../common/aside_row_render";
import { LanguageRender } from "./language_render";

interface RowBuilderParams {
  userLanguages: UserLanguage[];
  index: number;
}

export class LanguagesRender extends AppendRender<UserLanguage[]> {
  fatherId: string = "languages";

  languageRender: LanguageRender;

  constructor(params: { languageRender: LanguageRender }) {
    super();
    this.languageRender = params.languageRender;
  }

  build(userLanguages: UserLanguage[]): void {
    for (let i = 0; i < userLanguages.length; i += 2) {
      const builded = new AsideRowRender({
        children: this._rowBuilder({ userLanguages, index: i }),
      });

      this.append(builded.content);
    }
  }

  private _rowBuilder({ userLanguages, index }: RowBuilderParams): Node[] {
    const row = [];

    row.push(this.languageRender.build(userLanguages[index]));

    if (userLanguages[index + 1] !== undefined) {
      row.push(this.languageRender.build(userLanguages[index + 1]));
    }

    return row;
  }
}
