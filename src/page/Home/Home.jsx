import React, { useEffect, useState } from 'react';
import "./Home.scss";
import axios from 'axios';
import BookCard from '../../components/BookCard/BookCard';
import HeaderMovie from '../../components/HeaderMovie/HeaderMovie';
export default function Home() {

  const [headMovie, setHeadMovie] = useState([])

  useEffect(()=>{
    const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMjgzOThkOTA0OTA3OTdkN2Q3ZDkzM2IxMzY1YzM0ZiIsInN1YiI6IjY2NWNhMmQxNzgxNDExM2JiYzEwODZmOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ghsbOei6EUSz74P6-vKNkbVanjjtn2he-YPx-xHyI9k'
      }
    };
    axios.get(url, options)
    .then(res => setArrayMovies(res.data.results))
    .catch(err => console.error('error:' + err));
  },[])
  
  useEffect(()=>{
    const options = {
      method: 'GET',
      url: 'https://api.themoviedb.org/3/movie/940721?language=en-US',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMjgzOThkOTA0OTA3OTdkN2Q3ZDkzM2IxMzY1YzM0ZiIsInN1YiI6IjY2NWNhMmQxNzgxNDExM2JiYzEwODZmOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ghsbOei6EUSz74P6-vKNkbVanjjtn2he-YPx-xHyI9k'
      }
    };
    
    axios
      .request(options)
      .then(function (response) {
        setHeadMovie(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });

  },[])

  const [arrayMovies, setArrayMovies ] = useState([]);
console.log(arrayMovies)
console.log(headMovie);

  return (
    <div className='home'>
      {/* Top header movie  */}
      <HeaderMovie headMovie={headMovie}/>
     <main className='main'>
      {
       arrayMovies && arrayMovies.map((book, index) =>{
         return <BookCard  key={index} data={book} />
        })
      }
     </main>
    </div>
  )
}
