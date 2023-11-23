import { useState } from "react";
import type { Todo } from "../../api/todos";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTodo } from "../../api/todos";

export const TodoCard = ({ todo }: { todo: Todo }) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [checked, setChecked] = useState(todo.completed);
  const { mutate: deleteMutation } = useMutation({
    mutationFn: deleteTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    }
  })
  const changeHandler = () => {
    setChecked(!checked);
  };
  return (
    <div
      style={{
        background: "#ccc",
        marginBottom: "1rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <span
        style={{ cursor: "pointer" }}
        onClick={() => navigate(`/todo/${todo.id}`)}
      >
        {todo.title}
      </span>
      <input type="checkbox" checked={checked} onChange={changeHandler} />
      <div style={{ display: "flex" }}>
        <button onClick={() => deleteMutation(todo.id)}>delete</button>
        <button onClick={() => navigate(`/todo/${todo.id}/edit`)}>edit</button>
      </div>
    </div>
  );
};
