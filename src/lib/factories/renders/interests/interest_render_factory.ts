import { InterestRender } from "../../../presentation/renders/interests/interest_render";

export const interestRenderFactory = (): InterestRender => {
  return new InterestRender();
};
