import { useState } from 'react'
import "./header.css"
import { useLocation } from 'react-router-dom';



const Header = () => {
 let displayButton = null;
 
  const location = useLocation();
  // si je suis sur la page Favoris
  if (location.pathname == "/favoris") { 
    // j'affiche le bouton accueil
    displayButton = <a href="/">Accueil</a>
  } else {
    //j'affiche le bouton favoris
    displayButton = <a href="/favoris">Mes Favoris</a>
  }


  return (
    <header>
    <h1>O'RESTO</h1>
    {displayButton}
  </header>
  )
}

export default Header
