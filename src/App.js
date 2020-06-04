import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <h1 className="App">Validation Form</h1>
       <form>
       <label for="fname">First name:</label>
       <input type="text" id="fname" name="fname" value="John"/>
       <label for="lname">Last name:</label>
       <input type="text" id="lname" name="lname" value="Doe"/>
       <input type="submit" value="Submit"/>
       </form>
      </div>
    );
  }
}

export default App;
