import { RendersController } from "../../core/controllers/controller";
import { GetInterests } from "../../domain/usecases/get_interests";
import { InterestsRender } from "../renders/interests/interests_render";

export class InterestsController implements RendersController {
  interests: Map<string, string>;

  getInterests: GetInterests;
  interestsRender: InterestsRender;

  constructor(params: {
    getInterests: GetInterests;
    interestsRender: InterestsRender;
  }) {
    this.getInterests = params.getInterests;
    this.interestsRender = params.interestsRender;

    this.interests = this.getInterests.call();
  }

  update(): void {
    this.interestsRender.build(this.interests);
  }
}
