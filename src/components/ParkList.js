import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


    class Parklist extends Component {
      // classes = useStyles();
      liked = () => {
        console.log(this.props)
        const likedObject = {
          // props.name,
          // props.image
        }
    
        fetch('/liked', {
          method: 'Post',
          body: JSON.stringify(this.props)
          }).then(function(res) {
            console.log('hi', res);
            return res.json();
          }).then(function(data) {
            console.log(data)
          });
      }
   
      render() {
        return (
          <Card className={this.classes.card}>
            <CardActionArea>
              <CardMedia
                className={this.classes.media}
                image = {this.props.image}
              //   title = {this.props.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {this.props.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {this.props.location}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button onClick={() => this.liked()} size="small" color="primary">
                Add to Next Adventure
              </Button>
              <Button size="small" color="primary">
                Archive
              </Button>
            </CardActions>
          </Card>
        );
      }
    }
    
    export default Parklist;



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

// export default function MediaCard(props) {
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
//         <Button onClick={() => liked()} size="small" color="primary">
//           Add to Next Adventure
//         </Button>
//         <Button size="small" color="primary">
//           Archive
//         </Button>
//       </CardActions>
//     </Card>
//   );
//   }


// import React from 'react';
// import './listParks.css'

// function ListParks(props){
//     return(
//         <div>
//             {console.log(props.name)}
//             <h1 className="title" >{props.name}</h1>
//             {/* <img alt="nationalParkPic" src={props.images[0].url}> </img> */}
//         </div>

//     )
// }

// export default ListParks;




// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';

// const useStyles = makeStyles({
//   card: {
//     minWidth: 275,
//   },
//   bullet: {
//     display: 'inline-block',
//     margin: '0 2px',
//     transform: 'scale(0.8)',
//   },
//   title: {
//     fontSize: 14,
//   },
//   pos: {
//     marginBottom: 12,
//   },
// });

// export default function SimpleCard(props) {
//   const classes = useStyles();
//   const bull = <span className={classes.bullet}>•</span>;

//   return (
//     <Card className={classes.card}>
//       <CardContent>
//         <Typography className={classes.title} color="textSecondary" gutterBottom>
//         </Typography>
//         <Typography variant="h5" component="h2">
//             {props.name}
//           {/* be
//           {bull}
//           nev
//           {bull}o{bull}
//           lent */}
//         </Typography>
//         <Typography className={classes.pos} color="textSecondary">
//           adjective
//         </Typography>
//         <Typography variant="body2" component="p">
//           well meaning and kindly.
//           <br />
//           {'"a benevolent smile"'}
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small">Learn More</Button>
//       </CardActions>
//     </Card>
//   );
// }



// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import clsx from 'clsx';
// import Card from '@material-ui/core/Card';
// import CardHeader from '@material-ui/core/CardHeader';
// import CardMedia from '@material-ui/core/CardMedia';
// import CardContent from '@material-ui/core/CardContent';
// import CardActions from '@material-ui/core/CardActions';
// import Collapse from '@material-ui/core/Collapse';
// import Avatar from '@material-ui/core/Avatar';
// import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
// import { red } from '@material-ui/core/colors';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import ShareIcon from '@material-ui/icons/Share';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import MoreVertIcon from '@material-ui/icons/MoreVert';

// const useStyles = makeStyles(theme => ({
//   card: {
//     maxWidth: 345,
//   },
//   media: {
//     height: 0,
//     paddingTop: '56.25%', // 16:9
//   },
//   expand: {
//     transform: 'rotate(0deg)',
//     marginLeft: 'auto',
//     transition: theme.transitions.create('transform', {
//       duration: theme.transitions.duration.shortest,
//     }),
//   },
//   expandOpen: {
//     transform: 'rotate(180deg)',
//   },
//   avatar: {
//     backgroundColor: red[500],
//   },
// }));

// export default function RecipeReviewCard(props) {
//   const classes = useStyles();
//   const [expanded, setExpanded] = React.useState(false);

//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };

//   return (
//     <Card className={classes.card}>
//       <CardHeader
//         avatar={
//           <Avatar aria-label="recipe" className={classes.avatar}>
//             R
//           </Avatar>
//         }
//         action={
//           <IconButton aria-label="settings">
//             <MoreVertIcon />
//           </IconButton>
//         }
//         title= {props.name}
//         // subheader="September 14, 2016"
//       />
//       <CardMedia
//         className={classes.media}
//         image = {props.image}
//         title="Paella dish"
//       />
//       <CardContent>
//         <Typography variant="body2" color="textSecondary" component="p">
//           This impressive paella is a perfect party dish and a fun meal to cook together with your
//           guests. Add 1 cup of frozen peas along with the mussels, if you like.
//         </Typography>
//       </CardContent>
//       <CardActions disableSpacing>
//         <IconButton aria-label="add to favorites">
//         {/* <IconButton aria-label="add to favorites" onClick = {()=>{props.functionName(param)}}> */}
//           <FavoriteIcon />
//         </IconButton>
//         <IconButton aria-label="share">
//           <ShareIcon />
//         </IconButton>
//         <IconButton
//           className={clsx(classes.expand, {
//             [classes.expandOpen]: expanded,
//           })}
//           onClick={handleExpandClick}
//           aria-expanded={expanded}
//           aria-label="show more"
//         >
//           <ExpandMoreIcon />
//         </IconButton>
//       </CardActions>
//       <Collapse in={expanded} timeout="auto" unmountOnExit>
//         <CardContent>
//           <Typography paragraph>Method:</Typography>
//           <Typography paragraph>
//             Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
//             minutes.
//           </Typography>
//           <Typography paragraph>
//             Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
//             heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
//             browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
//             and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
//             pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
//             saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
//           </Typography>
//           <Typography paragraph>
//             Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
//             without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
//             medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
//             again without stirring, until mussels have opened and rice is just tender, 5 to 7
//             minutes more. (Discard any mussels that don’t open.)
//           </Typography>
//           <Typography>
//             Set aside off of the heat to let rest for 10 minutes, and then serve.
//           </Typography>
//         </CardContent>
//       </Collapse>
//     </Card>
//   );
// }






