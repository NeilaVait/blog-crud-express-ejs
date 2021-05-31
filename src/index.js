const express = require('express');
const app = express();
const path = require('path');

const PORT = 3000;

// const pageRoutes = require('routes/pageRoutes');

// register view engine
app.set('view engine', 'ejs');
app.set('views', 'src/views');

// const blogData = require('./data/sampleBlog');
const blogDb = require('./data/blogDb');

// home page
app.get('/', function (req, res) {
  //   res.sendFile(path.join(__dirname, 'pages', 'index.html'));
  // paimti index.ejs faila ir views direktorios
  res.render('index', {
    title: 'Home',
    page: 'home',
  });
});

// about page
app.get('/about', function (req, res) {
  res.render('about', {
    title: 'About',
    page: 'about',
  });
});

// blog page
app.get('/blog', function (req, res) {
  res.render('blog', {
    title: 'Blog',
    page: 'blog',
    blogDb,
  });
});

// contact page
app.get('/contact', function (req, res) {
  res.render('contact', {
    title: 'Contact',
    page: 'contact',
  });
});

// blog create page
app.get('/blog/create', function (req, res) {
  res.render('createBlog', {
    title: 'Create new post',
    page: 'createB',
  });
});

// statine direktorija, css, js, img ir kt statiniam failam
const staticPath = path.join(__dirname, 'static');
app.use(express.static(staticPath));

// blog api /api/blog gauti visus postus jsonu
app.get('/api/blog', (req, res) => {
  res.json(blogDb);
});

// 404 case - kai vartojas ivede psl kurio nera
app.use((req, res) => res.status(404).send('OOPs Page not found'));

app.listen(PORT);
