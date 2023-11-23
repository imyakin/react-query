import React, { useState } from "react";

interface TodoFormProps {
  initialValue?: string;
  onSubmit: (title: string) => void;
}

export default function TodoForm({ initialValue, onSubmit }: TodoFormProps) {
  const [title, setTitle] = useState(initialValue ?? '');

  const handleSubmit = () => {
    onSubmit(title)
    setTitle('');
  }

  return (
    <>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input value="Add todo" type="submit" onClick={handleSubmit} />
    </>
  );
}
