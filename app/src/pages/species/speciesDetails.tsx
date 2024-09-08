import { fetchGetSpecie } from "@/services/fetch/specie/getSpecie";
import { Species } from "@/redux/slices/speciesSlice";
import DetailsPage from "@/components/detailsPage";
import { extractId } from "@/utils/extractId";
import { Link } from "react-router-dom";
import { CardDescription, CardTitle } from "@/components/ui/card";

const SpeciesDetails = () => {
  return (
    <DetailsPage<Species>
      fetchResource={fetchGetSpecie}
      renderHeader={(species) => (
        <>
          <CardTitle className="text-3xl font-bold">
            {species?.name}
          </CardTitle>
          <CardDescription className="text-gray-700">
            Classification: {species?.classification}
          </CardDescription>
          <div className="mt-4">
            <p><strong>Designation:</strong> {species?.designation}</p>
            <p><strong>Average Height:</strong> {species?.average_height} cm</p>
            <p><strong>Skin Colors:</strong> {species?.skin_colors}</p>
            <p><strong>Hair Colors:</strong> {species?.hair_colors}</p>
            <p><strong>Eye Colors:</strong> {species?.eye_colors}</p>
            <p><strong>Average Lifespan:</strong> {species?.average_lifespan} years</p>
            <p><strong>Language:</strong> {species?.language}</p>
            {species?.homeworld && (
              <p><strong>Homeworld:</strong> <Link to={`/planets/${extractId(species.homeworld, "planets")}`}>View Homeworld</Link></p>
            )}
          </div>
        </>
      )}
      getResourcesData={(species) => ({
        people: species?.people || [],
        films: species?.films || []
      })}
    />
  );
};

export default SpeciesDetails;
