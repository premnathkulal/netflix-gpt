import BrowseHeader from "../../components/BrowseHeader/BrowseHeader"
import BrowseMovieList from "../../components/BrowseMovieList/BrowseMovieList"
import useNowPlayingMovies from "../../hooks/useNowPlayingMovies"
import usePopularMovies from "../../hooks/usePopularMovies"
import useTopRatedMovies from "../../hooks/useTopRatedMovies"
import useUpcomingMovies from "../../hooks/useUpcomingMovies"

const Browse = () => {
    useNowPlayingMovies()
    usePopularMovies()
    useUpcomingMovies()
    useTopRatedMovies()

    return (
        <div className="browse">
            <BrowseHeader />
            <BrowseMovieList />
        </div>
    )
}

export default Browse
