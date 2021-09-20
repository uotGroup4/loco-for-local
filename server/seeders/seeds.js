const db = require('../models');
const mongoose = require('mongoose');

// this file empties the users and vendor collecntrion and insters the seeds bellow
// we should put this onto an env
mongoose.connect('mongodb+srv://saidhadad:Superstr0ng@loco-for-local.fumoj.mongodb.net/loco-for-local?retryWrites=true&w=majority',
{
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
    "title": "Covent Garden Market",
    "image": "https://www.londontourism.ca/mediafiles/members/covent-garden-market1.jpg",
    "website": "https://coventmarket.com/ ",
    "location": "878 Weber St. N.",
    "coordinates": [
    -81.2503452,
    42.9828131
    ]
  },
  {
    "title": "St. Jacob's Farmers Market",
    "image": "https: //explorewaterloo.ca/wp-content/uploads/2015/12/New-Building-800x560.jpg",
    "website": "https: //stjacobsmarket.com/",
    "location": "878 Weber St. N.",
    "coordinates": [
    -80.5550154,
    43.510908 
    ]
  },
  {
    "title": "Organics Family Farm",
    "image": "",
    "website": "https://www.organicsfarm.ca/",
    "location": "7550 19th Ave, Markham, ON L6B 1A8",
    "coordinates": [
    -79.227668,
    43.957034
    ]
  },
  {
    "title": "Elberta Farms Country Market",
    "image": "",
    "website": "http://www.elbertafarms.ca/",
    "location": "353 Governors Rd E, Paris, ON N3L 3E1",
    "coordinates": [
    -80.284053,
    43.204556
    ]
  },
  {
    "title": "Wasaga Beach Famers Market",
    "image": "",
    "website": "https://www.wasagabeachfarmersmarket.ca/",
    "location": "1724 Mosley St, Wasaga Beach, ON L9Z 1Z8",
    "coordinates": [
    -80.068727,
    44.4796625
    ]
  },
  {
    "title": "Mill Market Sault Ste Marie",
    "image": "",
    "website": "https://www.millmarketssm.ca/",
    "location": "35 Canal Dr, Sault Ste. Marie, ON P6A 5P4",
    "coordinates": [
    -84.345581,
    46.5154953 
    ]
  },
  {
    "title": "The Elora Farmers' Market",
    "image": "",
    "website": "https://www.elorafarmersmarket.ca/",
    "location": "Bissell Park, 127 E Mill St, Elora, ON N0B 1S0",
    "coordinates": [
    -80.4235624,
    43.6843948
    ]
  },
  {
    "title": "St Catharines Farmers Market",
    "image": "",
    "website": "http://stcatharines.ca/FarmersMarket",
    "location": "91 King St, St. Catharines, ON L2R 3H6",
    "coordinates": [
    -79.2461881,
    43.1586174 
    ]
  },
  {
    "title": "Guelph Farmers' Market",
    "image": "",
    "website": "http://guelph.ca/farmersmarket",
    "location": "2 Gordon St, Guelph, ON N1H 4G7",
    "coordinates": [
    -80.24838,
    43.542419
    ]
  },
  {
    "title": "Orillia Fairgrounds Farmers' Market",
    "image": "",
    "website": "http://orilliafairgroundsfarmersmarket.ca/",
    "location": "4500 Fairgrounds Rd, Severn, ON L3V 0Y2",
    "coordinates": [
      -79.4669859,
      44.6162758
    ]
  },
  {
      "title": "Welland Farmers Market",
      "image": "",
      "website": "https://www.welland.ca/Market/index.asp",
      "location": "70 Young St, Welland, ON L3B 4C5",
      "coordinates": [
        -79.2487637,
        42.9900188 
      ]
  },
  {
      "title": "Lee and Maria's",
      "image": "",
      "website": "https://leeandmarias.com/?utm_source=google&utm_medium=gmb&utm_campaign=google_click",
      "location": "692 Seacliff Dr, Kingsville, ON N9Y 2K7",
      "coordinates": [
        -82.70988570000002,
        42.0363434
      ]
  },
  {
      "title": "Kamloops Regional Farmers' Market",
      "image": "",
      "website": "http://www.kamloopsfarmersmarket.com/",
      "location": "245 St Paul St, Kamloops, BC V2C 2J2",
      "coordinates": [
        -120.3353575,
        50.67406020000001 
      ]
  },
  {
      "title": "Duncan Farmers' Market",
      "image": "",
      "website": "https://www.duncanfarmersmarket.ca/",
      "location": "200 Craig St, Duncan, BC V9L 1W3",
      "coordinates": [
        -123.708084,
        48.778729 
      ]
  },
  {
      "title": "Sooke Country Market",
      "image": "",
      "website": "https://www.sookecountrymarket.com/",
      "location": "Memorial Park, John Philips, Sooke, BC",
      "coordinates": [
        -123.7305768,
        48.3817111 
      ]
  },
  {
      "title": "Squamish Farmers' Market",
      "image": "",
      "website": "http://www.squamishfarmersmarket.com/",
      "location": "37996 Cleveland Ave, Squamish, BC V8B 0B2",
      "coordinates": [
        -123.153366,
        49.698158 
      ]
  },
  {
      "title": "Kimberley Farmers' Market",
      "image": "",
      "website": "https://wildsight.ca/branches/kimcran/kimberley-farmers-market/",
      "location": "Between Kimberley and, Howard Street, Wallinger Ave, Kimberley, BC V1A 2G6",
      "coordinates": [
        -115.9842255,
        49.6869457 
      ]
  },
  {
      "title": "St. Albert Farmer's Market",
      "image": "",
      "website": "https://www.stalbertfarmersmarket.com/",
      "location": "5 St Anne St, St. Albert, AB T8N 3Z9",
      "coordinates": [
        -113.6280295,
        53.6330491 
      ]
  },
  {
      "title": "Calgary Farmers' Market South",
      "image": "",
      "website": "http://www.calgaryfarmersmarket.ca/",
      "location": "510 77 Ave SE, Calgary, AB T2H 1C3",
      "coordinates": [
        -114.0517599,
        50.9854596 
      ]
  },
  {
      "title": "Edmonton Downtown Farmers Market",
      "image": "",
      "website": "http://www.yegdtmarket.com/",
      "location": "10305 97 St NW, Edmonton, AB T5J 0L9",
      "coordinates": [
        -113.48684,
        53.546113 
      ]
  },
  {
      "title": "Airdrie Farmers Market",
      "image": "",
      "website": "http://www.airdriefarmersmarket.com/",
      "location": "320 Centre Ave E, Airdrie, AB",
      "coordinates": [
        -114.0072136,
        51.2918416 
      ]
  },
  {
      "title": "Saskatoon Farmers' Market",
      "image": "",
      "website": "http://www.saskatoonfarmersmarket.com/",
      "location": "2600 Koyl Ave, Saskatoon, SK S7L 5X9",
      "coordinates": [
        -106.6817666,
        52.16663759999999 
      ]
  },
  {
      "title": "Regina Farmers' Market",
      "image": "",
      "website": "https://reginafarmersmarket.ca/",
      "location": "City Square Plaza, 2190 Victoria Ave, Regina, SK S4N 6T5",
      "coordinates": [
        -104.6122811,
        50.4480315 
      ]
  },
  {
      "title": "Prince Albert Farmers Market",
      "image": "",
      "website": "https://pafm.ca/",
      "location": "679 20 St E, Prince Albert, SK S6V 1L5",
      "coordinates": [
        -105.7346734,
        53.1948795 
      ]
  },
  {
      "title": "Regina Beach Farmer's Market",
      "image": "",
      "website": "http://reginabeachfarmersmarket.com/",
      "location": "115 Centre St, Regina Beach, SK S0G 4C0",
      "coordinates": [
        -104.9856052,
        50.7943131 
      ]
  },
  {
      "title": "River Heights Farmers’ Market",
      "image": "",
      "website": "https://www.rhfarmersmarket.com/",
      "location": "1370 Grosvenor Ave, Winnipeg, MB R3M 0P2",
      "coordinates": [
        -97.18119680000001,
        49.8665004 
      ]
  },
  {
      "title": "St Norbert Farmers Market",
      "image": "",
      "website": "http://stnorbertfarmersmarket.ca/",
      "location": "3514 Pembina Hwy, Winnipeg, MB R3V 1A1",
      "coordinates": [
        -97.15466029999999,
        49.7672146 
      ]
  },
  {
      "title": "South Osborne Farmers' Market",
      "image": "",
      "website": "http://www.fireweedfoodcoop.ca/",
      "location": "725 Kylemore Ave, Winnipeg, MB R3L 1B8",
      "coordinates": [
        -97.1440268,
        49.8601154 
      ]
  },
  {
      "title": "Bronx Park Farmer's Market",
      "image": "",
      "website": "https://market.bronxpark.ca/",
      "location": "720 Henderson Hwy, Winnipeg, MB R2K 0Z5",
      "coordinates": [
        -97.1057689,
        49.9270523 
      ]
  },
  {
      "title": "Kurbis Country Market",
      "image": "",
      "website": "http://www.kurbiscountry.ca/",
      "location": "42055 MB-317, Beausejour, MB R0E 0C0",
      "coordinates": [
        -96.4816254,
        50.2687266 
      ]
  },
  {
      "title": "Jean Talon Market",
      "image": "",
      "website": "https://www.marchespublics-mtl.com/marches/jean-talon/",
      "location": "7070 Henri Julien Ave, Montreal, Quebec H2S 3S3",
      "coordinates": [
        -73.61489019999999,
        45.53610949999999 
      ]
  },
  {
      "title": "The New Grand Market | Le Grand Marché de Québec",
      "image": "",
      "website": "https://www.legrandmarchedequebec.com/fr/",
      "location": "250 section M, Bd Wilfrid-Hamel, Québec, QC G1L 5A7",
      "coordinates": [
        -71.2455791,
        46.8289521 
      ]
  },
  {
      "title": "Kingston Farmer's Market",
      "image": "",
      "website": "https://sites.google.com/view/kingston-farmers-market/home",
      "location": "4 Market Ln, Kingston, NB E5N 8A6",
      "coordinates": [
        -65.9735279, 
        45.498862 
      ]
  },
  {
      "title": "Fredericton Boyce Farmers Market",
      "image": "",
      "website": "http://frederictonfarmersmarket.ca/",
      "location": "665 George St, Fredericton, NB E3B 1K4",
      "coordinates": [
        -66.6396291,
        45.9577785 
      ]
  },
  {
      "title": "Queen Square Farmers' Market",
      "image": "",
      "website": "https://facebook.com/QueenSquareFarmersMarket",
      "location": "31 Queen Square N, Saint John, NB E2L 1R6",
      "coordinates": [
        -66.0566225,
        45.2692697 
      ]
  },
  {
      "title": "Sackville Farmers Market",
      "image": "",
      "website": "https://www.sackvillefarmersmarket.ca/",
      "location": "66 Main St, Sackville, NB E4L 4A7",
      "coordinates": [
        -64.3698819,
        45.8962319 
      ]
  },
  {
      "title": "Marché Moncton Market",
      "image": "",
      "website": "http://www.marchemonctonmarket.ca/",
      "location": "120 Westmorland St, Moncton, NB E1C 0R9",
      "coordinates": [
        -64.7788979,
        46.0872568 
      ]
  },
  {
      "title": "Halifax Seaport Farmers' Market",
      "image": "",
      "website": "http://halifaxfarmersmarket.com/",
      "location": "1031 Marginal Rd, Halifax, NS B3H 4P7",
      "coordinates": [
        -63.564903,
        44.6377238 
      ]
  },
  {
      "title": "New Glasgow Farmers Market",
      "image": "",
      "website": "http://www.ngfarmmarket.com/",
      "location": "261 Glasgow St, New Glasgow, NS B2H 5C2",
      "coordinates": [
        -62.64721669999999,
        45.5860328 
      ]
  },
  {
      "title": "Antigonish Farmers' Market",
      "image": "",
      "website": "http://www.antigonishfarmersmarket.ca/",
      "location": "20 Exhibition Ln, Antigonish, NS B2G 1R6",
      "coordinates": [
      -80.5550154,
      43.510908 
      ]
  },
  {
      "title": "Wolfville Farmers' Market",
      "image": "",
      "website": "http://www.wolfvillefarmersmarket.ca/",
      "location": "24 Elm Ave, Wolfville, NS B4P 1Z9",
      "coordinates": [
        -62.0010956,
        45.6166978 
      ]
  },
  {
      "title": "Halifax Forum Farmers' Market",
      "image": "",
      "website": "http://www.forumfarmersmarket.ca/",
      "location": "6205 Almon St, Halifax, NS B3K 5E5",
      "coordinates": [
        -63.6039621,
        44.655723 
      ]
  },
  {
      "title": "Cape Breton Farmer's Market",
      "image": "",
      "website": "https://capebretonfarmersmarket.com/",
      "location": "15 Falmouth St, Sydney, NS B1P 5G8",
      "coordinates": [
        -60.1946269,
        46.1358498 
      ]
  },
  {
      "title": "Lunenburg Farmer's Market",
      "image": "",
      "website": "https://lunenburgfarmersmarketns.ca/",
      "location": "19 Green St, Lunenburg, NS B0J 2C0",
      "coordinates": [
        -64.3212508,
        44.3753776 
      ]
  },
  {
      "title": "St. John's Farmers' Market",
      "image": "",
      "website": "http://stjohnsfarmersmarket.ca/",
      "location": "245 Freshwater Rd, St. John's, NL A1B 1B3",
      "coordinates": [
        -52.7336825,
        47.562977 
      ]
  },
  {
      "title": "Lester's Farm Market",
      "image": "",
      "website": "http://lestersfarmmarket.com/",
      "location": "173 Brookfield Rd, St. John's, NL A1E 3G8",
      "coordinates": [
        -52.7704457,
        47.5173555 
      ]
  },
  {
      "title": "Farm and Market Clarenville",
      "image": "",
      "website": "http://www.farmandmarketclarenville.ca/",
      "location": "Clarenville, NL A5A 1S9",
      "coordinates": [
      -80.5550154,
      43.510908 
      ]
  },
  {
      "title": "Cormack Farmers Market & Flower Shop",
      "image": "",
      "website": "http://www.cormackmarketandflorist.com/",
      "location": "69 The Viking Trail, Cormack, NL A8A 2S3",
      "coordinates": [
        -53.96239079999999,
        48.1463546 
      ]
  },
  {
      "title": "Charlottetown Farmers Market",
      "image": "",
      "website": "http://charlottetownfarmersmarket.com/",
      "location": "100 Belvedere Ave, Charlottetown, PE C1A 4P1",
      "coordinates": [
        -63.1348685,
        46.252964 
      ]
  },
  {
      "title": "Stanley Bridge Centre Farmers Market",
      "image": "",
      "website": "http://www.stanleybridgecentre.ca/",
      "location": "9979 PE-6, Stanley Bridge, PE C0A 1M0",
      "coordinates": [
        -63.45526289999999,
        46.4615868 
      ]
  },
  {
      "title": "Cardigan Farmers' Market",
      "image": "",
      "website": "https://www.facebook.com/groups/203609703088266/",
      "location": "338 Station Rd, Cardigan, PE C0A 1G0",
      "coordinates": [
        -62.62139569999999,
        46.2300834 
      ]
  },
  {
      "title": "Fireweed Community Market Society",
      "image": "",
      "website": "http://fireweedmarket.ca/",
      "location": "Shipyards Park, 100 Ogilvie St, Whitehorse, YT Y1A 0G6",
      "coordinates": [
        -135.056179,
        60.72728899999999 
      ]
  },
];

const shopData = [
  {
      "title": "Just Simply Wood",
      "image": "",
      "website": "www.justsimplywood.ca",
      "location": "Komoka, ON",
      "description": "Luxuriously sculpted woodenware.",
      "coordinates": [
        -81.43580759999999,
        42.9484986 
      ]
  },
  {
      "title": "NAMCOR Laser Services",
      "image": "",
      "website": "https://www.namcorlaserservices.com/",
      "location": "5703 Egremont Drive Ilderton ON",
      "description": "Metal art home decor.",
      "coordinates": [
        -81.4756877,
        43.0015018 
      ]
  },
  {
      "title": "Kim Drosdick Jewellery",
      "image": "",
      "website": "www.kimdrosdick.com",
      "location": "49 Roncesvalles Ave. Toronto",
      "description": "Ethical fine jewellery.",
      "coordinates": [
        -79.44659779999999,
        43.6403318 
      ]
  },
  {
      "title": "Kings Crown",
      "image": "",
      "website": "https://www.kingscrown1774.com/",
      "location": [
          "2901 Bayview Ave North York, Ontario M2K 1E6",
          "5th Floor 176 Yonge St, Toronto, Ontario M5C 2L7"
      ],
      "description": "Men's grooming and lifestyle gifts.",
      "coordinates": [
        -79.3845652,
        43.7695823 
      ]
  },
  {
      "title": "Cacticus",
      "image": "",
      "website": "https://cacticus.ca/",
      "location": [
          "31 Lakeshore Road East, Oakville ON",
          "2978 Dundas St. West, Toronto",
          "187 Highbourne Rd, Toronto",
          "218 Locke St. S, Hamilton, ON"
      ],
      "description": "Handmade concrete planters.",
      "coordinates": [
        -79.4687995,
        43.6655867 
      ]
  },
  {
      "title": "Atelier Cocotte",
      "image": "",
      "website": "www.ateliercocotte.com",
      "location": "2065 Rue Parthenais #276, Montréal, QC H2K 3T2",
      "description": "Unique wood lighting store.",
      "coordinates": [
        -73.55727,
        45.53010870000001 
      ]
  },
  {
      "title": "Blush & Raven",
      "image": "",
      "website": "https://www.blushandraven.com",
      "location": "1118 12 Ave SW #103, Calgary, AB T2R 0J5",
      "description": "Bridal boutique.",
      "coordinates": [
        -114.0874604,
        51.0422695 
      ]
  },
  {
      "title": "Brandon T. Brown Wilderness Gallery",
      "image": "",
      "website": "https://brandontbrown.com/",
      "location": "211 Bear St #108, Banff, AB T1W 3L3",
      "description": "Canadian Rockies wildlife photographer.",
      "coordinates": [
        -115.5729938,
        51.1772365 
      ]
  },
  {
      "title": "BBxCollection",
      "image": "",
      "website": "https://www.bbxcollection.com/",
      "location": "31 York St, Ottawa, ON K1N 5S7",
      "description": "What's in a tee? Everything.",
      "coordinates": [
        -75.6938732,
        45.4279946 
      ]
  },
  {
      "title": "KEYLIME Athletic Wear",
      "image": "",
      "website": "https://keylimeathleticwear.com/",
      "location": "2693 Broadmoor Blvd #100, Sherwood Park, AB T8H 0G1",
      "description": "Athletic wear for women, men, and teens of all shapes and sizes.",
      "coordinates": [
        -113.3183029,
        53.55916750000001 
      ]
  },
  {
      "title": "MNR Beauty Boutique",
      "image": "",
      "website": "http://www.mnrbeautyboutique.com/",
      "location": "323 McLeod Ave #201, Spruce Grove, AB T7X 0J6",
      "description": "Beauty, apparel, and accessories.",
      "coordinates": [
        -113.9009179,
        53.5428623 
      ]
  },
  {
      "title": "The SPORT Gallery",
      "image": "",
      "website": "https://thesportgallery.ca/",
      "location": "15 Tank House Lane, Toronto, ON M5A 3C4",
      "description": "Classic sports apparel and photography.",
      "coordinates": [
        -79.3588913,
        43.6504023 
      ]
  },
  {
      "title": "Source Organics",
      "image": "",
      "website": "https://sourceorganics.com/",
      "location": "34 Vaughan Rd, Toronto, ON M6G 2N3",
      "description": "Luxurious, non-toxic, organic, natural makeup and skincare.",
      "coordinates": [
        -79.41882079999999,
        43.68199569999999 
      ]
  },
  {
      "title": "Blumseed",
      "image": "",
      "website": "https://www.blumseed.com/",
      "location": "45 Wicksteed Ave #280, Toronto, ON M4H 4H9",
      "description": "Organic, chemically free hair care products.",
      "coordinates": [
        -79.3630118,
        43.7102781 
      ]
  },
  {
      "title": "Wychbury Ave Soap Shop",
      "image": "",
      "website": "https://www.wychburyave.com/",
      "location": "1011 Wychbury Ave, Victoria, BC V9A 5K7",
      "description": "Handmade soaps and body products.",
      "coordinates": [
        -123.4057757,
        48.4248558 
      ]
  },
  {
      "title": "Joyne Collective Marketplace",
      "image": "",
      "website": "https://joyne.ca/",
      "location": "249 2 Ave S, Saskatoon, SK S7K 1K8",
      "description": "Retail space for creative small businesses.",
      "coordinates": [
        -106.6656774,
        52.12630679999999 
      ]
  },
  {
      "title": "Cheekie Bath & Body",
      "image": "",
      "website": "http://www.cheekiebombs.com/",
      "location": "5P, S Plains Rd W, Emerald Park, SK S0G 3Z0",
      "description": "Your one stop shop for all things bath and body.",
      "coordinates": [
        -104.4181487,
        50.4463124 
      ]
  },
  {
      "title": "Solstice Supply and Design",
      "image": "",
      "website": "https://www.facebook.com/solsticesupplydesign/",
      "location": "616 Main St, Woodstock, NB E7M 2C4",
      "description": "A skate, snow & surf shop with apparel and accessories for men, women, and kids.",
      "coordinates": [
        -67.5734434,
        46.1495458 
      ]
  },
];

db.Vendor.deleteMany({})
  .then(() => db.Vendor.collection.insertMany(vendorData))
  .then(data => {
    console.log(data.result.n + ' records inserted!');
  })
  .catch(err => {
    console.error(err);
  });

  db.User.deleteMany({})
  .then(() => db.User.collection.insertMany(userData))
  .then(data => {
    console.log(data.result.n + ' records inserted!');
  })
  .catch(err => {
    console.error(err);
  });

  db.Shop.deleteMany({})
  .then(() => db.Shop.collection.insertMany(shopData))
  .then(data => {
    console.log(data.result.n + ' records inserted!');
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
  });