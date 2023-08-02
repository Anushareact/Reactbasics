import React, { useReducer, useState } from "react";
const reducer = (state, action) => {
  if (action.type === "ADD_TODO") {
    return {
      ...state,
      todolist: [...state.todolist, action.payload],
    };
  }
  if (action.type === "EDIT_TODO") {
    console.log("STATE", action.payload);
    return {
      ...state,
      isEditing: action.payload,
    };
  }
  if (action.type === "UPDATE_DATA") {
    console.log(action.payload);
    const updatedtodos = state.todolist.map((eachtodo) => {
      if (action.payload.id === eachtodo.id) {
        return {
          id: action.payload.id,
          todoItem: action.payload.todoItem,
        };
      } else {
        return eachtodo;
      }
    });
    return {
      ...state,
      todolist: updatedtodos,
    };
  }
  if (action.type === "DELETE_TODO") {
    const newTodoItems = state.todolist.filter((eachitem) => {
      return eachitem.id !== action.payload;
    });
    return {
      ...state,
      todolist: newTodoItems,
    };
  }
  return state;
};

const TodoTaskUsingUseReducer = () => {
  const [todovalue, setTodoValue] = useState("");
  const initialState = {
    todolist: [],
    isEditing: { status: false, id: "", todoItem: "" },
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const AddTodoItem = (e) => {
    e.preventDefault();

    if (state.isEditing.status) {
      dispatch({
        type: "UPDATE_DATA",
        payload: {
          id: state.isEditing.id,
          todoItem: todovalue,
        },
      });
      dispatch({
        type: "EDIT_TODO",
        payload: {
          status: false,
          id: "",
          todoItem: "",
        },
      });
      setTodoValue("");
    } else {
      dispatch({
        type: "ADD_TODO",
        payload: { id: new Date().getTime().toString(), todoItem: todovalue },
      });

      setTodoValue(" ");
    }
  };

  const HandleDelete = (id) => {
    dispatch({
      type: "DELETE_TODO",
      payload: id,
    });
  };

  const HandleEdit = (eachtodoitem) => {
    console.log(eachtodoitem);
    dispatch({
      type: "EDIT_TODO",
      payload: {
        status: true,
        id: eachtodoitem.id,
        todoItem: eachtodoitem.todoItem,
      },
    });
    setTodoValue(eachtodoitem.todoItem);
  };

  return (
    <>
      <div>TodoTaskUsingUseReducer</div>
      <form>
        <label>Add To Do Item</label>
        <input
          type="text"
          name="todovalue"
          value={todovalue}
          onChange={(e) => setTodoValue(e.target.value)}
        />

        <button type="submit" onClick={AddTodoItem}>
          {state.isEditing.status ? "Edit" : "ADD"}
        </button>
      </form>
      {state.todolist?.map((eachtodoitem) => {
        return (
          <div style={{ color: "orange", fontSize: "30px" }}>
            <div key={eachtodoitem.id}>
              {eachtodoitem.todoItem}
              <button type="button" onClick={() => HandleEdit(eachtodoitem)}>
                Edit
              </button>
              <button
                type="button"
                onClick={() => HandleDelete(eachtodoitem.id)}
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default TodoTaskUsingUseReducer;
// Edit operation steps:
// 1. we need to find id of that particular todo ListItem
// 2.update is editing flag excludeVariable
// 3.Finding which value needs to be edited in the original todo list
// 4.set that value to todo value to display the value in the input TextField.
