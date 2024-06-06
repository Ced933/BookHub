import React, { useEffect, useState } from 'react';
import './BookCard.scss';
import { NavLink } from 'react-router-dom';

export default function BookCard({data}) {

  const [green, setGreen] = useState(false)
  const [orange, setOrange] = useState(false)
  const [red, setRed] = useState(false)

useEffect(()=>{
  function colorRate (){
  if(data.vote_average >= 8){
    // tous les films superieur à la note de 8 sont vert 
    setGreen(true)
  }else if (data.vote_average < 8 && data.vote_average >= 6 ){
    // tous les films inferieur à la note de 8 et superieur ou égale a 6 sont orange 
    setOrange(true)
  }else if(data.vote_average < 6){
     // tous les films inferieur à la note de 6 sont rouge
    setRed(true)
  }
 }
 colorRate();
},[data.vote_average])


  function numberaftercoma (number ){
    return number.toFixed(1)
  }

  return (
    <NavLink to={`/profil/${data.id}`} className="link-book">
      <div className='bookcard-box'>
        <img className='cover-book' src={ `https://image.tmdb.org/t/p/w440_and_h660_face${data.backdrop_path}`} alt="" />
        <div className='div-discribe'>

          <p className='title-publish'>{data.release_date}</p>
          <h3 className='title-book'>{data.title}</h3>
        </div>

        <div className='cirle-rate'> 
        {
          green && <div className='principale-borde green' id='color'> <p className='rate'>{numberaftercoma(data.vote_average)}</p></div>
        }
        {
          orange && <div className='principale-borde orange' id='color'> <p className='rate'>{numberaftercoma(data.vote_average)}</p></div>
        } 
         {
          red && <div className='principale-borde red' id='color'> <p className='rate'>{numberaftercoma(data.vote_average)}</p></div>
        } 

        
        </div>      
      </div>
    </NavLink>
  )
}
