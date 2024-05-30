import React from 'react';
import "./Home.scss";

export default function Home() {
  return (
    <div>

      <header className='header'>
       
      </header>
      <div className='content'>
        
      </div>
      <div className='header-search'>
        <h1>Find Your Book.</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In exercitationem  Perferendis commodi ducimus consectetur ratione tempora iusto optio! Cum, porro cumque!</p>
        <form className='form'>
          <input className='input-text' type="text" />
          <button className='btn-search'><span className="material-symbols-outlined">
search
</span></button>
        </form>
      </div>
     
    </div>
  )
}
