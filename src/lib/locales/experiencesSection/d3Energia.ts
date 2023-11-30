import { Language } from "../../core/languages/language";

export const d3Energia = {
  company: "D3 Energia",
  endDate: new Date(2020, 10),
  initialDate: new Date(2019, 5),
  responsabilities: {
    [Language.EN_US]: [
      "Responsible for the development and maintenance of the company software using JQuery, HTML, CSS, JS, PHP and MySQL. The software was made to have a pipeline of clients, do engineering calculations and export reports and proposals in PDF",
      "Doing the back-up of emails, files and database",
      "Creation and maintenance of the company website, using SEO tech practices and keywords to optimize rankings in organic search",
      "Sizing, checking viability, projecting, coordinating the installation and maintenance of solar systems",
    ],
    [Language.PT_BR]: [
      "Responsável por desenvolver e dar manutenção do software da empresa usando JQuery, HTML, CSS, JS, PHP e MySQL. O software foi feito para ter um pipeline dos clientes, fazer cálculos da equipe de engenharia e exportar relatórios e propostas em PDF",
      "Realizar o back-up de e-mails, arquivos do sistema e banco de dados",
      "Criação e manutenção no website da empresa, usando técnicas SEO e palavras-chave pra otimizar posicionamento na pesquisa orgânica",
      "Dimensionar, analisar a viabilidade, projetar, coordenar ainstalação e manutenção de sistemas solares",
    ],
  },
  title: {
    [Language.EN_US]: "Web developer and engineer intern",
    [Language.PT_BR]: "Desenvolvedor web e estagiário de engenharia",
  },
  type: {
    [Language.EN_US]: "Intern",
    [Language.PT_BR]: "Estágio",
  },
};
