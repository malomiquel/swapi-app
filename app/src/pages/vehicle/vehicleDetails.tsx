import { fetchGetVehicle } from "@/services/fetch/vehicle/getVehicle";
import { Vehicle } from "@/redux/slices/vehiclesSlice";
import DetailsPage from "@/components/detailsPage";
import { CardDescription, CardTitle } from "@/components/ui/card";

const VehicleDetails = () => {
  return (
    <DetailsPage<Vehicle>
      fetchResource={fetchGetVehicle}
      renderHeader={(vehicle) => (
        <>
          <CardTitle className="text-3xl font-bold">
            {vehicle?.name}
          </CardTitle>
          <CardDescription className="text-gray-700">
            Model: {vehicle?.model}
          </CardDescription>
          <div className="mt-4">
            <p><strong>Manufacturer:</strong> {vehicle?.manufacturer}</p>
            <p><strong>Cost in Credits:</strong> {vehicle?.cost_in_credits}</p>
            <p><strong>Length:</strong> {vehicle?.length} meters</p>
            <p><strong>Max Atmosphering Speed:</strong> {vehicle?.max_atmosphering_speed}</p>
            <p><strong>Crew:</strong> {vehicle?.crew}</p>
            <p><strong>Passengers:</strong> {vehicle?.passengers}</p>
            <p><strong>Cargo Capacity:</strong> {vehicle?.cargo_capacity} kg</p>
            <p><strong>Consumables:</strong> {vehicle?.consumables}</p>
            <p><strong>Vehicle Class:</strong> {vehicle?.vehicle_class}</p>
          </div>
        </>
      )}
      getResourcesData={(vehicle) => ({
        films: vehicle?.films || []
      })}
    />
  );
};

export default VehicleDetails;
