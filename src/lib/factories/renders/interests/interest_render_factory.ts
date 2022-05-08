import { InterestRender } from "../../../presentation/renders/interests/interest_render";
import { asideRowRenderFactory } from "../common/aside_row_render_factory";
import { columnRenderFactory } from "../common/column_render_factory";
import { iconRenderFactory } from "../common/icon_render_factory";
import { paragraphRenderFactory } from "../common/paragraph_render_factory";

export const interestRenderFactory = (): InterestRender => {
  return new InterestRender({
    asideRowRender: asideRowRenderFactory(),
    columnRender: columnRenderFactory(),
    iconRender: iconRenderFactory(),
    paragraphRender: paragraphRenderFactory(),
  });
};
