import react from "react";
import  TodoListItem from "./TodoListItem"
let todoList=[
  {id:1,title:"Cleaning the code"},{id:2,title:"Debugging"},{id:3,title:"Testing"}
]
function TodoList(){
  return(
<div>
  <ul>
  {todoList.map(function(item){
  return  <TodoListItem key={item.id} todo={item.title}/>
  })}
  </ul>
</div>
  )}
export default TodoList