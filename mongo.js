const MongoClient = require('mongodb').MongoClient;

const url =
'mongodb+srv://manu:ekii5iZ9dHszTCRr@cluster0.tpaib.mongodb.net/products_test?retryWrites=true&w=majority';

const createProduct = async (req, res, next) => {
  const newProduct = {
    name: req.body.name,
    price: req.body.price
  };
  const client = new MongoClient(url, {useUnifiedTopology: true});

  try {
    await client.connect();
    const db = client.db();
    const result = db.collection('products').insertOne(newProduct);
    
  } catch (error) {
    return res.json({message: 'Could not store data.'});
    
  };


  res.json(newProduct);
};


const getProducts = async (req, res, next) => {
  const client = new MongoClient(url, {useUnifiedTopology: true});

  let products;

  try {
    await client.connect();
    const db = client.db();
    products = await db.collection('products').find().toArray();
  } catch (error) {
    return res.json({message: 'Could not retrieve products.'});
  };
  client.close();

  res.json(products);
};


exports.createProduct = createProduct;
exports.getProducts = getProducts;
