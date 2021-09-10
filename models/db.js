const mongo = require('mongoose')

mongo.connect(process.env.DB_CONNECTION,{
    useNewUrlParser: true
})
const db = mongo.connection

db.on('error', error => {
    console.log(error);
})

db.on('open', () => {
    console.log('conectado a mongodb');
})

module.exports = mongo
