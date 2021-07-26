import './App.css';
import React, { useState, useEffect } from 'react';
import Superhero from './Superhero';
import URLItem from './URLItem';


function App() {
  const [search, setSearch] = useState("")
  const [query, setQuery] = useState('spider')
  const [heroes, setHeroes] = useState([])
  const [subCategory, setSubCategory] = useState("comics")
  const ACCESS_TOKEN = "152e796f553b1c553454cf45927a36d5"
  var md5 = require('js-md5');

  var ts = 1

  const updateSearch = e => {
    setSearch(e.target.value)
  }

  const getSearch = e => {
    e.preventDefault()
    setQuery(search)
    setSearch("")
    ts = ts + 1
  }

  const updateCategory = e => {
    setSubCategory(e.target.value)
    console.log(`category changes to ${subCategory}`)
  }

  useEffect(() => {
    getSuperHeroes()
    console.log("useEffect ran")
  }, [query]);

  const getSuperHeroes = async () => {

    const ts_string = String(ts)
    const hash = md5(ts_string + "050774cbb9f139b4b6aa9e146c4cd495d18a53d5" + ACCESS_TOKEN)
    //console.log(`https://gateway.marvel.com:443/v1/public/characters?name=${query}&apikey=${ACCESS_TOKEN}`)
    const response = await fetch(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${query}&ts=${ts_string}&apikey=${ACCESS_TOKEN}&hash=${hash}`)
    const data = await response.json()
    setHeroes(data.data.results)

  }



  return (
    <div className="App">
      <h1>Hello React!</h1>
      <div className="searching-div">
        <form onSubmit={getSearch} className="search-form">
          <label >Search for a superhero: </label>
          <input name="search-bar" className="search-bar" type='text' value={search} onChange={updateSearch} />
          <button className="search-button" type='submit'>Search</button>
        </form>
        <form>
          <label> Choose an attribute: </label>
          <select name="attributes" id="attributes-id" onChange={updateCategory}>
            <option value="comics" selected>Comics</option>
            <option value="series">Series</option>
            <option value="stories">Stories</option>
            <option value="events">Events</option>
            <option value="urls">URLs</option>
          </select>
        </form>

      </div>
      <h1 >Search Results for {query}: </h1>
      <div className="superheroes">

        {heroes.map(hero => {
          if (subCategory !== "urls") {
            return <Superhero
              key={Math.random() * 2000}
              id={hero.id}
              name={hero.name}
              description={hero.description}
              hero_attributes={hero[subCategory]}
              image={hero.thumbnail.path}
              extention={hero.thumbnail.extension}
            />
          } else {
            return <URLItem
              key={Math.random() * 2000}
              id={hero.id}
              name={hero.name}
              description={hero.description}
              hero_attributes={hero[subCategory]}
              image={hero.thumbnail.path}
              extention={hero.thumbnail.extension}
            />
          }
        }

        )}
      </div>

    </div >
  );
}

export default App;
