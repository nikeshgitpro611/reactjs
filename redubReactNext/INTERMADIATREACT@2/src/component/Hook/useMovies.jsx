import React, { useEffect, useState } from "react";
import {tempMovieData, tempWatchedData} from '../../assets/data'

const useMovies = (query) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const KEY = "f84fc31d";

  const fetchApi = async () => {
    const controller = new AbortController();
    console.log("controller : ", controller);
    try {
      const responce = await fetch(
        `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
        { signal: controller.signal }
      );
      if (!responce.ok)
        throw new Error("Something went wrong with fetching movies");
      const json = await responce.json();
      console.log("JSON : ", json);
      if (json.responce === "false") {
        throw new Error("Movie not found");
      }
      setMovies(json.Search);
      setError("");
    } catch (err) {
      if (err.name != "AbortError") {
        console.log(err.message);
        setError(err.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchApi();
  }, [query]);

  return { movies, isLoading, error };
};

export default useMovies;
