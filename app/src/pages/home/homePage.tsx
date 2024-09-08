import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

import { RootState } from "@/redux/store"
import { extractId } from "@/utils/extractId"
import Search from "@/components/search"

const HomePage = () => {
  const films = useSelector((state: RootState) => state.filmsStore.films);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Films</h1>

      <Search
        items={films}
        renderItem={(film) => (
          <Link to={`/films/${extractId(film.url, "films")}`} key={film.url}>
            <div className="border rounded p-4 mb-2 hover:bg-gray-100">
              <h2 className="text-xl font-bold">{film.title}</h2>
              <p>Director: {film.director}</p>
              <p>Release Date: {film.release_date}</p>
            </div>
          </Link>
        )}
        filterItem={(film, query) =>
          film.title.toLowerCase().includes(query.toLowerCase()) ||
          film.director.toLowerCase().includes(query.toLowerCase())
        }
      />
    </div>
  );
}

export default HomePage