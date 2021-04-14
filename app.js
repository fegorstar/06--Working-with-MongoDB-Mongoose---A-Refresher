const express = require('express');
const bodyParser = require('body-parser');
const mongoPractice = require('./controllers/productController')


const app = express();

app.use(bodyParser.json());

app.post('/products', mongoPractice.createProduct);
app.get('/products', mongoPractice.getProducts);

//declaring the port
const PORT= process.env.PORT || 3000
app.listen (PORT, () =>{
    console.log(`Server is running on Port, ${PORT} `)
})
