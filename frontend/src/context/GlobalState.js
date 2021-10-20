import React, { createContext, useReducer } from "react";
import {
  addToList,
  getList,
  updateItem,
  deleteAllItem,
  deleteItem,
} from "../services/ListFunctions";
import AppReducer from "./AppReducer";

const initialState = {
  taskList: [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions for changing state
  const getItemList = () => {
    let list = getList();
    if (list.length > 0) {
      dispatch({
        type: "GET_ITEM",
        payload: list,
      });
    }
  };
  const addItemToList = (item) => {
    addToList(item);
    dispatch({
      type: "ADD_ITEM",
      payload: item,
    });
  };
  function UpdateItemFromList(item) {
    updateItem(item);
    dispatch({
      type: "UPDATE_ITEM",
      payload: item,
    });
  }
  function removeItemFromList(item) {
    deleteItem(item);
    dispatch({
      type: "REMOVE_ITEM",
      payload: item,
    });
  }
  function removeAllItemFromList() {
    deleteAllItem();
    dispatch({
      type: "REMOVE_ALL_ITEM",
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        taskList: state.taskList,
        addItemToList,
        removeItemFromList,
        removeAllItemFromList,
        UpdateItemFromList,
        getItemList,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
