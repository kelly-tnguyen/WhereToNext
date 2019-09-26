import React, { Component } from 'react';
import AppBar from "./components/AppBar"
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SignIn from "./components/SignIn"
import SignUp from "./components/SignUp"
import Home from "./components/Home"
import Dashboard from "./components/Dashboard"
require('dotenv').config();

class App extends Component {
  render() {
    return (
      <div className="App">
          <AppBar/>
        <Router basename={'/wheretonext'}>
          <Route exact path='/' component={Home}/>
          <Route exact path='/signin' component={SignIn}/>
          <Route exact path='/signup' component={SignUp}/>
          <Route exact path='/dashboard' component={Dashboard}/>
        </Router>
      </div>
    );
  }
}

  export default App;

// class App extends Component {
//   state ={
//     user: {},
//     wishlist:[],
//     parks:[],
//     view: "homepage"
//   }

//   componentDidMount(){
//     fetch('/users')
//       .then(response => response.json())
//       .then(user => this.setState({user: user[0]}))

//     fetch('/nationalParks')
//     .then(response => response.json())
//     .then(park => this.setState({parks: park}))
//   }
// }

      // fetch('https://developer.nps.gov/api/v1/parks?limit=10&api_key=ecVNRo2nhcC8xnFJQYxxmnftPTFnvfFAJwnomtVF')
      // fetch('https://developer.nps.gov/api/v1/parks?limit=10&q=%national%20park&api_key=ecVNRo2nhcC8xnFJQYxxmnftPTFnvfFAJwnomtVF')
      // .then(response => response.json())
      // .then(data => this.setState({parks: data.data}))

  // addToWishlist(id){

  // }

//   render(){
//     if(this.state.parks){
//       return(
//         <div>
//         <AppBar/>
//         <div className = "App">
//           {/* <Grid/> */}
//           {this.state.parks.map((p) =>
//             <SimpleCard
//             name = {p.name}
//             image = {p.image}
//             location = {p.location}
//             // addToWishList = {this.addToWishList}
//             />
//           )}
//       <Router basename={'/wheretonext'}>
//             <Route exact path='/home' component={Home}/>
//             <Route exact path='/signin' component={SignIn}/>
//             <Route exact path='/signup' component={SignUp}/>
//             {/* <Route exact path='/dashboard' component={Dashboard}/> }} */}
//       </Router>
//       </div>
//     </div>
//       )
//     }
//     else {
//       return "Loading..."
//       }
//     }
// }

// export default App;

