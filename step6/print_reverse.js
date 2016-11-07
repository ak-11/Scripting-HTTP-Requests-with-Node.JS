'use strict';

const getHTML = require('../step5/http-functions');

const requestOptions = {
  host: 'sytantris.github.io',
  path: 'http-examples/step6/reverse.html'
};

function printHTML(html) {
  console.log(html.toString("").split("").reverse().join(""));
}
getHTML(requestOptions, printHTML);