/*
    implement table with JavaScript in document HTML
  master: https://github.com/Eddie-CooRo/
author: "MrR00200R"  >> https://github.com/MrR00200R/
*/

import data from './data.json';

const root = document.getElementById('root');
const table = document.createElement('table');
table.setAttribute('id', 'asia-cup');

const tableFirstRow = document.createElement('tr');

const tableFirstRowFirstColumn = document.createElement('th');
tableFirstRowFirstColumn.appendChild(document.createTextNode('club'));
const tableFirstRowSecondColumn = document.createElement('th');
tableFirstRowSecondColumn.appendChild(document.createTextNode('MP'));
const tableFirstRowThirdColumn = document.createElement('th');
tableFirstRowThirdColumn.appendChild(document.createTextNode('W'));
const tableFirstRowFourthcolumn = document.createElement('th');
tableFirstRowFourthcolumn.appendChild(document.createTextNode('M'));
const tableFirstRowfifthColumn = document.createElement('th');
tableFirstRowfifthColumn.appendChild(document.createTextNode('L'));

tableFirstRow.appendChild(tableFirstRowFirstColumn);
tableFirstRow.appendChild(tableFirstRowSecondColumn);
tableFirstRow.appendChild(tableFirstRowThirdColumn);
tableFirstRow.appendChild(tableFirstRowFourthcolumn);
tableFirstRow.appendChild(tableFirstRowfifthColumn);

table.appendChild(tableFirstRow);

data.forEach(team => {
  const row = document.createElement('tr');
  const firstColumn = document.createElement('td');
  firstColumn.appendChild(document.createTextNode(team.name));
  const secondColumn = document.createElement('td');
  secondColumn.appendChild(document.createTextNode(team.games));
  const thirdColumn = document.createElement('td');
  thirdColumn.appendChild(document.createTextNode(team.wins));
  const forthColumn = document.createElement('td');
  forthColumn.appendChild(document.createTextNode(team.deals));
  const fifthColumn = document.createElement('td');
  fifthColumn.appendChild(document.createTextNode(team.loses));

  row.appendChild(firstColumn);
  row.appendChild(secondColumn);
  row.appendChild(thirdColumn);
  row.appendChild(forthColumn);
  row.appendChild(fifthColumn);
  table.appendChild(row);
});
root.appendChild(table);

/*
// first create table with JS:
const root = document.getElementById('root');
const table = document.createElement('table');
table.setAttribute('id', 'asia-cup');

const tableFirstRow = document.createElement('tr');

const tableFirstRowFirstColumn = document.createElement('th');
tableFirstRowFirstColumn.appendChild(document.createTextNode('Club'));

const tableFirstRowSecondColumn = document.createElement('th');
tableFirstRowSecondColumn.appendChild(document.createTextNode('MP'));

const tableFirstRowTherdColumn = document.createElement('th');
tableFirstRowTherdColumn.appendChild(document.createTextNode('W'));

const tableFirstRowForthColumn = document.createElement('th');
tableFirstRowForthColumn.appendChild(document.createTextNode('D'));

const tableFirstRowFifthColumn = document.createElement('th');
tableFirstRowFifthColumn.appendChild(document.createTextNode('L'));

tableFirstRow.appendChild(tableFirstRowFirstColumn);
tableFirstRow.appendChild(tableFirstRowSecondColumn);
tableFirstRow.appendChild(tableFirstRowTherdColumn);
tableFirstRow.appendChild(tableFirstRowForthColumn);
tableFirstRow.appendChild(tableFirstRowFifthColumn);

table.appendChild(tableFirstRow);
root.appendChild(table);
*/

/*
    implement table with JavaScript in document HTML
  master: https://github.com/Eddie-CooRo/
author: "MrR00200R"  >> https://github.com/MrR00200R/
*/
