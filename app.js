const express = require("express");
const app = express();

const server = app.listen(6168, () => console.log("listening"));

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get('*', (req, res) => {
    res.sendFile()
})