import React, {useState} from 'react'

export default function MovieSearch(){

    const [query, setQuery] = useState('')
    const [movies, setMovies] = useState([])
   
    async function SearchMovie(e){
       
        e.preventDefault()

        const url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIE_API}&language=en-US&query=${query}&page=1&include_adult=false`;

        const response = await fetch(url)
        const data = await response.json()
        setMovies(data.results)

    }


    return(
        <form className="form" onSubmit={SearchMovie}>
            <label className="label" htmlFor='query'>Movie Search</label>
            <input 
                type="text"
                name="query" 
                placeholder='i.e Top Gun'
                value={query}
                onChange={e => setQuery(e.target.value)}
            />
            <button className="button" type="submit">Search Movie</button>
        </form>
    )
}