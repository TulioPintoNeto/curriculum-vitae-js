import { AppendRender } from "../../../core/renders/append_render";
import { Render } from "../../../core/renders/render";
import { UserLanguage } from "../../../domain/entities/user_language";
import { AsideRowRender } from "../common/aside_row_render";
import { UniversalRender } from "../universal_render";
import { LanguageRender } from "./language_render";

interface RowBuilderParams {
  userLanguages: UserLanguage[];
  index: number;
}

export class LanguagesRender extends AppendRender<UserLanguage[]> {
  fatherId: string = "languages";

  asideRowRender: AsideRowRender;
  languageRender: LanguageRender;
  render: UniversalRender;

  constructor(params: {
    asideRowRender: AsideRowRender;
    languageRender: LanguageRender;
    render: UniversalRender;
  }) {
    super();
    this.asideRowRender = params.asideRowRender;
    this.languageRender = params.languageRender;
    this.render = params.render;
  }

  build(userLanguages: UserLanguage[]): void {
    for (let i = 0; i < userLanguages.length; i += 2) {
      this.append(
        this.asideRowRender.build({
          children: this._rowBuilder({ userLanguages, index: i }),
        })
      );
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
