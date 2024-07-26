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
} from "./component/CommonFun";
import "./index.css";
import useMovies from "./component/Hook/useMovies";

export default function App() {
  const [query, setQuery] = useState("");
  const { movies, isLoading, error } = useMovies(query);
  const handleSelectMovie = () => {
    //pending Logic
  };
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
      </Main>
    </>
  );
}
