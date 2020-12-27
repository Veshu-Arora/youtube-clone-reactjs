import {FETCHED_VIDEOS} from '../actions/types';

const initialState ={}

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCHED_VIDEOS:
        return {
            ...state,
           data:action.payload 
          }
      default:
        return state
    }
  }
  
  export default searchReducer;