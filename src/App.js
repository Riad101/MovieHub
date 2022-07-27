import {react, useState, useEffect} from 'react';
import MovieCard from './MovieCard';

import './app.css';
import SearchIcon from './search.svg';


const API_URL= "http://www.omdbapi.com/?i=tt3896198&apikey=ad2b6f46"
const App = ()=>{

const [movies, setMovies] = useState([]);
const [searchTerm, SetSearchTerm]= useState('');

const searchMovies = async (title)=>{
    const res = await fetch(`${API_URL}&s=${title}`)
    const data = await res.json();
    setMovies(data.Search);
};

// const movie1 = {
//     "Title": "Spiderman and Grandma",
//     "Year": "2009",
//     "imdbID": "tt1433184",
//     "Type": "movie",
//     "Poster": "https://m.media-amazon.com/images/M/MV5BMjE3Mzg0MjAxMl5BMl5BanBnXkFtZTcwNjIyODg5Mg@@._V1_SX300.jpg"
// }

useEffect(()=>{
    searchMovies("spiderman")
}, []);

    return (
        <div className="app">
            <h1>Movie Hub</h1>
            <div className="search">
                <input 
                  placeholder="search your movie..."
                  value={searchTerm}
                  onChange={(e) => SetSearchTerm(e.target.value)}
                />
                <img
                  src={SearchIcon}
                  alt='search' 
                  onClick={()=>{searchMovies(searchTerm)}}             
                />
                
            </div>

        { movies?.length > 0
            ?(<div className="container">
                {movies.map((movie) =>(
                     <MovieCard movie={movie}/>
                    ))
                } 
                </div>
            ):(
                <div className="empty">
                    <h2>No Movies found!</h2>
                </div>
            )
        }
        
        </div>
    );
}

export default App;