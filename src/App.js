import './App.css';
import {useState,useEffect} from "react";
import axios from 'axios';

function App() {
  const [movies,setMovies] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/getAllMovies")
      .then((data) => {
        setMovies(data.data.movies);
      })
      .catch((e) => {
        console.log(e.message)
      })
  },[])

  return (
    <div className="App">
      <h1>All Movies</h1>
      <div className="movie-container">
        {movies?.map((item,index) => {
        return <div className='container'>
            <h1>Name: {item.name}</h1>
            <h2>Rating: {item.rating}</h2>
            <h2>Release Date: {item.releaseDate}</h2>
            </div>
        })}
      </div>

    </div>
  );
}

export default App;
