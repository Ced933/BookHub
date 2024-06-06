import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import './MovieDetails.scss';
export default function BookDetails() {

  const [movieDetails, setMovieDetails] = useState([]);
  const {id} = useParams();
  // const bookChoose = arrayMovies.filter((book) => { return book.cover_i === id})
    console.log(id);

    useEffect(() =>{

      const options = {
        method: 'GET',
        url: `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
        headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMjgzOThkOTA0OTA3OTdkN2Q3ZDkzM2IxMzY1YzM0ZiIsInN1YiI6IjY2NWNhMmQxNzgxNDExM2JiYzEwODZmOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ghsbOei6EUSz74P6-vKNkbVanjjtn2he-YPx-xHyI9k'
    }
  };
  
  axios.request(options)
    .then(function (response) {
      setMovieDetails(response.data);
    })
    .catch(function (error) {
      console.error(error);
      })





    },[id])

    let arrayGenre =  movieDetails.genres;
    console.log(movieDetails)
    // console.log(movieDetails.genres[0].name);
  return (
    <div className='movie-container'>
      <div className='gradient-bg'>

      <img className='movie-details-box' src={ `https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${movieDetails.backdrop_path}`}  alt='' />

      <div className='first-part'>
        <div>
          <img className='cover-book'  src={ `https://image.tmdb.org/t/p/w440_and_h660_face${movieDetails.poster_path}`} alt={`${movieDetails.title}`} /> 
        </div>

        <div>
          <h3 className='title-movie'>{movieDetails.title} </h3>
          <p className='title-publish'>{movieDetails.release_date}</p>
          <ul>
                {
              arrayGenre &&   arrayGenre.map((genre,index) =>{
                    return <li key={index} className='span-genre'>{genre.name}</li>
                    
                  })
                }
             </ul>
        </div>

        </div>
        <div className='seconde-part'>
              <p className='synopsis'> {movieDetails.overview} </p>
            
          <Link to={movieDetails.homepage}>Official website</Link>
            
              
        </div>
       
      </div>
      
     
    
      
  </div>
  )
}
