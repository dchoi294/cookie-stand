'use strict';

let locations = document.getElementById('branchLocation');

let sect = document.createElement('section');

locations.appendChild(sect);

//ul
let ul = document.createElement('ul');
sect.appendChild('ul');

//h2
let locationsName = document.createElement('h2');
locationsName.textContent = 'Seattle';
sect.appendChild(locationsName);

//p
let p = document.createElement('p');
p.textContent = '';
sect.appendChild(p);

// //img
// let img = document.createElement('img');
// img.src ='';
// img.alt ='';
// sect.appendChild(img);

let hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

let seattle = {
  name:'Seattle',
  min: 23,
  max: 65,
  avg: 6.3,
  dailyTotal: 0,
  cookiesSoldEachHours: [],
  getRandomCustomers: function() {
    return Math.floor(Math.random()*(this.max-this.min+1)+this.min);
  },
  render: function() {
    for(let i = 0; i < hours.length; i++) {
      let li = document.createElement('li');
      this.cookiesSoldEachHours.push(Math.floor(6.3 * this.getRandomCustomers));
      console.log(this.cookiesSoldEachHours[i]);
      li.textContent = `${hours[i]}: ${this.cookiesSoldEachHours[i]} cookies`;
      // console.log(li.textContent);
      ul.appendChild(li);
    }
  }
};
console.log('hi');
console.log(seattle.render());
