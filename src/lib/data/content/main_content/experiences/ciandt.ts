import { Experience } from "../../../../domain/entities/experience";
import { FrontEndDevPosition } from "../../positions/front_end_dev_position";

export abstract class Ciandt extends Experience<FrontEndDevPosition> {
  endDate: Date | null = null;
  initialDate: Date = new Date(2022, 4);
  company: string = "CI&T";
}

export class CiandtPT extends Ciandt {
  responsabilities: string[] = [
    "Desenvolvimento de componentes React para um painel de admin",
    "Desenvolvimento de componentes usando boas práticas de otimização de mecanismos de pesquisa (SEO)",
    "Desenvolvimento de scripts, como a importação de conteúdo XML para uma API, usando Node JS",
    "Participação de tomada de decisões, como padrões de projetos, tecnologias e automações",
    "Criação de testes unitários e de integração",
  ];

  typeOfExperience() {
    return "Tempo integral";
  }
}

export class CiandtEN extends Ciandt {
  responsabilities: string[] = [
    "Development of React components for an admin panel",
    "Development of components using good practices of search engine optimization (SEO)",
    "Development of scripts, such as importing XML content to an API, using Node JS",
    "Participating in decision making, such as project patterns, technologies and automation",
    "Creating integration tests and unit tests using TDD",
  ];

  typeOfExperience() {
    return "Full-time";
  }
}
