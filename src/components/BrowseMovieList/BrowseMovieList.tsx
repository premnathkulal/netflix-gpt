import { useSelector } from 'react-redux'
import MovieList from '../MovieList/MovieList'
import './BrowseMovieList.scss'
import { RootState } from '../../store/app-store'
import { Movies } from '../../store/slices/movies-slice'

const BrowseMovieList = () => {
    const movieList = useSelector<RootState>(state => state.movies.nowPlayingMovies) as Movies[]

    return (
        <div className="browse-movie-list">
            <MovieList title={"Now Playing Movies"} movies={movieList} />
            <MovieList title={"Trending"} movies={movieList} />
            <MovieList title={"Popular"} movies={movieList} />
            <MovieList title={"Upcoming Movies"} movies={movieList} />
            <MovieList title={"Horror"} movies={movieList} />
        </div>
    )
}

export default BrowseMovieList
