import { createContext, useState, useEffect } from "react";

interface LanguageContextType {
  language: string;
  toggleLanguage: (lang: "sv" | "en") => void;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

import { ReactNode } from "react";

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const savedLanguage = localStorage.getItem("language") || "sv"; // Kolla om språk är sparat
  const [language, setLanguage] = useState(savedLanguage);

  useEffect(() => {
    localStorage.setItem("language", language); // Spara i localStorage
  }, [language]);

  const toggleLanguage = (lang: "sv" | "en") => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;
