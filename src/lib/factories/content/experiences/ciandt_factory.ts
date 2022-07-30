import { Language } from "../../../core/languages/language";
import {
  Ciandt,
  CiandtEN,
  CiandtPT,
} from "../../../data/content/main_content/experiences/ciandt";
import { FrontEndDevPosition } from "../../../data/content/positions/front_end_dev_position";
import { ExperienceParams } from "../../../domain/entities/experience";
import { mainContentParamsFactory } from "../main_content/main_content_params_factory";
import { frontEndDevPositionFactory } from "../positions/front_end_dev_position_factory";

export const ciandtFactory = (language: Language): Ciandt => {
  const params: ExperienceParams<FrontEndDevPosition> = {
    position: frontEndDevPositionFactory(language),
    mainContentParams: mainContentParamsFactory(language),
  };

  switch (language) {
    case Language.EN_US:
      return new CiandtEN(params);
    case Language.PT_BR:
      return new CiandtPT(params);
  }
};
