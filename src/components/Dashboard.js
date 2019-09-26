import React, { Component } from 'react';
import './styles/Dashboard.css';
import ParkList from "./ParkList";
import Button from '@material-ui/core/Button'

class App extends Component {
  state ={
    user: {},
    wishlist:[],
    parks:[],
    view: "homepage"
  }

  componentDidMount(){
    fetch('/users')
      .then(response => response.json())
      .then(user => this.setState({user: user[0]}))

    fetch('/nationalParks')
    .then(response => response.json())
    .then(park => this.setState({parks: park}))
  }

  render(){
      var item;
      item = this.state.parks.map (item => {
          return <ParkList 
            name = {item.name}
            image = {item.image}
            location = {item.location}/>
      })
      return (
        <div className = 'marginLR'>
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
}}
      
//     if(this.state.parks){
//       return(
//         <div className = "backgroundPic">
//         <div>
//             {/* <AppBar/> */}
//             <div className = "listParks">
//             {this.state.parks.map((p) =>
//                 <SimpleCard
//                 name = {p.name}
//                 image = {p.image}
//                 location = {p.location}
//                 // addToWishList = {this.addToWishList}
//                 />
//             )}
//             </div>
//         </div>
//         </div>
//       )}
//     }
// }


export default App;