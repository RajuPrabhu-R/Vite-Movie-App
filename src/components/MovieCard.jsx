import axios from "axios";
import React, { useEffect, useState } from "react";

const MovieCard = ({movie: {title, poster_path, vote_average, release_date, original_language },onClick}) => {


  return (
    <div className="movie-card hover:scale-105 transition-all duration-300"> {/* modified width hover effect */}
     <img 
       src={poster_path ? 
        `https://image.tmdb.org/t/p/w500/${poster_path}` : '/No-Poster.png'} alt={title} onClick={onClick}
       className="cursor-pointer"
       /> 
     <div className="mt-4">
        <h3>{title}</h3>
        <div className="content">
            <div className="rating">
                <img src="Rating.svg" alt="Star Icon" />
                <p>{vote_average.toFixed(1)} / 10 </p>
            </div>
            <span>•</span>
            <p className="lang">{original_language}</p>

            <span>•</span>
            <p className="year">
                {release_date ? release_date.split('-')[0] : 'N/A'}
            </p>
        </div>
     </div>
    </div>
  )
}

export default MovieCard