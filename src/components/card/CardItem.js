import './CardItem.css';
import { getMovieList } from './../../Api'
import React, { useEffect, useState } from 'react';

const CardItem = (props) => {
    const [popularMovies, setPopularMovies] = useState([])
    const baseImg = 'https://image.tmdb.org/t/p/w500'

    useEffect(() => {
        const fetchData = async () => {
            let movieList = [];
            try {
                if (props.search.length < 1) {
                    movieList = await getMovieList();
                    console.log(props.search.length)
                } else {
                    movieList = props.results;
                }
            } catch (error) {
                console.error('Error fetching movie list:', error);
            }
            setPopularMovies(movieList);
        };

        fetchData();
    }, [props.results]);


    return popularMovies.map((movie, i) => {
        const posterPath = movie.poster_path ? `${baseImg}/${movie.poster_path}` : '';
        return (
            <div className="card-container" key={i}>
                <div className="card-title">{movie.title}</div>
                <img className="card-img" src={posterPath} alt={movie.title} />
                <p className="card-date">{movie.release_date}</p>
                <p className="card-rate">{movie.vote_average}</p>
            </div>
        )
    })

};


export default CardItem;
