const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../data/categories.json');

function getData() {
    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data);
}

const Category = {
    findAll: () => {
        return getData();
    }
}

module.exports = Category;
