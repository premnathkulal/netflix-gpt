import { useDispatch } from 'react-redux';
import { API_CONSTANTS, IMDB_URL } from '../constatnts/api-constants';
import { addPopularMovies } from '../store/slices/movies-slice';
import { useEffect } from 'react';

const usePopularMovies = () => {
    const dispatch = useDispatch();
    const getPopularMovies = async () => {
        await fetch(`${IMDB_URL}/popular?page=1`, API_CONSTANTS)
            .then((res) => res.json())
            .then((json) => {
                dispatch(addPopularMovies(json.results));
            })
            .catch((err) => console.error('error:' + err));
    };

    useEffect(() => {
        getPopularMovies();
    }, []);
};

export default usePopularMovies;
