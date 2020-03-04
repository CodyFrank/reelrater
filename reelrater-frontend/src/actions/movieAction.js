export const fetchMovies = () => {
    return(dispatch) => {
        dispatch({type: 'LOADING_MOVIES'})
        fetch('http://localhost:3000/movies')
        .then(res => {return res.json()})
        .then(resJSON => {
            dispatch({type: 'ADD_MOVIES', movies: resJSON})
        })
    }
}