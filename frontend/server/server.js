const express = require('express');
const app = express();
const api = require('./routes/index');
const cors = require('cors');

app.use(cors());
app.use('/', api);

const port = 4000;
app.listen(port, ()=>console.log(`Listening on port ${port}`));