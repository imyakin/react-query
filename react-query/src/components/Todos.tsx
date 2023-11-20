import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchTodos, addTodo } from "../../api/todos";
import { TodoCard } from "./TodoCard";
import { useState } from "react";

export const Todos = () => {
  const queryClient = useQueryClient();
  const [title, setTitle] = useState("");
  const [filter, setFilter] = useState("");
  const { data: todos, isLoading } = useQuery({
      queryFn: () => fetchTodos(filter),
      queryKey: ["todos", { filter }],
  });

  const { mutateAsync: addTodoMutation } = useMutation({
    mutationFn: addTodo,
    onSuccess: () => {
      queryClient.invalidateQueries(["todos"]);
    },
  });

  const handleAddTodo = async () => {
    try {
      await addTodoMutation({ title });
      setTitle("");
    } catch (e) {
      console.log(e);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <input
        type="text"
        value={filter}
        placeholder="Filter by ..."
        onChange={(e) => setFilter(e.target.value)}
      />
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input value="Add todo" type="submit" onClick={handleAddTodo} />
      {todos?.map((todo) => (
        <TodoCard key={todo.id} todo={todo} />
      ))}
    </div>
  );
};
