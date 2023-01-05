import {useState} from 'react'

function SearchBar(props){

    const [searchTerm, setSearchTerm] = useState()

    return (
        <>
        <h1>Search for Music!</h1>
        <form onSubmit={e => props.handleSearch(e, searchTerm)}>
            <input type='text' placeholder='enter a search term here' onChange={e => setSearchTerm(e.target.value)}/>
            <input type='submit' />
        </form>
        </>
    )
}

export default SearchBar