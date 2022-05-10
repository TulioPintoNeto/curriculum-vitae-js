import { LanguagesRender } from "../../../presentation/renders/languages/languages_render";
import { asideRowRenderFactory } from "../common/aside_row_render_factory";
import { languageRenderFactory } from "./language_render_factory";

export const languagesRenderFactory = (): LanguagesRender => {
  return new LanguagesRender({
    asideRowRender: asideRowRenderFactory(),
    languageRender: languageRenderFactory(),
  });
};
