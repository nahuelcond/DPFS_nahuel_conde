const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../data/products.json');

function getData() {
    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data);
}

const Product = {
    findAll() {
        return getData();
    },
    findById(id) {
        const products = getData();
        return products.find(product => product.id === Number(id));
    }
}

module.exports = Product;