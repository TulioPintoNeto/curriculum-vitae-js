import { RendersController } from "../../core/controllers/controller";
import { ExperiencesController } from "./experiences_controller";
import { InterestsController } from "./interests_controller";
import { TitlesController } from "./titles_controller";

export class AppController implements RendersController {
  experiencesController: ExperiencesController;
  interestsController: InterestsController;
  titlesController: TitlesController;

  constructor(params: {
    experiencesController: ExperiencesController;
    interestsController: InterestsController;
    titlesController: TitlesController;
  }) {
    this.experiencesController = params.experiencesController;
    this.interestsController = params.interestsController;
    this.titlesController = params.titlesController;
  }

  update() {
    this.experiencesController.update();
    this.interestsController.update();
    this.titlesController.update();
  }
}
