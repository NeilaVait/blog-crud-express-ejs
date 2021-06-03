const express = require('express');
const app = express();
const path = require('path');

const mongoose = require('mongoose');
const { mongoDbString } = require('./config/config');
const Post = require('./models/post');

const pageRoutes = require('./routes/pageRoutes');
const apiRoutes = require('./routes/api/apiRoutes');

// register view engine
app.set('view engine', 'ejs');
// nustatom render view home dir
app.set('views', 'src/views');
// for req.body() to work
app.use(express.json());

mongoose
  .connect(mongoDbString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    console.log('mongoose connected');
    app.listen(3000);
  })
  .catch((err) => console.error(err.message));

// pages routes
app.use('/', pageRoutes);

//    kas ivesta i adresa
app.get('/owners', (req, res) => {
  //            koks kelias
  res.render('owners/index', {
    title: 'Owners',
    page: 'owners',
  });
});

app.get('/owners/new', (req, res) => {
  res.render('owners/new', {
    title: 'Add owner',
    page: 'owners_new',
  });
});

const staticPath = path.join(__dirname, 'static');
// statine direktorija, css, js, img ir kt statiniam failam
app.use(express.static(staticPath));

// isitraukti api routes ir panaudoti cia
app.use('/api/blog', apiRoutes);

// isitraukti api routes ir panaudoti cia kad veiktu

// 404 case - kai vartojas ivede psl kurio nera
app.use((req, res) => res.status(404).send('OOPs Page not found'));
