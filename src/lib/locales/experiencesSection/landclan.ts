import { Language } from "../../core/languages/language";

export const landclan = {
  company: "LandClan",
  endDate: new Date(),
  initialDate: new Date(2024, 4),
  responsabilities: {
    [Language.EN_US]: [
      "Developed a new product using React and contributed to the team's Angular applications, demonstrating a fast learning curve despite of no prior experience in Angular",
      "Analyzed all history of bug tickets to identify high-risk areas of the softwares and implemented automated End to End (E2E) tests, significantly improving test coverage and reliability",
      "Designed and automated Jenkins pipelines for 10+ projects across different frameworks, including React, Angular and Node.js",
      "Optimized the CI/CD pipeline for the company's most critical project by implementing caching strategies and improving the build performance, reducing execution time from 40 minutes to 15 minutes",
      "Conducted training sessions on Jenkins and Cypress, enabling the team to maintain pipelines and E2E tests",
      "Mentored a team member in React, so he would be able to contribute in the newly created project",
    ],
    [Language.PT_BR]: [],
  },
  title: {
    [Language.EN_US]: "Senior full-stack engineer with React.JS/Angular/Node.JS",
    [Language.PT_BR]: "Desenvolvedor full-stack senior com React JS/Spring",
  },
  type: {
    [Language.EN_US]: "Permanent Position",
    [Language.PT_BR]: "Tempo Integral",
  },
};
