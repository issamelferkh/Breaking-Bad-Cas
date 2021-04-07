import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Header from './compenents/ui/Header';
import CharacterGrid from './compenents/characters/CharacterGrid'
import Search from './compenents/ui/Search'

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios(`
        https://www.breakingbadapi.com/api/characters?name=${query}
      `);
      
      setItems(response.data);
      setIsLoading(false);
      // console.log(items);
    }
    fetchData();  
  },[query])

  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterGrid items={items} isLoading={isLoading} />
    </div>
  );
}

export default App;
