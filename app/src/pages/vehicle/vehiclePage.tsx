import Search from "@/components/search";
import { RootState } from "@/redux/store";
import { extractId } from "@/utils/extractId";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

/**
 * Renders the Vehicle page component displaying a list of vehicles with search functionality
 * @returns {JSX.Element} A React component that displays a list of vehicles with search capabilities
 */
const VehiclePage = () => {
  /**
   * Selects the vehicles from the Redux store's vehiclesStore slice
   * @param {Function} useSelector - React-Redux hook to access the Redux store state
   * @returns {Array} An array of vehicle objects from the Redux store
   */
  const vehicles = useSelector((state: RootState) => state.vehiclesStore.vehicles);

  return (
    ```
    /**
     * Renders an individual vehicle item as a link in a list
     * @param {Object} vehicle - The vehicle object containing details to be displayed
     * @returns {JSX.Element} A Link component containing vehicle information
     */
    ```
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Vehicles</h1>
/**
 * Filters vehicles based on a search query
 * @param {Object} vehicle - The vehicle object to be filtered
 * @param {string} vehicle.name - The name of the vehicle
 * @param {string} vehicle.model - The model of the vehicle
 * @param {string} query - The search query to filter by
 * @returns {boolean} True if the vehicle matches the query, false otherwise
 */

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
