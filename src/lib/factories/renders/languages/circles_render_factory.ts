import { CirclesRender } from "../../../presentation/renders/languages/circles_render";

export const circlesRenderFactory = (): CirclesRender => {
  return new CirclesRender();
};
