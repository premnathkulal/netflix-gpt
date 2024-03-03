import { IMDB_IMG_URL } from "../../constatnts/api-constants"
import { Movies } from "../../store/slices/movies-slice"
import './MovieCard.scss'

interface MovieCardProps {
    movie: Movies
}

const MovieCard = (props: MovieCardProps) => {
    const { movie } = props
    console.log(movie)

    return (
        <div className="movie-card">
            <img src={`${IMDB_IMG_URL}${movie.poster_path}`} alt="movie-poster" />
        </div>
    )
}

export default MovieCard
