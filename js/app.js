'use strict';

let seattle= document.getElementById('seattle');

let openHours = 13;
let hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

let seattleSale = {
  name:'Seattle',
  soldCookies: [16,20,35,48,56,77,93,144,119,84,61,23,42,57],
  min: 23,
  max: 65,
  avg: 6.3,
  dailyTotal: 0,
  cookiesSoldEachHours: [],
  getRandomCustomers: function() {
    return Math.floor(Math.random()*(this.max-this.min+1)+this.min);
  }
}
