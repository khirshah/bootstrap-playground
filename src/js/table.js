export default function table() {
  
  const tableContainer = document.createElement('div');
  tableContainer.classList.add('col-md-4');
  
  const tableTitle = document.createElement('h4');
  tableTitle.classList.add('text-center');
  tableTitle.innerHTML = 'Table';

  const table = document.createElement('table');
  table.classList.add('table');
  table.classList.add('table-dark');


  for (let i = 0; i < 5; ++i) {
    const row = document.createElement('tr');
    for (let j = 0; j < 3; ++j) {
      const col = document.createElement('td');
      col.innerHTML='sometext';
      row.appendChild(col);
    }
    table.appendChild(row);
  }

  tableContainer.appendChild(tableTitle);
  tableContainer.appendChild(table);
  return tableContainer;
};