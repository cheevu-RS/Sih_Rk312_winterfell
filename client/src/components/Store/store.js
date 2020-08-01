import React, { createContext, useReducer } from "react";

const initialState = {};
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "SET_GRAPH_NODES":
        const newState = {
          ...state,
          graph_nodes: action.payload,
        };
        return newState;
      default:
        throw new Error("Invalid Action!");
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
