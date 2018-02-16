import React from 'react';
import PropTypes from 'prop-types';

function Keg(props){
  return(
    <div className='keg-on-tap'>
      <h2>{props.brand}</h2>
      <ul>
        <li className='cider-name'>{props.name}</li>
        <li>Price: {props.price}</li>
        <li>ABV: {props.abv} %</li>
      </ul>
      <style jsx>{`
        li{
          margin: 5px;
        }
        .cider-name {
          font-style: italic;
        }
        .keg-on-tap {
          background-color: peachpuff;
          border-radius: 5px;
          padding: 5px;
        }
      `}</style>
    </div>

  );

}

Keg.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
  abv: PropTypes.number
};

export default Keg;
