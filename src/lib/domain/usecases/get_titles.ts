import { UseCase } from "../../core/usecases/usecase";
import { Title } from "../entities/title";

export abstract class GetTitles extends UseCase<Title[]> {
  abstract call(): Title[];
}
