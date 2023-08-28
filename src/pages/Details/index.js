import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import {Container} from "./styles"


function Details(){

    const {id} = useParams()
    const [movie, setMovie] = useState({})
    const image_path = 'https://image.tmdb.org/t/p/w500'

    useEffect(() => {
        fetch (`https://api.themoviedb.org/3/movie/${id}?api_key=cecdcf30c602de96c55089a89b7e0907`)
        .then (response => response.json())
        .then (data => {
            const movie = {
                id,
                title: data.title,
                sinopse: data.overview,
                image: `${image_path}${data.poster_path}`,
                releaseDate: data.release_date
            }
            setMovie(movie)
        })
    }, [id])

    return (

      <Container>
        <div className='movie'>
            <img src={movie.image} alt={movie.sinopse}/>
            <div className='details'>
                <h1>{movie.title}</h1>
                <span>sinopse: {movie.sinopse}</span>
                <span className='release-date'>release date: {movie.releaseDate}</span>
                <Link to="/"><button>Go Back</button></Link>
            </div>
        </div>
      </Container>
    )  
}

export default Details