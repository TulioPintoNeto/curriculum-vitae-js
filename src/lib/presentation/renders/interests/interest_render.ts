import { Render } from "../../../core/renders/render";
import { Classes } from "../../../core/utils/classes";
import { AsideRowRender } from "../common/aside_row_render";
import { ColumnRender } from "../common/column_render";
import { IconRender, Icons } from "../common/icon_render";
import { ParagraphRender } from "../common/paragraph_render";

export interface InterestParams {
  icon: Icons;
  text: string;
}

export class InterestRender extends Render<InterestParams, HTMLElement> {
  asideRowRender: AsideRowRender;
  columnRender: ColumnRender;
  iconRender: IconRender;
  paragraphRender: ParagraphRender;

  constructor(params: {
    asideRowRender: AsideRowRender;
    columnRender: ColumnRender;
    iconRender: IconRender;
    paragraphRender: ParagraphRender;
  }) {
    super();
    this.asideRowRender = params.asideRowRender;
    this.columnRender = params.columnRender;
    this.iconRender = params.iconRender;
    this.paragraphRender = params.paragraphRender;
  }

  build(interest: InterestParams): HTMLElement {
    return this.asideRowRender.build({
      classes: this.asideRowAdditionalClasses(),
      children: [
        this.columnRender.build({
          size: 1,
          classes: this.iconColumnAdditionalClasses(),
          children: [this.iconRender.build(interest.icon)],
        }),
        this.columnRender.build({
          size: 11,
          classes: this.textColumnAdditionalClasses(),
          children: [
            this.paragraphRender.build({
              withoutMarginBottom: true,
              text: interest.text,
            }),
          ],
        }),
      ],
    });
  }

  private asideRowAdditionalClasses(): string[] {
    return [Classes.noHorizontalMargin, Classes.marginBottom2];
  }

  private iconColumnAdditionalClasses(): string[] {
    return [
      Classes.noPadding,
      Classes.displayFlex,
      Classes.alignItemsCenter,
      Classes.justifyContentCenter,
    ];
  }

  private textColumnAdditionalClasses(): string[] {
    return [];
  }
}
