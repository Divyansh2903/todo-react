const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:divu%40123@cluster0.swyhixb.mongodb.net/todo_app');

const TodoSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean,

});

const Todo = mongoose.model('todos', TodoSchema);


module.exports = {
    Todo
}