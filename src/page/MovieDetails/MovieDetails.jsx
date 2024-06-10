import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import './MovieDetails.scss';
export default function BookDetails() {

  const [movieDetails, setMovieDetails] = useState([]);
  const {id} = useParams();

  const[ width, setWidth] = useState(window.innerWidth);
  

  useEffect(()=>{

    
    // la fonction qu'on va lancer a chaque changement 
const handleResize = ()=>{
  setWidth(window.innerWidth);
}
// quand le composant est monté 
window.addEventListener('resize', handleResize);
// quand le composant est détruit 
return ()=>{
  window.removeEventListener('resize', handleResize);
};

  },[])

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

  return (
    <div className='movie-container'>
      <div className='gradient-bg'>
        {
          width > 1150 && <img className='movie-details-box' src={ `https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${movieDetails.backdrop_path}`}  alt={movieDetails.title} />

        }
      
      <div className='first-part'>
        <div>
          <img className='cover-book'  src={ `https://image.tmdb.org/t/p/w440_and_h660_face${movieDetails.poster_path}`} alt={`${movieDetails.title}`} /> 
        </div>
        <div>
          <h3 className='title-movie'>{movieDetails.title} </h3>
          <p className='title-publish'>{movieDetails.release_date}</p>
          {
            width > 768 ?  <ul>
            {
          arrayGenre &&   arrayGenre.map((genre,index) =>{
                return <li key={index} className='span-genre'>{genre.name}</li>
              })
            }
         </ul> : null
          }
         
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
