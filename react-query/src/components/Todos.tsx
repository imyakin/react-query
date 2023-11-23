import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchTodos, addTodo } from "../../api/todos";
import { TodoCard } from "./TodoCard";
import { useState } from "react";
import AddTodo from "./AddTodo";

export const Todos = () => {
  const [filter, setFilter] = useState("");
  const { data: todos, isLoading } = useQuery({
    queryFn: () => fetchTodos(),
    queryKey: ["todos"],
  });

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
      <AddTodo />
      {todos?.map((todo) => (
        <TodoCard key={todo.id} todo={todo} />
      ))}
    </div>
  );
};
