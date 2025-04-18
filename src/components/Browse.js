import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SeconderyContainer from "./SeconderyContainer";

const Browse = () => {
    
    useNowPlayingMovies();

    return (
        <div>
            <Header />
            <MainContainer />
            <SeconderyContainer />

        </div>
    );
};

export default Browse;