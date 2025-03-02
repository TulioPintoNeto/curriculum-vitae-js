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
          value="TypeScript, Vanilla JavaScript, Java, Python"
          // Dart
        />
        <SkillsRow
          label={frameworks.title[language]}
          value="React.JS, Node.JS, Next.JS, Angular, Spring"
          // Flutter
        />
        <SkillsRow
          label={uiMarkup.title[language]}
          value="HTML5, CSS3, Highcharts, Sass, MaterialUI, Bootstrap"
          // Styled Components, TailwindCSS
        />
        <SkillsRow
          label={testing.title[language]}
          value="Jest, React Testing Library, Playwright"
          // Loki, Flutter Test
        />
        <SkillsRow label={databases.title[language]} value="MySQL, NoSQL" />
        <SkillsRow
          label={softwares.title[language]}
          value="Visual Studio Code, Insomnia, Postman"
          // MS Word, MS Power Point, MS Excel, SourceTree
        />
        <SkillsRow
          label={infra.title[language]}
          value="Docker, GitHub Actions, Jenkins"
          // GitLab CI/CD
        />
        <SkillsRow
          label={patterns.title[language]}
          value="Clean Architecture, Clean Code, SOLID, TDD"
          // Object-oriented, Functional programming
        />
        <SkillsRow
          label={others.title[language]}
          value="Firebase, Webpack, EsBuild, RegEx, Scrum"
          // SEO
        />
      </table>
    </>
  );
};
