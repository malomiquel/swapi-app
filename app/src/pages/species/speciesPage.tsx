import Search from "@/components/search";
import { RootState } from "@/redux/store";
import { extractId } from "@/utils/extractId";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SpeciesPage = () => {
  const species = useSelector((state: RootState) => state.speciesStore.species);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Species</h1>
      
      <Search
        items={species}
        renderItem={(speciesItem) => (
          <Link to={`/species/${extractId(speciesItem.url, "species")}`} key={speciesItem.url}>
            <div className="border rounded p-4 mb-2 hover:bg-gray-100">
              <h2 className="text-xl font-bold">{speciesItem.name}</h2>
              <p>Classification: {speciesItem.classification}</p>
              <p>Average Height: {speciesItem.average_height} cm</p>
            </div>
          </Link>
        )}
        filterItem={(speciesItem, query) =>
          speciesItem.name.toLowerCase().includes(query.toLowerCase()) ||
          speciesItem.classification.toLowerCase().includes(query.toLowerCase())
        }
      />
    </div>
  );
};

export default SpeciesPage;