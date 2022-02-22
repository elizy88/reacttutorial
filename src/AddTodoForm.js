import React from "react";
function AddTodoForm(props){
   const [todoTitle,setTodoTitle]= React.useState('')

  const handleTitleChange=(e)=>{
   let  newTodoTitle=e.target.value
   setTodoTitle(newTodoTitle)
   }
  const handleAddTodo=(e)=>{
    e.preventDefault()
    //let todoTitle=e.target.title.value;
    //console.log("todoTitle",todoTitle)
    props.onAddTodo(todoTitle);
  
    e.target.reset()
  }
return(
<div>
  <form onSubmit={handleAddTodo}>
    <label htmlFor="todoTitle">Title:</label>
    <input id="todoTitle" name="title" type="text"  value={todoTitle} onChange={handleTitleChange}></input>
    <button type="Submit">Add</button>
  </form>
  {/* <p>{newTodo}</p> */}
  </div>
)
}
export default AddTodoForm