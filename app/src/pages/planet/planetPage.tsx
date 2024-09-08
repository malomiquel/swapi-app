import Search from "@/components/search";
import { RootState } from "@/redux/store";
import { extractId } from "@/utils/extractId";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const PlanetPage = () => {
  const planets = useSelector((state: RootState) => state.planetsStore.planets);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Planets</h1>
      
      <Search
        items={planets}
        renderItem={(planet) => (
          <Link to={`/planets/${extractId(planet.url, "planets")}`} key={planet.url}>
            <div className="border rounded p-4 mb-2 hover:bg-gray-100">
              <h2 className="text-xl font-bold">{planet.name}</h2>
              <p>Population: {planet.population}</p>
              <p>Climate: {planet.climate}</p>
            </div>
          </Link>
        )}
        filterItem={(planet, query) =>
          planet.name.toLowerCase().includes(query.toLowerCase())
        }
      />
    </div>
  );
};

export default PlanetPage;