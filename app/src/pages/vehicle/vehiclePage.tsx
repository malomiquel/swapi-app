import Search from "@/components/search";
import { RootState } from "@/redux/store";
import { extractId } from "@/utils/extractId";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const VehiclePage = () => {
  const vehicles = useSelector((state: RootState) => state.vehiclesStore.vehicles);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Vehicles</h1>

      <Search
        items={vehicles}
        renderItem={(vehicle) => (
          <Link to={`/vehicles/${extractId(vehicle.url, "vehicles")}`} key={vehicle.url}>
            <div className="border rounded p-4 mb-2 hover:bg-gray-100">
              <h2 className="text-xl font-bold">{vehicle.name}</h2>
              <p>Model: {vehicle.model}</p>
              <p>Manufacturer: {vehicle.manufacturer}</p>
            </div>
          </Link>
        )}
        filterItem={(vehicle, query) =>
          vehicle.name.toLowerCase().includes(query.toLowerCase()) ||
          vehicle.model.toLowerCase().includes(query.toLowerCase())
        }
      />
    </div>
  );
};

export default VehiclePage;
