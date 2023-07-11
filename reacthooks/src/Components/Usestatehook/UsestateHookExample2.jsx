import { Button, Stack, TextField } from "@mui/material";
import React, { useState } from "react";

const UsestateHookExample2 = () => {
  //this is used to store multpiple values and add all todovales (object) into this array

  const [todoList, setTodoList] = useState([]);

  /**
   * creating a state for editing a value
   */
  const [isEdit, setisEdit] = useState({
    isEditing: false,
    id: "",
  });

  //this variable is used to store the value enterd by the user
  const [todovalue, setTodoValue] = useState({
    text: "",
    id: "",
  });
  //function for clearing th values
  const clearingValues = () => {
    setTodoValue({
      text: "",
      id: "",
    });
  };

  const changeTodoValue = (e) => {
    setTodoValue({
      ...todovalue,
      text: e.target.value,
      id: new Date().getTime().toString(),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //collect the list of values from user and creating object and push this object to todoList
    //creating a variable  calles newtodo  to store the object vales
    // let newTodo={
    //   //getting text value from todovalue object
    //   text:todovalue.text,
    //   id:new Date().getTime().toString()
    // }
    setTodoList([...todoList, todovalue]);
    clearingValues();
  };
  //submit the form when user press"ENTER" Key in keyboard
  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      // Check if Enter key was pressed
      handleSubmit(event);
      clearingValues();
    }
  };
  //Edit Functionality
  const handleEdit = (id) => {
    setisEdit({
      ...isEdit,
      isEditing: true,
      id: id,
    });
    console.log("edit", id);
    //finding the editable item
    let findingEditableValue = todoList.find((eachitem) => eachitem.id === id);
    console.log(findingEditableValue);
    //setting the editable item to todovalue to display the value in the input field (enterd by the user previouly)
    setTodoValue({
      ...todovalue,
      text: findingEditableValue.text,
      id: findingEditableValue.id,
    });
  };
  const submittingEditingData = () => {
    console.log(todoList);
    //first we need to find which one is the editable item in the todolist
    let itemtobeupdated = todoList.map((eachitem) => {
      if (eachitem.id === isEdit.id) {
        return {
          text: todovalue.text,
          id: isEdit.id,
        };
      } else {
        return eachitem;
      }
    });
    setTodoList(itemtobeupdated)
    clearingValues();

    setisEdit({
      ...isEdit,
      isEditing: false,
      id: "",
    });
  };
  //delete Functinaity
  const handleDelete = (id) => {
    console.log("delete", id);
    const newTodo = todoList.filter((value) => {
      return value.id !== id;
    });
    setTodoList(newTodo);
  };
  console.log("todolist", todoList);

  return (
    <div>
      UsestateHookExample2
      <Stack>
        <TextField
          id="outlined-basic"
          label="Enter Task Name"
          variant="outlined"
          onChange={changeTodoValue}
          onKeyDown={handleKeyDown}
          value={todovalue.text}
        ></TextField>
      </Stack>
      {isEdit.isEditing ? (
        <Button type="submit" onClick={submittingEditingData}>
          Edit
        </Button>
      ) : (
        <Button type="submit" onClick={handleSubmit}>
          Add
        </Button>
      )}
      <hr></hr>
      {todoList.length === 0 && <h4>There are no item in the list</h4>}
      {todoList.map((eachitem) => (
        <>
          <span key={eachitem.id}>{eachitem.text}</span>
          <span>{eachitem.id}</span>
          <button onClick={() => handleEdit(eachitem.id)}>Edit</button>
          <button onClick={() => handleDelete(eachitem.id)}>Delete</button>
          <br></br>
        </>
      ))}
    </div>
  );
};

export default UsestateHookExample2;
