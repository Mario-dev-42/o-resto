import React from 'react';
import Header from '../components/Header';
import { useParams } from 'react-router-dom';
import data from "./../data.js"

const Details = () => {
    const {id} = useParams();
      const restau = data.find((item) => item.id == id);
     const entrees = restau.menu.entrees.map((item) =>  (<li>{item}</li>));
     const plats = restau.menu.dishes.map((item) =>  (<li>{item}</li>));
     const deserts = restau.menu.deserts.map((item) =>(<li>{item}</li>))
     return (
        <div>
             <Header />
             <h2>{restau.name}</h2>
             <img src={restau.img} alt= "img du restaurant" />
             <p>{restau.description_long}</p>
             <button>Ajouter aux Favoris</button>
             <h3>Menu</h3>
             <h4>Entrees</h4>
            <ul>{entrees}</ul>
            <h4>Plats</h4>
            <ul>{plats}</ul>
            <h4>Desserts</h4>
            <ul>{deserts}</ul>
            
        </div>
    );
};

export default Details;


