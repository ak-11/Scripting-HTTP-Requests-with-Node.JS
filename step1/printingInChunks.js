'use strict';
const https = require("https");

function getAndPrintHTMLChunks () {

  let requestOptions = {
    host: "sytantris.github.io",
    path: "/http-examples/step1.html"
  };

  https.get(requestOptions, function (response)  {

    response.setEncoding("utf8");

    response.on("data", function (data) {
      console.log("Data Received: ", data + "\n");
    });

    response.on("end", function() {
      console.log("Response stream complete.");
    });

  });
};
/* Add your code here */

getAndPrintHTMLChunks();