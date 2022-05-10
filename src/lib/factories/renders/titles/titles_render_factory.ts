import { TitleRender } from "../../../presentation/renders/titles/title_render";

export const titleRenderFactory = (): TitleRender => {
  return new TitleRender();
};
