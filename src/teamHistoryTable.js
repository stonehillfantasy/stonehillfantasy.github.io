class TableCreator {
  constructor(table, data) {
    this.table = table;
    this.teams = teamHistory;

    this.createTable();
  }

  createTable() {
    this.createTableRows();
    this.createTableHead();
  }

  createTableHead() {
    const tableHead = this.table.createTHead();
    const headerRow = tableHead.insertRow();
    const keys = Object.keys(this.teams[0]);
    console.log(keys);
    keys.forEach((key) => {
      const headerCell = document.createElement('th');
      const headerText = document.createTextNode(key);
      headerCell.appendChild(headerText);
      headerRow.appendChild(headerCell);
    });
  }

  createTableRows(table) {
    this.teams.forEach((team) => {
      const row = this.table.insertRow();
      Object.keys(team).forEach((key) => {
        const stat = team[key];
        const cell = row.insertCell();
        const cellText = document.createTextNode(stat);
        cell.appendChild(cellText);
      });
    });
  }
}

// We want to wait for the window to load first so that we can access the table element
window.addEventListener('load', () => {
  // This will get the neede table from the HTML document, there should only ever be one
  const table = document.getElementsByClassName('pure-table pure-table-horizontal')[0];
  const tableCreator = new TableCreator(table, teamHistory);
});
