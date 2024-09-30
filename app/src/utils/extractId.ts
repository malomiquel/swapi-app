export type Resources = 'films' | 'people' | 'planets' | 'species' | 'starships' | 'vehicles'

/**
 * Extracts the ID from a given URL for a specific resource
 * @param {string} url - The URL to extract the ID from
 * @param {Resources} resource - The resource type to match in the URL
 * @returns {string|undefined} The extracted ID if found, otherwise undefined
 */
export const extractId = (url: string, resource: Resources): string | undefined => {
  const regex = new RegExp(`/${resource}/(\\d+)/`);
  return url.match(regex)?.[1];
};