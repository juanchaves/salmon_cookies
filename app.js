'use strict';

var clockHour = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];

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
  }
}

alki.randCustPerHour();

alki.custPerHour;

alki.calcCookiesSoldPerHour();

alki.cookiesSoldPerHour;
