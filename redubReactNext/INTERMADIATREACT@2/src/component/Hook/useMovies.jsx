import React, { useEffect, useState } from "react";
import { tempMovieData, tempWatchedData } from "../../assets/data";

const useMovies = (query) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const KEY = "f84fc31d";

  const controller = new AbortController();// it's browser Api
  const fetchApi = async () => {

    try {
      setIsLoading(true);
      const responce = await fetch(
        `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
        { signal: controller.signal }
      );
      if (!responce.ok)
        throw new Error("Something went wrong with fetching movies");
      const json = await responce.json();
      if (json.Response === "False") {
      throw new Error("Movie not found Search on top");
      }

      setMovies(json.Search);
      setError("");
    } catch (err) {
      if (err.name != "AbortError") {
        // console.log(err.message);
        setError(err.message);
      }
    } finally {
      setIsLoading(false);
    }

    if (query.length < 3) {
      setMovies([])
      setError("")
      return;
    }
  };

  useEffect(() => {
    fetchApi();
    return ()=> {
      controller.abort()
    }
  }, [query]);

  return { movies, isLoading, error };
};

export default useMovies;
