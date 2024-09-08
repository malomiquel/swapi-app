import { useCallback, useEffect, useState } from 'react';

type Resource = {
  nameOrTitle: string;
  url: string;
};

export function useResources(data: { [key: string]: string[] } | undefined) {
  const [resources, setResources] = useState<{ [key: string]: Resource[] }>({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchResource = useCallback(
    async (urls: string[], resourceKey: string) => {
      const fetchedResources = await Promise.all(
        urls.map(async (url) => {
          const response = await fetch(url);
          const resourceData = await response.json();
          
          const nameOrTitle = resourceData.name || resourceData.title || 'Unknown';
          
          return { nameOrTitle, url: resourceData.url };
        })
      );

      setResources((prevState) => ({
        ...prevState,
        [resourceKey]: fetchedResources,
      }));
    },
    []
  );

  const fetchAllResources = useCallback(async () => {
    if (!data) return;

    const resourceKeys = Object.keys(data);
    const fetchPromises = resourceKeys.map((resourceKey) => {
      const urls = data[resourceKey];
      if (urls && urls.length > 0) {
        return fetchResource(urls, resourceKey);
      } else {
        setResources((prevState) => ({
          ...prevState,
          [resourceKey]: [],
        }));
      }
      return Promise.resolve();
    });

    await Promise.all(fetchPromises);
    setIsLoading(false);
  }, [data, fetchResource]);

  useEffect(() => {
    if (data) {
      setIsLoading(true);
      fetchAllResources();
    }
  }, [data, fetchAllResources]);

  return {
    resources,
    isLoading,
  };
}