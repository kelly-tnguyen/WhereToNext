
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


//THIS IS WHAT I WOULD LIKE BUT DOESNT WORK 

// import React from "react";
// import Card from "@material-ui/core/Card";
// import CardMedia from "@material-ui/core/CardMedia";
// import CardContent from "@material-ui/core/CardContent";
// import Link from "@material-ui/core/Link";
// import Typography from "@material-ui/core/Typography";
 

// const NewsCard02 = (props) => (
//   <Card className={"MuiNewsCard--02"}>
//     <CardMedia
//       component={"img"}
//       className={"MuiCardMedia-root"}
//       image={props.image}
//     />
//     <CardContent className={"MuiCardContent-root"}>
//       <Typography
//         className={"MuiTypography--heading"}
//         color={"inherit"}
//         variant={"h3"}
//         gutterBottom
//       >
//         {props.name}
//       </Typography>
//       <Typography className={"MuiTypography--subheading"} color={"inherit"}>
//         {props.location}
//       </Typography>
//       <Typography
//         className={"MuiTypography--explore"}
//         color={"inherit"}
//         variant={"caption"}
//       >
//         <Link color={"inherit"} underline={"none"}>
//           ADD TO NEXT ADVENTURE
//         </Link>
//       </Typography>
//     </CardContent>
//   </Card>
// );

// NewsCard02.getTheme = muiBaseTheme => ({
//   MuiCard: {
//     root: {
//       "&.MuiNewsCard--02": {
//         maxWidth: 304,
//         margin: "auto",
//         position: "relative",
//         transition: "0.3s cubic-bezier(.47,1.64,.41,.8)",
//         boxShadow: "0 16px 40px -12.125px rgba(0,0,0,0.3)",
//         borderRadius: 0,
//         "&:hover": {
//           "& .MuiTypography--explore": {
//             transform: "scale(1.2)"
//           }
//         },
//         "& button": {
//           marginLeft: 0
//         },
//         "& .MuiCardMedia-root": {
//           height: "100%"
//         },
//         "& .MuiCardContent-root": {
//           position: "absolute",
//           bottom: 0,
//           padding: muiBaseTheme.spacing.unit * 3,
//           color: muiBaseTheme.palette.common.white,
//           textAlign: "center",
//           "& .MuiTypography--subheading": {
//             lineHeight: 1.8,
//             letterSpacing: 0.5,
//             marginBottom: "40%"
//           },
//           "& .MuiTypography--explore": {
//             marginBottom: 16,
//             transition: "0.3s cubic-bezier(.47,1.64,.41,.8)",
//             letterSpacing: 2
//           }
//         }
//       }
//     }
//   }
// });
// NewsCard02.metadata = {
//   name: "News Card II",
//   description: "Best for Blog"
// };

// export default NewsCard02;

//WHAT I LIKE BUT DOESNT WORK ENDS HERE




// ADDING THE FUNCTIONALITY TO THE BUTTON

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

// ADDING FUNCTIONALITY ENDS HERE









