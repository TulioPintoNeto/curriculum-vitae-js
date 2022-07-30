import { RendersController } from "../../core/controllers/controller";
import { EducationsController } from "./educations_controller";
import { ExperiencesController } from "./experiences_controller";
import { InterestsController } from "./interests_controller";
import { LanguagesController } from "./languages_controller";
import { TitlesController } from "./titles_controller";

export class AppController implements RendersController {
  educationsController: EducationsController;
  experiencesController: ExperiencesController;
  interestsController: InterestsController;
  languagesController: LanguagesController;
  titlesController: TitlesController;

  constructor(params: {
    educationsController: EducationsController;
    experiencesController: ExperiencesController;
    interestsController: InterestsController;
    languagesController: LanguagesController;
    titlesController: TitlesController;
  }) {
    this.educationsController = params.educationsController;
    this.experiencesController = params.experiencesController;
    this.interestsController = params.interestsController;
    this.languagesController = params.languagesController;
    this.titlesController = params.titlesController;
  }

  update() {
    this.educationsController.update();
    this.experiencesController.update();
    this.interestsController.update();
    this.languagesController.update();
    this.titlesController.update();
  }
}
