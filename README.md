# Loco for Local: A Local Vendor Locator

## Description
Buying locally has become increasingly popular over the years. Whether you live in the area or are travelling looking for that unique stop Local vendors and Artists have proven to be a trendy and environmentally conscience choice. This gives people the chance to get out and explore and provide support to small businesses. 

This is a MERN stack single-page REACT app that uses NoSQL databases and a mobile first design.
___

## Talbe of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Links](#links)
* [Credits](#credits)
* [License](#license)
* [User Story](#user-story)
* [Future Development](#future-development)
* [Questions](#questions)
___

## Installation
Clone the repository from GitHub to your local machine. In the command line type `npm install` to install the dependencies and `npm run develop` from the root of the project to run the server. You will also need to run `npm install` in both the server and client folders to ensure all dependencies are installed.
___

## Usage
This application will allow users to search for local vendors while travelling across Canada. As a logged in user, they will be able to save vendors to their favourites as well as rate the vendors. Businesses will also have the option of signing up to have their local business be incorporated in our database.
![screenshot](./client/src/assets/lfl_ss.png)
___

## Links
* [Deployed Application](https://loco-for-local.herokuapp.com/)
* [Presentation](https://www.canva.com/design/DAEqq49vFTA/mEBCSneNNd5gB-_nCGi9wg/view?utm_content=DAEqq49vFTA&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton)
___

## Credits
* Completed by: [Nell-GitHub](https://github.com/ShannonNell)
* Completed by: [Hadad-GitHub](https://github.com/saidHadad)
* Completed by: [Azz-GitHub](https://github.com/sylviamarja)
___

## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[MIT License](https://choosealicense.com/licenses/mit/)    
___

## User Story
```
AS a travel enthusiast and lover of locally made products
I WANT to have an easy way to find and access local vendors/activities
SO THAT I can support the local places in the communities I travel to

```

### Criteria: 
```
GIVEN a local vendors application
WHEN I view the homepage
THEN a page loads with a map [of the world, of my current location] prepopulated with local vendors 
WHEN I click the filter button
THEN I am able to choose to filter the local vendors by [farmers markets, festivals, location] to get more specific results

WHEN I click on one of the vendors icons
THEN I am [taken to a new page, a modal appears] where I can view information specific about the vendor such as vendor name,  image, website link, reviews, and hours of operation, [prices of product]

WHEN I click sign up
THEN I am taken to a page to sign up for the website
WHEN I click login
THEN I am taken to my dashboard which will show [my info → Name, image, location, bio | my vendors → favourites, on map or list format, as well as my reviews (star rating)] 

WHEN I am logged in
THEN I can save vendors to my favourites list as well as add my own rating [and comments on my thoughts about the vendor]
WHEN  I click on my vendors
THEN I can view the vendor’s information as well as update my review or delete the vendor from my list

WHEN I click on [add a vendor]
THEN I am taken to a new page where, as a local business, I can add my local business to the database

[WHEN I click the donation link
THEN I am taken to a page where I can choose a local charity to donate to]
```
___

## Future Development: 
* Stripe capabilities for donations to a local vendor
* Filter vendors by type (farmers markets, shops, restaurants, etc)
* Ability to rate saved vendors
* Worldwide  vendors
* Ability to 'find vendor on map' straight from dashboard
___

## Questions: 
If you have any questions or comments about the app, please reach out to us on GitHub or send us an [email](mailto:uoftgroup4@gmail.com).
