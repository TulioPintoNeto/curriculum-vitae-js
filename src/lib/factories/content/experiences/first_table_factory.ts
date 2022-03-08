import { Language } from "../../../core/languages/language";
import {
  FirstTable,
  FirstTableEN,
  FirstTablePT,
} from "../../../data/content/experiences/first_table";
import { MobileDevPosition } from "../../../data/content/positions/mobile_dev_position";
import { ExperienceParams } from "../../../domain/entities/experience";
import { brazilFactory } from "../countries/brazil_factory";
import { mobileDevPositionFactory } from "../positions/mobile_dev_position_factory";

export const firstTableFactory = (language: Language): FirstTable => {
  const params: ExperienceParams<MobileDevPosition> = {
    position: mobileDevPositionFactory(language),
    country: brazilFactory(language),
  };

  switch (language) {
    case Language.EN_US:
      return new FirstTableEN(params);
    case Language.PT_BR:
      return new FirstTablePT(params);
  }
};
