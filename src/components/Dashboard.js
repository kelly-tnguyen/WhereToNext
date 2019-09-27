// import React, { Component } from 'react';
// import './styles/Dashboard.css';
// import ParkList from "./ParkList";
// import Button from '@material-ui/core/Button'
// import NextAdventure from './NextAdventure';

// class App extends Component {
//   state ={
//     user: {},
//     wishlist:[],
//     parks:[],
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
//         fetch('/liked',{
//         method: "POST",
//         headers:{"Content-Type": "application/json"},
//         body: JSON.stringify(likedObj)
//         })
//     }
//   render(){
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
//         <div className = 'marginLR'>
//             <div className = 'displayParks'>
//                 {item}
//             </div>
    
//      <div style = {{marginBottom: '3vh', marginTop: '3vh', display: 'flex', justifyContent: 'flex-end'}}>
//      <Button style = {{marginRight:'3vh'}} variant = "contained" color = "primary" onClick={()=>{
//          if(parseInt(this.path.slice(13,14)) !== 1){
//              var pagenumber = parseInt(this.path.slice(13,14)) - 1;
//              window.location.href = this.path.slice(0,13)+ pagenumber + this.path.slice(14)
//          }
//      }}>Back</Button>
//      <Button variant = "contained" color = "primary" onClick={()=>{
//      var pagenumber = parseInt(this.path.slice(13,14)) + 1
//      window.location.href = this.path.slice(0,13)+ pagenumber + this.path.slice(14)
//      }}>Next</Button>
//         </div>
//         </div>
//         );
//     }
//     else if (this.state.view === "likes") {
//         let likes = this.state.wishlist.map(like =>{
//             return <NextAdventure
//                 name = {like.name}
//                 image = {like.image}
//                 location = {item.location}
//             />
//         })
//         return(
//             {likes}     
//         )
//     }

// }
// }
      
// //     if(this.state.parks){
// //       return(
// //         <div className = "backgroundPic">
// //         <div>
// //             {/* <AppBar/> */}
// //             <div className = "listParks">
// //             {this.state.parks.map((p) =>
// //                 <SimpleCard
// //                 name = {p.name}
// //                 image = {p.image}
// //                 location = {p.location}
// //                 // addToWishList = {this.addToWishList}
// //                 />
// //             )}
// //             </div>
// //         </div>
// //         </div>
// //       )}
// //     }
// // }


// export default App;