import React, { useEffect, useState } from 'react';
import "./Home.scss";
import axios from 'axios';
import BookCard from '../../components/BookCard/BookCard';
// import BookDetails from '../BookDetails/BookDetails';
export default function Home() {

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
    .then(res => setArrayBooks(res.data.results))
    // .then(json => console.log(json))
    .catch(err => console.error('error:' + err));
  },[])
  

  // const [search, setSearch] = useState('');
  const [arrayBooks, setArrayBooks ] = useState([]);
console.log(arrayBooks)

  // const handleSearch = async (e)=>{
  //   e.preventDefault();
  //   if(search.length > 2){
      
  //     await axios.get(`https://openlibrary.org/search.json?q=${search}`).then((res) => setArrayBooks(res.data.docs))
  //      console.log(arrayBooks)
  //        setSearch('');
  //        document.getElementById('form').reset();
  //   }else{
  //     return false
  //   }

  // }

  return (
    <div>

      <header className='header'>
       
      </header>
      <div className='content'>
        
      </div>
      <div className='header-search'>
        <h1>Find Your Book.</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In exercitationem  Perferendis commodi ducimus consectetur ratione tempora iusto optio! Cum, porro cumque!</p>
        <form className='form' id='form'>
          <input type="text" className='input-text'   />
          <button className='btn-search'><span className="material-symbols-outlined">
search
</span></button>
        </form>
      </div>
     <main className='main'>
      {
       arrayBooks && arrayBooks.map((book, index) =>{
         return <BookCard  key={index} data={book} />
        })
      }

     </main>
     <div>
      {/* <BookDetails arrayBooks={arrayBooks} /> */}
     </div>
    </div>
  )
}
// 328398d90490797d7d7d933b1365c34f key api movie 