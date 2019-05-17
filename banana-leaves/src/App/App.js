import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom'
import '../App/App.css';
import AppContainer from '../App/AppContainer.js'
import Navbar from '../NavBar/navbar.js'
import '../NavBar/navbar.css';
import Footer from '../Footer/Footer.js'
import '../Footer/footer.css';
import '../Contact/Map.css';


class App extends React.Component {
  render(){
    return (
      <div className="App">
        <link href="https://fonts.googleapis.com/css?family=Handlee" rel="stylesheet" />
        <Navbar />
        <AppContainer />
        <Footer />
      </div>
    );
  }
}

export default App;
