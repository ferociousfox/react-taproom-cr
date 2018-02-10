import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Hero from './Hero';
import spaceCat from '../assets/images/404cat.jpg';

function Error404(props){
  return (
    <div className='warning'>
      <Hero
        heroImage={spaceCat}/>
      <h1>Error 404, Not Found</h1>
      <h2>The page {props.location.pathname} does not exist!</h2>
      <h3>Would you like to return <Link to ="/">home</Link> instead?</h3>
      <style jsx>{`
        .warning{
          background-color: red;
          color: white;
          font-family: Helvetica, Arial, sans-serif;
          padding: 10px;
        }
      `}</style>
    </div>
  );
}

Error404.propTypes = {
  location: PropTypes.object
};

export default Error404;
