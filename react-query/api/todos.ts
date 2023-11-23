export interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

export const fetchTodos = async (query = ''): Promise<Todo[]> => {
    const data = await fetch('http://localhost:3000/todos');
    console.log('fetching todos');
    // const filteredTodos = todos.filter(todo => todo.title.toLocaleLowerCase().includes(query));
    return data.json();
};

export const fetchTodo = async (id: number): Promise<Todo> => {
    const data = await fetch(`http://localhost:3000/todos/${id}`);
    console.log('fetching one todo');
    // const filteredTodos = todos.filter(todo => todo.title.toLocaleLowerCase().includes(query));
    return data.json();
};

export const addTodo = async (todo: Pick<Todo, 'title'>): Promise<Todo> => {
    const newTodo = {
        id: Date.now(),
        title: todo.title,
        completed: false
    }
    const data = await fetch('http://localhost:3000/todos', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newTodo)
    });
    console.log('adding new todo');

    return data.json();
};

export const editTodo = async (updatedTodo: Todo): Promise<Todo> => {
    const data = await fetch(`http://localhost:3000/todos/${updatedTodo.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedTodo)
    });
    console.log('edit new todo');

    return data.json();
};

export const deleteTodo = async (id: number): Promise<Todo> => {
    const data = await fetch(`http://localhost:3000/todos/${id}`, {
        method: "DELETE",
    });
    console.log('adding new todo');

    return data.json();
};