const tableInfo = {
  tableHeader: ["Student Name", "Age", "Phone", "Address"],
  tableContent: [
    {
      "Student Name": "John",
      Age: 19,
      Phone: "455 - 983 - 0903",
      Address: "123 Ave, San Francisco, CA, 94011",
    },
    {
      "Student Name": "Alex",
      Age: 21,
      Phone: "455 - 983 - 0912",
      Address: "456 Rd, San Francisco, CA, 94012",
    },
    {
      "Student Name": "Josh",
      Age: 22,
      Phone: "455 - 345 - 0912",
      Address: "789 Dr, Newark, CA, 94016",
    },
    {
      "Student Name": "Matt",
      Age: 23,
      Phone: "321 - 345 - 0912",
      Address: "223 Dr, Sunnyvale, CA, 94016",
    },
  ],
};

//===================================================================

const tableDiv = document.querySelector("div.table01");
// remove data from table div if any
while (tableDiv.firstChild) tableDiv.removeChild(tableDiv.firstChild);

// create table
let mainTable = document.createElement("table");
mainTable.className = "mainTable";

// create header thead
let tableHead = document.createElement("thead");
tableHead.className = "tableHead";

// create header row
let tableHeaderRow = document.createElement("tr");
tableHeaderRow.className = "tableHeaderRow";

// create header elements inside header row
tableInfo.tableHeader.forEach((header) => {
  let tableHeader = document.createElement("th");
  tableHeader.innerText = header;
  tableHeaderRow.append(tableHeader);
});

// append table header row to the table head
tableHead.append(tableHeaderRow);

// append table head to table
mainTable.append(tableHead);

// create table body group
let tableBody = document.createElement("tbody");
tableBody.className = "tableBody";

// create table rows
tableInfo.tableContent.forEach((element) => {
  let tableRow = document.createElement("tr");
  tableRow.className = "tableRow";
  let studentName = document.createElement("td");
  studentName.innerText = element["Student Name"];
  let age = document.createElement("td");
  age.innerText = element.Age;
  let phoneNum = document.createElement("td");
  phoneNum.innerText = element.Phone;
  let address = document.createElement("td");
  address.innerText = element.Address;
  tableRow.append(studentName, age, phoneNum, address);
  tableBody.append(tableRow);
});

// append table body group to the table
mainTable.append(tableBody);

// append the table to the table div
tableDiv.append(mainTable);
