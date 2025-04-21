import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SeconderyContainer from "./SeconderyContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import UseUpComingMovies from "../hooks/useUpComingMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
    
    const showGptSearch = useSelector(store => store.gpt.showGptSearch);

    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    UseUpComingMovies();

    return (
        <div>
            <Header />
            { 
            showGptSearch ? (
                <GptSearch /> 
            ):( 
            <>
                <MainContainer />
                <SeconderyContainer />
            </>
            )}
            
            

        </div>
    );
};

export default Browse;