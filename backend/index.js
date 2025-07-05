const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { Todo } = require("./database");
const { errorHandler } = require("./middleware/errorHandler");
const cors=require("cors")

const app = express();
app.use(cors())

app.use(express.json())

app.post("/todo", async function (req, res) {
    const createPayload = req.body;
    const validatationSuccess = createTodo.safeParse(createPayload)
    if (!validatationSuccess) {
        return res.status(411).json({
            msg: "Your input is incorrect"
        })
    }
    await Todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    });
    res.json({
        msg: "Todo created"
    })
})



app.get("/todos", async function (req, res) {
    const todos = await Todo.find();
    res.json({todos});
})

app.put("/completed", async function (req, res) {
    const updatePayload = req.body;
    const validatationSuccess = updateTodo.safeParse(updatePayload)
    if (!validatationSuccess) {
        return res.status(411).json({
            msg: "Your input is incorrect"
        })
    }
    await Todo.updateOne({ _id: updatePayload.id }, { completed: true })
    res.json({
        msg:"Marked as completed!"
    })
})

app.use(errorHandler);

app.listen(3000)