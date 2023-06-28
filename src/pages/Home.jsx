import { useState } from 'react'
import './home.css'
import restaurants from '../data'
import Card from '../components/Card'
import Header from '../components/Header'


function Home() {
  const cards = restaurants.map((resto, index) => (
    <Card key={index} resto={resto}/>
  ))
    
  return (
    <div>
      <Header />
      <div className='card-container'>
        {cards}
   
      </div>
    </div>
  )
}

export default Home
