import { Link } from "react-router-dom";
import { ScrollArea } from "@/components/ui/scroll-area";
import { extractId } from "@/utils/extractId";
import { FC } from "react";

type Resources = 'films' | 'people' | 'planets' | 'species' | 'starships' | 'vehicles'

type Resource = {
  url: string;
  nameOrTitle: string;
};

type ResourceSectionProps = {
  title: string;
  resources: Resource[];
  type: Resources;
};

const ResourceSection: FC<ResourceSectionProps> = ({ title, resources, type }) => {
  return (
    <div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      {resources.length > 0 ? (
        <ScrollArea className="h-32">
          <ul className="list-disc list-inside">
            {resources.map((resource) => {
              const resourceId = extractId(resource.url, type);
              return (
                <li key={resource.url}>
                  <Link to={`/${type}/${resourceId}`} className="text-blue-500 hover:underline">
                    {resource.nameOrTitle}
                  </Link>
                </li>
              );
            })}
          </ul>
        </ScrollArea>
      ) : (
        <div className="text-gray-500">No {title.toLowerCase()} available</div>
      )}
    </div>
  )
};

export default ResourceSection;