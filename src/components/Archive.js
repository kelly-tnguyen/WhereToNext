import React, { Component } from 'react';
import './styles/Dashboard.css';
import ParkList from "./ParkList";

class Archive extends Component {
  state ={
    user: {},
    wishlist:[],
    parks:[],
    search: "",
    view: "nextadventure"
  }

  componentDidMount(){
    // fetch('/likes')
    fetch('/archives')
    .then(response => response.json())
    .then(likes => this.setState({wishlist: likes}))
  }

  render() {
      var item;
      item = this.state.wishlist.map (item => {
          return <ParkList 
            id = {item._id}
            name = {item.name}
            image = {item.image}
            location = {item.location}
            />
      })
      return (
        <div className = 'body'>
            <div className = 'banner'>Archive</div>
                <div className = 'dashboard'>
                <input type="text" placeholder="Search for National Park" onChange={this.onchange} className="search"/> 
                    <div className = 'main'>
                        {item}
                    </div>
            
            </div>
        </div>
        );
      }
    }



export default Archive;