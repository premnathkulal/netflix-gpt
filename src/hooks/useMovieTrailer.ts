import { useDispatch } from 'react-redux';
import { VideosData, addTrailerVideo } from '../store/slices/movies-slice';
import { useEffect } from 'react';
import { API_CONSTANTS, IMDB_URL } from '../constatnts/api-constants';

export const useMovieTrailer = (movieId: string) => {
    const dispatch = useDispatch();

    useEffect(() => {
        getMoviVideos();
    }, []);

    const getMoviVideos = async () => {
        const data = await fetch(
            `${IMDB_URL}/${movieId}/videos`,
            API_CONSTANTS
        );
        const json = await data.json();
        const videosData: VideosData[] = json.results;
        const trailerData = videosData.filter(
            (data: VideosData) => data.type === 'Trailer'
        );
        const trailer = trailerData.length ? trailerData[0] : videosData[0];
        dispatch(addTrailerVideo(trailer));
    };
};
