const express=require("express");
const { createTodo, updateTodo } = require("./types");
const { Todo } = require("./database");
const app=express();

app.use(express.json())

app.post("/todo",async function (req,res){
    const createPayload=req.body;
    const validatationSuccess=createTodo.safeParse(createPayload)
    if(!validatationSuccess){
        return res.status(411).json({
            msg:"Your input is incorrect"
        })
    }
    await Todo.create(req.body);
    res.json({
        msg:"Todo created"
    })
})

//1:17

app.get("/todos",function (req,res){


})

app.put("/completed",function (req,res){
    const updatePayload=req.body;
    const validatationSuccess=updateTodo.safeParse(updatePayload)
     if(!validatationSuccess){
        return res.status(411).json({
            msg:"Your input is incorrect"
        })
    }
})

app.listen(3000)