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
  // paragraphRender: ParagraphRender;

  // constructor(params: { paragraphRender: ParagraphRender }) {
  //   super();
  //   this.paragraphRender = params.paragraphRender;
  // }

  build(interest: InterestParams): HTMLElement {
    const buildedIcon = new IconRender({ icon: interest.icon });
    const buildedIconColumn = new ColumnRender({
      size: 1,
      classes: this.iconColumnAdditionalClasses(),
      children: [buildedIcon.content],
    });
    const buildedParagraph = new ParagraphRender({
      withoutMarginBottom: true,
      text: interest.text,
    });
    const buildedTextColumn = new ColumnRender({
      size: 11,
      classes: this.textColumnAdditionalClasses(),
      children: [buildedParagraph.content],
    });

    const builded = new AsideRowRender({
      classes: this.asideRowAdditionalClasses(),
      children: [buildedIconColumn.content, buildedTextColumn.content],
    });

    return builded.content;
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
