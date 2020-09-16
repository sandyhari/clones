import React, { useState,useEffect } from "react";
import axios from "../axios";
import "./row.css";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";


const Row = ({title, fetchUrl,isLargeRow})=>{

    const [movies,setMovies] = useState([]);

    const [trailerUrl,settrailerUrl] = useState("");

    const imgbasePath = "https://image.tmdb.org/t/p/original";

    useEffect(() => {
       
        async function fetchData(){
            const req = await axios.get(fetchUrl);
            setMovies(req.data.results);
            return req;
        } 
        fetchData();

    }, [fetchUrl])

    const opts = {
        height:"390",
        width:"100%",
        playerVars:{
            autoplay:1,
        }
    }

    const handleClick = (movie)=>{
        console.log(movie)
        if(trailerUrl){
            settrailerUrl('');
        }
        else{
            movieTrailer(movie?.title || movie?.name || movie?.original_name||"")
            .then((url) => {
                const urlParams = new URLSearchParams(new URL(url).search);
                console.log(urlParams);
                console.log(urlParams.get('v'))
                settrailerUrl(urlParams.get('v'));
            })
            .catch((e)=>console.error(e));
        }
    }

    return (
        <div className="row">
            {/* genere title */}
            <h2>{title}</h2>
            <div className="row__posters">
                {movies.map((movie)=>(
                    <img key={movie.id}
                    onClick={()=>handleClick(movie)}
                    className={`row__poster ${isLargeRow && "row__posterLarge" }`} 
                    src={`${imgbasePath}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={isLargeRow ?movie.name : movie.title} />
                )
                )}
            </div>
            {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
        </div>
    )
}

export default Row;
