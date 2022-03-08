import { UniversalRender } from "../../presentation/renders/universal_render";

export const universalRenderFactory = (): UniversalRender => {
  return new UniversalRender();
};
