import React from 'react';
import Hero from './Hero';
import Nav from './Nav';
import taproom from '../assets/images/taproom.jpg';

function Home(){
  return(
    <div>
      <Hero
        heroImage={taproom}/>
      <Nav/>
    </div>
  );
}

export default Home;
