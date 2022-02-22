import React from "react";
function AddTodoForm(props){
  const handleAddTodo=(e)=>{
    e.preventDefault()
    let todoTitle=e.target.title.value;
    console.log("todoTitle",todoTitle)
    props.onAddTodo(todoTitle)
    e.target.reset()
  }
return(
  <form onSubmit={handleAddTodo}>
    <label htmlFor="todoTitle">Title:</label>
    <input id="todoTitle" name="title" type="text" ></input>
    <button type="Submit">Add</button>
  </form>
)
}
export default AddTodoForm