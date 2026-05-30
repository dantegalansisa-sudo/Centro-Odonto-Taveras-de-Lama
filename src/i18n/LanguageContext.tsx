import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';
import { translations, type Lang } from './translations';

interface LanguageContextType {
  lang: Lang;
  t: (key: string) => string;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'es',
  t: (key: string) => key,
  toggleLang: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('es');

  const toggleLang = useCallback(() => {
    setLang((prev) => {
      const order: Lang[] = ['es', 'en', 'fr'];
      return order[(order.indexOf(prev) + 1) % order.length];
    });
  }, []);

  const t = useCallback(
    (key: string) => translations[lang][key] || key,
    [lang],
  );

  return (
    <LanguageContext.Provider value={{ lang, t, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}
