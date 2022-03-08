import { RendersController } from "../../core/controllers/controller";
import { GetEducations } from "../../domain/usecases/get_educations";

export class EducationsController implements RendersController {
  getEducations: GetEducations;

  constructor(getEducations: GetEducations) {
    this.getEducations = getEducations;
  }

  update(): void {
    const educations = this.getEducations.call();
  }
}
