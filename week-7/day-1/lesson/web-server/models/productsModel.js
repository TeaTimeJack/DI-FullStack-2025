const {db} = require('../config/db.js')

const getAllProductsDB = () => {
    return db('products').select('id','name','price')
}

const getProductByIdDB = (id) => {
    return db('products').select('id','name','price').where({id})
}

module.exports= {
    getAllProductsDB,
    getProductByIdDB
}