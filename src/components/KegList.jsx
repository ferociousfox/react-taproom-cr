import React from 'react';
import Keg from './Keg';
import Hero from './Hero';
import Nav from './Nav';
import ciderTaps from '../assets/images/taps.jpg';


const masterKegList =[
  {
    name: 'Hopland in Space',
    brand: 'Reverend Nats',
    price: 8,
    abv: 6.5
  },
  {
    name: 'Strawberry Pippin',
    brand: 'Reverend Nats',
    price: 9,
    abv: 7.1
  },
  {
    name: 'Kinda Dry',
    brand: 'Portland Cider Company',
    price: 6,
    abv: 6.5
  }
];

function KegList(){
  return(
    <div>
      <Hero
        heroImage={ciderTaps}/>
      <Nav/>
      {masterKegList.map((keg, index) =>
        <Keg
          name={keg.name}
          brand={keg.brand}
          price={keg.price}
          abv={keg.abv}
          key={index}/>
      )}
    </div>
  );

}

export default KegList;
