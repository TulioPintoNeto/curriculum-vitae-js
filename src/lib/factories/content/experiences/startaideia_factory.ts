import { Language } from "../../../core/languages/language";
import {
  Startaideia,
  StartaideiaEN,
  StartaideiaPT,
} from "../../../data/content/experiences/startaideia";
import { MobileDevPosition } from "../../../data/content/positions/mobile_dev_position";
import { ExperienceParams } from "../../../domain/entities/experience";
import { brazilFactory } from "../countries/brazil_factory";
import { mobileDevPositionFactory } from "../positions/mobile_dev_position_factory";

export const startaideiaFactory = (language: Language): Startaideia => {
  const params: ExperienceParams<MobileDevPosition> = {
    position: mobileDevPositionFactory(language),
    country: brazilFactory(language),
  };

  switch (language) {
    case Language.EN_US:
      return new StartaideiaEN(params);
    case Language.PT_BR:
      return new StartaideiaPT(params);
  }
};
