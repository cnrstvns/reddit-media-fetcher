const express = require('express');
const morgan = require('morgan');

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
if (process.env.NODE_ENV === 'production') app.use(morgan('dev'));
app.use('/', require('./routes/index.router'));

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
