const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;
const mongoose = require("mongoose");
const TodoModel = require("./models/todo");

// mongoose.connect("mongodb://localhost:27017/firstmongo");
// both the lines are same. If you are using the default port in our case 27017 for mongodb we can ignore that
mongoose.connect("mongodb://localhost/firstmongo");

app.use("/", express.static(path.resolve(__dirname, "assets")));

app.use(express.json());

app.get("/api/get", async (_, res) => {
  const dbRes = await TodoModel.find();
  const todos = dbRes.map((todo) => ({ record: todo.record }));
  res.json(todos);
});
app.post("/api/create", async (req, res) => {
  const record = req.body;
  const dbRes = await TodoModel.create(record);
  console.log(dbRes);
  res.json({ status: "ok" });
});

  res.json({ status: "ok" });
});

app.listen(PORT, () => {
  console.log(`server up on port ${PORT}. http://localhost:${PORT}`);
});
