
import React from 'react';
import TodoListItem from './todo_list_item.jsx';
import TodoForm from '../todo_list/todo_form.jsx';
// import connect from './todo_list_container';

export const TodoList = (props) => {
   return (<>
  <ul>Todo List goes here!
    {props.todos.map((todo, idx) => {
       return <TodoListItem todo={todo} key={idx} />
    })}
    <TodoForm receiveTodo={props.receiveTodo}/>
  </ul>
  </>)
};

