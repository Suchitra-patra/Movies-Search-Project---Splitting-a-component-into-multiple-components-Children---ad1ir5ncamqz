import React, { useState } from "react";
import "../styles/App.css";
import { movies } from "../utils/movieList";

const App = () => {
    const [inputValue, setInputValue] = useState("");
    const [results, setResult] = useState(null);

        let arr = movies.filter((element) => {
            //element.title.toLowerCase().includes(inputValue.toLowerCase())
            let arr = movies.filter((element) => {
                //element.title.toLowerCase().includes(inputValue.toLowerCase())
                return element.title.toLowerCase().includes(inputValue.toLowerCase());
              });
              setResult(arr);
              console.log(arr);
              setInputValue("");
            });
    return (
        <div id="main">
            <form id="form">
                <input
                    type="text"
                    onChange={handleChange}
                    value={inputValue}
                    id="movie-input"
                ></input>
                <button id="button" onClick={handleClick}>
                    Search
                </button>
            </form>
            <div id="result">
                {results &&
                    results.map((movie) => (
                        <div className="movie">{movie.title}</div>
                    ))}
            </div>
        </div>
    );
};

export default App;
