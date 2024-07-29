import { useEffect, useRef, useState } from "react";
import useMovies from "./Hook/useMovies";
import StarRating from "./StarRating";

export const average = (arr) => {
  return arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);
};

export const Search = ({ query, setQuery }) => {
  const inputEl = useRef();
  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      ref={inputEl}
    />
  );
};

export const NumResults = ({ movies = [] }) => {
  return (
    <p className="num-results">
      Found <strong>{movies.length}</strong> results
    </p>
  );
};

function Logo() {
  return (
    <div className="logo">
      <span role="img">🍿</span>
      <h1>usePopcorn</h1>
    </div>
  );
}

export const NavBar = ({ element }) => {
  return (
    <nav className="nav-bar">
      <Logo />
      {element}
    </nav>
  );
};

export const Main = ({ children }) => {
  return <main className="main">{children}</main>;
};

export const Box = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="box">
      <button className="btn-toggle" onClick={() => setIsOpen((open) => !open)}>
        {isOpen ? "–" : "+"}
      </button>
      {isOpen && children}
    </div>
  );
};

export const Loader = () => {
  return <p className="loader">Loading...</p>;
};

export const ErrorMessage = ({ message }) => {
  console.log("message", message);
  return (
    <p className="error">
      <span>⛔️</span> {message}
    </p>
  );
};

const Movie = ({ movie, onSelectMovie }) => {
  return (
    <li onClick={() => onSelectMovie(movie.imdbID)}>
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>🗓</span>
          <span>{movie.Year}</span>
        </p>
      </div>
    </li>
  );
};

export const MovieList = ({ movies, onSelectMovie }) => {
  return (
    <ul className="list list-movies">
      {movies?.map((movie) => (
        <Movie movie={movie} key={movie.imdbID} onSelectMovie={onSelectMovie} />
      ))}
    </ul>
  );
};

export const WatchedSummary = ({ watched }) => {
  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.imdbRating));
  const avgRuntime = average(watched.map((movie) => movie.Runtime));
  return (
    <div className="summary">
      <h2>Movies you watched</h2>
      <div>
        <p>
          <span>#️⃣</span>
          <span>{watched.length} movies</span>
        </p>

        <p>
          <span>⭐️</span>
          <span>{avgImdbRating.toFixed(2)}</span>
        </p>

        <p>
          <span>🌟</span>
          <span>{avgUserRating.toFixed(2)}</span>
        </p>

        <p>
          <span>⏳</span>
          <span>{avgRuntime} min</span>
        </p>
      </div>
    </div>
  );
};

export const WatchedMoviesList = ({ watched,onDeleteWatched }) => {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovie
          movie={movie}
          key={movie.selectedId}
          onDeleteWatched={onDeleteWatched}
        />
      ))}
    </ul>
  );
};

const WatchedMovie = ({ movie, onDeleteWatched }) => {
  return (
    <li>
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>⭐️</span>
          <span>{movie.imdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{movie.Year}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{movie.Runtime} min</span>
        </p>

        <button
          className="btn-delete"
          onClick={() => onDeleteWatched(movie.selectedId)}
        >
          X
        </button>
      </div>
    </li>
  );
};

export const MoviDetails = ({
  selectedId,
  onCloseMovies,
  onAddWatched,
  isWatched,
}) => {
  const [moviDetails, setMoviDetails] = useState({});
  const {
    Title,
    Year,
    Poster,
    Plot,
    Language,
    DVD,
    Actors,
    Country,
    Ratings,
    Writer,
    imdbVotes,
    Genre,
    Runtime,
    imdbRating,
    Director,
  } = moviDetails;
  const [userRating, setUserRating] = useState("");

  let watchRecheck = isWatched
    .map((data) => data.selectedId)
    .includes(selectedId);

    let ratetedSelectedMovies = isWatched.find(data=> data.selectedId === selectedId)?.userRating
  // watchRecheck.includes(selectedId)
  const fetchById = async () => {
    const KEY = "f84fc31d";
    const res = await fetch(
      `http://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`
    );

    const json = await res.json();
    setMoviDetails(json);
  };

  useEffect(() => {
    fetchById();
  }, [selectedId]);

  useEffect(()=>{
    document.title = `Menu | ${Title}`;

    return ()=> {
      document.title = 'usePopCone'
    }
  },[Title])

  const handalAdded = () => {
    const newWatchedMovies = {
      selectedId,
      Title,
      Year,
      Poster,
      imdbRating: Number(imdbRating),
      Runtime: Number(Runtime.split("").at(0)),
      userRating,
    };
    onAddWatched(newWatchedMovies);
    onCloseMovies();
  };
  return (
    <div className="details">
      <header>
        <button className="btn-back" onClick={onCloseMovies}>
          &larr;
        </button>
        <img src={Poster} alt={`poster of ${Title}`} />
        <div className="details-overview">
          <h2>{Title}</h2>
          <p>
            {DVD} &bull; {Runtime}
          </p>
          <p>{Writer}</p>
          <p>
            <span>⭐</span>
            {imdbRating} IMDB Rating
          </p>
        </div>
      </header>

      <section>
        <div className="rating">
          {!watchRecheck ? (
            <>
              <StarRating
                maxLength={10}
                size={24}
                onSetRating={setUserRating}
              />
              {userRating > 0 && (
                <button className="btn-add" onClick={handalAdded}>
                  ➕Add-to-List
                </button>
              )}
            </>
          ) : (
            `You Rated with Movie ⭐${ratetedSelectedMovies}`
          )}
        </div>
        <p>
          <em>{Plot}</em>
        </p>
        <p>Actors : {Actors}</p>
        <p>Directed by {Director}</p>
      </section>
    </div>
  );
};
