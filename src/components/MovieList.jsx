const MovieList = (props) => {
    const FavouriteComponent = props.favouriteComponent
    return (
        <>
            {props.movies.map( (movie,index) => (
                <div className="image-container w-50 d-flex justify-content-start m3">
                    {movie.Poster != "N/A" ? 
                    (<span>
                    <img src={movie.Poster} alt="movie" />
                    <div 
                    onClick={() => props.handleFavouritesClick(movie)}
                    className="overlay d-felx align-items-center justify-content-center"
                    style={{width:'61%'}}
                    >
                        <FavouriteComponent />
                    </div>
                     </span>): 
                    <span className="btn btn-primary" style={{color:'white'}}>This Film Has No Picture </span>
                    }
                    
                </div>
            ))}
        
        </>
    )
}
export default MovieList;