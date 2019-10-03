// import React, { Component } from 'react';
// import './styles/Dashboard.css';
// import ParkList from "./ParkList";
// import MediaCard from './ParkList';
// // import Button from '@material-ui/core/Button'
// // import NextAdventure from './NextAdventure';

// class Dashboard extends Component {
//   state ={
//     user: {},
//     wishlist:[],
//     parks:[],
//     search: "",
//     view: "dashboard"
//   }

//   componentDidMount(){
//     fetch('/users')
//       .then(response => response.json())
//       .then(user => this.setState({user: user[0]}))

//     fetch('/nationalParks')
//     .then(response => response.json())
//     .then(park => this.setState({parks: park}))

//     fetch('/likes')
//     .then(response => response.json())
//     .then(likes => this.setState({wishlist: likes}))
//   }

//   onchange = e => {
//     this.setState({ search : e.target.value });
//   }


//   render() {
//     const {search} = this.state;
//     const filteredParks = this.state.parks.filter(user=>{
//       return user.park.toLowerCase().indexOf( search.toLowerCase() ) !== -1
//     })
//     const cards = filteredParks.map((item)=>{
//         return <ParkList 
//         id = {item._id}
//         name = {item.name}
//         image = {item.image}
//         location = {item.location}
//         />
//     });

//      return (
//       <div className="dashboard">
//         <input type="text" placeholder="Search for National Park" onChange={this.onchange} className="search"/>
//         <main className="main">
//           {cards}
//         </main>
//       </div>
//     );
//   }
// }

// export default Dashboard;



// THIS CODE WORKS BELOW

// import React, { Component } from 'react';
// import './styles/Dashboard.css';
// import ParkList from "./ParkList";
// import NextAdventure from './NextAdventure';

// class Dashboard extends Component {
//   state ={
//     user: {},
//     wishlist:[],
//     parks:[],
//     search: "",
//     view: "dashboard"
//   }

//   componentDidMount(){
//     fetch('/users')
//       .then(response => response.json())
//       .then(user => this.setState({user: user[0]}))

//     fetch('/nationalParks')
//     .then(response => response.json())
//     .then(park => this.setState({parks: park}))

//     fetch('/likes')
//     .then(response => response.json())
//     .then(likes => this.setState({wishlist: likes}))
//   }
  
  
//   liked = (id) =>{
//         console.log(id)
//         let likedObj = this.state.parks.find(p => p._id === id);
//         console.log(likedObj)
//         fetch('/likes',{
//         method: "POST",
//         headers:{"Content-Type": "application/json"},
//         body: JSON.stringify(likedObj)
//         })
//     }
//   render() {
//     if(this.state.view === "dashboard"){
//       var item;
//       item = this.state.parks.map (item => {
//           return <ParkList 
//             id = {item._id}
//             name = {item.name}
//             image = {item.image}
//             location = {item.location}
//             liked = {this.liked}
//             />
//       })

      
//       return (
//         <div className = 'body'>
//             <div className = 'banner'>Discover National Parks</div>
//                 <div className = 'dashboard'>
//                 <input type="text" placeholder="Search for a National Park" onChange={this.onchange} className="search"/> 
//                     <div className = 'main'>
//                         {item}
//                     </div>
            
//             </div>
//         </div>
//         );
//     }
//         else if (this.state.view === "likes") {
//       this.state.wishlist.map(like =>{
//           return <NextAdventure
//               name = {like.name}
//               image = {like.image}
//               location = {like.location}
//           />
//       })
//       return(
//         <div>
//         {this.state.wishlist.map(like =>{
//           return <NextAdventure
//               name = {like.name}
//               image = {like.image}
//               location = {like.location}
//         />} 
          
//           )}
//         </div>
//       )}
//     }
// }

// export default Dashboard;
      





import React, { Component } from 'react';
import './styles/Dashboard.css';
import ParkList from "./ParkList";

// import NextAdventure from './NextAdventure';

class Dashboard extends Component {
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

  onchange = e => {
    this.setState({ search : e.target.value });
  }
  
  render() {
        const {search} = this.state;
        const filteredParks = this.state.parks.filter(park=>{
          return park.name.toLowerCase().indexOf( search.toLowerCase() ) !== -1
        })

        // var item;
        const cards = filteredParks.map(item => {
            return <ParkList 
            id = {item._id}
            name = {item.name}
            image = {item.image}
            location = {item.location}
     />
          });


      return (
        <div className = 'body'>
            <div className = 'banner'>Discover National Parks</div>
                <div className = 'dashboard'>
                <input type="text" placeholder="Search for a National Park" onChange={this.onchange} className="search"/> 
                    <div className = 'main'>
                        {/* {item} */}
                        {cards}
                    </div>
            
            </div>
        </div>
        );
}
}

export default Dashboard;