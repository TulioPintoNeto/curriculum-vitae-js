import { Content } from "../content";
import { LanguageProvider } from "./presentation/context/language";

export const App = () => (
  <LanguageProvider>
    <Content />
  </LanguageProvider>
);
