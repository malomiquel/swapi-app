import Search from "@/components/search";
import { RootState } from "@/redux/store";
import { extractId } from "@/utils/extractId";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CharacterPage = () => {
  const characters = useSelector((state: RootState) => state.charactersStore.characters);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Characters</h1>
      
      <Search
        items={characters}
        renderItem={(character) => (
          <Link to={`/people/${extractId(character.url, "people")}`} key={character.url}>
            <div className="border rounded p-4 mb-2 hover:bg-gray-100">
              <h2 className="text-xl font-bold">{character.name}</h2>
              <p>Gender: {character.gender}</p>
              <p>Birth Year: {character.birth_year}</p>
            </div>
          </Link>
        )}
        filterItem={(character, query) =>
          character.name.toLowerCase().includes(query.toLowerCase())
        }
      />
    </div>
  );
};

export default CharacterPage;