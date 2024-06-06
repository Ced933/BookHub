import React, { useEffect, useState } from 'react'
import axios from 'axios';
import BookCard from '../../components/BookCard/BookCard';
import HeaderMovie from '../../components/HeaderMovie/HeaderMovie';
import './Popular.scss'

export default function Popular() {
 
    const [headMovie, setHeadMovie] = useState([])
    const [arrayMovie, setArrayMovie ] = useState([]);
  
  console.log(arrayMovie)
  
    useEffect(()=>{
      const options = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/movie/980083?language=en-US',
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
            url: 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMjgzOThkOTA0OTA3OTdkN2Q3ZDkzM2IxMzY1YzM0ZiIsInN1YiI6IjY2NWNhMmQxNzgxNDExM2JiYzEwODZmOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ghsbOei6EUSz74P6-vKNkbVanjjtn2he-YPx-xHyI9k'
            }
          };
          
          axios
            .request(options)
            .then( (res)=> {
              setArrayMovie(res.data.results);
            })
            .catch(function (error) {
              console.error(error);
            });
    },[])
  
  
   
    console.log(arrayMovie)
    console.log(headMovie)
    return (
      <div className='pop'>
      {/* Top header movie  */}
      <HeaderMovie headMovie={headMovie}/>
     <main className='main-pop'>
      {
       arrayMovie && arrayMovie.map((book, index) =>{
         return <BookCard  key={index} data={book} />
        })
      }
     </main>

    </div>
  )
}
