import React, { forwardRef } from 'react'
import './Videocard.css'
import {ThumbUpSharp} from '@material-ui/icons';

const base_url_img = "https://image.tmdb.org/t/p/original/"; //baseUrl to get img

const Videocard = forwardRef(({ movie }, ref) => {
    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

    return (
        <div ref={ref} className="videocard">
            <img src={`${base_url_img}${movie?.backdrop_path || movie?.poster_path}`} alt=""/>
            
            <h3>{movie?.title || movie?.original_title}</h3>
            <p className="videocard__overview">{truncate(movie?.overview, 50) || "No data"}</p>
            <p className="full-flex-center flex-j-start hover-visible">{movie?.release_date} &ensp; {<ThumbUpSharp />} &#160; {movie?.vote_average }</p>
        </div>
    )
});

export default Videocard
