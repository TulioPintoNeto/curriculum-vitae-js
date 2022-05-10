import { InterestRender } from "../../../presentation/renders/interests/interest_render";
import { paragraphRenderFactory } from "../common/paragraph_render_factory";

export const interestRenderFactory = (): InterestRender => {
  return new InterestRender({
    paragraphRender: paragraphRenderFactory(),
  });
};
