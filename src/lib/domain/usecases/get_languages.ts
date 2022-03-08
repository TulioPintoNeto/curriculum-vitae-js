import { UseCase } from "../../core/usecases/usecase";
import { UserLanguage } from "../entities/user_language";

export abstract class GetLanguages extends UseCase<UserLanguage[]> {
  abstract call(): UserLanguage[];
}
