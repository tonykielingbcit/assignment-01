/*
 * File: c:\Users\jsolomon11\JBS\Courses\SSD\Intake28\Node\Assignments\Solutions\Node-A01-GitToNodeYou\SSD28-A01-GitToNodeYou\index.js
 * Created Date: Friday, October 28th 2022, 11:56:34 am
 * Author: Josh Solomon
 * Copyright (c) 2022 Josh Solomon
 */

// Set strict mode
"use strict";
const http = require("http");

//extracomment
// * Load the core HTTP module so that we can create a server

// * Load the file helper functions with object destructuring from utils
const { loadProfile, loadStatic } = require("./utils/fileHelper.js");

// hostname and port are needed in order for the http server to listen for requests
// * declare variables for these using 127.0.0.1 for hostname
const hostname = "127.0.0.1";
const port = process.env.PORT || 3000;
// * process.env.PORT will be defined by some hosts.  If undefined, use 3000.


// Initialize our server
const server = http.createServer((req, res) => {
  // branch based on the URL of the request
  switch (req.url) {
    // Home page
    // * Add a case that responds to / which sends "Hello Node Server" with a 200
    case "/":
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html");
      res.end("<h1 style='color: green; text-align: center; margin-top: 3rem; border: 2px solid orange; padding: 2rem 0'>Hello Node Server</h1>");
      break;

    // Profiles Listing Page
    // * Add a case that responds to /profiles which sends "Profiles List" with a 200
    case "/profiles":
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html");
      res.end("<h1 style='color: blue; text-align: center; margin-top: 3rem'>Profiles List</h1>");
      break;

    //   Individual Profile
    case "/profiles/byul":
      console.log("Byul is here.  Loading profile...");
      loadProfile(req, res);
      break;

    case "/profiles/ginni":
      console.log("Ginni is here.  Loading profile...");
      loadProfile(req, res);
      break;

    case "/profiles/stephanie":
      console.log("Stephanie is here.  Loading profile...");
      loadProfile(req, res);
      break;

    case "/profiles/tony":
      console.log("Tony is here.  Loading profile...");
      loadProfile(req, res);
      break;

    /* Add in a cases pointing at your personal profiles below */

    //   Unhandled URL
    default:
      // Handle static requests
      const validStaticTypes = ["images", "styles", "scripts"];
      const pathSegments = req.url.split("/");
      if (validStaticTypes.includes(pathSegments[3])) {
        loadStatic(req, res);
      } else {
          res.statusCode = 404;
          res.setHeader("Content-Type", "text/html");
          res.end("<h1 style='color: red; text-align: center; margin-top: 3rem'>Sorry, File not found..</h1>");
          break;
        // * set statusCode to 404
        // * use res.setHeader to specify "Content-Type", "text/html"
        // * send "File not found"
      }
  }
});

// * Set the HTTP server to listen on port, hostname as declared above
// * Within the callback console.log  `Server running at http://${hostname}:${port}/`


server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});