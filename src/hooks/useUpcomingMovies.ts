import { useDispatch } from 'react-redux';
import { API_CONSTANTS, IMDB_URL } from '../constatnts/api-constants';
import { addUpComingMovies } from '../store/slices/movies-slice';
import { useEffect } from 'react';

const useUpcomingMovies = () => {
    const dispatch = useDispatch();
    const getUpcomingMovies = async () => {
        await fetch(`${IMDB_URL}/upcoming?page=1`, API_CONSTANTS)
            .then((res) => res.json())
            .then((json) => {
                dispatch(addUpComingMovies(json.results));
            })
            .catch((err) => console.error('error:' + err));
    };

    useEffect(() => {
        getUpcomingMovies();
    }, []);
};

export default useUpcomingMovies;
