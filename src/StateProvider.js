import React, { useContext, createContext, useReducer } from "react";

// Data Layer
export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);
//Hook which allows us to pull info frm data layer
export const useStateValue = () => useContext(StateContext);
