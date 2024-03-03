import MovieList from "../../components/MovieList/MovieList"
import BrowseHeader from "../../components/BrowseHeader/BrowseHeader"
import useNowPlayingMovies from "../../hooks/useNowPlayingMovies"

const Browse = () => {
    useNowPlayingMovies()

    return (
        <div className="browse">
            <BrowseHeader />
            <MovieList />
        </div>
    )
}

export default Browse
