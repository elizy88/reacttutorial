import react from "react";
let todoList=[
  {id:1,title:"Cleaning the code"},{id:2,title:"Debugging"},{id:3,title:"Testing"}
]

function TodoList(){
return(
  <div>
 
  <ul>
   {todoList.map(function(item){
     return <li key={item.id}>{item.title}</li>
   })
}
   </ul>
</div>
)
}
export default TodoList