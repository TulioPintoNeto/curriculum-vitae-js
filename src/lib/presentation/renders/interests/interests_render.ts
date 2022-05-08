import { AppendRender } from "../../../core/renders/append_render";
import { Interests } from "../../../domain/entities/interests";
import { Icons } from "../common/icon_render";
import { UniversalRender } from "../universal_render";
import { InterestRender } from "./interest_render";

export class InterestsRender extends AppendRender<Map<string, string>> {
  fatherId: string = "interests";

  interestRender: InterestRender;

  constructor(params: {
    interestRender: InterestRender;
    render: UniversalRender;
  }) {
    super(params.render);
    this.interestRender = params.interestRender;
  }

  build(interests: Map<string, string>): void {
    this.append(
      ...[
        this.interestRender.build({
          icon: Icons.BIKING,
          text: interests.get(Interests.PHYSICAL_ACTIVITY)!,
        }),
        this.interestRender.build({
          icon: Icons.MUSIC,
          text: interests.get(Interests.MUSIC)!,
        }),
      ]
    );
  }
}
