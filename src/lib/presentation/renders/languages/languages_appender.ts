import { Appender } from "../../../core/renders/appender";
import { UserLanguage } from "../../../domain/entities/user_language";
import { AsideRowRender } from "../common/aside_row_render";
import { LanguageRender } from "./language_render";

interface LanguagesAppenderParams {
  userLanguages: UserLanguage[];
}

export class LanguagesAppender extends Appender<LanguagesAppenderParams> {
  fatherId: string = "languages";

  build(params: LanguagesAppenderParams): void {
    for (let i = 0; i < params.userLanguages.length; i += 2) {
      const builded = new AsideRowRender({
        children: this._rowBuilder({
          userLanguages: params.userLanguages,
          index: i,
        }),
      });

      this.append(builded.content);
    }
  }

  private _rowBuilder(params: {
    userLanguages: UserLanguage[];
    index: number;
  }): Node[] {
    const row = [];

    const builded = new LanguageRender({
      userLanguage: params.userLanguages[params.index],
    });
    row.push(builded.content);

    if (params.userLanguages[params.index + 1] !== undefined) {
      const builded1 = new LanguageRender({
        userLanguage: params.userLanguages[params.index + 1],
      });
      row.push(builded1.content);
    }

    return row;
  }
}
