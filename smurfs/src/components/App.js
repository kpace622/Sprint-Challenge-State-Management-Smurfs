import React, { Component } from "react";
import "./App.css";

import  SmurfForm  from '../components/smurfForm';
import  Smurfs  from '../components/smurfs';
import AddSmurf from '../components/addSmurf';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className='title'>SMURFS!</h1>
        <div className='title'>Smurf Village!</div>
        <SmurfForm />
        <Smurfs />
        <AddSmurf />
      </div>
    );
  }
}

export default App;
