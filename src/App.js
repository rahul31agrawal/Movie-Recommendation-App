import { useState } from "react";
import "./styles.css";

var movieDictionary = {
  Comedy: [
    {
      Film: "👉 Golmaal",

      Ratings: "🌟Rating 5/5"
    },
    {
      Film: "👉Hungama",

      Ratings: " 🌟Rating 4/5"
    },
    {
      Film: "👉Malamaal Weekly",

      Ratings: " 🌟Rating 3/5"
    }
  ],
  Romantic: [
    {
      Film: "👉Tere Naal Love Hogaya",

      Ratings: "🌟Rating 4/5"
    },
    {
      Film: "👉Rehna hai tere dil me",

      Ratings: "🌟Rating 5/5"
    },
    {
      Film: "👉Bareli ki barfi!!",

      Ratings: "🌟Rating 3/5"
    }
  ],
  Thriller: [
    {
      Film: "👉Raat Akeli Hai",

      Ratings: "🌟Rating 5/5"
    },
    {
      Film: "👉Ek Villan",

      Ratings: "🌟Rating 3/5"
    },
    {
      Film: "👉Talaash ",

      Ratings: "🌟Rating 4.5/5"
    }
  ]
};
export default function App() {
  var [outputMovie, setOutputMovie] = useState("Comedy");

  function movieClickHandler(Film) {
    setOutputMovie(Film);
  }

  return (
    <div className="App">
      <h1>
        <span role="img" aria-labelledby="movieNotes"></span>
        Movie Recommendation App{" "}
      </h1>
      <p>Checkout some of my favorite movies from three different genres.</p>

      <div className="genreList">
        {Object.keys(movieDictionary).map((movie) => {
          return (
            <button
              className="btnClick"
              onClick={() => movieClickHandler(movie)}
              style={{ alignself: "left", cursor: "pointer" }}
            >
              {" "}
              {movie}
            </button>
          );
        })}
      </div>

      <div className="seeMovieList">
        {movieDictionary[outputMovie].map((movie) => {
          return (
            <ul className="display-list" key={movie}>
              <li> {movie.Film} </li>

              <li> {movie.Ratings} </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
}
