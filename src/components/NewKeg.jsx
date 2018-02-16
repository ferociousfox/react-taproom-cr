import React from 'react';
import PropTypes from 'prop-types';
import Hero from './Hero';
import Nav from './Nav';
import kegs from '../assets/images/kegs.jpg';

function NewKeg(props){
  console.log(props);
  console.log(props.onNewKegCreation);
  let _name = null;
  let _brand = null;
  let _price = null;
  let _abv = null;
  let _description = null;
  
  function handleNewKegSubmission(event){
    event.preventDefault();
    props.onNewKegCreation({name: _name.value, brand: _brand.value, price: _price.value, abv: _abv.value, description: _description.value });
    _name.value = '';
    _brand.value = '';
    _price.value = '';
    _abv.value = '';
  }

  NewKeg.propTypes = {
    onNewKegCreation: PropTypes.func
  };

  return (
    <div>
      <Hero heroImage={kegs}/>
      <Nav/>

      <form onSubmit={handleNewKegSubmission}>
        <input
          type='text'
          id='name'
          placeholder='Name of Cider'
          ref={(input) => {_name = input;}} />
        <br/>
        <input
          type='text'
          id='brand'
          placeholder='Brand of Cider'
          ref={(input) => {_brand = input;}} />
        <br/>
        <input
          type='number'
          id='price'
          placeholder='Price per Pint'
          ref={(input) => {_price = input;}} />
        <br/>
        <input
          type='number'
          id='abv'
          placeholder='ABV'
          ref={(input) => {_abv = input;}} />
        <br/>
        <input
          type='text'
          id='description'
          placeholder='description'
          ref={(input) => {_description = input;}}/>
        <button type='submit'>AddKeg</button>
      </form>
    </div>
  );
}

export default NewKeg;
