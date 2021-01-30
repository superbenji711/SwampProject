const mongoose = require('mongoose');
// const config = require('config');
const config = require('../config');
const url = config.uri;

mongoose.connection.on('connected', () => {
    console.log(`Database connection open to ${url}`);
});
  
mongoose.connection.on('error', (err) => {
    console.log(`Mongoose connection error: ${err}`);
});

mongoose.connection.on('disconnected', () => {
    console.log('Mongoose default connection disconnected');
});
  

process.on("SIGINT", function () {
    mongoose.connection.close(function () {
      console.log(
        "Mongoose default connection disconnected through app termination"
      );
      process.exit(0);
    });
  });

  exports.connect = () => { //connect mongodb to database
    mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log( 'Database Connected' ))
    .catch(err => console.log( err ));
  };

  exports.disconnect = () => {
      mongoose.disconnect();
  }