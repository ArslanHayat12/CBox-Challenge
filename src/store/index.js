import React, { useEffect } from "react";

export const Store = React.createContext();
const API_URL = "http://www.mocky.io/v2/5d889c8a3300002c0ed7da42";
const initialState = {
  items: [],
  type:[]
};

function reducer(state, action) {
  switch (action.type) {
    case "LOAD_ITEMS":
      return {...state, items: action.payload||[] };
    case "SELECTED_TYPE":
      return {...state, type: action.payload||[] };
    default:
      return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  async function fetchData() {
    const response=await fetch(API_URL);
    return response
  }
  useEffect(() => {
    const data = fetchData();
    dispatch({ type: "LOAD_ITEMS", payload: data.items });
  }, []);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
