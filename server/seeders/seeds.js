const db = require('../models');
const mongoose = require('mongoose');

// this file empties the users and vendor collecntrion and insters the seeds bellow
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/loco-for-local', {
    useNewUrlParser: true,
});

const userData = [
  {
    username: 'Kaladin',
    email: 'kaladin@windrunners.com',
    password: 'Stormblessed',
  },
  {
    username: 'Dalinar',
    email: 'dkholin@uruthiru.com',
    password: 'Kholin1',
  },
  {
    username: 'Adolin',
    email: 'akholin@uruthiru.com',
    password: 'Kholin2',
  },
];

const vendorData = [
  {
    title: `St. Jacob's Farmers Market`,
    image: 'https://explorewaterloo.ca/wp-content/uploads/2015/12/New-Building-800x560.jpg',
    website: 'https://stjacobsmarket.com/',
    location: '878 Weber St. N.'
  },
  {
    title: `Covent Garden Market`,
    image: 'https://www.londontourism.ca/mediafiles/members/covent-garden-market1.jpg',
    website: 'https://coventmarket.com/',
    location: '130 King Street London, ON N6A 1C5'
  },
];

db.Vendor.deleteMany({})
  .then(() => db.Vendor.collection.insertMany(vendorData))
  .then(data => {
    console.log(data.result.n + 'records inserted!');
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
  });

  db.User.deleteMany({})
  .then(() => db.User.collection.insertMany(userData))
  .then(data => {
    console.log(data.result.n + 'records inserted!');
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
  });