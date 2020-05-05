import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';




export default function TodoItemRef(props){

    const todo = props.todo

    return(<TableRow key={todo.id}>
        <TableCell>{todo.id}</TableCell>
        <TableCell>{todo.title}</TableCell>
        <TableCell>{todo.dueDate}</TableCell>
        <TableCell>
            {todo.completed && "done"} {todo.completed ? "ok":"!ok"}
        </TableCell>
        <TableCell>
            <Button onClick={e => props.onDeleteItem(todo)} variant="contained" color="secondary">delete</Button>


        </TableCell>
    </TableRow>)
}
