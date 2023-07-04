import React, { useEffect, useState } from 'react';
import { searchMovie } from './Api'
import './App.css';
import CardItem from './components/card/CardItem';
import Footer from './components/footer/Footer';
import Loading from './components/loading/Loading';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([])
  const [querySearch, setQuerySearch] = useState([])

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  const search = async (q) => {
    setQuerySearch(q)
    if (q.length > 1) {
      const query = await searchMovie(q)
      setData(query.results)
    }
  }

  if (isLoading) {
    return <Loading />
  }

  return (
    <div className="App">
      <div className="wrapper">
        <h1 className='title'>THE MOVIE</h1>
        <input type="search" placeholder='Cari Film...'
          className='search-movie'
          onChange={({ target }) => search(target.value)}
        />
        <div className="card">
          <CardItem results={data} search={querySearch} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
