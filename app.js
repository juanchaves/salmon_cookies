'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
// var storeParams [
//   ['1st and Pike', 23, 65, 6.3],
//   ['Alki', 2, 16, 4.6],
//   ['Capitol Hill', 20, 38, 2.3],
//   ['SeaTac Airport',3, 24, 1.2],
//   ['Seattle Center',11, 38, 3.7]
// ];
var allStores = [];
var storeTable = document.getElementById('tablejs');

new Store('1st and Pike', 23, 65, 6.3);

function Store(locationName, minCustPerHour, maxCustPerHour,avgCookiesPerCust) {
  this.locationName = locationName;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookiesPerCust = avgCookiesPerCust;
  this.custPerHour = [],
  this.cookiesSoldPerHour = [],
  allStores.push(this);
  this.randCustPerHour = function() {
    for (var i = 0; i < hours.length; i++) {
      var result = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
      this.custPerHour.push(Math.round(result))
    }
  },
  this.calcCookiesSoldPerHour = function() {
    for (var i = 0; i < hours.length; i++) {
      var result = Math.ceil(this.avgCookiesPerCust * this.custPerHour[i]);
      this.cookiesSoldPerHour.push(result);
    }
  },
  this.listCookiesPerHour = function() {
    var tableRow = document.getElementById('firstAndPike');
    for (var i = 0; i < hours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + ': ' + this.cookiesSoldPerHour[i] + ' cookies';
      tableRow.appendChild(liEl);
    }
  },
  this.sumCookiesPerDay = function (){
    var totalCookiesPerDay = this.cookiesSoldPerHour.reduce(function (a,b) {
      return a + b;
    }, 0);
    var listTotalCookies = document.getElementById('firstAndPike');
    var liEl = document.createElement('li');
    liEl.textContent = 'Daily Sold Cookies: ' + totalCookiesPerDay;
    listTotalCookies.appendChild(liEl);
  },
  this.initialize = function (){
    this.randCustPerHour();
    this.calcCookiesSoldPerHour();
    this.listCookiesPerHour();
    this.sumCookiesPerDay();
  }
}

firstAndPike.initialize();
