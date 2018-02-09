import React from 'react';
import PropTypes from 'prop-types';

function Hero(props){
  return(
    <div className='hero'>
      <h1>Hero Works</h1>
      <style jsx>{`
        .hero {
          color: green;
          height: 600px;
          background-posistion: center;
          background-size: cover;
          background-image: url(${props.heroImage})
        }
    `}</style>
    </div>
  );
}

Hero.propTypes = {
  heroImage: PropTypes.string
};

export default Hero;
