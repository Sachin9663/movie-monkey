import React from 'react';
import { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer'
import Loader from 'react-loader-spinner';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import axios from '../../axios';
import './index.css'


const baseUrl = "https://image.tmdb.org/t/p/original/"

function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([])
    const [traileUrl , setTrailerUrl] = useState("")
    const [Loading, setLoading] = useState(false)

    const notify = () => toast("Url Not Found!! Will fix it soon");

    useEffect(()=> {
        async function fetchData (){
            setLoading(true)
            const request = await axios.get(fetchUrl);
            setLoading(false)
            setMovies(request.data.results)
            return request
        }
        fetchData();
    }, [fetchUrl])

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    const opts = {
        height: "390",
        width: "100%",
        playersVars: {
            autoplay: 1,
        }
    }

    const handleClick = (movie) => {
        if(traileUrl) {
            setTrailerUrl('')
        } else {
            movieTrailer(movie?.name || movie?.original_name || movie?.title || movie?.original_name || "")
                .then((url) => {
                    const urlParams = new URLSearchParams(new URL(url).search)
                    setTrailerUrl(urlParams.get('v'))
                })
                .catch((error)=> notify())
        }
    }

    const Load = (<Loader type="Puff" color="#00BFFF" height={100} width={100} />)
    return (
        <div className="row">
            <h2 className="title">{title}</h2>
            <ToastContainer />
            {Loading ? <div className="loader">{Load}</div> : <div className="row_posters">
                {
                    movies.map((movie) => {
                        return (
                            <>
                                {movie.backdrop_path ? <img
                                    key={movie.id}
                                    onClick={() => handleClick(movie)}
                                    className={`row_poster ${isLargeRow && "row_poster_large"}`}
                                    src={`${baseUrl}${ isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} 
                                /> : null}
                            </>
                        )   
                    })
                }
            </div>}
            {traileUrl && <YouTube videoId={traileUrl} opts={opts} />}
        </div>
    );
}

export default Row;