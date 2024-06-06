import React, { useEffect, useState } from 'react';
import './UpComing.scss';
import HeaderMovie from '../../components/HeaderMovie/HeaderMovie';
import BookCard from '../../components/BookCard/BookCard';
import axios from 'axios';

export default function UpComing() {
  const [headMovie, setHeadMovie] = useState([])
  const [arrayMovie, setArrayMovie ] = useState([]);

  useEffect(()=>{
    const options = {
      method: 'GET',
      url: 'https://api.themoviedb.org/3/movie/948549?language=en-US',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMjgzOThkOTA0OTA3OTdkN2Q3ZDkzM2IxMzY1YzM0ZiIsInN1YiI6IjY2NWNhMmQxNzgxNDExM2JiYzEwODZmOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ghsbOei6EUSz74P6-vKNkbVanjjtn2he-YPx-xHyI9k'
      }
    };
    
    axios
      .request(options)
      .then(res =>{
        setHeadMovie(res.data);
      })
      .catch(function (error) {
        console.error(error);
      });

  },[])

  useEffect(()=>{
    const options = {
      method: 'GET',
      url: 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMjgzOThkOTA0OTA3OTdkN2Q3ZDkzM2IxMzY1YzM0ZiIsInN1YiI6IjY2NWNhMmQxNzgxNDExM2JiYzEwODZmOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ghsbOei6EUSz74P6-vKNkbVanjjtn2he-YPx-xHyI9k'
      }
    };
    
    axios
      .request(options)
      .then((res)=> {
        setArrayMovie(res.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  },[])


 
  console.log(arrayMovie)
  console.log(headMovie)
  return (
    <div className='upcoming'>
    {/* Top header movie  */}
    <HeaderMovie headMovie={headMovie}/>
   <main className='main-upcoming'>
    {
     arrayMovie && arrayMovie.map((book, index) =>{
       return <BookCard  key={index} data={book} />
      })
    }
   </main>

  </div>
  )
}
