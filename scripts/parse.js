const fs = require('fs');

let allItems = []
const csvFile = fs.readFileSync('../data/raw/education.csv', 'utf-8');

const csvRows = csvFile.split("\n");

csvRows.forEach(createReportItem);

function createReportItem(csvRow) {
    const keyValue = csvRow.split(",");
    // make sure to only have a key and value
    if (keyValue.length === 2) {
        const reportItem = { label: keyValue[0], value: keyValue[1] };
        allItems.push(reportItem);
    }
}

// Serialize and save
const reportJSON = JSON.stringify(allItems)
fs.writeFileSync('../data/processed/education.json', reportJSON)