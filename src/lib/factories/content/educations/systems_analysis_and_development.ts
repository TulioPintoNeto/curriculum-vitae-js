import { Language } from "../../../core/languages/language";
import {
  SystemsAnalysisAndDevelopment,
  SystemsAnalysisAndDevelopmentEN,
  SystemsAnalysisAndDevelopmentPT,
} from "../../../data/content/educations/systems_analysis_and_development";
import { Bachelor } from "../../../data/content/education_types/bachelor";
import { EducationParams } from "../../../domain/entities/education";
import { bachelorFactory } from "../education_types/bachelor_factory";
import { mainContentParamsFactory } from "../main_content/main_content_params_factory";

export const systemsAnalysisAndDevelopmentFactory = (
  language: Language
): SystemsAnalysisAndDevelopment => {
  const params: EducationParams<Bachelor> = {
    educationType: bachelorFactory(language),
    mainContentParams: mainContentParamsFactory(language),
  };

  switch (language) {
    case Language.EN_US:
      return new SystemsAnalysisAndDevelopmentEN(params);
    case Language.PT_BR:
      return new SystemsAnalysisAndDevelopmentPT(params);
  }
};
