import React from 'react'

export default function MovieSearch(){
    return(
        <form className="form">
            <label className="label" htmlFor='query'>Movie Search</label>
            <input type="text" name="query" placeholder='i.e Top Gun'/>
            <button className="button" type="submit">Search Movie</button>

        </form>
    )
}