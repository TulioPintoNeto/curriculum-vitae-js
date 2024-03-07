import { Title } from "../../components/Title";
import { ExpertiseSection } from "../ExpertiseSection";
import { LanguageSection } from "../LanguageSection";
import { OthersSection } from "../OthersSection";
import { SoftwaresSection } from "../SoftwaresSection";

export const SkillsSection = () => {
  return (
    <>
      <Title>Skills</Title>
      <LanguageSection />
      <ExpertiseSection />
      <SoftwaresSection />
      <OthersSection />
    </>
  );
};
