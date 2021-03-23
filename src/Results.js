import React, { useState, useEffect } from 'react'
import './Results.css'
import Videocard from './Videocard'
import axios from './axios';
import requests from './requests';
import { v4 as uuidv4 } from 'uuid';
import FlipMove from 'react-flip-move';

function Results({ selectedOption }) {
    const [movies, setMovies] = useState([]);
    
    useEffect(()=>{
       async function fetchData(){
         const request = await axios.get(selectedOption);  //eg- get(requests.fetchTrending)
         console.log(request.data.results);
         
         setMovies( request.data.results);
         return request;
       }
       fetchData();
    },[selectedOption]);

    return (
        <div>
           <FlipMove  className="results">
              {movies.map((movie) => {
                return <Videocard key={uuidv4()} movie={movie}/>
              })}
           </FlipMove>
            
        </div>
    )
}

export default Results
