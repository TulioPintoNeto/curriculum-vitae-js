import { Content } from "./content";
import { LanguageProvider } from "./lib/presentation/context/language";
import './styles.scss';

export const App = () => (
  <LanguageProvider>
    <Content />
  </LanguageProvider>
);
