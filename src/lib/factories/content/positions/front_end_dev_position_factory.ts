import { Language } from "../../../core/languages/language";
import {
  FrontEndDevPosition,
  FrontEndDevPositionEN,
  FrontEndDevPositionPT,
} from "../../../data/content/positions/front_end_dev_position";

export const frontEndDevPositionFactory = (
  language: Language
): FrontEndDevPosition => {
  switch (language) {
    case Language.EN_US:
      return new FrontEndDevPositionEN();
    case Language.PT_BR:
      return new FrontEndDevPositionPT();
  }
};
