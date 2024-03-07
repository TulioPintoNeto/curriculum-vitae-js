import { Content } from "./content";
import { LanguageProvider } from "./lib/presentation/context/language";
import './style.scss';

export const App = () => (
  <LanguageProvider>
    <Content />
  </LanguageProvider>
);
