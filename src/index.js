// THIS works, need this


import React from 'react';
import ReactDOM from 'react-dom';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import App from './App';
// import Parklist from "./components/ParkList"

// import './App.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();






//THIS DOES NOT WORK

// import React from "react";
// import ReactDOM from "react-dom";
// import JssProvider from "react-jss/lib/JssProvider";
// import { createGenerateClassName } from "@material-ui/core/styles";
// import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
// import "./components/styles/styles.css";
// import ParkList from "./components/ParkList"
// import * as serviceWorker from './serviceWorker';


// const muiBaseTheme = createMuiTheme();

// const generateClassName = createGenerateClassName({
//     dangerouslyUseGlobalCSS: true
//   });

// function Card () {
//   return (
//     <JssProvider generateClassName={generateClassName}>
//       <MuiThemeProvider
//         theme={createMuiTheme({
//           typography: {
//             useNextVariants: true
//           },
//           overrides: ParkList.getTheme(muiBaseTheme)
//         })}
//       >
//         <ParkList />
//       </MuiThemeProvider>
//      </JssProvider>
//   );
// }

// const rootElement = document.getElementById("root");
// ReactDOM.render(<Card />, rootElement);

// serviceWorker.unregister();
