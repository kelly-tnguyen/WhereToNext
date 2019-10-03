
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


// //YASSSS THIS WORKS THE MOSTEST!!!!!!


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
  
  const newPark = () => {
    // e.preventDefault();
    let newPark={
      method:"POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
          name: props.name, 
          location: props.location,
          image: props.image
      })
    }

 // if id isn't in database, run the fetch
 
    fetch("http://localhost:3001/likes", newPark)
    .then((res)=>{
        console.log(res.text())
    })
    alert('Park added to Next Adventure!');

  //else, don't add it if it's there/alert them saying it's added already
  }


  const newArchive = () => {
    // e.preventDefault();
    let newArchive={
      method:"POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
          name: props.name, 
          location: props.location,
          image: props.image
      })
    }

 // if id isn't in database, run the fetch
 
    fetch("http://localhost:3001/archives", newArchive)
    .then((res)=>{
        console.log(res.text())
    })
    alert('Park added to Archive');

  //else, don't add it if it's there/alert them saying it's added already
  }

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
        <Button className="links" size="small" color="primary" onClick = {()=>{newPark()}}>
        <i class="fas fa-plus">  </i> Next Adventure
        </Button>
        <Button className="links" size="small" color="primary" onClick = {()=>{newArchive()}}>
        <i class="fas fa-plus">  </i> Archive
        </Button>
      </CardActions>
    </Card>
  );
  }



//THIS IS WHAT I WOULD LIKE BUT DOESNT WORK 

// import React from 'react';
// import Card from '@material-ui/core/Card';
// import CardMedia from '@material-ui/core/CardMedia';
// import CardContent from '@material-ui/core/CardContent';
// import Link from '@material-ui/core/Link';
// import Typography from '@material-ui/core/Typography';
// import './styles/styles.css'


// const newPark = (props) => {
//       let newPark={
//         method:"POST",
//         headers: {"Content-Type": "application/json"},
//         body: JSON.stringify({
//             name: props.name,
//             location: props.location,
//             image: props.image
//         })
//       }
  
//       fetch("http://localhost:3001/likes", newPark)
//       .then((res)=>{
//           console.log(res.text())
//       })
//       alert('Park added to Next Adventure!');
//     }

// const NewsCard02 = (props) => (
//   <Card className={'MuiNewsCard--02'}>
//     <CardMedia
//       component={'img'}
//       className={'MuiCardMedia-root'}
//       src=
//       {props.image}
//     />
//     <CardContent className={'MuiCardContent-root'}>
//       <Typography
//         className={'MuiTypography--heading'}
//         color={'inherit'}
//         variant={'h3'}
//         gutterBottom
//       >
//         {props.name}
//       </Typography>
//       <Typography className={'MuiTypography--subheading'} color={'inherit'}>
//         {props.location}
//       </Typography>
//       <Typography
//         className={'MuiTypography--explore'}
//         color={'inherit'}
//         variant={'caption'}
//       >
//         <Link onClick = {()=>{newPark()}}> 
//         ADD TO NEXT ADVENTURE 
//         </Link>
//       </Typography>
//     </CardContent>
//   </Card>
// );

// NewsCard02.getTheme = ({ spacing, palette }) => ({
//   MuiCard: {
//     root: {
//       '&.MuiNewsCard--02': {
//         maxWidth: 304,
//         margin: 'auto',
//         position: 'relative',
//         transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
//         boxShadow: '0 16px 40px -12.125px rgba(0,0,0,0.3)',
//         borderRadius: 0,
//         '&:hover': {
//           '& .MuiTypography--explore': {
//             transform: 'scale(1.2)',
//           },
//         },
//         '& button': {
//           marginLeft: 0,
//         },
//         '& .MuiCardMedia-root': {
//           height: '100%',
//         },
//         '& .MuiCardContent-root': {
//           position: 'absolute',
//           bottom: 0,
//           padding: spacing(3),
//           color: palette.common.white,
//           textAlign: 'center',
//           '& .MuiTypography--subheading': {
//             lineHeight: 1.8,
//             letterSpacing: 0.5,
//             marginBottom: '40%',
//           },
//           '& .MuiTypography--explore': {
//             marginBottom: 16,
//             transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
//             letterSpacing: 2,
//           },
//         },
//       },
//     },
//   },
// })


// export default NewsCard02;

