import { Appender } from "../../../core/renders/appender";
import { NodeElement } from "../../../core/renders/elements/node_element";
import { UserLanguage } from "../../../domain/entities/user_language";
import { AsideRowRender } from "../common/aside_row_render";
import { LanguageRender } from "./language_render";

interface LanguagesAppenderParams {
  userLanguages: UserLanguage[];
}

export class LanguagesAppender extends Appender<LanguagesAppenderParams> {
  build(params: LanguagesAppenderParams): void {
    for (let i = 0; i < params.userLanguages.length; i += 2) {
      this.append(
        new AsideRowRender({
          children: this._rowBuilder({
            userLanguages: params.userLanguages,
            index: i,
          }),
        })
      );
    }
  }

  get fatherId(): string {
    return "languages";
  }

  private _rowBuilder(params: {
    userLanguages: UserLanguage[];
    index: number;
  }): NodeElement[] {
    const row: NodeElement[] = [];

    row.push(
      new LanguageRender({
        userLanguage: params.userLanguages[params.index],
      })
    );

    if (params.userLanguages[params.index + 1] !== undefined) {
      row.push(
        new LanguageRender({
          userLanguage: params.userLanguages[params.index + 1],
        })
      );
    }

    return row;
  }
}
