import { Language } from "../../../core/languages/language";
import {
  FirstTable,
  FirstTableEN,
  FirstTablePT,
} from "../../../data/content/experiences/first_table";
import { MobileDevPosition } from "../../../data/content/positions/mobile_dev_position";
import { ExperienceParams } from "../../../domain/entities/experience";
import { mainContentParamsFactory } from "../main_content/main_content_params_factory";
import { mobileDevPositionFactory } from "../positions/mobile_dev_position_factory";

export const firstTableFactory = (language: Language): FirstTable => {
  const params: ExperienceParams<MobileDevPosition> = {
    position: mobileDevPositionFactory(language),
    mainContentParams: mainContentParamsFactory(language),
  };

  switch (language) {
    case Language.EN_US:
      return new FirstTableEN(params);
    case Language.PT_BR:
      return new FirstTablePT(params);
  }
};
