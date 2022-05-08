import { InterestsRender } from "../../../presentation/renders/interests/interests_render";
import { universalRenderFactory } from "../universal_render_factory";
import { interestRenderFactory } from "./interest_render_factory";

export const interestsRenderFactory = (): InterestsRender => {
  return new InterestsRender({
    interestRender: interestRenderFactory(),
    render: universalRenderFactory(),
  });
};
