// import React from 'react';
// import React, { Component } from 'react';
// import ParkList from "./ParkList";


// function NextAdventure(props){
//     return(
//         <div>
//             <h1>{props.name}</h1>
//         </div>
//     );
// }
// export default NextAdventure;



import React, { Component } from 'react';
// import './styles/Dashboard.css';
import ParkList from "./ParkList";
import Archive from "./Archive";
import './styles/NextAdventure.css';

class NextAdventure extends Component {
  state ={
    user: {},
    wishlist:[],
    parks:[],
    search: "",
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
        fetch('/liked',{
        method: "POST",
        headers:{"Content-Type": "application/json"},
        body: JSON.stringify(likedObj)
        })
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
        <div className = 'body'> 
            <div className = 'banner'>
                Next Adventure
            </div>
        </div>
        );
    }
        else if (this.state.view === "likes") {
      this.state.wishlist.map(like =>{
          return <Archive
              name = {like.name}
              image = {like.image}
              location = {like.location}
          />
      })
      return(
        <div>
        {this.state.wishlist.map(like =>{
          return <Archive
              name = {like.name}
              image = {like.image}
              location = {like.location}
        />} 
          
          )}
        </div>
      )}
    }
}

export default NextAdventure;
      
