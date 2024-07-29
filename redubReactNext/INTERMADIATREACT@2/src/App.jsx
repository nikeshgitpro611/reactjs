import { useState } from "react";
import {
  NumResults,
  Search,
  NavBar,
  Box,
  Main,
  Loader,
  ErrorMessage,
  MovieList,
  WatchedSummary,
  MoviDetails,
  WatchedMoviesList
} from "./component/CommonFun";
import "./index.css";
import useMovies from "./component/Hook/useMovies";

export default function App() {
  const [query, setQuery] = useState("");
  const { movies, isLoading, error } = useMovies(query);
  const [selectedId, setSelectedId] = useState(null);
  const [watched, setWatched] = useState([]);

  // console.log('movies : ', movies);
  const handleSelectMovie = (id) => {
    console.log("Id", id);
    setSelectedId((selected) => (id === selected ? null : id));
    //pending Logic
  };
  const handelOnCloseMovies = () => {
    setSelectedId(null);
  };

  const handelAllClickData = (movies) => {
    setWatched(watched=> [...watched, movies])
  }

  const handelDeleted = (id)=>{
    setWatched(movies=> movies.filter(data=> data.selectedId !== id))
  }
  return (
    <>
      <NavBar
        element={
          <>
            <Search query={query} setQuery={setQuery} />
            <NumResults movies={movies} />
          </>
        }
      />

      <Main>
        <Box>
          {isLoading && <Loader />}
          {!isLoading && !error && (
            <MovieList movies={movies} onSelectMovie={handleSelectMovie} />
          )}
          {error && <ErrorMessage message={error} />}
        </Box>
        <Box>
          {selectedId ? (
            <MoviDetails
              selectedId={selectedId}
              onCloseMovies={handelOnCloseMovies}
              onAddWatched= {handelAllClickData}
              isWatched = {watched}
            />
          ) : (
            <>
            <WatchedSummary watched={ watched} />
            <WatchedMoviesList watched={ watched} onDeleteWatched =  {handelDeleted}/>
            </>
          )}
        </Box>
      </Main>
    </>
  );
}
