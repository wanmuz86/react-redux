"use client"
import React, { useState } from 'react';

export default function Add() {
   const [text, setText] = useState('');
   const addTodo = () => {
   }
 return (
   <div>
       <h2>Add new Todo</h2>
       <div>
     <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
     <button onClick={addTodo}>Add ToDo</button>
   </div>
</div>
 )
}

