const bodyParser = require("body-parser"); //once a request is recived you can manipulate it
const cors = require('cors');  //send api calls through diffrent ports
const express = require('express');
const app = express();
const config = require("./config.js");
const database = require("./database/Database.js");

const userRoutes = require("./Routes/userRoute.js");


require('dotenv').config()
app.use(cors()); // Allow API calls to be made from any origin
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

//Routing
app.use('/api/user', userRoutes);
// app.use('/api/post', postRoutes);



//database connection
database.connect();
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, 'client', 'build')));
  app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
  });
}
//starting up server
app.listen(config.port, () => {
  console.log("Server is now listening at port: " + config.port);
});