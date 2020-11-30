import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

import axios from '../../axios';
import requests from '../../requests';
import './index.css'

function Banner(props) {
    const [movie , setMovies] = useState([])

    const notify = () => toast("Coming Soon, Working on it! 👨‍💻");

    useEffect(()=> {
        async function fetchMovie() {
            const request = await axios.get(requests.fetchNetflixOriginals)
            setMovies(request.data.results[Math.floor(Math.random()*request.data.results.length -1)])
            return request
        }
        fetchMovie()
    }, [])

    function truncate(str, max) {
        return str?.length > max ? str?.substr(0, max-1) + '…' : str;
      }
    
    return (
        <header
            className="banner"
            style={{ backgroundSize: "cover", backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`, backgroundPosition: "center center"}}
        >
            <div className="banner_contents">
                <h1 className="banner_title">{movie?.title || movie?.name || movie?.original_name}</h1>
                <div className="banner_buttons">
                    <button className="banner_button" onClick={notify}>Play</button>
                    <button className="banner_button" onClick={notify}>My List</button>
                </div>
                <h1 className="banner_description">
                {truncate(movie?.overview, 150) }
                </h1>
            </div>
            <div className="banner_fadebottom" />
        </header>
    );
}

export default Banner;