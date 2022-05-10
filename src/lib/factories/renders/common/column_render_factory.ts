import { ColumnRender } from "../../../presentation/renders/common/column_render";

export const columnRenderFactory = (): ColumnRender => {
  return new ColumnRender();
};
