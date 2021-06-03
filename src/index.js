const express = require('express');
const app = express();
const path = require('path');

const mongoose = require('mongoose');
const { mongoDbString } = require('./config/config');
const Post = require('./models/post');

const pageRoutes = require('./routes/pageRoutes');
const ownersRoutes = require('./routes/ownersRoutes');
const apiRoutes = require('./routes/api/apiRoutes');

//////////////////////////////////////////////////////////////////////////////////////////
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

////////////////////////////////////////////////////////////////////////////////////
// register view engine
app.set('view engine', 'ejs');
// nustatom render view home dir
app.set('views', 'src/views');
// for req.body() to work
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/////////////////////////////////////////////////////////////////////////////////////
// pages routes
app.use('/', pageRoutes);

// owner routes
app.use('/owners', ownersRoutes);

const staticPath = path.join(__dirname, 'static');
// statine direktorija, css, js, img ir kt statiniam failam
app.use(express.static(staticPath));

// isitraukti api routes ir panaudoti cia
app.use('/api/blog', apiRoutes);

// isitraukti api routes ir panaudoti cia kad veiktu

// 404 case - kai vartojas ivede psl kurio nera
app.use((req, res) => res.status(404).send('OOPs Page not found'));
