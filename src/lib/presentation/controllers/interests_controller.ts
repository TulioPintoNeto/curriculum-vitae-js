import { RendersController } from "../../core/controllers/controller";
import { GetInterests } from "../../domain/usecases/get_interests";
import { InterestsAppender } from "../renders/interests/interests_appender";

export class InterestsController implements RendersController {
  interests: Map<string, string>;

  constructor(params: { getInterests: GetInterests }) {
    this.interests = params.getInterests.call();
  }

  update(): void {
    new InterestsAppender({ interests: this.interests });
  }
}
