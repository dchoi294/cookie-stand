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

// Locations.prototype.renderList() {
//   this.calcHourlySales();
//     for(let i = 0; i < hours.length; i++) {
//       let listItem = document.createElement('li');
//       listItem.textContent = `${hours[i]}: ${this.cookiesSoldEachHours[i]} cookies`;
//       branches.appendChild(listItem);
//     }
//     let totalLi = document.createElement('li');
//     totalLi.textContent = `Total ${this.dailyTotal}`;
//     branches.appendChild(totalLi);
//   }

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

  //Table starts
  const tableTable = document.createElement('table');
  section.appendChild(tableTable);

  //Header row
  const headerRow = document.createElement('tr');
  tableTable.appendChild(headerRow);

  //Header cells
  const seattleCell = document.createElement('th');
  headerRow.appendChild(seattleCell);
  seattleCell.textContent = 'Seattle';

  const tokyoCell = document.createElement('th');
  headerRow.appendChild(tokyoCell);
  tokyoCell.textContent = 'Tokyo';

  const dubaiCell = document.createElement('th');
  headerRow.appendChild(dubaiCell);
  dubaiCell.textContent = 'Dubai';

  const parisCell = document.createElement('th');
  headerRow.appendChild(parisCell);
  parisCell.textContent = 'Paris';

  const limaCell = document.createElement('th');
  headerRow.appendChild(limaCell);
  limaCell.textContent = 'Lima';

  //Data row
  const dataRow = document.createElement('tr');
  tableTable.appendChild(dataRow);

  //Data cells
  const seattleCells = document.createElement('td');
  dataRow.appendChild(seattleCells);
  seattleCells.textContent = this.calcHourlySales();

  const tokyoCells = document.createElement('td');
  dataRow.appendChild(tokyoCells);
  tokyoCells.textContent = this.calcHourlySales();

  const dubaiCells = document.createElement('td');
  dataRow.appendChild(dubaiCells);
  dubaiCells.textContent = this.calcHourlySales();

  const parisCells = document.createElement('td');
  dataRow.appendChild(parisCells);
  parisCells.textContent = this.calcHourlySales();

  const limaCells = document.createElement('td');
  dataRow.appendChild(limaCells);
  limaCells.textContent = this.calcHourlySales();

  // //img
  // const setImg = document.createElement('img');
  // section.appendChild(setImg);
//   setImg.setAttribute('src', this.imageUrl);
//   setImg.setAttribute('alt', 'picture of ' + this.name);
};

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

for (let i = 0; i < cookieStores.length; i++) {
  cookieStores[i].calcHourlySales();
  cookieStores[i].render();
}
console.log(cookieStores);
