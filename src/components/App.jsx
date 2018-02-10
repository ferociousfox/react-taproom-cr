import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import KegList from './KegList';
import Error404 from './Error404';

//define Home!
function App(){
  return (
    <div>
      <style global jsx>{`
        html, body, h1, h2, h3, p, ul, li{
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: sans-serif;
          list-style: none;
        }
        body{
          background-color: #942524;
        }
    `}</style>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/keglist' component={KegList}/>
        <Route component={Error404} />
      </Switch>
    </div>
  );
}



export default App;
