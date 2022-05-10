import { RendersController } from "../../core/controllers/controller";
import { GetInterests } from "../../domain/usecases/get_interests";
import { InterestsAppender } from "../renders/interests/interests_appender";

export class InterestsController implements RendersController {
  interests: Map<string, string>;

  // interestsRender: InterestsAppender;

  constructor(params: {
    getInterests: GetInterests;
    // interestsRender: InterestsAppender;
  }) {
    this.interests = params.getInterests.call();

    // this.interestsRender = params.interestsRender;
  }

  update(): void {
    new InterestsAppender({ interests: this.interests });
  }
}
