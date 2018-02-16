import React from 'react';
import Keg from './Keg';
import Hero from './Hero';
import Nav from './Nav';
import ciderTaps from '../assets/images/taps.jpg';
import PropTypes from 'prop-types';



function KegList(props){
  console.log(props.kegList);
  return(
    <div>
      <Hero
        heroImage={ciderTaps}/>
      <Nav/>
      <h1>Ciders on Tap</h1>
      <div className="flex-container">
        {Object.keys(props.kegList).map((kegId) => {
          let keg = props.kegList[kegId];
          return <Keg className='keg-on-tap'
            name={keg.name}
            brand={keg.brand}
            price={keg.price}
            abv={keg.abv}
            kegId={kegId}
            key={kegId}
            />;
        })}
      </div>
      <style jsx>{`
        h1 {
          margin: 60px;
          text-align: center;
        }
        .flex-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
          margin: 20px;
        }
    `}</style>
    </div>
  );

}

KegList.propTypes ={
  kegList: PropTypes.object
};

export default KegList;
