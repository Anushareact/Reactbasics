import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const ApiUrl = "https://jsonplaceholder.typicode.com/users";
const UseEffectHook = () => {
  const [UsersData, setUsersData] = useState();
  const [isLoading,setIsLoading]=useState(false)
  const FetchUsersData = (apiUrl) => {
    console.log(apiUrl);
    setIsLoading(true);
    axios
      .get(apiUrl)
      .then((response) => {
        
        setUsersData(response.data);
        setIsLoading(false)
      })
      .catch((err) => {
        return <h1>{err.message}</h1>;
      });
  };
  useEffect(() => {
    FetchUsersData(ApiUrl);
  }, []);
 if(isLoading){
    return (<h3>Loading...</h3>)
 }

  return (
    <div>
      <h1>UseEffectExample1(Fetching data)</h1>
      <hr></hr>
      {UsersData &&
        UsersData?.map((eachUser) => (
          <div key={eachUser.id}>
            <p>{eachUser.name}</p>
            <p>{eachUser.email}</p>
            <p>{eachUser.address.city}</p>
            <hr></hr>
          </div>
        ))}
      
    </div>
  );
};

export default UseEffectHook;
