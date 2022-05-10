import { AppendRender } from "../../../core/renders/append_render";
import { Interests } from "../../../domain/entities/interests";
import { Icons } from "../common/icon_render";
import { InterestRender } from "./interest_render";

interface InterestsAppenderParams {
  interests: Map<string, string>;
}

export class InterestsAppender extends AppendRender<InterestsAppenderParams> {
  fatherId: string = "interests";

  constructor(params: InterestsAppenderParams) {
    super();
    this.build(params);
  }

  build(params: InterestsAppenderParams): void {
    const physicalBuilded = new InterestRender({
      icon: Icons.BIKING,
      text: params.interests.get(Interests.PHYSICAL_ACTIVITY)!,
    });
    const musicBuilded = new InterestRender({
      icon: Icons.MUSIC,
      text: params.interests.get(Interests.MUSIC)!,
    });

    this.append(...[physicalBuilded.content, musicBuilded.content]);
  }
}
