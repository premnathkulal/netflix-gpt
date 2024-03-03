import { Movies } from '../../store/slices/movies-slice';
import MovieCard from '../MovieCard/MovieCard';
import './MovieList.scss'

interface MovieListProps {
    title: string;
    movies: Movies[];
}

const MovieList = (props: MovieListProps) => {
    const { title, movies } = props;

    return (
        <div className="movie-list">
            {movies &&
                <>
                    <div className="movie-title">{title}</div>
                    <div className="movie-list-container">
                        {movies.map((data) => (
                            <MovieCard key={data.id} movie={data} />
                        ))}
                    </div>
                </>
            }
        </div>
    );
};

export default MovieList;
