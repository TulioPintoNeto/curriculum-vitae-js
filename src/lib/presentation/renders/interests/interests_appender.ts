import { Appender } from "../../../core/renders/appender";
import { Interests } from "../../../domain/entities/interests";
import { Icons } from "../common/icon_render";
import { InterestRender } from "./interest_render";

interface InterestsAppenderParams {
  interests: Map<string, string>;
}

export class InterestsAppender extends Appender<InterestsAppenderParams> {
  getFatherId(): string {
    return "interests";
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
