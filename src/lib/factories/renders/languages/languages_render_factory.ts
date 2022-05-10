import { LanguagesRender } from "../../../presentation/renders/languages/languages_render";

export const languagesRenderFactory = (): LanguagesRender => {
  return new LanguagesRender();
};
