import React from 'react';
// import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
import './styles/Home.css';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

function Home(props) {
  const { classes } = props;
  return (
    <div className="home">
      <div className="top">
        <h1 className="big">Adventure Awaits</h1>
        <p className="sub"> Discover National Parks and fulfill your wanderlust dreams</p>
        <Link to="/signup">
          <Button variant="contained" color="secondary" id="bigger-button" className={classes.button}>
            Sign Up
          </Button>
        </Link>
        {/* <span id="down"><a href="#middle"> 
          <i class="far fa-arrow-alt-circle-down"></i></a>
        </span> */}
      </div>
    </div>
  )
}

export default withStyles(styles)(Home);