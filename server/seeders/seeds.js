const db = require('../config/connection');
const { User, Vendor } = require('../models');

db.once('open', async() => {
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

    console.log('all done');
    process.exit(0);
});
