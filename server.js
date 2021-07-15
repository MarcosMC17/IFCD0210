const express = require("express");

const app = express();

// Express > 4.16
// parsear solicitudes de tipo de contenido: application/json
app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Bienvenido a API Rest Tienda Online Focyl" });
});

// Rutas
require("./app/routes/article.routes.js")(app);

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
