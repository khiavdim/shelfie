require("dotenv").config({ path: __dirname + "/../.env" });
const express = require("express");
const massive = require("massive");
const controller = require("./controller");
const app = express();
const { SERVER_PORT, CONNECTION_STRING } = process.env;
app.use(express.json());

massive(CONNECTION_STRING).then(db => {
  app.set("db", db);

  app.listen(SERVER_PORT, () => {
    console.log(`Server listening from port ${SERVER_PORT}`);
  });
});

app.get("/api/inventory", controller.getAll);
app.post("/api/inventory", controller.add);
