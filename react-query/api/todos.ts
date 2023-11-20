export interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

const todos: Todo[] = [
    {
        id: 1,
        title: "Learn css",
        completed: false
    },
    {
        id: 2,
        title: "Learn JavaScript",
        completed: false
    },
    {
        id: 3,
        title: "Learn React",
        completed: false
    },
];

export const fetchTodos = async (query = ''): Promise<Todo[]> => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('fetching todos');

    const filteredTodos = todos.filter(todo => todo.title.toLocaleLowerCase().includes(query));

    return [...filteredTodos];
};

export const addTodo = async (todo: Pick<Todo, 'title'>): Promise<Todo> => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('adding new todo');

    const newTodo = {
        id: todos.length + 1,
        title: todo.title,
        completed: false
    }

    todos.push(newTodo);

    return newTodo;
};