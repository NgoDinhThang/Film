const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const exphbs = require('express-handlebars');
const route = require('./routes');
// const morgan = require('morgan')

// app.use(morgan('combined'))

app.engine('.hbs', exphbs({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources/views'));
app.use(express.urlencoded({ extended: true }));

route(app);
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
