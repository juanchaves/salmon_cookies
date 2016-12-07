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
  this.totalCookiesSoldPerDay = [],
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
  this.calctotalCookiesPerDay = function (){
    var sumCookiesPerDay = this.cookiesSoldPerHour.reduce(function (a,b) {
      return a + b;
    }, 0);
    this.totalCookiesSoldPerDay.push(sumCookiesPerDay);
  },
  this.makeDataRow = function() {
    var trEl = document.createElement('tr');
    var tdEl = document.createElement('td');
    tdEl.textContent = this.locationName;
    trEl.appendChild(tdEl);

    for (var i = 0; i < hours.length; i++) {
      tdEl =  document.createElement('td');
      tdEl.textContent = this.cookiesSoldPerHour[i];
      trEl.appendChild(tdEl);
    }

    tdEl = document.createElement('td');
    tdEl.textContent = this.totalCookiesSoldPerDay;
    trEl.appendChild(tdEl);

    storeTable.appendChild(trEl);


  },

    this.randCustPerHour();
    this.calcCookiesSoldPerHour();
    this.calctotalCookiesPerDay();

    console.log(this.totalCookiesSoldPerDay);
}
//
new Store('1st and Pike', 23, 65, 6.3);
new Store('Alki', 2, 16, 4.6);
new Store('Capitol Hill', 20, 38, 2.3);
new Store('SeaTac Airport',3, 24, 1.2);
new Store('Seattle Center',11, 38, 3.7);



function makeHeaderRow() {
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = ' ';
  trEl.appendChild(thEl);

  for (var i = 0; i < hours.length; i++){
    thEl = document.createElement('th');
    thEl.textContent = hours[i];
    trEl.appendChild(thEl);
  }
  thEl = document.createElement('th');
  thEl.textContent = 'Daily Location Total';
  trEl.appendChild(thEl);

  storeTable.appendChild(trEl);
}

///////////////////////////////////////////////////Call Functions
//Calls Header Row
makeHeaderRow();
//Calls Location (row) name and Cookie Sales
for (var i = 0; i < allStores.length; i++) {
  allStores[i].makeDataRow();
}
