import { NodeElement } from "../../../core/renders/elements/node_element";
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

export class InterestRender extends ElementRender<InterestRenderParams> {
  build(params: InterestRenderParams): NodeElement {
    return new AsideRowRender({
      classes: this.asideRowAdditionalClasses(),
      children: [
        new ColumnRender({
          size: 1,
          classes: this.iconColumnAdditionalClasses(),
          children: [new IconRender({ icon: params.icon })],
        }),
        new ColumnRender({
          size: 11,
          classes: this.textColumnAdditionalClasses(),
          children: [
            new ParagraphRender({
              text: params.text,
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
