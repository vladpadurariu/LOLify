const app = require('express');
const PORT = 7707;
const CORS = require('cors');
const bodyParser = require('body-parser');
const appID = 44;
const x2j = require('xml2js');

app.listen(PORT, () => {
  console.log(`\r\nNODE ::: I started my back end server on port ${PORT}.\r\n`);
});