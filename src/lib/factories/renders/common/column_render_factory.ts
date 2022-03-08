import { ColumnRender } from "../../../presentation/renders/common/column_render";
import { universalRenderFactory } from "../universal_render_factory";

export const columnRenderFactory = (): ColumnRender => {
  return new ColumnRender(universalRenderFactory());
};
