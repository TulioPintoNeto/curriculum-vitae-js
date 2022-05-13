import { Language } from "../../../core/languages/language";
import {
  Eagle,
  EagleEN,
  EaglePT,
} from "../../../data/content/main_content/experiences/eagle";
import { FrontEndDevPosition } from "../../../data/content/positions/front_end_dev_position";
import { ExperienceParams } from "../../../domain/entities/experience";
import { mainContentParamsFactory } from "../main_content/main_content_params_factory";
import { frontEndDevPositionFactory } from "../positions/front_end_dev_position_factory";

export const eagleFactory = (language: Language): Eagle => {
  const params: ExperienceParams<FrontEndDevPosition> = {
    position: frontEndDevPositionFactory(language),
    mainContentParams: mainContentParamsFactory(language),
  };

  switch (language) {
    case Language.EN_US:
      return new EagleEN(params);
    case Language.PT_BR:
      return new EaglePT(params);
  }
};
