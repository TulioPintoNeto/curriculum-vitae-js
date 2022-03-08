import { UseCase } from "../../core/usecases/usecase";
import { Education } from "../entities/education";
import { EducationType } from "../entities/education_type";
import { MainSection } from "../entities/main_section";

export abstract class GetEducations extends UseCase<
  MainSection<Education<EducationType>>
> {
  abstract call(): MainSection<Education<EducationType>>;
}
