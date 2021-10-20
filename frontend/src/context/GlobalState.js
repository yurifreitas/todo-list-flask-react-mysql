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
    getList().then((resp) => {
      if (resp.length > 0) {
        dispatch({
          type: "GET_ITEM",
          payload: resp.data,
        });
      }
    });
  };
  const addItemToList = (item) => {
    addToList(item).then(() => {
      dispatch({
        type: "ADD_ITEM",
        payload: item,
      });
    });
  };
  function UpdateItemFromList(item) {
    updateItem(item).then(() => {
      dispatch({
        type: "UPDATE_ITEM",
        payload: item,
      });
    });
  }
  function removeItemFromList(item) {
    deleteItem(item).then(() => {
      dispatch({
        type: "REMOVE_ITEM",
        payload: item,
      });
    });
  }
  function removeAllItemFromList() {
    deleteAllItem().then(() => {
      dispatch({
        type: "REMOVE_ALL_ITEM",
      });
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
