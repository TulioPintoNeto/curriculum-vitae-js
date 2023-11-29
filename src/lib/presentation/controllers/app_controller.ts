import { RendersController } from "../../core/controllers/controller";
import { EducationsController } from "./educations_controller";
import { ExperiencesController } from "./experiences_controller";
import { InterestsController } from "./interests_controller";
import { TitlesController } from "./titles_controller";

export class AppController implements RendersController {
  educationsController: EducationsController;
  experiencesController: ExperiencesController;
  interestsController: InterestsController;
  titlesController: TitlesController;

  constructor(params: {
    educationsController: EducationsController;
    experiencesController: ExperiencesController;
    interestsController: InterestsController;
    titlesController: TitlesController;
  }) {
    this.educationsController = params.educationsController;
    this.experiencesController = params.experiencesController;
    this.interestsController = params.interestsController;
    this.titlesController = params.titlesController;
  }

  update() {
    this.educationsController.update();
    this.experiencesController.update();
    this.interestsController.update();
    this.titlesController.update();
  }
}
