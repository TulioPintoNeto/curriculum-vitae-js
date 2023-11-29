import { Language } from "../../core/languages/language";

export const ciandt = {
  company: "CI&T",
  endDate: new Date(),
  initialDate: new Date(2022, 3),
  responsabilities: {
    [Language.EN_US]: [
      "Development of React components for an admin panel",
      "Development of components using good practices of search engine optimization (SEO)",
      "Development of scripts, such as importing XML content to an API, using Node JS",
      "Participating in decision making, such as project patterns, technologies and automation",
      "Creating integration tests and unit tests using TDD",
    ],
    [Language.PT_BR]: [
      "Desenvolvimento de componentes React para um painel de admin",
      "Desenvolvimento de componentes usando boas práticas de otimização de mecanismos de pesquisa (SEO)",
      "Desenvolvimento de scripts, como a importação de conteúdo XML para uma API, usando Node JS",
      "Participação de tomada de decisões, como padrões de projetos, tecnologias e automações",
      "Criação de testes unitários e de integração",
    ],
  },
  title: {
    [Language.EN_US]: "Front-end developer with React JS",
    [Language.PT_BR]: "Desenvolvedor front-end com React JS",
  },
  type: {
    [Language.EN_US]: "Full-time",
    [Language.PT_BR]: "Tempo Integral",
  },
};
