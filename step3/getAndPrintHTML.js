'use strict';
const https = require("https");

function getAndPrintHTML (options) {

  https.get("https://" + options.host + options.path, function (response) {

    response.setEncoding("utf8");

    let dataArr = [];

    response.on("data", function (data) {
      dataArr.push(data);
      console.log("This is the buffered data array: ", dataArr.join(""));

    });

    response.on("end", function() {
      console.log("Response stream complete.");
    });

  });

};


let requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);


// function getAndPrintHTML () {

//   let requestOptions = {
//     host: "sytantris.github.io",
//     path: "/http-examples/step2.html"
//   };

//   https.get(requestOptions, function (response)  {

//     response.setEncoding("utf8");

//     let dataArr = [];

//     response.on("data", function (data) {
// c      console.log("This is the buffered data array: ", dataArr.join(""));
//     });

//     response.on("end", function() {
//       console.log("Response stream complete.");
//     });

//   });
// };
// /* Add your code here */

// getAndPrintHTML();