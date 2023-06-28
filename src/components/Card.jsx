import { useState, useEffect } from 'react'
import "./card.css"
import { Link } from "react-router-dom";

function Card({resto}) {

  const [isOnFavoris, setIsOnFavoris] = useState(false);
  
  useEffect(() => {
    let favoris = getFavoris()

    const favorisExist = favoris.findIndex((value) => value === resto.id);
    if (favorisExist == -1) {
      
      setIsOnFavoris(false);
   } else {
     
     setIsOnFavoris(true);
   }
  });

  const getFavoris = () => {
    let favoris = localStorage.getItem('favoris')
    if (favoris === null) {
      favoris = [];
    } else {
      favoris = JSON.parse(favoris);
    }
    return favoris;
  }

  const handleClick = () => {
    let favoris = getFavoris();

    const favorisExist = favoris.findIndex((value) => value === resto.id);

    if (favorisExist == -1) {
       favoris.push(resto.id);
       setIsOnFavoris(true);
    } else {
      const favorisNew = favoris.filter((item) => item != resto.id )
      favoris = favorisNew;
      setIsOnFavoris(false);
    }

    localStorage.setItem('favoris', JSON.stringify(favoris))
  }
  
  return (
    <div className='card'>
      <Link to={`/details/${resto.id}`}>
        <img src={resto.img} alt="" />
      </Link>
      <div className='content'>
        <Link to={`/details/${resto.id}`}>
          <h3>{resto.name}</h3>
          <p>{resto.description_short}</p>
        </Link>

        <button onClick={handleClick} style={{backgroundColor: 'transparent', padding: '0'}}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" style={{width: '2rem', color: isOnFavoris ? 'yellow' : 'gray'}}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default Card
