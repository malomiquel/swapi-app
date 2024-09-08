import { fetchGetFilm } from "@/services/fetch/film/getFilm";
import { Film } from "@/redux/slices/filmsSlice";
import DetailsPage from "@/components/detailsPage";
import { CardDescription, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const FilmDetails = () => {
  return (
    <DetailsPage<Film>
      fetchResource={fetchGetFilm}
      renderHeader={(film) => (
        <>
          <CardTitle className="text-3xl font-bold">
            {film?.title}
          </CardTitle>
          <CardDescription className="text-gray-700">
            Episode {film?.episode_id}
          </CardDescription>
          <Separator className="my-4" />
          <div className="text-gray-700">
            <p><strong>Director:</strong> {film?.director}</p>
            <p><strong>Producer:</strong> {film?.producer}</p>
            <p><strong>Release Date:</strong> {film?.release_date}</p>
          </div>
          <Separator className="my-4" />
          <h2 className="text-2xl font-bold mb-2">Opening Crawl</h2>
          <p className="text-gray-800 mb-4">{film?.opening_crawl}</p>
        </>
      )}
      getResourcesData={(film) => ({
        characters: film?.characters || [],
        planets: film?.planets || [],
        starships: film?.starships || [],
        species: film?.species || [],
      })}
    />
  );
};

export default FilmDetails;
