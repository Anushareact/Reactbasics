import React, { useEffect, useReducer, useState } from "react";
import axios from "axios";

//https://jsonplaceholder.typicode.com/users
const reducer = (state, action) => {
  console.log("payload", action.payload);
  if (action.type === "READ") {
    console.log("payload", action.payload);
    return {
      ...state,
      usersData: action.payload,
    };
  }
  if (action.type === "LOADING") {
    return {
      ...state,
      isLoading: action.payload,
    };
  }
  if (action.type === "DELETE") {
    const currentusers = state.usersData;
    const newUsers = currentusers.filter((singleuser) => {
      return singleuser.id !== action.payload;
    });
    return {
      ...state,
      usersData: newUsers,
    };
  }
  if (action.type === "EDIT") {
    return {
      ...state,
      isEdit: action.payload,
    };
  }

  if (action.type === "UPDATE_DATA") {
    const updateuser = state.usersData.map((singleUser) => {
      if (singleUser.id === action.payload.id) {
        return {
          id: action.payload.id,
          name: action.payload.Name,
          email: action.payload.Email,
        };
      } else {
        return singleUser;
      }
    });

    return {
      ...state,
      usersData: updateuser,
    };
  }
  return state;
};
const UseReducerExample2 = () => {
  const initialState = {
    usersData: [],
    isLoading: false,
    isError: { status: false, mesg: "" },
    isEdit: { status: false, id: "", name: "", email: "" },
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const fetchingData = async (URL) => {
    dispatch({
      type: "LOADING",
      payload: true,
    });
    dispatch({ type: "ERROR", payload: { status: false, mesg: "" } });
    try {
      const response = await axios.get(URL);
      console.log(response.data);
      dispatch({
        type: "READ",
        payload: response.data,
      });
      dispatch({
        type: "LOADING",
        payload: false,
      });
      dispatch({ type: "ERROR", payload: { status: false, mesg: "" } });
    } catch (err) {
      dispatch({ type: "LOADING", payload: false });
      dispatch({ type: "ERROR", payload: { status: true, mesg: err.message } });
    }
  };

  useEffect(() => {
    fetchingData("https://jsonplaceholder.typicode.com/users");
  }, []);
  if (state.isLoading) {
    return <h1>Loading...</h1>;
  }
  console.log(state);
  //delete functionality
  const HandleDelete = (id) => {
    console.log(id);
    dispatch({
      type: "DELETE",
      payload: id,
    });
  };
  //Edit
  const HandleEdit = (eachuser) => {
    console.log(eachuser);
    const { id, name, email } = eachuser;
    dispatch({ type: "EDIT", payload: { status: true, id: id, name, email } });
  };
  const updatedata = (id, Name, Email) => {
    console.log("MMMMMMMMMMMMMMMMM", Name, Email);
    dispatch({ type: "UPDATE_DATA", payload: { id, Name, Email } });
     dispatch({ type: "EDIT", payload: { status: false, id:"", name:"", email:"" } })
  };
  console.log("isEdit data", state.isEdit);
  return (
    <div>
      <h1>UseReducerExample2</h1>
      {state.isEdit?.status && (
        <EditComponent EditData={state.isEdit} updatedata={updatedata}/>
      )}
      {state?.usersData?.map((eachuser) => (
        <div key={eachuser.id}>
          <div>{eachuser.name}</div>
          <div>{eachuser.email}</div>
          <button onClick={() => HandleEdit(eachuser)}>Edit</button>
          <button onClick={() => HandleDelete(eachuser.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

const EditComponent = ({ EditData, updatedata }) => {
  console.log("GOING TO BE EDTED", EditData);
  const { id, name, email } = EditData;

  console.log("ID", id);
  const [Name, setName] = useState(name || " ");
  const [Email, setEmail] = useState(email || " ");
  console.log("NAME AND EMAIL", Name, Email);

  return (
    <>
      <div style={{ color: "red" }}>EditComponent</div>
      <form>
        <label>Name:</label>
        <input
          type="text"
          name="Name"
          id="Name"
          value={Name}
          onChange={(e) => setName(e.target.value)}
        />
        <br></br>
        <label>Email:</label>
        <input
          type="Email"
          name="Email"
          id="Email"
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br></br>
        <button onClick={() => updatedata(id, Name, Email)}>Submit</button>
      </form>
    </>
  );
};

export default UseReducerExample2;
