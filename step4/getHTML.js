'use strict';
const https = require("https");

function getHTML (options, callback) {

  https.get(options, function (response) {

    response.setEncoding("utf8");

    let dataArr = [];

    response.on("data", function (data) {
      dataArr.push(data);
      console.log("This is the buffered data array: ", dataArr.join(""));

    });

    response.on("end", function() {
      callback(dataArr);
      // console.log("Response stream complete.");
    });

  });

};

function printHTML(html) {
  console.log(html);
}

let requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML);