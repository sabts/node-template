const express = require("express");
const path = require("path");
const fs = require("fs");
const port = 3000;
const app = express();

const userFilePath = path.resolve(__dirname, "../data/users.json");

app.listen(port, () => console.log("Server running on port" + port));

app.get("/read", (req, res) => {
  fs.readFile(userFilePath, (error, data) => {
    if (error)
      return res.status(500).send("Error 500: error al leer el archivo");

    const jsonData = JSON.parse(data);
    res.send(jsonData);
  });
});

app.get("/write", (req, res) => {
  fs.readFile(userFilePath, (error, data) => {
    if (error) return res.status(500).send("Error al leer archivo");

    const newUser = {
      userId: "13",
      name: "Tay Swift",
      email: "taytay@hotmail.com",
    };

    const jsonData = JSON.parse(data);

    jsonData.push(newUser);

    fs.writeFile(userFilePath, JSON.stringify(jsonData), error => {
      if (error)
        return res.status(500).send("Error 500: error al escribir el archivo");

      res.end();
    });
  });
});
