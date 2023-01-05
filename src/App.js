
import {useState, useEffect} from 'react'
import Gallery from './components/Gallery';
import SearchBar from './components/SearchBar'
import './App.css';

function App() {
  const [Search,setSearch] = useState('')
  const [data, setData] = useState([])
  const [message, setMessage] = useState('Any Changes needed?')

  const API_URL = 'https://itunes.apple.com/search?term='

  useEffect(() => {
    if(Search){
      const fetchData = async () => {
        document.title = `${Search} music`
        const response = await fetch(API_URL + Search)
        const resData = await response.json()
        if(resData.results.length > 0) {
          setData(resData.results)
        }
        console.log(resData)
      }
      fetchData()
    }
  }, [Search])

  const handleSearch = (e, term) => {
    e.preventDefault()
    setSearch(term)
  }



  return (
    <div className="App">
        <SearchBar handleSearch={handleSearch}/>
        {message}
        <Gallery data={data} />
    </div>
  );
}

export default App;
