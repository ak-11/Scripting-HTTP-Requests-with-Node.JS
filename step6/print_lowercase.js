'use strict';

const getHTML = require('../step5/http-functions');

const requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

function printLowerCase(html) {
  console.log(html.toString("").toLowerCase());
}
getHTML(requestOptions, printLowerCase);