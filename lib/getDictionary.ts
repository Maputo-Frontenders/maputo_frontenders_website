import "server-only";

export type Locale = keyof typeof dictionaries;

const dictionaries = {
  en: () =>
    import("@/app/[lang]/dictionaries/en.json").then(
      (module) => module.default
    ),
  pt: () =>
    import("@/app/[lang]/dictionaries/pt.json").then(
      (module) => module.default
    ),
};

export const getDictionary = async (locale: Locale) => dictionaries[locale]();
export type DictionaryProps = Awaited<ReturnType<typeof getDictionary>>;
