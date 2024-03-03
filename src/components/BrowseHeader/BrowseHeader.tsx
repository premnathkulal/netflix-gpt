import { useSelector } from "react-redux"
import { RootState } from "../../store/app-store"
import VideoBackground from "../VideoBackground/VideoBackground"
import VideoTitle from "../VideoTitle/VideoTitle"
import { Movies } from "../../store/slices/movies-slice"

const BrowseHeader = () => {
    const movies = useSelector<RootState>(store => store.movies.nowPlayingMovies) as Movies[]

    if (!movies) return

    const latestMovie = movies[1]
    const { original_title, overview, id } = latestMovie

    return (
        <div className="browse-header">
            <VideoBackground movieId={id} />
            <VideoTitle title={original_title} overview={overview} />
        </div>
    )
}

export default BrowseHeader
