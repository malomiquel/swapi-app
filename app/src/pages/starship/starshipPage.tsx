import Search from "@/components/search";
import { RootState } from "@/redux/store";
import { extractId } from "@/utils/extractId";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const StarshipPage = () => {
  const starships = useSelector((state: RootState) => state.starshipsStore.starships);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Starships</h1>
      
      <Search
        items={starships}
        renderItem={(starship) => (
          <Link to={`/starships/${extractId(starship.url, "starships")}`} key={starship.url}>
            <div className="border rounded p-4 mb-2 hover:bg-gray-100">
              <h2 className="text-xl font-bold">{starship.name}</h2>
              <p>Model: {starship.model}</p>
              <p>Starship Class: {starship.starship_class}</p>
            </div>
          </Link>
        )}
        filterItem={(starship, query) =>
          starship.name.toLowerCase().includes(query.toLowerCase()) ||
          starship.model.toLowerCase().includes(query.toLowerCase())
        }
      />
    </div>
  );
};

export default StarshipPage;
