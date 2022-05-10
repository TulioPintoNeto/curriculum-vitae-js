import { ElementRender } from "../../../core/renders/element_render";
import { Classes } from "../../../core/utils/classes";
import { AsideRowRender } from "../common/aside_row_render";
import { ColumnRender } from "../common/column_render";
import { IconRender, Icons } from "../common/icon_render";
import { ParagraphRender } from "../common/paragraph_render";

interface InterestRenderParams {
  icon: Icons;
  text: string;
}

export class InterestRender extends ElementRender<
  InterestRenderParams,
  HTMLElement
> {
  content: HTMLElement;

  constructor(params: InterestRenderParams) {
    super();
    this.content = this.build(params);
  }

  build(params: InterestRenderParams): HTMLElement {
    const buildedIcon = new IconRender({ icon: params.icon });
    const buildedIconColumn = new ColumnRender({
      size: 1,
      classes: this.iconColumnAdditionalClasses(),
      children: [buildedIcon.content],
    });
    const buildedParagraph = new ParagraphRender({
      withoutMarginBottom: true,
      text: params.text,
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
