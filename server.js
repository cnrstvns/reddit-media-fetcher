const express = require('express');
const morgan = require('morgan');

const PORT = process.env.PORT || 5000;
const DEV = process.env.NODE_ENV !== 'production';

const app = express();

app.use(express.json());
if (DEV) app.use(morgan('dev'));
app.use('/', require('./src/routes/index.router'));

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
