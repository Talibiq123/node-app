// const http = require('http');
// const fs = require('fs');

// const index = fs.readFileSync('index.html', 'utf-8');
// const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
// const products = data.products;

// const server = http.createServer((req, res) => {
//   console.log(req.url, req.method);

//   if(req.url.startsWith('/product')){
//     const id = req.url.split('/')[2]
//     const product = products.find(p=>p.id===(+id))
//     console.log(product)
//     res.setHeader('Content-Type', 'text/html');
//           let modifiedIndex = index.replace('**title**', product.title)
//           .replace('**url**', product.thumbnail)
//           .replace('**price**', product.price)
//           .replace('**rating**', product.rating)
//           res.end(modifiedIndex);
//           return;
//   }
// //   '/product':
// //       res.setHeader('Content-Type', 'text/html');
// //       let modifiedIndex = index.replace('**title**', product.title)
// //       .replace('**url**', product.thumbnail)
// //       .replace('**price**', product.price)
// //       .replace('**rating**', product.rating)
// //       res.end(modifiedIndex);
// //       break;



//   switch (req.url) {
//     case '/':
//       res.setHeader('Content-Type', 'text/html');
//       res.end(index);
//       break;
//     case '/api':
//       res.setHeader('Content-Type', 'application/json');
//       res.end(JSON.stringify(data));
//       break;

//     default:
//       res.writeHead(404);
//       res.end();
//   }

//   console.log('server started  ');
//   //   res.setHeader('Dummy', 'DummyValue');

//   //
// });

// server.listen(8080);




// Express JS
// const fs = require('fs');

// const index = fs.readFileSync('index.html', 'utf-8');
// const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
// const products = data.products;

const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const server = express();
server.use(express.json());
const productRouter = require('./routes/product');
const userRouter = require('./routes/user');

// dbconnection for nodejs
mongoose.connect('mongodb://127.0.0.1:27017/EcommerceTest');

// Middleware
// server.use((req, res, next) => {
//   console.log(req.method, req.ip, req.hostname, req.get('User-Agent'));
//   next();
// })

// server.use(exppress.static('public'));

// body parser
server.use(express.json());
server.use(morgan('default'));
server.use(express.static('public'));
// Middleware for Router 
server.use('/products', productRouter.router);
server.use('/users', userRouter.router);


// const auth = (req, res, next) => {
//   console.log(req.query);

//   if (req.query.password = "123") {
//     next();
//   } else {
//     res.sendStatus(403);
//   }
  
// }

// server.use(auth);

// Server API/Endpoints ~ Route
// Products
// Read / Get Products




// Create API/ POST/products    C R U D
// productRouter
// .post('/products', productController.createProduct)
// .get('/products', productController.getAllProducts)
// .get('/products/:id', productController.getProduct)
// .put('/products/:id', productController.replaceProduct)
// .patch('/products/:id', productController.updateProduct)
// .delete('/products/:id', productController.deleteProduct);


// server.post('/products', (req, res, next) => {
//   console.log(req.body);
//   products.body(req.body);
//   res.json({type: 'POST'});
// })

// server.get('/products', (req, res) => {
//   res.json(products);
// })
// server.get('/products/:id', (req, res) => {
//   console.log(req.params.id)
//   const id = +req.params.id;
//   const product = products.find(p => p.id===id)
//   res.json(product);
// })



// server.put('/', (req, res, next) => {
//   res.json({type: 'PUT'});
// })

// server.delete('/', (req, res, next) => {
//   res.json({type: 'DELETE'});
// })

// server.patch('/', (req, res, next) => {
//   res.json({type: 'PATCH'});
// })

// server.get('/demo', (req, res) => {
  // res.sendStatus(404);
  // res.send('<h1>Hello World<h1>');
  // res.sendFile('C:\Users\admin\Desktop\node-app\index.html');
  // res.json(products);
// })

server.listen(8080, () => {
  console.log("Server Initiated...");
});