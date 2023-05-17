import React from "react";
import { createContext } from "react";

export default HelloLicatTwo = () => {
  return (
    <UserInfo.Consumer>
      {(value) => {
        return (
          <div>
            <h2>Two : {value.id}</h2>
            <strong>Two : {value.name}</strong>
          </div>
        );
      }}
    </UserInfo.Consumer>
  );
};
