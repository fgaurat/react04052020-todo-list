import React from 'react';

function TodoForm(props){

        const todoForm = props.todoForm;
        return (
            <div>
                <h1>TodoForm</h1>
                <form onSubmit={props.handleSubmit}>
                    <input type="text" name="title" value={todoForm.title} onChange={props.handleInputChange} />
                    <input type="date" name="dueDate" value={todoForm.dueDate} onChange={props.handleInputChange} />
                    <input type="checkbox" name="completed" checked={todoForm.completed} onChange={props.handleInputChange} />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }


export default TodoForm;
