import React from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchTodo, editTodo } from "../../api/todos";
import { useNavigate, useParams } from "react-router-dom";
import TodoForm from "./TodoForm";

export default function TodoEdit() {
  const params = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const id = Number(params?.id);
  const {
    data: todo,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useQuery({
    queryFn: () => fetchTodo(id),
    queryKey: ["todos", id],
  });

  const { mutateAsync: editTodoMutation } = useMutation({
    mutationFn: editTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
      navigate('/');
    },
  });

  const handleEditTodo = async (newTitle: string) => {
    try {
      if(isSuccess){
        await editTodoMutation({
          ...todo,
          title: newTitle
        });
      }
    } catch (e) {
      console.log(e);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <button onClick={() => navigate("/")}>back to list</button>
      <TodoForm initialValue={todo?.title} onSubmit={handleEditTodo} />
    </div>
  );
}
