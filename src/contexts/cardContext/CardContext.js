import React, { createContext, useContext, useReducer } from "react"
import api from "../../api/api";
import { CREATE, DELETE, UPDATE } from "../../shared/constants/Constantes";
import { CommonContext } from "../commonContext/commonContext";
import { cardReducer } from "./cardReducer";

const initialState = {
  rows: [],
  selected: null,
}

export const CardContext = createContext();

export const CardProvider = ({children}) => {
  const [state, dispatch] = useReducer(cardReducer, initialState);
  const {fetchStart, fetchSuccess, showMessage, fetchError } = useContext(CommonContext);
  
  const getList = async () => {
    try {
      fetchStart();
      const res = await api.get('reports');
      if(res.status === 200){
        fetchSuccess();
        dispatch({
          type: 'getList',
          payload: res.data
        });
      }
    } catch (error) {
      fetchError(error.message);
    }
  }

  const onShow = async (id) => {
    try {
      fetchStart();
      const res = await api.get('reports/'+id);
      if(res.status === 200){
        fetchSuccess();
        dispatch({
          type: 'getSpecific',
          payload: res.data
        });
      }
    } catch (error) {
      console.log(error)
      fetchError(error.message);
    }
  }

  const onCreate = async (params, handleOnClose, refresh) => {
    try {
      fetchStart();
      const res = await api.post('reports', params);
      if(res.status === 201){
        fetchSuccess();
        handleOnClose();
        refresh();
        showMessage(['Was created successfully', CREATE]);
      }
    } catch (error) {
      console.log(error)
      fetchError(error.message);
    }
  }

  const onUpdate = async (params, handleOnClose, refresh) => {
    try {
      fetchStart();
      const res = await api.patch('reports/'+params._id, params);
      if(res.status === 200){
        fetchSuccess();
        handleOnClose();
        refresh();
        showMessage(['Was updated successfully', UPDATE]);
      }
    } catch (error) {
      console.log(error.message)
      fetchError(error.message);
    }
  }

  const onDelete = async (id) => {
    try {
      fetchStart();
      const res = await api.delete('reports/'+id);
      if(res.status === 200){
        fetchSuccess();
        showMessage(['Was deleted successfully', DELETE]);
      }
    } catch (error) {
      console.log(error)
      fetchError(error.message);
    }
  }

  const onCleanSelection = () => {
    dispatch({type: 'cleanSelection'});
  }

  return (
    <CardContext.Provider value={{
      ...state,
      getList,
      onShow,
      onCreate,
      onUpdate,
      onDelete,
      onCleanSelection
    }}>
      {children}
    </CardContext.Provider>
  );
}