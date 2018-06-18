# ShareBnB

Share BnB is an web application to monetize and utilize front/backyard home assets which can be rented with a frictionless platform using the web app’s system of finding potential matches based on geographical proximity. By streamlining the process of viewing local neighborhood outdoor assets such as swimming pools, yard, BBQ, driveways, tennis courts etc. with a simple web application. This is an untapped resource for the host to rent his outdoor facilities which can be monetized when not in use. Similar to AirBnb of collaborative consumption and sharing app but for the outside the home instead of inside. Host offer experiences and use of outdoor facilities instead of accommodation to guests by using a variety of filters types, dates, location and price. Before booking users must provide a valid name, email address and contact information. 

*Video of functionality*:
https://drive.google.com/file/d/1kRAj1yJtZTh-GXiM524BVxrbLbzw0i2H/view

*ScreenShot*
<img src="https://cdn.discordapp.com/attachments/446103300069392385/458155705107742720/unknown.png">

* * *

## Prerequisites ##
* In terminal, npm init
* Configure the config.json file with your database details with your own mysql database
* Remove the git repository from this project with rm -rf .git
* Initialize your own git repo with git init
* Connect your local git repo to your remote git repo with git remote add origin your-github-repo-ssh-key-goes-here
* Configure the package.json with your own information
* Run the server with npm start or node server.js
* Navigate to localhost:3000

* * *

## Need to know ##
* The public folder contains all public assets such as client side javascript files, css, and images
* The routes folder contains all server side API and HTML route files
* The views folder contains all the handlebar files necessary for display

* * *

## Usage

1. Homescreen will provide two options; one for sign-up and one for sign-in <br><br>
<img src="https://cdn.discordapp.com/attachments/446103300069392385/458155705107742720/unknown.png" height="300px" width="600px"><br><br>
2. If user is not logged in, the nav bar will display home, sign-up, find-space, and log-in. If user is signed in, the nav bar will display member area, become a host, find-space, and log-out<br><br>
<img src="https://cdn.discordapp.com/attachments/446103300069392385/458157880210620418/unknown.png"><br><br>
<img src="https://cdn.discordapp.com/attachments/446103300069392385/458158158251294725/unknown.png"><br><br>
3. Sign-up, into sign-in, into member's area, then options provided for positive UX<br><br>
* Sign-Up <br><br>
<img src="https://cdn.discordapp.com/attachments/446103300069392385/458158876408283147/unknown.png" height="300px" width="600px"><br><br>
* Sign-In <br><br>
<img src="https://cdn.discordapp.com/attachments/446103300069392385/458159017777299456/unknown.png" height="300px" width="600px"><br><br>
* Member's Area <br><br>
<img src="https://cdn.discordapp.com/attachments/446103300069392385/458159154880577546/unknown.png" height="300px" width="600px"><br>
4. Becoming a host will generate an initial row upon image upload, submission will complete the row in the database via AJAX call<br><br>
<img src="https://cdn.discordapp.com/attachments/446103300069392385/458159547299659786/unknown.png" height="300px" width="600px"><br><br>
<img src="https://cdn.discordapp.com/attachments/446103300069392385/458159641906642945/unknown.png" height="300px" width="600px"><br><br>
<img src="https://cdn.discordapp.com/attachments/446103300069392385/458159865328828416/unknown.png" height="300px" width="600px"><br><br>
5. Find a space is available to non-signed in users as well as signed-in users. Filling out appropriate fields will make an AJAX call to populate the search area dynamically<br><br>
<img src="https://cdn.discordapp.com/attachments/446103300069392385/458161725078896661/unknown.png" height="300px" width="600px"><br>

* * *

## Technology

* Bootstrap v4.1.0 - [Bootstrap CDN](https://getbootstrap.com/docs/4.1/getting-started/introduction/)
* NodeJS v8.11.3 LTS - [NodeJS](https://nodejs.org/en/)
* JQuery v3.3.1 - [JQuery CDN](https://code.jquery.com/)
* MYSQL v8.0 - [MySQL Database](https://www.mysql.com/)
* Sequelize v4.37.10 - [Sequelize NPM](https://www.npmjs.com/package/sequelize)
* Express v4.16.3 - [Express NPM](https://www.npmjs.com/package/express)
* BCrypt v2.0.1 - [BCrypt NPM](https://www.npmjs.com/package/bcrypt)
* Passport v0.4.0 - [Passport NPM](https://www.npmjs.com/package/passport)
* Multer v1.3.0 - [Multer NPM](https://www.npmjs.com/package/multer)
* Body-Parser v1.18.3 - [Body-Parser NPM](https://www.npmjs.com/package/body-parser)
* Handlebars v4.0.11 - [HandlebarsJS Templating](https://handlebarsjs.com/installation.html)
* Bower v1.8.4 - [Bower NPM](https://bower.io/)
* DropzoneJS v5.2.0 - [DropzoneJS](http://www.dropzonejs.com/)
* Github - [Github](https://pages.github.com/)
* JawsDB - [JawsDB MySQL](https://elements.heroku.com/addons/jawsdb)
* Heroku - [Heroku](https://www.heroku.com/)

* * *

## Authors
* Mike White - Lead Developer
* Nicholas Chan - Developer
* Rishi Mehta - PM/Developer
* Elmalick Ndiaye - Researcher/Developer

* * *

## Acknowledgments
Our badass teacher and TA's