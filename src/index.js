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
    else {
      jsonData = [...newUser];
      console.log(jsonData);
    }
    const jsonData = JSON.parse(data);
    res.send(jsonData);
  });
});

app.get("/write", (req, res) => {
  fs.readFile(userFilePath, (error, data) => {
    if (error)
      return res.status(500).send("Error 500: error al leer el archivo");

    const jsonData = JSON.parse(data);
    res.send(jsonData);
  });

  const newUser = JSON.stringify({
    userId: "e65e1490-c230-4043-80bc-ea32fee5f57c",
    name: "Tay Swift",
    email: "taytay@hotmail.com",
  });

  fs.writeFile(userFilePath, newUser, error => {
    if (error)
      return res.status(500).send("Error 500: error al leer el archivo");
    res.end();
  });
});
