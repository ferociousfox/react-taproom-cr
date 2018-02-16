import React from 'react';
import { Link } from 'react-router-dom';

function Nav(){
  const linkDecoration = {
    textDecoration: 'none',
    backgroundColor: 'aliceBlue',
    padding: '10px',
    borderRadius: '5px'
  };
  return(
    <div className="nav">
      <Link style={linkDecoration} to='/'><a>Home</a></Link> <Link style={linkDecoration} to='/keglist'><a>Taproom</a></Link> <Link style={linkDecoration} to='/newkeg'><a>New Keg</a></Link>
      <style jsx>{`
        a:hover {
          color: crimson;
        }
        .nav {
         font-size: 20px;
         padding: 20px;
        }
      `}</style>
    </div>
  );
}
export default Nav;
