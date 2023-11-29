import { ReactNode, createContext, useContext, useState } from "react";
import { Language } from "../../core/languages/language";

const defaultLanguage = Language.EN_US;

const LanguageContext = createContext(defaultLanguage);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState(defaultLanguage);

  const toggleLanguage = () => {
    setLanguage((l) =>
      l === Language.EN_US ? Language.PT_BR : Language.EN_US
    );
  };

  return (
    <LanguageContext.Provider value={language}>
      <button
        className="btn btn-primary d-print-none position-fixed m-3"
        onClick={toggleLanguage}
      >
        Mudar Idioma
      </button>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
