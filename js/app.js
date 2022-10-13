'use strict';

let hours = ['6a.m.','7a.m.','8a.m.','9a.m.','10a.m.','11a.m.','12p.m.','1p.m.','2p.m.','3p.m.','4p.m.','5p.m.','6p.m.','7p.m.'];

function Locations(locationName, min, max, avg) {
  this.locationName = locationName;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.total = 0;
  this.cookiesSoldEachHours = [];
  cookieStores.push(this);
  // this.imageUrl = 'images/' + imgName;
}

Locations.prototype.randNumCustomers = function () {
  return Math.floor(Math.random()*(this.max-this.min+1)+this.min);
};

Locations.prototype.calcHourlySales = function () {
  for(let i = 0; i < hours.length; i++) {
    let randNum = this.randNumCustomers();
    let cookieSoldThisHour = Math.ceil(this.avg * randNum);
    this.cookiesSoldEachHours.push(cookieSoldThisHour);
    this.total += this.cookiesSoldThisHour;
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
  p.textContent = `This is breif summary of ${this.locationName} branch.`;
  const p2 = document.createElement('p');
  p2.textContent = '';

  // //img
  // const setImg = document.createElement('img');
  // section.appendChild(setImg);
//   setImg.setAttribute('src', this.imageUrl);
//   setImg.setAttribute('alt', 'picture of ' + this.name);
};

Locations.prototype.renderTable = function() {
  //Table starts
  const tableTable = document.getElementById('tableTable');

  // const dataHead = document.createElement('th');
  // tableTable.appendChild(dataHead);

  //Data row
  const dataRow = document.createElement('tr');
  tableTable.appendChild(dataRow);

  dataRow.textContent = this.locationName;

  //Data cells
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

  //Header cells
  const headTop = document.createElement('tr');
  tableHead.appendChild(headTop);

  const headRow = document.createElement('th');
  headTop.appendChild(headRow);
  headRow.textContent = '';

  for(let i = 0; i < hours.length; i++) {
    const headCells = document.createElement('td');
    headTop.appendChild(headCells);
    headCells.textContent = hours[i];
    console.log(hours[i]);
  }
  const total = document.createElement('td');
  headTop.appendChild(total);
  total.textContent = 'Daily Location Total';
}

function footerRow() {
  const tableFooter = document.getElementById('tableFoot');

  const footerRow = document.createElement('tr');
  tableFooter.appendChild(footerRow);
  footerRow.textContent = 'Totals';

  let hourlyTotal = 0;
  let sumBranches = 0;

  for(let i = 0; i < hours.length; i++) {
    for(let j = 0; j < cookieStores.length; j++){
      hourlyTotal += cookieStores[j].hours[i];
    }
    console.log(hourlyTotal);
    for (let k = 0; k < hours.length; k++) {
      const totalEachHours = document.createElement('td');
      footerRow.appendChild(totalEachHours);
      totalEachHours.textContent = hourlyTotal;
      sumBranches += hourlyTotal;
    }
  }

  const totalBranches = document.createElement('td');
  totalBranches.textContent = sumBranches;
}
// const locationTable = document.querySelector('table');
// const tableBody = document.querySelector('table tbody');

// const tableHead = document.querySelector('table thead');
// const tableFooter = document.querySelector('table tfooter');

// Locations.prototype.renderTable = function() {
//   let tr = document.createElement('tr');
//   tableBody.appendChild(tr);
//   let tdName = document.createElement('td');
//   tdName.textContent = this.name;
//   tr.appendChild('tdName');
//   for(let i = 0; i < this.hours.length; i++) {
//     let td = document.createElement('td');
//     td.textContent = this.hours[i];
//     tr.appendChild(td);
//   }
// }
// this.renderTable();


let cookieStores = [];

//name, min, max, avg, total, cookiesSoldEachHours
const seattle = new Locations('Seattle', 23, 65, 6.3);
const tokyo = new Locations('Tokyo', 3, 24, 1.2);
const dubai = new Locations('Dubai', 11, 38, 3.7);
const paris = new Locations('Paris', 20, 38, 2.3);
const lima = new Locations('Lima', 2, 16, 4.6);

headerRow();
for (let i = 0; i < cookieStores.length; i++) {
  cookieStores[i].calcHourlySales();
  cookieStores[i].render();
  cookieStores[i].renderTable();
}
footerRow();
