import { Language } from "../../../core/languages/language";
import {
  D3Energy,
  D3EnergyEN,
  D3EnergyPT,
} from "../../../data/content/experiences/d3_energy";
import { D3EnergyPosition } from "../../../data/content/positions/d3_energy_position";
import { ExperienceParams } from "../../../domain/entities/experience";
import { brazilFactory } from "../countries/brazil_factory";
import { d3EnergyPositionFactory } from "../positions/d3_energy_position_factory";

export const d3EnergyFactory = (language: Language): D3Energy => {
  const params: ExperienceParams<D3EnergyPosition> = {
    position: d3EnergyPositionFactory(language),
    country: brazilFactory(language),
  };

  switch (language) {
    case Language.EN_US:
      return new D3EnergyEN(params);
    case Language.PT_BR:
      return new D3EnergyPT(params);
  }
};
