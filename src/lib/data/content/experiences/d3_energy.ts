import { Brazil } from "../../../domain/entities/brazil";
import { Experience } from "../../../domain/entities/experience";
import { LocationDetails } from "../../../domain/entities/location_details";
import { Cities } from "../cities/cities";
import { D3EnergyPosition } from "../positions/d3_energy_position";

export abstract class D3Energy extends Experience<D3EnergyPosition> {
  endDate: Date = new Date(2020, 11);
  initialDate: Date = new Date(2019, 6);

  _experienceLocationFromCountry(country: Brazil): LocationDetails {
    const company: string = "D3 Energia";
    const city: string = Cities.PORTO_ALEGRE;

    return new LocationDetails({
      city,
      company,
      country,
    });
  }
}

export class D3EnergyPT extends D3Energy {
  responsabilities: string[] = [
    "Adição de novas funcionalidades do software da empresa.Houve ainda foco em transformar o software de proceduralpara orientação em objetos",
    "Realizar o back-up de e-mails, arquivos do sistema e bancode dados",
    "Criação e manutenção no website da empresa",
    "Dimensionar, analisar a viabilidade, projetar, coordenar ainstalação e manutenção de sistemas solares",
  ];
}

export class D3EnergyEN extends D3Energy {
  responsabilities: string[] = [
    "Development of new functionalities for the company software. That was a concern in changing the software from procedural to object oriented",
    "Doing the back-up of emails, files and database",
    "Creation and maintenance of the company website",
    "Sizing, checking viability, projecting, coordinating the installation and maintenance of solar systems",
  ];
}
