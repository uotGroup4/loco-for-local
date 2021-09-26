const mongoose = require('mongoose');
const url =  'mongodb+srv://saidhadad:Superstr0ng@loco-for-local.fumoj.mongodb.net/loco-for-local?retryWrites=true&w=majority'


mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/loco-for-local',
  {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then((db) => console.log('Mongodb is connected to', db.connection.host))

module.exports = mongoose.connection;