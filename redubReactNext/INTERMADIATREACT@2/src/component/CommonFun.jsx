import { useRef, useState } from "react";

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

export const NumResults = ({ movies }) => {
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
    console.log('message', message);
  return (
    <p className="error">
      <span>⛔️</span> {message}
    </p>
  );
};

const Movie = ({movie, onSelectMovie}) => {
    return(
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
    )
}

export const MovieList = ({movies, onSelectMovie}) => {
    return (
        <ul className= "list list-movies">
            {movies?.map(movie=> (<Movie movie={movie} key={movie.imdbID} onSelectMovie={onSelectMovie}/>))}
        </ul>
    )
}
