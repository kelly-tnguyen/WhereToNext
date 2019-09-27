let express = require("express");
let usersRoute = require("./server/routes/usersRoute");
let nationalParksRoute = require("./server/routes/nationalParksRoute");
let likedRoute = require("./server/routes/likedRoute")

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://kelly-nguyen-1:45683968kn@aca-practice-ss4lm.mongodb.net/wheretonext?retryWrites=true&w=majority', {useNewUrlParser: true},(err)=>{
   console.log("the error is",err)
   //start web server
});


const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
app.use(express.static("public"));

const thePort = 3001;

app.use(usersRoute);
app.use(nationalParksRoute);
app.use(likedRoute);


  app.listen(thePort, (err) => {
 if (err) {
   return console.log("Error", err);
 }
 console.log("Web server is now listening for messages on port",thePort);
});
