import { RendersController } from "../../core/controllers/controller";
import { GetInterests } from "../../domain/usecases/get_interests";
import { InterestsRender } from "../renders/interests/interests_render";

export class InterestsController implements RendersController {
  interests: Map<string, string>;

  interestsRender: InterestsRender;

  constructor(params: {
    getInterests: GetInterests;
    interestsRender: InterestsRender;
  }) {
    this.interests = params.getInterests.call();

    this.interestsRender = params.interestsRender;
  }

  update(): void {
    this.interestsRender.build(this.interests);
  }
}
