//  Requiring the mongoose
const mongoose = require('mongoose')
// Creating the phone's schema
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    category: {
        type: String,
        
        enum: ["Electronics", "Furniture" ,"Clothes","Food"]
    },
    status: {
        type: String,
        enum: ['new', 'refubrished']
    },
    type: {
        type: String
    }
})
const Product = mongoose.model("Product", productSchema);
module.exports = Product;
