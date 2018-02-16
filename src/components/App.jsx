import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { v4 } from 'uuid';
import Home from './Home';
import KegList from './KegList';
import NewKeg from './NewKeg';
import Error404 from './Error404';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      masterKegList: {}
    };
    this.handleAddingNewKeg = this.handleAddingNewKeg.bind(this);
  }

  handleAddingNewKeg(newKeg){
    let newKegId = v4();
    let newMasterKegList = Object.assign({}, this.state.masterKegList, {
      [newKegId]: newKeg
    });
    this.setState({masterKegList: newMasterKegList});
  }

  render(){
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
          <Route path='/keglist' render={() =>
            <KegList kegList={this.state.masterKegList}/> }/>
          <Route path='/newkeg' render={() =>
            <NewKeg  onNewKegCreation={this.handleAddingNewKeg}/>}/>
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}


export default App;
