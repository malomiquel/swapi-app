import { fetchGetCharacter } from "@/services/fetch/character/getCharacter";
import { Character } from "@/redux/slices/charactersSlice";
import DetailsPage from "@/components/detailsPage";
import { CardDescription, CardTitle } from "@/components/ui/card";

const CharacterDetails = () => {
  return (
    <DetailsPage<Character>
      fetchResource={fetchGetCharacter}
      renderHeader={(character) => (
        <>
          <CardTitle className="text-3xl font-bold">{character?.name}</CardTitle>
          <CardDescription className="text-gray-700">
            Birth Year: {character?.birth_year}
          </CardDescription>
          <div className="text-gray-700 mt-4">
            <p><strong>Height:</strong> {character?.height} cm</p>
            <p><strong>Mass:</strong> {character?.mass} kg</p>
            <p><strong>Hair Color:</strong> {character?.hair_color}</p>
            <p><strong>Skin Color:</strong> {character?.skin_color}</p>
            <p><strong>Eye Color:</strong> {character?.eye_color}</p>
            <p><strong>Gender:</strong> {character?.gender}</p>
            {character?.homeworld && (
              <p><strong>Homeworld:</strong> <a href={`/planets/${character.homeworld}`}>View Homeworld</a></p>
            )}
          </div>
        </>
      )}
      getResourcesData={(character) => ({
        films: character?.films || [],
        species: character?.species || [],
        vehicles: character?.vehicles || [],
        starships: character?.starships || [],
      })}
    />
  );
};

export default CharacterDetails;