const path = require("path");
const express = require("express");

const route = require("./routes/mainRoute");
const app = express();

app.use(express.static(path.join(__dirname, "public")));

const PORT = 3000;

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.listen(PORT, () => {
  console.log("Servidor prendido en puerto " + PORT);
});

app.use("/", route);
