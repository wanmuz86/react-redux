"use client"
import React from 'react';
import Row from './row';
import { UseSelector, useSelector } from 'react-redux';

export default function List() {
  const todos = useSelector((state)=> state.todos.todos)
 return (
   <div>
       <h2>To do List</h2>
       <ul>
          {
            todos.map((todo)=>(
              <li key={todo.id}>
                {todo.text}
              </li>
            ))
          }
       </ul>
   </div>
 )
}


