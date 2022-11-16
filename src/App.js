import MovieCard from "./MovieCard";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const API_URL =
    "https://api.themoviedb.org/3/movie/popular?api_key=fc1170f44efdee2e180019d75be6a1d3";

  const API_SEARCH =
    "https://api.themoviedb.org/3/search/movie?api_key=fc1170f44efdee2e180019d75be6a1d3&query=";

  const [movies, setMovies] = useState([]);
  const [term, setTerm] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((data) => data.json())
      .then((moviesList) => setMovies(moviesList.results));
  }, []);
  console.log(movies);

  const handleSearch = (e) => {
    e.preventDefault();

    fetch(API_SEARCH + term)
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  };

  return (
    <div className="App">
      <div className="search_nav">
        <div className="title">
          <h1>Movies</h1>
        </div>
        <div className="search_box">
          <form onSubmit={handleSearch}>
            <input onChange={(e) => setTerm(e.target.value)} />
            <button>Search</button>
          </form>
        </div>
      </div>
      <div className="movies">
        {movies.map((movie) => {
          return <MovieCard {...movie} key={movie.id} />;
        })}
      </div>
    </div>
  );
}

export default App;
