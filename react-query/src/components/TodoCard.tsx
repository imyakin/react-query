import { useState } from 'react';
import type { Todo } from '../../api/todos'

export const TodoCard = ({todo}: {todo: Todo}) => {
    const [checked, setChecked] = useState(todo.completed)
    const changeHandler = () => {
        setChecked(!checked);
    }
    return (    
        <div>
            <span>{todo.title}</span>
            <input type="checkbox" checked={checked} onChange={changeHandler} />
        </div>
    )
};