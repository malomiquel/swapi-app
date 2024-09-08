import { useCallback, useEffect, useState, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { useResources } from "@/hooks/useResources";
import ResourceSection from "@/components/resourceSection";
import { Resources } from "@/utils/extractId";

interface DetailsPageProps<T> {
  fetchResource: (id: string) => Promise<T>;
  renderHeader: (resource: T | null) => React.ReactNode;
  getResourcesData: (resource: T | null) => { [key: string]: string[] };
}

const DetailsPage = <T,>({
  fetchResource,
  renderHeader,
  getResourcesData,
}: DetailsPageProps<T>) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [resource, setResource] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const getResource = useCallback(async () => {
    try {
      const response = await fetchResource(id!);

      setResource(response as T);
    } catch {
      navigate("/404");
    } finally {
      setIsLoading(false);
    }
  }, [id, fetchResource, navigate]);

  useEffect(() => {
    getResource();
  }, [getResource]);

  const resourceData = useMemo(() => getResourcesData(resource), [resource, getResourcesData]);

  const { resources, isLoading: isResourceLoading } = useResources(resourceData);

  return isLoading ? (
    <Card className="p-6 bg-white max-w-5xl mx-auto">
      <CardHeader>
        <Skeleton className="h-8 w-3/4" />
      </CardHeader>

      <Separator className="my-4" />

      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Skeleton className="h-40 w-full" />
          <Skeleton className="h-40 w-full" />
        </div>
      </CardContent>
    </Card>
  ) : (
    <Card className="p-6 bg-white max-w-5xl mx-auto">
      <CardHeader>{renderHeader(resource)}</CardHeader>

      <Separator className="my-4" />

      <CardContent>
        {isResourceLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Skeleton className="h-40 w-full" />
            <Skeleton className="h-40 w-full" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.keys(resources).map((key) => (
              <ResourceSection
                key={key}
                title={key.charAt(0).toUpperCase() + key.slice(1)}
                resources={resources[key]}
                type={key === "characters" ? "people" : key as Resources}
              />
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default DetailsPage;
