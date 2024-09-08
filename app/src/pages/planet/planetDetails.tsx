import { fetchGetPlanet } from "@/services/fetch/planet/getPlanet";
import { Planet } from "@/redux/slices/planetsSlice";
import DetailsPage from "@/components/detailsPage";
import { CardDescription, CardTitle } from "@/components/ui/card";

const PlanetDetails = () => {
  return (
    <DetailsPage<Planet>
      fetchResource={fetchGetPlanet}
      renderHeader={(planet) => (
        <>
          <CardTitle className="text-3xl font-bold">
            {planet?.name}
          </CardTitle>
          <CardDescription className="text-gray-700">
            Population: {planet?.population}
          </CardDescription>
          <div className="mt-4">
            <p><strong>Rotation Period:</strong> {planet?.rotation_period} hours</p>
            <p><strong>Orbital Period:</strong> {planet?.orbital_period} days</p>
            <p><strong>Diameter:</strong> {planet?.diameter} km</p>
            <p><strong>Climate:</strong> {planet?.climate}</p>
            <p><strong>Gravity:</strong> {planet?.gravity}</p>
            <p><strong>Terrain:</strong> {planet?.terrain}</p>
            <p><strong>Surface Water:</strong> {planet?.surface_water}%</p>
          </div>
        </>
      )}
      getResourcesData={(planet) => ({
        films: planet?.films || []
      })}
    />
  );
};

export default PlanetDetails;
