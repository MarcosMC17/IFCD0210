const express = require("express");
const port = 4000;
const app = express();

app.use(express.static("public"));

// set the view engine to ejs
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

// index page
app.get("/", (req, res) => {
  res.render("index", { titulo: "inicio EJS" });
});

app.get("/alumno", (req, res) => {
  res.render("alumno", {
    nombre: "Marcos",
    apellidos: "Morán Cañón",
    rutaImg: "img1.jpg",
  });
});

app.use((req, res, next) => {
  res.status(404).render("404", { titulo: "Página 404" });
});

// Rutas
// require("./app/routes/article.routes.js")(app);

// set port, listen for requests
const PORT = process.env.PORT || port;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
