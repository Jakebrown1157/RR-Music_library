import { useState } from 'react'
import { useContext } from 'react'
import { SearchContext } from '../Context/SearchContext'

function SearchBar() {
    let [searchTerm, setSearchTerm] = useState('')
    const { term, handleSearch } = useContext(SearchContext)

    return (
        <form onSubmit={(e) => handleSearch(e, term.current.value)}>

            <input type="text" placeholder="Enter a search term here" ref={term} onChange={(e) => setSearchTerm(e.target.value)}/>
            <input type="submit"/>

            {/* <input type="text" placeholder="Enter a search term here" onChange={
                (e) => setSearchTerm(e.target.value)
            } /> */}

            {/* <input type="submit" /> */}

        </form>
    )
}

export default SearchBar
