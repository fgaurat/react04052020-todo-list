import React from 'react';
import TodoItemRef from './TodoItemRef'
import TodoItemFunc from './TodoItemFunc'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


function TodoList(props) {

    return (
        <div>
            <h1>TodoListRef</h1>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>#</TableCell>
                            <TableCell>title</TableCell>
                            <TableCell>dueDate</TableCell>
                            <TableCell>completed</TableCell>
                            <TableCell>actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.todos.map(todo => <TodoItemRef key={todo.id} todo={todo} onDeleteItem={props.onDeleteItem} />)}
                    </TableBody>
                </Table>
            </TableContainer>
            <h1>TodoListFunc</h1>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>#</TableCell>
                            <TableCell>title</TableCell>
                            <TableCell>dueDate</TableCell>
                            <TableCell>completed</TableCell>
                            <TableCell>actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.todos.map(todo => <TodoItemFunc key={todo.id} todo={todo} onDeleteItem={e => this.deleteTodo(todo)} />)}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}


export default TodoList;
