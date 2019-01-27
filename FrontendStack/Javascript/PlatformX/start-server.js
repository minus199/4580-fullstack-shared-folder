const express = require("express");
const app = express();
const port = 3000;

app.get("/", express.static("html/index.html"));
// app.get('/', (req, res) => res.send('Hello World!'))
app.use(express.static("html"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
