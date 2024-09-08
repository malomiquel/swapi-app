import { fetchGetStarship } from "@/services/fetch/starship/getStarship";
import { Starship } from "@/redux/slices/starshipsSlice";
import DetailsPage from "@/components/detailsPage";
import { CardDescription, CardTitle } from "@/components/ui/card";

const StarshipDetails = () => {
  return (
    <DetailsPage<Starship>
      fetchResource={fetchGetStarship}
      renderHeader={(starship) => (
        <>
          <CardTitle className="text-3xl font-bold">
            {starship?.name}
          </CardTitle>
          <CardDescription className="text-gray-700">
            Model: {starship?.model}
          </CardDescription>
          <div className="mt-4">
            <p><strong>Manufacturer:</strong> {starship?.manufacturer}</p>
            <p><strong>Cost in Credits:</strong> {starship?.cost_in_credits}</p>
            <p><strong>Length:</strong> {starship?.length} meters</p>
            <p><strong>Max Atmosphering Speed:</strong> {starship?.max_atmosphering_speed}</p>
            <p><strong>Crew:</strong> {starship?.crew}</p>
            <p><strong>Passengers:</strong> {starship?.passengers}</p>
            <p><strong>Cargo Capacity:</strong> {starship?.cargo_capacity} kg</p>
            <p><strong>Consumables:</strong> {starship?.consumables}</p>
            <p><strong>Hyperdrive Rating:</strong> {starship?.hyperdrive_rating}</p>
            <p><strong>MGLT:</strong> {starship?.MGLT}</p>
            <p><strong>Starship Class:</strong> {starship?.starship_class}</p>
          </div>
        </>
      )}
      getResourcesData={(starship) => ({
        films: starship?.films || []
      })}
    />
  );
};

export default StarshipDetails;
