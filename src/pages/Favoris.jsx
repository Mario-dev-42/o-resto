
import Header from '../components/Header';
import restaurants from '../data'
import Card from '../components/Card'

const Favoris = () => {
    
        let favoris = localStorage.getItem('favoris')
        if (favoris === null) {
          favoris = [];
        } else {
          favoris = JSON.parse(favoris);
        }

        const myFavoris = restaurants.filter((item) => favoris.includes(item.id))
        
        const cards = myFavoris.map((resto, index) => (
            <Card key={index} resto={resto}/>
          ))

      
    return (
        <div>
            <Header/>
            <h3>Mes favoris</h3>
            <div className='card-container'>
        {cards}
      </div>
        </div>
    );
};

export default Favoris;
