const express = require("express");
const app = express();
const start = require('./app');

app.listen(3001, () => {
 console.log("%s listening at 3001");
 start(app);
});