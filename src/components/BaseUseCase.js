import React, { useState, createContext, useContext } from "react";

const AppContext = createContext({ userName: "", setUserName: () => null });

export const Parent = () => {
  const [userName, setUserName] = useState("J-Z");

  return (
    <AppContext.Provider value={{ userName, setUserName }}>
      <Child1 />
      <Child2 />
    </AppContext.Provider>
  );
};

export const Child1 = () => {
  const { userName } = useContext(AppContext);

  return <h1> {userName} </h1>;
};

export const Child2 = () => {
  const { setUserName } = useContext(AppContext);
  return (
    <div>
      <button
        onClick={() => {
          setUserName("Jonathan Z.");
        }}
      >
        Change Username
      </button>
    </div>
  );
};
