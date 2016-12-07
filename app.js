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
    storeTable = document.getElementById('tablejs');
    var trEl = document.createElement('tr');
    for (var i = 0; i < hours.length; i++) {

      var tdEl = document.createElement('td');
      tdEl.textContent = this.cookiesSoldPerHour[i];
      trEl.appendChild(tdEl);
      storeTable.appendChild(trEl)
    }
  },
  this.sumCookiesPerDay = function (){
    var totalCookiesPerDay = this.cookiesSoldPerHour.reduce(function (a,b) {
      return a + b;
    }, 0);
    storeTable = document.getElementById('tablejs');
    var trEl = document.createElement('tr');
    var tdEl = document.createElement('td');
    tdEl.textContent = totalCookiesPerDay;
    storeTable.appendChild(trEl);
  },
  this.initialize = function (){
    this.randCustPerHour();
    this.calcCookiesSoldPerHour();
    this.listCookiesPerHour();
    this.sumCookiesPerDay();
  }
  this.initialize();
}

new Store('1st and Pike', 23, 65, 6.3);
new Store('Alki', 2, 16, 4.6);
