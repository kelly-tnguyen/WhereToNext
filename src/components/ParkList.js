
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { wrap } from 'module';




// const useStyles = makeStyles({
//   image: {
//     maxHeight: 200,
//     maxWidth: 300,
//   },
//   card: {
//     maxWidth: 350,
//     maxHeight: 350,
//     margin: 10
//   },
//   media: {
//     height: 180,
//     width: 300
//   },
// });

// class ParkList extends React.Component {
//   state = {
//     name: "",
//     location: "",
//     image: "" 
//   }


//   handleName = (event) => {
//     this.setState({name: event.target.value})
//   }


//   handleLocation = (event) => {
//     this.setState({location: event.target.value})
//   }

//   handleImage = (event) => {
//     this.setState({image: event.target.value})
//   }

//   newPark = (e) => {
//     e.preventDefault();
//     let newPark={
//       method:"POST",
//       headers: {"Content-Type": "application/json"},
//       body: JSON.stringify({
//           name:name,
//           location:location,
//           image:image
//       })
//     }
//     fetch("/likes", newPark).then((res)=>{
//       console.log(res.json())
//     })
//     alert('National park added to Next Adventure!');
//   }
// }


//   const classes = useStyles();

//   return (
//     <Card className={classes.card}>
//       <CardActionArea>
//         <CardMedia
//           className={classes.media}
//           image = {props.image}
//         //   title = {props.name}
//         />
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="h2">
//             {props.name}
//           </Typography>
//           <Typography variant="body2" color="textSecondary" component="p">
//             {props.location}
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//       <CardActions>
//         <Button onClick = {()=>{props.newPark(props.id)}} size="small" color="primary">
//           Add to Next Adventure
//         </Button>
//         <Button size="small" color="primary">
//           Archive
//         </Button>
//       </CardActions>
//     </Card>
//   );


// export default ParkList;




//THIS WORKS 


const useStyles = makeStyles({
  image: {
    maxHeight: 200,
    maxWidth: 250,
  },
  card: {
    maxWidth: 300,
    height: 350,
    margin: 10,
    wordWrap: wrap
  },
  media: {
    height: 180,
    width: 300
  },
});

export default function MediaCard(props) {
  const classes = useStyles();
  

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image = {props.image}
          />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.location}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Add to Next Adventure
        </Button>
        <Button size="small" color="primary">
          Archive
        </Button>
      </CardActions>
    </Card>
  );
  }

//ENDS











