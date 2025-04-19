import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SeconderyContainer from "./SeconderyContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import UseUpComingMovies from "../hooks/useUpComingMovies";

const Browse = () => {
    
    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    UseUpComingMovies();

    return (
        <div>
            <Header />
            <MainContainer />
            <SeconderyContainer />

        </div>
    );
};

export default Browse;