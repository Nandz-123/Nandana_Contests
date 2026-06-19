const API_URL =
    "http://localhost:3000/todos";

async function loadTodos() {

    const response =
        await fetch(API_URL);

    const result =
        await response.json();

    const list =
        document.getElementById("todoList");

    list.innerHTML = "";

    result.data.forEach(todo => {

        const li =
            document.createElement("li");

        li.innerHTML = `
            ${todo.task}
            ${todo.completed ? "✅" : ""}

            <button onclick="completeTodo(${todo.id})">
                Complete
            </button>

            <button onclick="deleteTodo(${todo.id})">
                Delete
            </button>
        `;

        list.appendChild(li);
    });
}

async function addTodo() {

    const input =
        document.getElementById("taskInput");

    const task =
        input.value;

    await fetch(API_URL, {

        method: "POST",

        headers: {
            "Content-Type":
                "application/json"
        },

        body: JSON.stringify({
            task
        })
    });

    input.value = "";

    loadTodos();
}

async function completeTodo(id) {

    await fetch(
        `${API_URL}/${id}`,
        {
            method: "PUT"
        }
    );

    loadTodos();
}

async function deleteTodo(id) {

    await fetch(
        `${API_URL}/${id}`,
        {
            method: "DELETE"
        }
    );

    loadTodos();
}

loadTodos();