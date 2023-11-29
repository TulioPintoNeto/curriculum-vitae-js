import { RendersController } from "../../core/controllers/controller";
import { InterestsController } from "./interests_controller";
import { TitlesController } from "./titles_controller";

export class AppController implements RendersController {
  interestsController: InterestsController;
  titlesController: TitlesController;

  constructor(params: {
    interestsController: InterestsController;
    titlesController: TitlesController;
  }) {
    this.interestsController = params.interestsController;
    this.titlesController = params.titlesController;
  }

  update() {
    this.interestsController.update();
    this.titlesController.update();
  }
}
