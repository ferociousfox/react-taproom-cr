import React from 'react';
import Hero from './Hero';
import Nav from './Nav';
import taproom from '../assets/images/taproom.jpg';

function Home(){
  return(
    <div>
      <div>
        <Hero
          heroImage={taproom}/>
        <Nav/>
      </div>

      <h1>Welcome to the CiderHouse!</h1>

      <p>Here at the CiderHouse we serve only cider. if you want beer, you are in the worng place dog. We have a pasison for fermented fruit. Let us show you how tasty and intoxicating it can be.</p>
      <style jsx>{`
        h1 {
          text-align: center;
        }
        p {
          margin: 50px;
        }
    `}</style>
    </div>
  );
}

export default Home;
