import { ERROR } from './../../shared/constants/Constantes';

export const  commonReducer = (state, action) => {
  switch (action.type) {
    case "fetchStart":
      return {
        ...state,
        error: '',
        message: '',
        messageType: 0,
        loading: true
      }

    case "fetchSuccess": 
      return {
        ...state,
        loading: false,
      }
    
    case "showMessage": 
      return {
        ...state,
        error: '',
        message: action.payload[0],
        messageType: action.payload[1],
        loading: false,
      }
  
    case "fetchError": 
      return {
        ...state,
        loading: false,
        error: action.payload,
        messageType: ERROR,
        message: '',
        updatingContent: false,
      }

    default:
      return state;
  }
}