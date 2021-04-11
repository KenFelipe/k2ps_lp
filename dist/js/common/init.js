"use strict";

/////////// init table and rangeBar ///////////
var DATA = [];
fetch('./config/data.json').then(function (resp) {
  return resp.text();
}).then(function (text) {
  return JSON.parse(text);
}).then(function (data) {
  DATA = data;
  initTableAndRB();
})["catch"](function (error) {
  return console.log('Error:', error);
}); /////////// init iframe ///////////

fetch('./config/video_url.json').then(function (resp) {
  return resp.text();
}).then(function (text) {
  return JSON.parse(text);
}).then(function (data) {
  initIframe(data.url);
})["catch"](function (error) {
  return console.log('Error:', error);
}); /////////// init links ///////////

fetch('./config/links.json').then(function (resp) {
  return resp.text();
}).then(function (text) {
  return JSON.parse(text);
}).then(function (data) {
  setLogoLinks(data);
  setLinks(data);
})["catch"](function (error) {
  return console.log('Error:', error);
}); /////////// init contact ///////////

fetch('./config/contact.json').then(function (resp) {
  return resp.text();
}).then(function (text) {
  return JSON.parse(text);
}).then(function (data) {
  setContact(data);
})["catch"](function (error) {
  return console.log('Error:', error);
}); /////////// init card ///////////

fetch('./config/prices_card.json').then(function (resp) {
  return resp.text();
}).then(function (text) {
  return JSON.parse(text);
}).then(function (data) {
  initCarousel(data);
})["catch"](function (error) {
  return console.log('Error:', error);
});