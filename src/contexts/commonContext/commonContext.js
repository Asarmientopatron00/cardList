import React, { createContext, useReducer } from "react"
import { commonReducer } from "./commonReducer";

const initialState = {
  error: '',
  loading: false,
  message: '',
  messageType: 0,
}

export const CommonContext = createContext();

export const CommonProvider = ({children}) => {
  const [state, dispatch] = useReducer(commonReducer, initialState);

  const fetchStart = () => dispatch({type: 'fetchStart'});
  const fetchSuccess = () => {dispatch({type: 'fetchSuccess'})};
  const showMessage = (message) => dispatch({type: 'showMessage', payload: message});
  const fetchError = (error) => dispatch({type: 'fetchError', payload: error});

  return (
    <CommonContext.Provider value={{
      ...state,
      fetchStart,
      fetchSuccess,
      showMessage,
      fetchError,
    }}>
      {children}
    </CommonContext.Provider>
  );
}