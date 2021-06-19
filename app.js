//  Require and use express
const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");

// Require and use mongoose
const mongoose = require("mongoose");
const Product = require("./models/product");
const { types } = require("util");
mongoose.connect("mongodb://localhost:27017/jumiaShop", { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
    .then(results => console.log("Connected to database successfully"))
    .catch(err => console.log("Error on connected route", err));

//  Require and use ejs templetes
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));
app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

//  Defining the category of available phones nad products
const categories = ["Electronics","Clothes", "Food", "Furniture"]
// view all Phones in the data base 
app.get("/products", async (req, res) => {
    const { category } = req.query;

    if (category) {
        const products = await Product.find({ category })
        res.render("products/index", { products, category })
    } else {
        const products = await Product.find({})
        res.render("products/index", { products, category: "All Stock" })
    }

});

// view details of a single Product 
app.get("/details/:id", async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id)
    res.render("products/show", { product})
});

// add Phone route 
app.get("/addNew", (req, res) => {
    res.render("products/addNew", { categories })
});

// add car route 
app.post("/products", (req, res) => {
    const newProduct = new Product(req.body);
    newProduct.save()
        .then(results => res.redirect('/products'))
});

//categories route 
app.get("/categories", (req, res) => {
    res.render("categories")
});
// get edit route route and edit
app.get("/products/:id/editProduct", (req, res) => {
    const { id } = req.params;
    Product.findById(id)
        .then(results => res.render("products/editProduct", { product: results, categories }))
});

//categories route 
app.get("/categories", (req, res) => {
    res.render("categories")
});


// find car by id and update 
app.put("/products/:id", (req, res) => {
    const { id } = req.params;
    const { name, price, category } = req.body;
    Product.findByIdAndUpdate(id, { $set: { "name": name, "price": price, "category": category } })
        .then(results => res.redirect("/products"))
});


// delete phone route 
app.delete("/products/:id", (req, res) => {
    const { id } = req.params;
    Product.findByIdAndDelete(id)
        .then(results => res.redirect("/products"))
})
//  electronics
app.get('/electronics', (req,res) => {
res.render('products/electronics')
});
//phones
app.get('/phones', (req, res) => {
    res.render('products/phones')
});
// IPHONES
app.get('/iphones',  (req, res) => {
    Product.find({ type: 'iphone'})
     .then(result => res.render('products/iphones', { iphone: result }))
     .catch(err => console.log(err))
});
// infinix types of phones
app.get('/infinix', (req, res) => {
    Product.find({ type: 'infinix' })
        .then(result => res.render('products/infinix', { infinix: result }))
        .catch(err => console.log(err))
});
// huwei types of phones
app.get('/huawei', (req, res) => {
    Product.find({ type: 'huawei' })
        .then(result => res.render('products/huawei', { huawei: result }))
        .catch(err => console.log(err))
});
// tecno types of phones
app.get('/tecno', (req, res) => {
    Product.find({ type: 'tecno' })
        .then(result => res.render('products/tecno', { tecno: result }))
        .catch(err => console.log(err))
});


// tvs
app.get('/tvs', (req, res) => {
    res.render('products/tvs')
});
// smrt tv
app.get('/smarttv', (req, res) => {
    Product.find({ type: 'smart' })
        .then(result => res.render('products/smart', { smart: result }))
        .catch(err => console.log(err))
});
// digitl tvs
app.get('/digital', (req, res) => {
    Product.find({ type: 'digital' })
        .then(result => res.render('products/digital', { digital: result }))
        .catch(err => console.log(err))
});
// radios
app.get('/radios', (req, res) => {
    res.render('products/radio')
});

//types of redio uffer
app.get('/uffer', (req, res) => {
    Product.find({ type: 'uffer' })
        .then(result => res.render('products/uffer', { uffer: result }))
        .catch(err => console.log(err))
});
app.get('/subuffer', (req, res) => {
    Product.find({ type: 'subuffer' })
        .then(result => res.render('products/subuffer', { subuffer: result }))
        .catch(err => console.log(err))
});

// laptops
app.get('/laptops', (req, res) => {
    res.render('products/laptops')
});
// types of laptops windows
app.get('/windows', (req, res) => {
    Product.find({ type: 'windows' })
        .then(result => res.render('products/windows', { windows: result }))
        .catch(err => console.log(err))
});
// types of laptops mackbook
app.get('/macbook', (req, res) => {
    Product.find({ type: 'macbook' })
        .then(result => res.render('products/macbook', { macbook: result }))
        .catch(err => console.log(err))
});
// furniture
app.get('/furniture', (req, res) => {
    res.render('products/furniture')
});

// tebles
// tbles types
app.get('/tables', (req, res) => {
    Product.find({ type: 'tables' })
        .then(result => res.render('products/tables', { tables: result }))
        .catch(err => console.log(err))
});
// types of chairs
app.get('/chairs', (req, res) => {
    Product.find({ type: 'chairs' })
        .then(result => res.render('products/chairs', { chairs: result }))
        .catch(err => console.log(err))
});
// types of bediings
app.get('/beds', (req, res) => {
    Product.find({ type: 'beddings' })
        .then(result => res.render('products/beddings', { beddings: result }))
        .catch(err => console.log(err))
});
// cereals
// app.get('/cereals', (req, res) => {
//     res.render('products/cereals')
// });


// clothes
app.get('/clothes', (req, res) => {
    res.render('products/clothes')
});

// types of clothes for men
app.get('/men', (req, res) => {
    Product.find({ type: 'menswear' })
        .then(result => res.render('products/men', { menswear: result }))
        .catch(err => console.log(err))
});

// types of clothes for women
app.get('/women', (req, res) => {
    Product.find({ type: 'women' })
        .then(result => res.render('products/women', { women: result }))
        .catch(err => console.log(err))
});

// types of kids wear
app.get('/children', (req, res) => {
    Product.find({ type: 'kidswear' })
        .then(result => res.render('products/kidswear', { kidswear: result }))
        .catch(err => console.log(err))
});

// food types
app.get('/food', (req, res) => {
    res.render('products/food')
});

// types of vegetbles
app.get('/vegetables', (req, res) => {
    Product.find({ type: 'vegetables' })
        .then(result => res.render('products/vegetables', { vegetables: result }))
        .catch(err => console.log(err))
});
// Cereals types
app.get('/cereals', (req, res) => {
    Product.find({ type: 'cereals' })
        .then(result => res.render('products/cereals', { cereals: result }))
        .catch(err => console.log(err))
});
// The rout for not found page
app.get("*", (req, res) => {
    res.send("Page not found")
});

// The server port at 3000
app.listen(8000, () => {
    console.log("Server has started")
});