import { useSelector } from 'react-redux'
import MovieList from '../MovieList/MovieList'
import './BrowseMovieList.scss'
import { RootState } from '../../store/app-store'
import { Movies } from '../../store/slices/movies-slice'

const BrowseMovieList = () => {
    const nowPlayingMovieList = useSelector<RootState>(state => state.movies.nowPlayingMovies) as Movies[]
    const popularMovieList = useSelector<RootState>(state => state.movies.popularMovies) as Movies[]
    const upComingMovieList = useSelector<RootState>(state => state.movies.upComingMovies) as Movies[]
    const topRatedMovieList = useSelector<RootState>(state => state.movies.topRatedMovies) as Movies[]

    return (
        <div className="browse-movie-list">
            <MovieList title={"Now Playing Movies"} movies={nowPlayingMovieList} />
            <MovieList title={"Popular Movies"} movies={popularMovieList} />
            <MovieList title={"Upcoming Movies"} movies={upComingMovieList} />
            <MovieList title={"Top Rated Movies"} movies={topRatedMovieList} />
        </div>
    )
}

export default BrowseMovieList
