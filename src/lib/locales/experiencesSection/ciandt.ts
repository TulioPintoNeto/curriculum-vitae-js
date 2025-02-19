import { Language } from "../../core/languages/language";

export const ciandtTwice = [
  {
    company: "CI&T - UK",
    endDate: new Date(),
    initialDate: new Date(2022, 11),
    responsabilities: {
      [Language.EN_US]: [
        "Development of new features for a financial software focused on data visualization using NextJS and CSS modules with SASS, React-Tables for displaying tables with integrated filters and Highcharts",
        "Creation of units and integration tests, usage of Storybook with the React Components to do visual regression testing using Loki",
      ],
      [Language.PT_BR]: [
        "Desenvolvimento de novas features para um software financeiro usando NextJS, CSS modules com SASS e Highcharts",
        "Criação de testes unitários e de integração, uso de Storybook com React Components para realizar testes de regressão visual usando Loki",
      ],
    },
    title: {
      [Language.EN_US]: "Senior full-stack engineer with React JS/Spring",
      [Language.PT_BR]: "Desenvolvedor full-stack senior com React JS/Spring",
    },
    type: {
      [Language.EN_US]: "Permanent Position",
      [Language.PT_BR]: "Tempo Integral",
    },
  },
  {
    company: "CI&T - Brazil",
    endDate: new Date(2022, 11),
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
      [Language.EN_US]: "Front-end engineer with React JS",
      [Language.PT_BR]: "Desenvolvedor front-end com React JS",
    },
    type: {
      [Language.EN_US]: "Permanent Position",
      [Language.PT_BR]: "Tempo Integral",
    },
  },
];

export const ciandt = {
  company: "CI&T",
  endDate: new Date(2024,4),
  initialDate: new Date(2022, 3),
  responsabilities: {
    [Language.EN_US]: [
      "Development of new features for a financial software focused on data visualization using NextJS and CSS modules with SASS, React-Tables for displaying tables with integrated filters and Highcharts",
      "Creation of units and integration tests, usage of Storybook with the React Components to do visual regression testing using Loki",
      "Development of React components for an admin panel",
      "Development of components using good practices of search engine optimization (SEO)",
      "Development of scripts, such as importing XML content to an API, using Node JS",
      "Participating in decision making, such as project patterns, technologies and automation",
      "Creating integration tests and unit tests using TDD",
    ],
    [Language.PT_BR]: [
      "Desenvolvimento de novas features para um software financeiro usando NextJS, CSS modules com SASS e Highcharts",
      "Criação de testes unitários e de integração, uso de Storybook com React Components para realizar testes de regressão visual usando Loki",
      "Desenvolvimento de componentes React para um painel de admin",
      "Desenvolvimento de componentes usando boas práticas de otimização de mecanismos de pesquisa (SEO)",
      "Desenvolvimento de scripts, como a importação de conteúdo XML para uma API, usando Node JS",
      "Participação de tomada de decisões, como padrões de projetos, tecnologias e automações",
      "Criação de testes unitários e de integração",
    ],
  },
  title: {
    [Language.EN_US]: "Senior full-stack engineer with React JS/Spring",
    [Language.PT_BR]: "Desenvolvedor full-stack senior com React JS/Spring",
  },
  type: {
    [Language.EN_US]: "Permanent Position",
    [Language.PT_BR]: "Tempo Integral",
  },
}