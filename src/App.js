

import './App.css';
import React from 'react';
import  TodoList from './TodoList'
import AddTodoForm from './AddTodoForm';

function App() {
  const [newTodo,setNewTodo]= React.useState('')
return(
  <div>
  <h1>TodoList</h1>
<p>{newTodo}</p>
<AddTodoForm onAddTodo={setNewTodo}/>
<TodoList/>
</div>
  );
}

export default App;

