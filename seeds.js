// Require and use Mongoose
const mongoose = require("mongoose");
// Require and use phone model-schema
const Product = require("./models/product");
// const Phones = require("./models/phones");

mongoose.connect("mongodb://localhost:27017/jumiaShop", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(results => console.log("Connected to database"))
    .catch(err => console.log("Error on connection route", err));
//     const p = new Phone({
//         name: 'Huawei Y5',
//         price: 17000,
//         category: 'Phones'
//     });
//    const sim = new Product({
//        name: 'Oppo ZE9',
//        price: 17000,
//        category: 'Electronics'
//    });


// const allProducts = [
//     { name: "Tecno Common 16", price: 15999, category: "Electronics", type: "tecno" },
//     { name: "Infinix Note 4", price: 13999, category: "Electronics", type: "infinix" },
//     { name: "Hissen", price: 18900, category: "Electronics", type: "hissen" },
//     { name: "Soko", price: 199, category: "Floor", type: "m" },
//     { name: "Pembe", price: 159, category: "Floor", type: "iphone" },
//     { name: "Jik", price: 500, category: "Detergents", type: "iphone" },
//     { name: "knife", price: 299, category: "Utensils", type: "iphone" },
//     { name: "Uffa", price: 7999, category: "Electronics", type: "iphone" },
//     { name: "Sumsung 007", price: 89000, category: "Electronics", type: "iphone" },
//     { name: "spoon", price: 17499, category: "Utensil", type: "iphone" }
// ];

const allProducts = [
    { name: "Tecno Common 16", price: 15999, category: "Electronics", type: "tecno" },
    { name: "Infinix Note 4", price: 13999, category: "Electronics", type: "infinix" },
    { name: "Oppo", price: 18900, category: "Electronics", type: "oppo" },
    { name: "Uffa", price: 7999, category: "Electronics", type: "redio" },
    { name: "iphone 7", price: 7999, category: "Electronics", type: "iphone" }
];


// sim.save().then(data => console.log(data)).catch(err => console.log(err))
Product.insertMany(allProducts).then(data => console.log(data)).catch(err => console.log(err))