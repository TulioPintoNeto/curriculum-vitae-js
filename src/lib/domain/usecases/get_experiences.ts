import { UseCase } from "../../core/usecases/usecase";
import { Experience } from "../entities/experience";
import { MainSection } from "../data_structure/main_section";
import { Position } from "../entities/position";

export abstract class GetExperiencesMainSection extends UseCase<
  MainSection<Experience<Position>>
> {
  abstract call(): MainSection<Experience<Position>>;
}
