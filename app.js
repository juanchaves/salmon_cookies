'use strict';

//////GLOBAL VARIABES & ARRAYS

var storeInput = document.getElementById('storeInput');
var storeTable = document.getElementById('tablejs');
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
// var storeParams [
//   ['1st and Pike', 23, 65, 6.3],
//   ['Alki', 2, 16, 4.6],
//   ['Capitol Hill', 20, 38, 2.3],
//   ['SeaTac Airport',3, 24, 1.2],
//   ['Seattle Center',11, 38, 3.7]
// ];
var allStores = [];

//Constructors

////Table Data Constructor
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
      tdEl = document.createElement('td');
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
}

//STRETCH GOAL
// Comment.prototype.render = function() {
//   var liEl = document.createElement('li');
//   liEl.innerHTML = '<img width="100px" src="img/' + this.userName + '.jpg"> <b>' + this.userName + ': </b><em>' + this.text + '</em>';
//   return liEl;
// };

new Store('1st and Pike', 23, 65, 6.3);
new Store('Alki', 2, 16, 4.6);
new Store('Capitol Hill', 20, 38, 2.3);
new Store('SeaTac Airport',3, 24, 1.2);
new Store('Seattle Center',11, 38, 3.7);

////////GLOBAL FUNCTIONS

function makeHeaderRow() {
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  trEl = document.createElement('tr');
  thEl.textContent = 'Hours of Operation';
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

function makeLocationNameHeaderRow() {
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = 'Location Name';
  trEl.appendChild(thEl);
  storeTable.appendChild(trEl);
}


function handleAddModifyStoreDataSubmit(event) {

// console.log('log of the event object', event);
// console.log('log of the event.target', event.target);
// console.log('log of the event.target.NAME1', event.target.NAME1);
// console.log('log of the event.target.NAME1.value', event.target.NAME1.value);
// console.log('log of the event.target.NAME2', event.target.NAME2);
// console.log('log of the event.target.NAME2.value', event.target.NAME2.value);

  event.preventDefault();

  //Store Name User Input
  if (event.target.locationNameInput) {

  }

  var newStore =

}


///////////////////////////////////////////////////Call Functions
//Calls Header Row (Hours of Operation)
makeHeaderRow();
//Calls Location (row) name and Cookie Sales
makeLocationNameHeaderRow();
//Calls Location (row) name and Cookie Sales
for (var i = 0; i < allStores.length; i++) {
  allStores[i].makeDataRow();
}
