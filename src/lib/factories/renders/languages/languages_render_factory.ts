import { LanguagesRender } from "../../../presentation/renders/languages/languages_render";
import { languageRenderFactory } from "./language_render_factory";

export const languagesRenderFactory = (): LanguagesRender => {
  return new LanguagesRender({
    languageRender: languageRenderFactory(),
  });
};
