import {useState} from 'react';
import RecipesResult from './RecipesResults'
import './Search.css'

const Search=() =>{

    const [searchQuery,setSearchQuery]=useState(null);
    const [searchResults, setSearchResults]=useState(null);

    const handleClick=async()=>{
        const response= await fetch(`https://api.spoonacular.com/recipes/complexSearch`+
            `?apiKey=2a3fa2a8abf44f72ad4e83a36ba0bbf7&query=${searchQuery}`)
            const responseJSON=await response.json();
            setSearchResults(responseJSON.results);
    }

    return (
    <>
        <div className="search-wrapper">
        <input type="text"
        placeholder="Search by ingredients..."
        onChange={(e)=>setSearchQuery(e.target.value)}/>
        <button onClick={handleClick}>Search</button>
        </div>
        {searchResults && <RecipesResult recipes={searchResults}/>}
        </>
        )
}
export default Search;