import React from 'react';
import PropTypes from 'prop-types';

function Keg(props){
  return(
    <div>
      <h2>{props.brand}</h2>
      <ul>
        <li>{props.name}</li>
        <li>{props.price}</li>
        <li>{props.abv}</li>
      </ul>
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
