import { Link } from "react-router-dom";
import {Container, MovieList, Movie, Header} from "./styles";
import { useState, useEffect } from "react";

function Home() {

    const [movies, setMovies] = useState([])
    const image_path = 'https://image.tmdb.org/t/p/w500'

    useEffect(() => {
        //consumir api...
        fetch ('https://api.themoviedb.org/3/movie/popular?api_key=cecdcf30c602de96c55089a89b7e0907')
        .then (response => response.json())
        .then (data => setMovies(data.results)) 
        
    })

    // const movies = [
    //     {
    //         id: 1,
    //         title: 'spider Man',
    //         image_url: 'https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_.jpg',
    //     },
    //     {
    //         id: 2,
    //         title: 'Batman',
    //         image_url: 'https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_.jpg',
    //     },
    //     {
    //         id: 3,
    //         title: 'Flesh',
    //         image_url: 'https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_.jpg',
    //     }
    // ]

    return (
        <Container>
            <Header>
                <h1><span>Cine</span>PIPOCA</h1>
                <ul>
                    <li>Assine</li>
                    <li>Login</li>
                </ul>
            </Header>
            <h1>Movies</h1>
            <MovieList>
                    {movies.map(movie => {
                        return(
                            <Movie key={movie.id}>
                                <Link to={`/details/${movie.id}`}><img src={`${image_path}${movie.poster_path}`} alt={movie.title}/></Link>
                                <span>{movie.title}</span>
                            </Movie>
                        )
                    })}
            </MovieList>

        </Container>
        
    )
}

export default Home;