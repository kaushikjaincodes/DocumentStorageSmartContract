// server.js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { issueDocument, getDocument } = require("./user");

const app = express();
app.use(bodyParser.json());
app.use(cors());


app.post("/api/issue-document", async (req, res) => {
  const { name, gender, id, dob } = req.body;
  const response = await issueDocument(name, gender, id, dob);
  console.log(req.body);
  res.json(response);
});

app.get("/api/get-document/:id", async (req, res) => {
  const id = req.params.id;
  const response = await getDocument(id);
  res.json(response);
});


app.get("/", (req, res) => {
  res.json({ message: "Welcome to the server!" });
});

const PORT = 10385;
app.listen(PORT, "10.30.59.125", () => {
  console.log(`Server running at http://10.30.59.125:${PORT}`);
});
