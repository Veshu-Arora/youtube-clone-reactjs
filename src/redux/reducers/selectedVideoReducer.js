import {SELECTED_VIDEO} from '../actions/types';

const initialState ={}

const selectedVideoReducer = (state = initialState, action) => {
    switch (action.type) {
      case SELECTED_VIDEO:
        return {
            ...state,
           data:action.payload 
          }
      default:
        return state
    }
  }
  
  export default selectedVideoReducer;