import React from 'react';
import { Link } from 'react-router-dom';

function Nav () {
  const linkDecoration = {
    textDecoration: 'none'
  };
  return(
    <div>
      <Link style={linkDecoration} to='/'><a>Home</a></Link> | <Link style={linkDecoration} to='/keglist'><a>Taproom</a></Link>
      <style jsx>{`
        a:hover {
          color: aliceblue;
        }
      `}</style>
    </div>



  );
}
export default Nav;
