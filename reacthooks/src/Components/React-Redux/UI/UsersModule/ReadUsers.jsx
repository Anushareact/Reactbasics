import React from "react";
import { useSelector } from "react-redux";

export const ReadUsers = () => {
  const data = useSelector((state) => state.user);
  console.log(data);

  return (
    <div>
      ReadUsers
      {data?.map((user) => {
        return <div key={user.id}>{user.Name}</div>;
      })}
    </div>
  );
};
