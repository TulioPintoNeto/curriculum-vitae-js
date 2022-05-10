import { Language } from "../../core/languages/language";
import { TitlesController } from "../../presentation/controllers/titles_controller";
import { getTitlesFactory } from "../usecases/get_titles_factory";

export const titlesControllerFactory = (
  language: Language
): TitlesController => {
  return new TitlesController({
    getTitles: getTitlesFactory(language),
  });
};
