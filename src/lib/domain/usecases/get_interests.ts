import { UseCase } from "../../core/usecases/usecase";

export abstract class GetInterests extends UseCase<Map<string, string>> {
  abstract call(): Map<string, string>;
}
