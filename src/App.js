
import './App.css';

let todoList=[
  {id:1, title:'The bird'},
  {id:2, title:'The moon'},
  {id :3, title:'The star'}
  ]
function App() {
return(
    <div>
    <h1>Todo List</h1>
    {todoList.map((item)=>(
      <li key={item.id}>{item.title}</li>
 
    ))}
 
  </div>
  );
}

export default App;

