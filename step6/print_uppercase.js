'use strict';

const getHTML = require('../step5/http-functions');

const requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

// function printHTML(html) {
//   console.log(html);
// }

function printUpperCase (html) {
  console.log(html.toString("").toUpperCase());
  /* Write your code here! */

}

getHTML(requestOptions, printUpperCase);
