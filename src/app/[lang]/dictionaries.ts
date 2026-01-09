import 'server-only';

const dictionaries = {
  en: () => import('./dictionaries/en.json').then((module) => module.default),
  es: () => import('./dictionaries/es.json').then((module) => module.default),
};

export const getDictionary = async (locale: 'en' | 'es') =>
  dictionaries[locale]();

export type DictType = Awaited<ReturnType<typeof getDictionary>>;

export interface SectionProps {
  dict: DictType;
}
