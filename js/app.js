'use strict';

let hours = ['6a.m.','7a.m.','8a.m.','9a.m.','10a.m.','11a.m.','12p.m.','1p.m.','2p.m.','3p.m.','4p.m.','5p.m.','6p.m.','7p.m.'];

let cookieStores = [];

function Locations(locationName, min, max, avg, details) {
  this.locationName = locationName;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.details = details;
  this.total = 0;
  this.cookiesSoldEachHours = [];
  cookieStores.push(this);
  this.renderTable();
  // this.imageUrl = 'images/' + imgName;
  console.log(cookieStores);
}

Locations.prototype.randNumCustomers = function () {
  return Math.floor(Math.random()*(this.max-this.min+1)+this.min);
};

Locations.prototype.calcHourlySales = function () {
  for(let i = 0; i < hours.length; i++) {
    let randNum = this.randNumCustomers();
    let cookieSoldThisHour = Math.ceil(this.avg * randNum);
    this.cookiesSoldEachHours.push(cookieSoldThisHour);
    this.total += cookieSoldThisHour;
  }
};

Locations.prototype.render = function() {
  //getting branches
  const branches = document.getElementById('branches');

  console.log(branches);
  //each branches are in a section
  const section = document.createElement('section');
  branches.appendChild(section);

  //Branch locations
  const locationsName = document.createElement('h2');
  locationsName.textContent = this.locationName;
  section.appendChild(locationsName);

  //ul
  const ul = document.createElement('ul');
  section.appendChild(ul);
  for(let i = 0; i < hours.length; i++) {
    const liNumb = document.createElement('li');
    ul.appendChild(liNumb);
    liNumb.textContent = `${hours[i]}: ${this.cookiesSoldEachHours[i]} cookies`;
  }

  //Paragraph
  const p = document.createElement('p');
  section.appendChild(p);
  p.textContent = `This is brief summary of ${this.locationName} branch.`;
  const p2 = document.createElement('p');
  p2.textContent = '';

  const summary = document.createElement('p');
  section.appendChild(summary);
  summary.textContent = this.details;

  // //img
  // const setImg = document.createElement('img');
  // section.appendChild(setImg);
//   setImg.setAttribute('src', this.imageUrl);
//   setImg.setAttribute('alt', 'picture of ' + this.name);
};
const tableTable = document.getElementById('tableTable');

Locations.prototype.renderTable = function() {
this.calcHourlySales();
  const dataHead = document.createElement('th');

  //Table starts
  const tableTable = document.getElementById('tableTable');

  //Data row
  const dataRow = document.createElement('tr');
  dataRow.appendChild(dataHead);
  tableTable.appendChild(dataRow);

  dataHead.textContent = this.locationName;

  for(let i = 0; i < this.cookiesSoldEachHours.length; i++) {
    const dataCells = document.createElement('td');
    dataRow.appendChild(dataCells);
    dataCells.textContent = this.cookiesSoldEachHours[i];
  }

  const totalToday = document.createElement('td');
  dataRow.appendChild(totalToday);
  totalToday.textContent = this.total;
};

function headerRow() {
  const tableHead = document.getElementById('tableHead');
  const headTop = document.createElement('th');
  const headRow = document.createElement('tr');
  headRow.appendChild(headTop);
  tableHead.appendChild(headRow);

  headTop.textContent = '';

  for(let i = 0; i < hours.length; i++) {
    const headCells = document.createElement('td');
    headRow.appendChild(headCells);
    headCells.textContent = hours[i];
  }
  const total = document.createElement('td');
  headRow.appendChild(total);
  total.textContent = 'Daily Location Total';
}

function footerRow() {
  const tableFooter = document.getElementById('tableFoot');
  const footerHead = document.createElement('th');
  const footerRow = document.createElement('tr');
  footerRow.appendChild(footerHead);
  tableFooter.appendChild(footerRow);

  footerRow.textContent = 'Totals';


  let sumBranches = 0;
  for(let i = 0; i < hours.length; i++) {
    let hourlyTotal = 0;
    for(let j = 0; j < cookieStores.length; j++){
      hourlyTotal += cookieStores[j].cookiesSoldEachHours[i];
      sumBranches += cookieStores[j].cookiesSoldEachHours[i];
    }

    const totalEachHours = document.createElement('td');
    footerRow.appendChild(totalEachHours);
    totalEachHours.textContent = hourlyTotal;
    hourlyTotal = 0;
  }

  const totalBranches = document.createElement('td');
  footerRow.appendChild(totalBranches);
  totalBranches.textContent = sumBranches;
}

// Event

// let newBranch = document.getElementById('newBranch');
let form = document.querySelector('form');

let addBranch = function(event) {
  event.preventDefault();

  let locationName = event.target.newBranchLocation.value;
  let min = parseInt(event.target.min.value);
  let max = parseInt(event.target.max.value);
  let avg = parseInt(event.target.avg.value);
  let details = event.target.details.value;

  //image addition
  // let imgURL = event.target.imgURL.value;
  // let imgALT = event.target.imgALT.value;

  let addBranch = new Locations(locationName, min, max, avg, details);
  document.getElementById('tableFoot').innerHTML = null;
  addBranch.render();
  footerRow();
};

// newBranch.addEventListener('submit', addBranch);

//name, min, max, avg, details, total, cookiesSoldEachHours, imgURL, imgALT
const seattle = new Locations('Seattle', 23, 65, 6.3,'');
const tokyo = new Locations('Tokyo', 3, 24, 1.2,'');
const dubai = new Locations('Dubai', 11, 38, 3.7,'');
const paris = new Locations('Paris', 20, 38, 2.3,'');
const lima = new Locations('Lima', 2, 16, 4.6,'');
form.addEventListener('submit', addBranch);

headerRow();
for (let i = 0; i < cookieStores.length; i++) {
  cookieStores[i].calcHourlySales();
  cookieStores[i].render();
}
footerRow();
