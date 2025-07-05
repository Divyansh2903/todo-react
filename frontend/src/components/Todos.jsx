export function Todos({ todos }) { //this is object destructuring


    return <div>
        {todos.map(function (todo) {
            return <div>
                <h1>{todo.title}</h1>
                <h3>{todo.description}</h3>
                <button>{todo.completed==true?"Completed!":"Mark as completed!"}</button>
            </div>
        })}
    </div>
}