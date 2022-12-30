export const  cardReducer = (state, action) => {
  switch (action.type) {
    case "getList":
      return {
        ...state,
        rows: action.payload,
      }
    
    case "getSpecific": 
      return {
        ...state,
        selected: action.payload,
      }
    
    case "cleanSelection": 
      return {
        ...state,
        selected: null,
      }

    default:
      return state;
  }
}