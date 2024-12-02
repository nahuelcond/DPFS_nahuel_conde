
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
    },
    findByCategory(category) {
        const products = getData();
        const productsMen = [];
        products.forEach(item => {
            if (item.category === category) {
                productsMen.push(item)
            }
        })

        return productsMen;
    },
    create(data) {
        const products = getData();
        const newProduct = {
            id: products[products.length - 1].id + 1,
            name: data.name,
            description: data.description,
            image: data.image,
            category: data.category,
            colour: data.colour,
            price: data.price

        };
        products.push(newProduct);
        fs.writeFileSync(filePath, JSON.stringify(products, null, 2));
        return newProduct
    },
    update: (id, data) => {
        const products = getData();
        const index = products.findIndex(product => product.id === Number(id));
        products[index] = {
            id: products[index].id,
            name: data.name || products[index].name,
            description: data.description || products[index].description,
            image: data.image || products[index].image,
            category: data.category || products[index].category,
            colour: data.colour || products[index].colour,
            price: data.price || products[index].price
        };
        fs.writeFileSync(filePath, JSON.stringify(products, null, 2))
        return products[index];
    },
    delete: (id) => {
        const products = getData();
        const index = products.findIndex(product => product.id === Number(id));
        products.splice(index, 1);
        fs.writeFileSync(filePath, JSON.stringify(products, null, 2));
        return true
    }
}

module.exports = Product;