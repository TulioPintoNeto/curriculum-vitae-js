import { circlesRenderFactory } from "./circles_render_factory";
import { columnRenderFactory } from "../common/column_render_factory";
import { paragraphRenderFactory } from "../common/paragraph_render_factory";
import { LanguageRender } from "../../../presentation/renders/languages/language_render";

export const languageRenderFactory = (): LanguageRender => {
  return new LanguageRender({
    circlesRender: circlesRenderFactory(),
    columnRender: columnRenderFactory(),
    paragraphRender: paragraphRenderFactory(),
  });
};
