
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../data/users.json');

function getData() {
    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data);
}

const User = {
    findAll() {
        return getData();
    },
    findById(id) {
        const users = getData();
        return users.find(user => user.id === Number(id));
    },
    findByrole(role) {
        const users = getData();
        const usersrole = [];
        users.forEach(item => {
            if (item.role === role) {
                usersrole.push(item)
            }
        })

        return usersrole;
    },
    findByField: (field, value) =>{
        const users= getData();
        return users.find(user=>user[field]===value);
    },
    create(data) {
        const users = getData();
        const newUser = {
            id: users[users.length - 1].id + 1,
            name: data.name,
            lastname: data.lastname,
            email: data.email,
            password: data.password,
            role: data.role,
            image: data.image

        };
        users.push(newUser);
        fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
        return newUser
    },
    update: (id, data) => {
        const users = getData();
        const index = users.findIndex(user => user.id === Number(id));
        users[index] = {
            id: users[index].id,
            name: data.name || users[index.name],
            lastname: data.lastname || users[index.lastname],
            email: data.email || users[index.email],
            password: data.password || users[index.password],
            role: data.role || users[index.role],
            image: data.image || users[index.image]
        };
        fs.writeFileSync(filePath, JSON.stringify(users, null, 2))
        return users[index];
    },
    delete: (id) => {
        const users = getData();
        const index = users.findIndex(user => user.id === Number(id));
        users.splice(index, 1);
        fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
        return true
    }
}

module.exports = User;