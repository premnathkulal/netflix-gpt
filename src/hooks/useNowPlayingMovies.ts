import { useDispatch } from 'react-redux';
import { API_CONSTANTS, IMDB_URL } from '../constatnts/api-constants';
import { addNowPLayingMovies } from '../store/slices/movies-slice';
import { useEffect } from 'react';

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    const getNowPlayingMovies = async () => {
        await fetch(`${IMDB_URL}/now_playing?page=1`, API_CONSTANTS)
            .then((res) => res.json())
            .then((json) => {
                dispatch(addNowPLayingMovies(json.results));
            })
            .catch((err) => console.error('error:' + err));
    };

    useEffect(() => {
        getNowPlayingMovies();
    }, []);
};

export default useNowPlayingMovies;
