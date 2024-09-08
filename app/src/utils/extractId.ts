export type Resources = 'films' | 'people' | 'planets' | 'species' | 'starships' | 'vehicles'

export const extractId = (url: string, resource: Resources): string | undefined => {
  const regex = new RegExp(`/${resource}/(\\d+)/`);
  return url.match(regex)?.[1];
};