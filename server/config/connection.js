const mongoose = require('mongoose');

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/loco-for-local',
  {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }).
  then((db) => console.log('Mongodb is connected to', db.connection.host))

module.exports = mongoose.connection;