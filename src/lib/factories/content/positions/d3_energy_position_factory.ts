import { Language } from "../../../core/languages/language";
import {
  D3EnergyPosition,
  D3EnergyPositionEN,
  D3EnergyPositionPT,
} from "../../../data/content/positions/d3_energy_position";

export const d3EnergyPositionFactory = (
  language: Language
): D3EnergyPosition => {
  switch (language) {
    case Language.EN_US:
      return new D3EnergyPositionEN();
    case Language.PT_BR:
      return new D3EnergyPositionPT();
  }
};
