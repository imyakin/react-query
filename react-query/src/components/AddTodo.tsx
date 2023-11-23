import React from "react";
import TodoForm from "./TodoForm";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addTodo } from "../../api/todos";

export default function AddTodo() {
  const queryClient = useQueryClient();
  const { mutateAsync: addTodoMutation } = useMutation({
    mutationFn: addTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  const handleAddTodo = async (title: string) => {
    try {
      await addTodoMutation({ title });
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <TodoForm onSubmit={handleAddTodo} />
    </>
  );
}
