'use strict';
const https = require("https");

module.exports = function getHTML (options, callback) {

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
    /* Your code here */
};

