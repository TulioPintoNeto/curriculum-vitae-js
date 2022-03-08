import { Language } from "../../../core/languages/language";
import {
  MobileDevPosition,
  MobileDevPositionEN,
  MobileDevPositionPT,
} from "../../../data/content/positions/mobile_dev_position";

export const mobileDevPositionFactory = (
  language: Language
): MobileDevPosition => {
  switch (language) {
    case Language.EN_US:
      return new MobileDevPositionEN();
    case Language.PT_BR:
      return new MobileDevPositionPT();
  }
};
