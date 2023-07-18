import React, { useReducer } from "react";
const reducer = (CurrentState, action) => {
  console.log(CurrentState, action);

  if (action.type === "DELETEUSER") {
    //logic for deleting thr user
    const newusers = CurrentState.data.filter((eachuser) => {
      return eachuser.id !== action.payload;
    });

    console.log(newusers,"and Updating the state");
    return {
        ...CurrentState,
        data:newusers
    }
  }
};

const UseReducer = () => {
  const initialState = {
    data: [
      {
        id: "1",
        firstName: "anusha",
        lastname: "Mutharasi",
      },
      {
        id: "2",
        firstName: "anusha",
        lastname: "palleboina",
      },
    ],
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleDelte = (id) => {
    console.log("id", id, "execute first");
    dispatch({
      type: "DELETEUSER",
      payload: id,
    });
    console.log("reducer function excecution start");
  };
  return (
    <div>
      <div>UseReducer</div>
      {/* // if we want to access the initial state values we need to use the state variable */}
      {state.data.map((eachUser) => {
        const { id, firstName, lastname } = eachUser;
        return (
          <div key={id}>
            <h3>{firstName}</h3>
            <h3>{lastname}</h3>
            <button onClick={() => handleDelte(id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default UseReducer;
