import React, { createContext, useReducer, useEffect, useCallback } from 'react';
import {
  addToList,
  getList,
  updateItem,
  deleteAllItem,
  deleteItem,
} from '../services/ListFunctions';
import AppReducer from './AppReducer';

export const GlobalContext = createContext();
const initialState = {
  taskList: [],
};
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  // Actions for changing state
  const getItemList = useCallback(async () => {
    const resp = await getList();
    if (resp.length > 0) {
      dispatch({
        type: 'GET_ITEM',
        payload: resp,
      });
    }
  }, []);
  useEffect(() => {
    getItemList();
  }, []);
  const addItemToList = useCallback(async (item) => {
    addToList(item).then((response) => {
      if (response.data.result) {
        dispatch({
          type: 'ADD_ITEM',
          payload: response.data.result,
        });
      }
    });
  });
  function UpdateItemFromList(item) {
    updateItem(item);
    dispatch({
      type: 'UPDATE_ITEM',
      payload: item,
    });
  }
  function removeItemFromList(item) {
    deleteItem(item);
    dispatch({
      type: 'REMOVE_ITEM',
      payload: item,
    });
  }
  function removeAllItemFromList() {
    deleteAllItem();
    dispatch({
      type: 'REMOVE_ALL_ITEM',
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
