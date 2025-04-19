import { useDispatch } from "react-redux";
import { addUpComingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";



const UseUpComingMovies = () => {
    const dispatch = useDispatch();

    const getUpComingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS);

        const json = await data.json(); 
        dispatch(addUpComingMovies(json.results));
    };

    useEffect(() => {
        getUpComingMovies();
    });
};

export default UseUpComingMovies;
