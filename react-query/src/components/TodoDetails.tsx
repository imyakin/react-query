import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchTodo } from "../../api/todos";
import { useNavigate, useParams } from "react-router-dom";

export default function TodoDetails() {
  const params = useParams();
  const navigate = useNavigate();
  const id = Number(params?.id);
  const { data: todo, isLoading, isError, error } = useQuery({
    queryFn: () => fetchTodo(id),
    queryKey: ["todos", id],
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if(isError){
    return <div>{error.message}</div>
  }

  return <div>
    <button onClick={() => navigate('/')}>back to list</button>
    <p>Task: {todo?.title}</p>
    <p>Done: {todo?.completed ? 'true' : 'false'}</p>
  </div>;
}
