import { useDispatch } from 'react-redux';
import { API_CONSTANTS, IMDB_URL } from '../constatnts/api-constants';
import { addTopRatedMovies } from '../store/slices/movies-slice';
import { useEffect } from 'react';

const useTopRatedMovies = () => {
    const dispatch = useDispatch();
    const getTopRatedMovies = async () => {
        await fetch(`${IMDB_URL}/top_rated?page=1`, API_CONSTANTS)
            .then((res) => res.json())
            .then((json) => {
                dispatch(addTopRatedMovies(json.results));
            })
            .catch((err) => console.error('error:' + err));
    };

    useEffect(() => {
        getTopRatedMovies();
    }, []);
};

export default useTopRatedMovies;
