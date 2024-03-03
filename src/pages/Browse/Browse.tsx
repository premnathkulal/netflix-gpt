import BrowseHeader from "../../components/BrowseHeader/BrowseHeader"
import BrowseMovieList from "../../components/BrowseMovieList/BrowseMovieList"
import useNowPlayingMovies from "../../hooks/useNowPlayingMovies"

const Browse = () => {
    useNowPlayingMovies()

    return (
        <div className="browse">
            <BrowseHeader />
            <BrowseMovieList />
        </div>
    )
}

export default Browse
