const express = require('express');

// express app
const app = express();

// listen for requests

const port = process.env.PORT || 3000
app.listen(port);

// register view engine
app.set('view engine', 'ejs');

// middleware & static files
app.use(express.static('public'));

app.use((req, res, next) => {
  console.log('new request made:');
  console.log('host: ', req.hostname);
  console.log('path: ', req.path);
  console.log('method: ', req.method);
  next();
});


app.get('/', (req, res) => {
  const blogs = [
    {title: 'Pastel de zanahoria', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    {title: 'Zhulien de champiñones', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    {title: 'Shakshuka', snippet: 'Lorem ipsum dolor sit amet consectetur'},
  ];
  res.render('index', { title: 'Home', blogs });
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

app.get('/blogs/create', (req, res) => {
  res.render('create', { title: 'Create a new blog' });
});
app.get('/novedades', (req, res) => {
  res.render('novedades', { title: 'novedad' });
}); 
/* app.get('/canciones', (req, res) => {
  res.render('canciones');
});
 */

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});
/*

"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node server.js",
    "dev": "nodemon app.js"
  },
 */
