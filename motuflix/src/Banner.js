import axios from 'axios';
import React, { useEffect, useState } from 'react'
import requests from './requests';
import "./banner.css"

const  Banner = ()=> {
    const [movie,setMovie] = useState([]);
    const imgbasePath = "https://image.tmdb.org/t/p/original";
    useEffect(()=>{
        async function fetchmoviedata(){
            const urlrequest = await axios.get(`${"https://api.themoviedb.org/3"}${requests.fetchNetflixOriginals}`);
            console.log("requestfailed",urlrequest);
            console.log("contentSingle",urlrequest.data.results[Math.floor(Math.random() * urlrequest.data.results.length)]);
            setMovie(urlrequest.data.results[Math.floor(Math.random() * urlrequest.data.results.length)]);
            return urlrequest;
        }
        fetchmoviedata();
    },[])

    function truncate (str, n){
        return str?.length > n ? str.substring(0,n-1)+"...": str;

    }

    return (
        <header className="banner" style={{
            backgroundSize:"cover",
            backgroundImage:`url(${imgbasePath}${movie?.backdrop_path})`
        }}
        >
        <div className="banner__contents">
            <h1 className="banner__title">{movie?.title || movie?.name || movie?.original_name}</h1>
        </div>

        <div className="banner__buttons">
            <button className="banner__button">Play</button>
            <button className="banner__button">My List</button>
        </div>

        <h1 className="banner__description">{truncate(movie?.overview,120)}</h1>
        <div className="banner--fadebottom"></div>
        </header>
    )
}

export default Banner;
