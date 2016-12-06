'use strict';

var clockHour = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];

//1st and Pike Store Sales

var firstAndPike = {
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookiesPerCust: 6.3,
  custPerHour: [],
  cookiesSoldPerHour: [],
  randCustPerHour: function() {
    for (var i = 0; i < clockHour.length; i++) {
      var result = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
      this.custPerHour.push(Math.round(result))
    }
  },
  calcCookiesSoldPerHour: function() {
    for (var i = 0; i < clockHour.length; i++) {
      var result = Math.ceil(this.avgCookiesPerCust * this.custPerHour[i]);
      this.cookiesSoldPerHour.push(result);
    }
  },
  listCookiesPerHour: function() {
    var alkiList = document.getElementById('firstAndPike');
    for (var i = 0; i < clockHour.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = clockHour[i] + ': ' + this.cookiesSoldPerHour[i] + ' cookies';
      alkiList.appendChild(liEl);
    }
  },
  sumCookiesPerDay: function (){
    var totalCookiesPerDay = this.cookiesSoldPerHour.reduce(function (a,b) {
      return a + b;
    }, 0);
    var listTotalCookies = document.getElementById('firstAndPike');
    var liEl = document.createElement('li');
    liEl.textContent = 'Daily Sold Cookies: ' + totalCookiesPerDay;
    listTotalCookies.appendChild(liEl);
  },
  initialize: function (){
    this.randCustPerHour();
    this.calcCookiesSoldPerHour();
    this.listCookiesPerHour();
    this.sumCookiesPerDay();
  }
}

firstAndPike.initialize();

//Alki Store Sales

var alki = {
  minCustPerHour: 2,
  maxCustPerHour: 16,
  avgCookiesPerCust: 4.6,
  custPerHour: [],
  cookiesSoldPerHour: [],
  randCustPerHour: function() {
    for (var i = 0; i < clockHour.length; i++) {
      var result = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
      this.custPerHour.push(Math.round(result))
    }
  },
  calcCookiesSoldPerHour: function() {
    for (var i = 0; i < clockHour.length; i++) {
      var result = Math.ceil(this.avgCookiesPerCust * this.custPerHour[i]);
      this.cookiesSoldPerHour.push(result);
    }
  },
  listCookiesPerHour: function() {
    var alkiList = document.getElementById('alki');
    for (var i = 0; i < clockHour.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = clockHour[i] + ': ' + this.cookiesSoldPerHour[i] + ' cookies';
      alkiList.appendChild(liEl);
    }
  },
  sumCookiesPerDay: function (){
    var totalCookiesPerDay = this.cookiesSoldPerHour.reduce(function (a,b) {
      return a + b;
    }, 0);
    var listTotalCookies = document.getElementById('alki');
    var liEl = document.createElement('li');
    liEl.textContent = 'Daily Sold Cookies: ' + totalCookiesPerDay;
    listTotalCookies.appendChild(liEl);
  },
  initialize: function (){
    this.randCustPerHour();
    this.calcCookiesSoldPerHour();
    this.listCookiesPerHour();
    this.sumCookiesPerDay();
  }
}

alki.initialize();

//Capitol Hill Store Sales

var capitolHill = {
  minCustPerHour: 2,
  maxCustPerHour: 16,
  avgCookiesPerCust: 4.6,
  custPerHour: [],
  cookiesSoldPerHour: [],
  randCustPerHour: function() {
    for (var i = 0; i < clockHour.length; i++) {
      var result = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
      this.custPerHour.push(Math.round(result))
    }
  },
  calcCookiesSoldPerHour: function() {
    for (var i = 0; i < clockHour.length; i++) {
      var result = Math.ceil(this.avgCookiesPerCust * this.custPerHour[i]);
      this.cookiesSoldPerHour.push(result);
    }
  },
  listCookiesPerHour: function() {
    var alkiList = document.getElementById('capitolHill');
    for (var i = 0; i < clockHour.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = clockHour[i] + ': ' + this.cookiesSoldPerHour[i] + ' cookies';
      alkiList.appendChild(liEl);
    }
  },
  sumCookiesPerDay: function (){
    var totalCookiesPerDay = this.cookiesSoldPerHour.reduce(function (a,b) {
      return a + b;
    }, 0);
    var listTotalCookies = document.getElementById('capitolHill');
    var liEl = document.createElement('li');
    liEl.textContent = 'Daily Sold Cookies: ' + totalCookiesPerDay;
    listTotalCookies.appendChild(liEl);
  },
  initialize: function (){
    this.randCustPerHour();
    this.calcCookiesSoldPerHour();
    this.listCookiesPerHour();
    this.sumCookiesPerDay();
  }
}

capitolHill.initialize();

//SeaTac Airport Store Sales

var seaTac = {
  minCustPerHour: 2,
  maxCustPerHour: 16,
  avgCookiesPerCust: 4.6,
  custPerHour: [],
  cookiesSoldPerHour: [],
  randCustPerHour: function() {
    for (var i = 0; i < clockHour.length; i++) {
      var result = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
      this.custPerHour.push(Math.round(result))
    }
  },
  calcCookiesSoldPerHour: function() {
    for (var i = 0; i < clockHour.length; i++) {
      var result = Math.ceil(this.avgCookiesPerCust * this.custPerHour[i]);
      this.cookiesSoldPerHour.push(result);
    }
  },
  listCookiesPerHour: function() {
    var alkiList = document.getElementById('seaTac');
    for (var i = 0; i < clockHour.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = clockHour[i] + ': ' + this.cookiesSoldPerHour[i] + ' cookies';
      alkiList.appendChild(liEl);
    }
  },
  sumCookiesPerDay: function (){
    var totalCookiesPerDay = this.cookiesSoldPerHour.reduce(function (a,b) {
      return a + b;
    }, 0);
    var listTotalCookies = document.getElementById('seaTac');
    var liEl = document.createElement('li');
    liEl.textContent = 'Daily Sold Cookies: ' + totalCookiesPerDay;
    listTotalCookies.appendChild(liEl);
  },
  initialize: function (){
    this.randCustPerHour();
    this.calcCookiesSoldPerHour();
    this.listCookiesPerHour();
    this.sumCookiesPerDay();
  }
}

seaTac.initialize();

//Seattle Center Store Sales

var seaCenter = {
  minCustPerHour: 2,
  maxCustPerHour: 16,
  avgCookiesPerCust: 4.6,
  custPerHour: [],
  cookiesSoldPerHour: [],
  randCustPerHour: function() {
    for (var i = 0; i < clockHour.length; i++) {
      var result = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
      this.custPerHour.push(Math.round(result))
    }
  },
  calcCookiesSoldPerHour: function() {
    for (var i = 0; i < clockHour.length; i++) {
      var result = Math.ceil(this.avgCookiesPerCust * this.custPerHour[i]);
      this.cookiesSoldPerHour.push(result);
    }
  },
  listCookiesPerHour: function() {
    var alkiList = document.getElementById('seaCenter');
    for (var i = 0; i < clockHour.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = clockHour[i] + ': ' + this.cookiesSoldPerHour[i] + ' cookies';
      alkiList.appendChild(liEl);
    }
  },
  sumCookiesPerDay: function (){
    var totalCookiesPerDay = this.cookiesSoldPerHour.reduce(function (a,b) {
      return a + b;
    }, 0);
    var listTotalCookies = document.getElementById('seaCenter');
    var liEl = document.createElement('li');
    liEl.textContent = 'Daily Sold Cookies: ' + totalCookiesPerDay;
    listTotalCookies.appendChild(liEl);
  },
  initialize: function (){
    this.randCustPerHour();
    this.calcCookiesSoldPerHour();
    this.listCookiesPerHour();
    this.sumCookiesPerDay();
  }
}

seaCenter.initialize();
