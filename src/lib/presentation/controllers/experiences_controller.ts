import { RendersController } from "../../core/controllers/controller";
import { GetExperiences } from "../../domain/usecases/get_experiences";

export class ExperiencesController implements RendersController {
  getEducations: GetExperiences;

  constructor(getEducations: GetExperiences) {
    this.getEducations = getEducations;
  }

  update(): void {
    throw new Error("Method not implemented.");
  }
}
