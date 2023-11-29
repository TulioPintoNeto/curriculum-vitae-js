import { Content } from "./content";
import { LanguageProvider } from "./lib/presentation/context/language";

export const App = () => (
  <LanguageProvider>
    <Content />
  </LanguageProvider>
);
