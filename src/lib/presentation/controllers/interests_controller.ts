import { RendersController } from "../../core/controllers/controller";
import { GetInterests } from "../../domain/usecases/get_interests";

export class InterestsController implements RendersController {
  interests: Map<string, string>;

  getInterests: GetInterests;
  interestsRender: InterestsRender;

  constructor(params: {
    getLanguages: GetInterests;
    interestsRender: InterestsRender;
  }) {
    this.getInterests = params.getLanguages;
    this.interestsRender = params.interestsRender;

    this.interests = this.getInterests.call();
  }

  update(): void {
    throw new Error("Method not implemented.");
  }
}
