const express = require('express');
const app = express();
const port = 3000;
const { z } = require("zod");

app.use(express.json());

const todos = [];
let counter = 1;

const todoCreateSchema = z.object({
    task: z.string().max(30)
});

// Get all todos
app.get("/todos", (req, res) => {
    res.json({
        success: true,
        data: todos
    });
});

// Create a todo
app.post("/todos", (req, res) => {
    const result = todoCreateSchema.safeParse(req.body);

    if (!result.success) {
        return res.status(400).json({
            success: false,
            data: [],
            message: "Invalid inputs"
        });
    }

    const { task } = result.data;

    const pushobj = {
        id: counter++,
        task,
        isComplete: false
    };

    todos.push(pushobj);

    res.status(201).json({
        success: true,
        data: pushobj,
        message: "Created successfully"
    });
});

// Update a todo
app.put("/todos/:id", (req, res) => {
    // const todoId = parseInt(req.params.id);
    // const todo = todos.find(t => t.id === todoId);
    const  todoId = req.params.id
    let todo ={}
    res.status(200).json({
        success: true,
        data: todo,
        message: "Todo updated successfully"
    })
})
    // if (!todo) {
    //     return res.status(404).json({
    //         success: false,
    //         data: null,
    //         message: "Todo not found"
    //     });
    // }

    // if (req.body.task !== undefined) {
    //     todo.task = req.body.task;
    // }

    // if (req.body.isComplete !== undefined) {
    //     todo.isComplete = req.body.isComplete;
    //}

   


// Delete a todo
app.delete("/todos/:id", (req, res) => {
    const todoId = parseInt(req.params.id);
    const index = todos.findIndex(todo => todo.id === todoId);

    if (index === -1) {
        return res.status(404).json({
            success: false,
            data: null,
            message: "Todo not found"
        });
    }

    const deletedTodo = todos.splice(index, 1)[0];

    res.status(200).json({
        success: true,
        data: deletedTodo,
        message: "Todo deleted successfully"
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
