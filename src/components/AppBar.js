// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';

// const useStyles = makeStyles(theme => ({
//   root: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     flexGrow: 1,
//   },
// }));

// export default function ButtonAppBar() {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <AppBar position="static">
//         <Toolbar>
//           <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" className={classes.title}>
//             WhereToNext
//           </Typography>
//           <Button color="inherit">Login</Button>
//           <Button color="inherit">SignUp</Button>
//         </Toolbar>
//       </AppBar>
//     </div>
//   );
// }


import React from 'react';
import {Navbar, Nav, NavItem, MenuItem, NavDropdown} from 'react-bootstrap'
import {Button} from 'react-bootstrap';
import {Form, FormControl} from 'react-bootstrap';
import { MDBNavbar, MDBNavbarBrand,
    MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse } from 'mdbreact';

class MyNavbar extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            textFieldValue: '',
            isOpen: false
        }
    }

    toggleCollapse = () =>{
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    
    handleTextFieldChange = (e) =>{
        this.setState({
            textFieldValue: e.target.value
        });
    }


    search(event){
        event.preventDefault();
        var searchLink = this.state.textFieldValue
        var url = `/search/page=1&query=${searchLink}`
        window.location.href = url
    }

    render() {
        return (
        <MDBNavbar color="bg-dark" fixed="top" dark expand="md" scrolling transparent style = {{boxShadow:'0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12)'}}>
            {/* <MDBNavbarBrand href="#home"><i class="fas fa-film"></i>TMBL</MDBNavbarBrand> */}
            <Navbar.Brand href = '/'>WhereToNext</Navbar.Brand>
            <MDBNavbarToggler onClick ={this.toggleCollapse} />
            <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav left className="mr-auto pcss">
              <Nav.Link style ={{height:'auto', paddingTop:'0', paddingBottom: '0',borderRight: 'solid rgba(255,255,255) 1px',color:'white'}} href="/dashboard">Discover</Nav.Link>
                <Nav.Link style ={{height:'auto', paddingTop:'0', paddingBottom: '0',borderRight: 'solid rgba(255,255,255) 1px',color:'white'}} href="/nextadventure" onClick = {()=>{this.props.changeView()}}>Next Adventure</Nav.Link>
                <Nav.Link style ={{height:'auto', paddingTop:'0', paddingBottom: '0',color:'white'}} href="/archive">Archive</Nav.Link>
            </MDBNavbarNav>
            <Form inline onSubmit = {(e) => this.search(e)}>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" value={this.state.textFieldValue}  onChange={this.handleTextFieldChange}/>
              {/* <Button color="inherit" href="/signin">Login</Button>
                <Button color="inherit" href="/signup">SignUp</Button> */}
              {/* <Button variant="outline-info" onClick={() => this.search()}>Search</Button> */}
            </Form>
            </MDBCollapse>
        </MDBNavbar>
        );
    }
}




export default MyNavbar