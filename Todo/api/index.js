const express = require("express");
const cors = require("cors");
const { todo } = require("./db");
const { createTodo, updateTodo } = require("./todoModel");

const app = express();

const port = 3001;

app.use(express.json());
app.use(cors);

app.get("/", (req, res) => {
  res.json({
    msg: "Hello World",
  });
});
// create todo using async await
app.post("/todo", async (req, res) => {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);

  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "You sent the wrong inputs",
    });
    return;
  }
  // put it in mongodb
  await todo.create({
    name: createPayload.name,
    description: createPayload.description,
    isCompleat: false,
  });

  res.json({
    msg: "Todo created",
  });
});

// get all todo
app.get("/todo", async (req, res) => {
  // implement
  const todo = await todo.getAll();
  return res.json(todo);
});

// complete todo
app.put("/todo", async (req, res) => {
  //implement
  const updatePayload = req.body;
  const parsedPayload = updateTodo.safeParse(updatePayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "You sent the wrong inputs",
    });
    return;
  }

  await todo.update(
    {
      _id: req.body.id,
    },
    {
      isCompleat: true,
    }
  );

  res.json({
    msg: "Todo marked as completed",
  });
});
app.listen(3001);
