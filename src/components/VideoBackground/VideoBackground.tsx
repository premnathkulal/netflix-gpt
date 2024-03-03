import { useSelector } from 'react-redux';
import { VideosData } from '../../store/slices/movies-slice';
import './VideoBackground.scss';
import { RootState } from '../../store/app-store';
import { useMovieTrailer } from '../../hooks/useMovieTrailer';

export interface VideoBackgroundProps {
    movieId: string;
}

const VideoBackground = (props: VideoBackgroundProps) => {

    const { movieId } = props
    const movieTrilerStore = useSelector<RootState>(
        (state) => state.movies.trilerVideo
    ) as VideosData;
    useMovieTrailer(movieId)

    return (
        <div className="video-background">
            <iframe
                className="iframe"
                src={`https://www.youtube.com/embed/${movieTrilerStore.key}?autoplay=1&mute=1&controls=0`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
            ></iframe>
        </div>
    );
};

export default VideoBackground;
