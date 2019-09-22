import React, { Component } from 'react';
import SimpleCard from "./components/SimpleCard";
import { BrowserRouter as Router, Route} from "react-router-dom";
import './app.css';
import AppBar from "./components/AppBar"
require('dotenv').config();

class App extends Component {
  state ={
    user: {},
    wishlist:[],
    parks:[]
  }

  componentDidMount(){
    fetch('/users')
      .then(response => response.json())
      .then(user => this.setState({user: user[0]}))

    fetch('/nationalParks')
    .then(response => response.json())
    .then(parks => this.setState({parks: parks}))
    
      // fetch('https://developer.nps.gov/api/v1/parks?limit=10&api_key=ecVNRo2nhcC8xnFJQYxxmnftPTFnvfFAJwnomtVF')
  //     fetch('https://developer.nps.gov/api/v1/parks?limit=10&q=%national%20park&api_key=ecVNRo2nhcC8xnFJQYxxmnftPTFnvfFAJwnomtVF')
  //     .then(response => response.json())
  //     .then(data => this.setState({parks: data.data}))
  // }


  render(){
    if(this.state.parks){
      return(
        <div className = "App">
          <AppBar/>
          {/* <Router basename={'/wheretonext'}>
          <AppBar/>
            <Route exact path='/' component={Home}/>
            <Route exact path='/signin' component={SignIn}/>
            <Route exact path='/signup' component={SignUpCOPY}/>
            <Route exact path='/dashboard' component={Dashboard}/>
        </Router> */}
          {this.state.parks.map(p=> 
            <SimpleCard
              name = {p.fullName}
            />
        )}
        </div>
      )
    }
    else {
      return "Loading..."
    }
  }
}


export default App;
