import { Language } from "../../../core/languages/language";
import {
  EnergyEngineer,
  EnergyEngineerEN,
  EnergyEngineerPT,
} from "../../../data/content/educations/energy_engineer";
import { Bachelor } from "../../../data/content/education_types/bachelor";
import { EducationParams } from "../../../domain/entities/education";
import { bachelorFactory } from "../education_types/bachelor_factory";
import { mainContentParamsFactory } from "../main_content/main_content_params_factory";

export const energyEngineerFactory = (language: Language): EnergyEngineer => {
  const params: EducationParams<Bachelor> = {
    educationType: bachelorFactory(language),
    mainContentParams: mainContentParamsFactory(language),
  };

  switch (language) {
    case Language.EN_US:
      return new EnergyEngineerEN(params);
    case Language.PT_BR:
      return new EnergyEngineerPT(params);
  }
};
