import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SeconderyContainer = () => {
    const movies = useSelector((store) => store.movies)

    return(
        movies.addNowPlayingMovies &&
        (<div className="bg-black">
            <div className=" -mt-52 pl-12 relative z-20">
                <MovieList title = {"Now Playing"} movies={movies.addNowPlayingMovies} />
                <MovieList title = {"Top Rated"} movies={movies.TopRatedMovies} />
                <MovieList title = {"Popular"} movies={movies.PopularMovies} />
                <MovieList title = {"Upcoming Movies"} movies={movies.UpComingMovies} />
            </div>
        </div>)
    );
};

export default SeconderyContainer;