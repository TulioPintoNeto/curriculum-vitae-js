import { Title } from "../../components/Title";
import { LanguageSection } from "../LanguageSection";
import { locales } from "../../../locales";
import { useLanguage } from "../../context/language";
import { SkillsRow } from "./SkillsRow";

export const SkillsSection = () => {
  const language = useLanguage();
  const {
    databases,
    frameworks,
    infra,
    others,
    patterns,
    programmingLanguages,
    softwares,
    testing,
    uiMarkup,
  } = locales.skills;
  return (
    <>
      <Title>Skills</Title>
      <LanguageSection />
      <table>
        <SkillsRow
          label={programmingLanguages.title[language]}
          value="TypeScript, Vanilla JavaScript, Dart, Java, Python"
        />
        <SkillsRow
          label={frameworks.title[language]}
          value="React.JS, Next.JS, Node.JS, Flutter, Spring"
        />
        <SkillsRow
          label={uiMarkup.title[language]}
          value="HTML5, CSS3, Highcharts, Sass, Styled Components, MaterialUI, Bootstrap, TailwindCSS"
        />
        <SkillsRow
          label={testing.title[language]}
          value="Jest, React Testing Library, Playwright, Loki, Flutter Test"
        />
        <SkillsRow label={databases.title[language]} value="MySQL, NoSQL" />
        <SkillsRow
          label={softwares.title[language]}
          value="MS Word, MS Excel, MS Power Point, Insomnia, Postman, VSCode, SourceTree"
        />
        <SkillsRow
          label={infra.title[language]}
          value="Docker, GitHub Actions, Jenkins, GitLab CI/CD"
        />
        <SkillsRow
          label={patterns.title[language]}
          value="Clean Architecture, Clean Code, SOLID, TDD"
        />
        <SkillsRow
          label={others.title[language]}
          value="Firebase, Webpack, RegEx, SEO, Scrum"
        />
      </table>
    </>
  );
};
