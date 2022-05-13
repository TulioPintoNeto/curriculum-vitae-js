import { Language } from "../../../core/languages/language";
import {
  PetSocialMedia,
  PetSocialMediaEN,
  PetSocialMediaPT,
} from "../../../data/content/experiences/pet_social_media";
import { MobileDevPosition } from "../../../data/content/positions/mobile_dev_position";
import { ExperienceParams } from "../../../domain/entities/experience";
import { mainContentParamsFactory } from "../main_content/main_content_params_factory";
import { mobileDevPositionFactory } from "../positions/mobile_dev_position_factory";

export const petSocialMediaFactory = (language: Language): PetSocialMedia => {
  const params: ExperienceParams<MobileDevPosition> = {
    position: mobileDevPositionFactory(language),
    mainContentParams: mainContentParamsFactory(language),
  };

  switch (language) {
    case Language.EN_US:
      return new PetSocialMediaEN(params);
    case Language.PT_BR:
      return new PetSocialMediaPT(params);
  }
};
