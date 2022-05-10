import { AppendRender } from "../../../core/renders/append_render";
import { Interests } from "../../../domain/entities/interests";
import { Icons } from "../common/icon_render";
import { InterestRender } from "./interest_render";

export class InterestsRender extends AppendRender<Map<string, string>> {
  fatherId: string = "interests";

  build(interests: Map<string, string>): void {
    const physicalBuilded = new InterestRender({
      icon: Icons.BIKING,
      text: interests.get(Interests.PHYSICAL_ACTIVITY)!,
    });
    const musicBuilded = new InterestRender({
      icon: Icons.MUSIC,
      text: interests.get(Interests.MUSIC)!,
    });

    this.append(...[physicalBuilded.content, musicBuilded.content]);
  }
}
