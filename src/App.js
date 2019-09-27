import React, { Component } from 'react';
import AppBar from "./components/AppBar"
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SignIn from "./components/SignIn"
import SignUp from "./components/SignUp"
import Home from "./components/Home"
// import Dashboard from "./components/Dashboard"
import './components/styles/Dashboard.css';
import ParkList from "./components/ParkList";
import Button from '@material-ui/core/Button'
import NextAdventure from './components/NextAdventure';

require('dotenv').config();

class App extends Component {
  state ={
    user: {},
    wishlist:[],
    parks:[],
    view: "dashboard"
  }

  componentDidMount(){
    fetch('/users')
      .then(response => response.json())
      .then(user => this.setState({user: user[0]}))

    fetch('/nationalParks')
    .then(response => response.json())
    .then(park => this.setState({parks: park}))

    fetch('/likes')
    .then(response => response.json())
    .then(likes => this.setState({wishlist: likes}))
  }
  liked = (id) =>{
    console.log(id)
    let likedObj = this.state.parks.find(p => p._id === id);
    console.log(likedObj)
    fetch('/likes',{
    method: "POST",
    headers:{"Content-Type": "application/json"},
    body: JSON.stringify(likedObj)
    })
  }

  changeView = (e) =>{
    this.setState({view: "likes"})
  }

  render() {
    if(this.state.view === "dashboard"){
      var item;
      item = this.state.parks.map (item => {
          return <ParkList 
            id = {item._id}
            name = {item.name}
            image = {item.image}
            location = {item.location}
            liked = {this.liked}
            />
      })

      
      return (
        <div className = 'marginLR'>
          <div className="App">
          <AppBar
            changeView = {this.changeView}
          />
        <Router basename={'/wheretonext'}>
          <Route exact path='/' component={Home}/>
          <Route exact path='/nextadventure' component={NextAdventure}/>
          <Route exact path='/signup' component={SignUp}/>
        </Router>
      </div>
            <div className = 'displayParks'>
                {item}
            </div>
    
     <div style = {{marginBottom: '3vh', marginTop: '3vh', display: 'flex', justifyContent: 'flex-end'}}>
     <Button style = {{marginRight:'3vh'}} variant = "contained" color = "primary" onClick={()=>{
         if(parseInt(this.path.slice(13,14)) !== 1){
             var pagenumber = parseInt(this.path.slice(13,14)) - 1;
             window.location.href = this.path.slice(0,13)+ pagenumber + this.path.slice(14)
         }
     }}>Back</Button>
     <Button variant = "contained" color = "primary" onClick={()=>{
     var pagenumber = parseInt(this.path.slice(13,14)) + 1
     window.location.href = this.path.slice(0,13)+ pagenumber + this.path.slice(14)
     }}>Next</Button>
        </div>
        </div>
        );
    }
    else if (this.state.view === "likes") {
      this.state.wishlist.map(like =>{
          return <NextAdventure
              name = {like.name}
              image = {like.image}
              location = {like.location}
          />
      })
      return(
        <div>
        {this.state.wishlist.map(like =>{
          return <NextAdventure
              name = {like.name}
              image = {like.image}
              location = {like.location}
        />} 
          
          )}
        </div>
      )
    }
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

