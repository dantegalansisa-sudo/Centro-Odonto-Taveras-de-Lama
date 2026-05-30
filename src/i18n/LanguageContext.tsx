import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from 'react';
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

const STORAGE_KEY = 'tdl-lang';
const LANGS: Lang[] = ['es', 'en', 'fr'];

function getInitialLang(): Lang {
  if (typeof window === 'undefined') return 'es';
  const stored = window.localStorage.getItem(STORAGE_KEY) as Lang | null;
  return stored && LANGS.includes(stored) ? stored : 'es';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(getInitialLang);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLang = useCallback(() => {
    setLang((prev) => LANGS[(LANGS.indexOf(prev) + 1) % LANGS.length]);
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
